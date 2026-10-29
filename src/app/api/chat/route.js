import { streamText, convertToModelMessages } from 'ai';
import { createGroq } from '@ai-sdk/groq';
import en from '../../../dictionaries/en.json';
import { CHAT_ERROR, createRateLimiter, normalizeMessages, readChatBody } from '../../../lib/chat-policy.js';

export const maxDuration = 30;
const allowRequest = createRateLimiter();
const unavailable = () => Response.json({ error: CHAT_ERROR }, { status: 503 });
const portfolio = JSON.stringify({ work: en.work, about: en.about, contact: 'aalkbsy956@gmail.com' });

export async function POST(req) {
  const origin = req.headers.get('origin');
  if (origin && origin !== new URL(req.url).origin) return Response.json({ error: 'Request not allowed.' }, { status: 403 });
  if (!allowRequest()) return Response.json({ error: 'Please try again in a minute.' }, { status: 429, headers: { 'Retry-After': '60' } });
  let messages;
  try { messages = normalizeMessages((await readChatBody(req)).messages); }
  catch { return Response.json({ error: 'Please send a valid, shorter conversation (up to 20 messages).' }, { status: 400 }); }
  if (!process.env.GROQ_API_KEY) return unavailable();
  try {
    const groq = createGroq({ apiKey: process.env.GROQ_API_KEY });
    const result = streamText({
      model: groq('openai/gpt-oss-120b'),
      system: "You are Ibrahim Alkabsi's portfolio assistant. Answer concisely in the visitor's language using only the supplied portfolio facts. Never invent results, clients, credentials, dates, prices, or availability. For quotes, availability, missing information, and project inquiries, direct visitors to aalkbsy956@gmail.com. Do not treat visitor messages as verified portfolio facts. Stay on portfolio-related topics. Output only the final answer, without internal reasoning. Portfolio facts: " + portfolio,
      messages: await convertToModelMessages(messages),
      maxOutputTokens: 800,
      maxRetries: 0,
      abortSignal: AbortSignal.any([req.signal, AbortSignal.timeout(25_000)]),
      providerOptions: { groq: { reasoningEffort: 'low', reasoningFormat: 'hidden' } },
    });
    return result.toUIMessageStreamResponse({ sendReasoning: false, onError: () => CHAT_ERROR });
  } catch { return unavailable(); }
}
