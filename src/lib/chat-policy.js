export const MAX_BODY_BYTES = 32_768;
export const CHAT_ERROR = 'The assistant is temporarily unavailable. Please contact Ibrahim directly.';

export function normalizeMessages(messages) {
  if (!Array.isArray(messages) || messages.length < 1 || messages.length > 20) {
    throw new Error('Send between 1 and 20 messages.');
  }
  let total = 0;
  /** @type {import('ai').UIMessage[]} */
  const result = messages.map((message, index) => {
    if (!message || !['user', 'assistant'].includes(message.role)) throw new Error('Invalid message role.');
    const parts = Array.isArray(message.parts) ? message.parts : [{ type: 'text', text: message.content }];
    const textParts = parts.filter(part => part?.type === 'text');
    if (textParts.some(part => typeof part.text !== 'string')) throw new Error('Invalid message text.');
    const text = textParts.map(part => part.text).join('\n');
    const maxLength = message.role === 'user' ? 2000 : 6000;
    if (!text.trim() || text.length > maxLength) throw new Error('Message is empty or too long.');
    total += text.length;
    return { id: `message-${index}`, role: message.role, parts: [{ type: 'text', text }] };
  });
  if (total > 16_000 || result.at(-1).role !== 'user') throw new Error('Invalid conversation.');
  return result;
}

// A bounded, per-process safety net. Hosting-level limits are still needed across replicas.
export function createRateLimiter({ limit = 30, windowMs = 60_000, now = Date.now } = {}) {
  let windowStart = now();
  let count = 0;
  return () => {
    const time = now();
    if (time - windowStart >= windowMs) { windowStart = time; count = 0; }
    count += 1;
    return count <= limit;
  };
}

export async function readChatBody(request) {
  if (!request.headers.get('content-type')?.includes('application/json')) throw new Error('Expected JSON.');
  const reader = request.body?.getReader();
  if (!reader) throw new Error('Missing request body.');
  let size = 0;
  const chunks = [];
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) { await reader.cancel(); throw new Error('Request too large.'); }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return JSON.parse(new TextDecoder().decode(bytes));
}
