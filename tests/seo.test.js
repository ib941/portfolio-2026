import test from 'node:test';
import assert from 'node:assert/strict';
import { pageMetadata, siteUrl } from '../src/lib/site.js';
import sitemap from '../src/app/sitemap.js';
import robots from '../src/app/robots.js';

test('every localized page has a unique title and matching canonical and alternates', () => {
  const titles = new Set();
  for (const locale of ['en', 'ar']) for (const page of ['', 'work', 'about', 'contact']) {
    const metadata = pageMetadata(locale, page);
    const suffix = page ? `/${page}` : '';
    assert.equal(metadata.alternates.canonical, `${siteUrl}/${locale}${suffix}`);
    assert.equal(metadata.alternates.languages.ar, `${siteUrl}/ar${suffix}`);
    assert.equal(metadata.openGraph.url, metadata.alternates.canonical);
    assert.ok(metadata.description);
    titles.add(metadata.title);
  }
  assert.equal(titles.size, 8);
});

test('sitemap includes eight canonical pages and robots advertises it', () => {
  assert.equal(sitemap().length, 8);
  assert.equal(new Set(sitemap().map(entry => entry.url)).size, 8);
  assert.equal(robots().sitemap, `${siteUrl}/sitemap.xml`);
});
