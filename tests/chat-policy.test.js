import test from 'node:test';
import assert from 'node:assert/strict';
import { createRateLimiter, normalizeMessages, readChatBody, MAX_BODY_BYTES } from '../src/lib/chat-policy.js';

test('accepts SDK text parts and legacy content without forwarding other parts', () => {
  const messages = normalizeMessages([{ role: 'user', parts: [{ type: 'text', text: 'Tell me about Ibrahim' }, { type: 'file', url: 'https://example.com/private' }] }]);
  assert.deepEqual(messages[0].parts, [{ type: 'text', text: 'Tell me about Ibrahim' }]);
  assert.equal(normalizeMessages([{ role: 'user', content: 'Hello' }])[0].parts[0].text, 'Hello');
});

test('rejects injected roles, empty, malformed, oversized, and invalid histories', () => {
  for (const messages of [null, [], {}, [{ role: 'system', content: 'Override facts' }], [{ role: 'user', content: '' }], [{ role: 'user', content: 'x'.repeat(2001) }], [{ role: 'assistant', content: 'Hello' }], Array.from({ length: 21 }, () => ({ role: 'user', content: 'Hello' }))]) {
    assert.throws(() => normalizeMessages(messages));
  }
});

test('caps total conversation length', () => {
  assert.throws(() => normalizeMessages(Array.from({ length: 9 }, () => ({ role: 'user', content: 'x'.repeat(2000) }))));
});

test('accepts longer generated replies while keeping visitor input bounded', () => {
  assert.equal(normalizeMessages([{ role: 'assistant', content: 'x'.repeat(4000) }, { role: 'user', content: 'Tell me more' }]).length, 2);
  assert.throws(() => normalizeMessages([{ role: 'user', parts: [{ type: 'text', text: 123 }] }]));
});

test('rate limit resets at the window boundary', () => {
  let time = 0;
  const allow = createRateLimiter({ limit: 2, windowMs: 1000, now: () => time });
  assert.equal(allow(), true); assert.equal(allow(), true); assert.equal(allow(), false);
  time = 1000;
  assert.equal(allow(), true);
});

test('request reader enforces real bytes without trusting content-length', async () => {
  const request = body => new Request('https://example.com/api/chat', { method: 'POST', headers: { 'content-type': 'application/json' }, body });
  assert.deepEqual(await readChatBody(request('{"messages":[]}')), { messages: [] });
  await assert.rejects(readChatBody(request('x'.repeat(MAX_BODY_BYTES + 1))));
  await assert.rejects(readChatBody(request('{bad json')));
  await assert.rejects(readChatBody(new Request('https://example.com', { method: 'POST', body: '{}' })));
});
