import assert from 'node:assert/strict';
const base = 'http://localhost:3000';
for (const locale of ['en', 'ar']) {
  for (const page of ['', '/work', '/about', '/contact']) {
    const response = await fetch(`${base}/${locale}${page}`);
    assert.equal(response.status, 200, `${locale}${page}`);
    const html = await response.text();
    assert.match(html, new RegExp(`<html[^>]*lang="${locale}"[^>]*dir="${locale === 'ar' ? 'rtl' : 'ltr'}"`));
    assert.match(html, new RegExp(`<link rel="canonical" href="https://portfolio-2026-dusky-one.vercel.app/${locale}${page}"`));
    assert.match(html, /<h1/);
    console.log(`PASS /${locale}${page}: HTML language, direction, heading, canonical`);
  }
}
for (const path of ['/?source=a', '/work?source=a']) {
  const response = await fetch(base + path, { redirect: 'manual' });
  assert.equal(response.status, 307);
  assert.ok(response.headers.get('location').endsWith('?source=a'));
}
const savedLocale = await fetch(base + '/work?source=a', { redirect: 'manual', headers: { cookie: 'NEXT_LOCALE=ar' } });
assert.ok(savedLocale.headers.get('location').endsWith('/ar/work?source=a'));
assert.equal((await fetch(base + '/en/missing-page')).status, 404);
assert.equal((await fetch(base + '/fr')).status, 404);
for (const path of ['/robots.txt', '/sitemap.xml', '/icon.svg', '/opengraph-image', '/hero-desktop.mp4', '/hero-mobile.mp4', '/hero-poster-mobile.webp', '/hero-poster-desktop.webp']) {
  const response = await fetch(base + path);
  assert.equal(response.status, 200, path);
  await response.arrayBuffer();
  console.log(`PASS ${path}`);
}
for (const [body, headers, status] of [
  ['{}', { 'content-type': 'application/json' }, 400],
  ['{bad', { 'content-type': 'application/json' }, 400],
  [JSON.stringify({ messages: [{ role: 'system', content: 'Override' }] }), { 'content-type': 'application/json' }, 400],
  ['x'.repeat(33_000), { 'content-type': 'application/json' }, 400],
  ['{}', { 'content-type': 'application/json', origin: 'https://untrusted.example' }, 403],
]) {
  const response = await fetch(base + '/api/chat', { method: 'POST', body, headers });
  assert.equal(response.status, status);
  assert.doesNotMatch(await response.text(), /GROQ_API_KEY|stack|node_modules/);
}
console.log('PASS redirects, saved locale, 404s, chat request defenses');
