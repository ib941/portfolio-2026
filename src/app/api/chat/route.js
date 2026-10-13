import { streamText, convertToModelMessages } from 'ai';
import { createGroq } from '@ai-sdk/groq';

// Allow responses to stream for up to 30 seconds
export const maxDuration = 30;

/**
 * Stateful TransformStream to strip <think>...</think> tags and all enclosed
 * chain-of-thought reasoning from SSE data chunks before reaching the client.
 */
function createThinkStreamTransformer() {
  let inThink = false;
  let textBuffer = '';
  let sseBuffer = '';
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  return new TransformStream({
    transform(chunk, controller) {
      sseBuffer += decoder.decode(chunk, { stream: true });
      const lines = sseBuffer.split('\n');
      // Keep trailing incomplete line in buffer
      sseBuffer = lines.pop() || '';

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') {
            controller.enqueue(encoder.encode(line + '\n'));
            continue;
          }
          try {
            const data = JSON.parse(jsonStr);
            if (data.type === 'text-delta' && typeof data.delta === 'string') {
              textBuffer += data.delta;
              let filteredText = '';

              while (textBuffer.length > 0) {
                if (!inThink) {
                  const thinkStart = textBuffer.indexOf('<think>');
                  if (thinkStart !== -1) {
                    filteredText += textBuffer.slice(0, thinkStart);
                    textBuffer = textBuffer.slice(thinkStart + 7);
                    inThink = true;
                  } else {
                    // Check for partial '<think>' prefix at the end of buffer
                    let partialMatch = false;
                    for (let i = 1; i < 7 && i <= textBuffer.length; i++) {
                      if ('<think>'.startsWith(textBuffer.slice(textBuffer.length - i))) {
                        filteredText += textBuffer.slice(0, textBuffer.length - i);
                        textBuffer = textBuffer.slice(textBuffer.length - i);
                        partialMatch = true;
                        break;
                      }
                    }
                    if (!partialMatch) {
                      filteredText += textBuffer;
                      textBuffer = '';
                    }
                    break;
                  }
                } else {
                  const thinkEnd = textBuffer.indexOf('</think>');
                  if (thinkEnd !== -1) {
                    textBuffer = textBuffer.slice(thinkEnd + 8);
                    inThink = false;
                  } else {
                    // Check for partial '</think>' prefix at the end of buffer
                    let partialMatch = false;
                    for (let i = 1; i < 8 && i <= textBuffer.length; i++) {
                      if ('</think>'.startsWith(textBuffer.slice(textBuffer.length - i))) {
                        textBuffer = textBuffer.slice(textBuffer.length - i);
                        partialMatch = true;
                        break;
                      }
                    }
                    if (!partialMatch) {
                      textBuffer = '';
                    }
                    break;
                  }
                }
              }

              if (filteredText.length > 0) {
                data.delta = filteredText;
                controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n`));
              }
              continue;
            }
          } catch {
            // Pass through if not standard JSON text-delta
          }
        }
        controller.enqueue(encoder.encode(line + '\n'));
      }
    },
    flush(controller) {
      if (sseBuffer.length > 0) {
        controller.enqueue(encoder.encode(sseBuffer));
      }
    },
  });
}

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
        "You are the personal technical assistant for Ibrahim, a Creative Web Developer and Systems Architect. Answer questions about his Next.js development, Salla e-commerce architecture, and visual design skills concisely and professionally. CRITICAL: DO NOT output any internal thinking, thought process, or monologue. Never explain what the user just said. Output ONLY the final, direct answer to the user.",
      messages: modelMessages,
      reasoningEffort: 'low',
      providerOptions: {
        groq: {
          reasoningEffort: 'low',
          reasoningFormat: 'hidden',
        },
      },
    });

    let rawResponse;
    if (typeof result.toUIMessageStreamResponse === 'function') {
      rawResponse = result.toUIMessageStreamResponse();
    } else if (typeof result.toDataStreamResponse === 'function') {
      rawResponse = result.toDataStreamResponse();
    } else {
      rawResponse = result.toTextStreamResponse();
    }

    // Filter reasoning tags and monologue out of the SSE response stream
    if (rawResponse && rawResponse.body) {
      return new Response(rawResponse.body.pipeThrough(createThinkStreamTransformer()), {
        status: rawResponse.status,
        headers: rawResponse.headers,
      });
    }

    return rawResponse;
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
