import { siteUrl, locales } from '../lib/site.js';
export default function sitemap() {
  return ['', '/work', '/about', '/contact'].flatMap(path => locales.map(locale => ({
    url: siteUrl + '/' + locale + path,
    alternates: { languages: Object.fromEntries(locales.map(language => [language, siteUrl + '/' + language + path])) },
  })));
}
