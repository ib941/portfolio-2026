import { streamText, convertToModelMessages } from 'ai';
import { createGroq } from '@ai-sdk/groq';

// Allow responses to stream for up to 30 seconds
export const maxDuration = 30;

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const groq = createGroq({
      apiKey: process.env.GROQ_API_KEY,
    });

    // Normalize incoming UI messages ensuring each has a valid parts array
    const normalizedMessages = (messages || []).map((msg) => {
      if (msg.parts && Array.isArray(msg.parts)) return msg;
      return {
        ...msg,
        parts: [
          {
            type: 'text',
            text: typeof msg.content === 'string' ? msg.content : '',
          },
        ],
      };
    });

    const modelMessages = await convertToModelMessages(normalizedMessages);

    const result = streamText({
      model: groq('openai/gpt-oss-120b'),
      system:
        "You are the personal technical assistant for Ibrahim, a Creative Web Developer and Systems Architect. Answer questions about his Next.js development, Salla e-commerce architecture, and visual design skills concisely and professionally. Strictly output only the direct final answer. Do not include any internal thinking process, reasoning steps, or <think> tags in your output.",
      messages: modelMessages,
    });

    if (typeof result.toUIMessageStreamResponse === 'function') {
      return result.toUIMessageStreamResponse();
    }
    if (typeof result.toDataStreamResponse === 'function') {
      return result.toDataStreamResponse();
    }
    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Error in /api/chat route:', error);
    return new Response(
      JSON.stringify({
        error:
          error.message ||
          'Failed to process chat request. Verify that GROQ_API_KEY is configured.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
