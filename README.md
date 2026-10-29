# Ibrahim Alkabsi portfolio

Bilingual Next.js 15 / React 19 portfolio using Tailwind CSS and Framer Motion. English and Arabic content lives in `src/dictionaries`; routes are `/en` and `/ar` with Work, About, and Contact pages. Project links and media are matched to translated entries by stable IDs.

## Local development and checks

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

With the production server running at `http://localhost:3000`, run `npm run test:smoke` to verify all eight localized pages, document semantics, canonical links, redirects, missing pages, public assets, and chat request validation. These checks do not make model-provider requests.

Type checking covers the JavaScript/JSX source with TypeScript's `checkJs`; the project has not been converted to TypeScript. ESLint checks Next.js conventions, accessibility, hooks, and unused code.

## Localization and SEO

`src/middleware.js` preserves query parameters, remembers the selected locale, and passes the URL's locale to the root layout for correct server-rendered `lang` and `dir`. The root layout reads request headers, so page HTML is rendered per request. The client context synchronizes document attributes after language navigation and retains query strings and hashes.

`src/lib/site.js` contains the confirmed production origin and localized page metadata. Update that origin if the production domain changes. Sitemap, robots, social preview, and icon routes are included. Cairo is bundled by `next/font`, so visitors do not request fonts from Google; a clean build needs network access to download the font.

## Media

The optimized `hero-desktop.mp4` and `hero-mobile.mp4` preserve the existing artwork, remove muted audio tracks, and use H.264 with fast-start metadata. Matching WebP posters provide the static fallback. The original files are retained. Only the matching video source is mounted; reduced-motion and data-saving preferences show a poster instead. Project images use Next.js responsive image optimization.

## Assistant

The assistant is loaded on first opening. Closing stops generation and retains the conversation in memory for reopening; refreshing clears it. Its server prompt uses existing portfolio content and avoids inventing credentials, results, prices, or availability.

The existing `GROQ_API_KEY` configuration is required for real responses. No environment files were changed. Missing credentials and provider failures produce a generic visitor-facing error. Tests cover request validation and error handling; a live provider response requires checking the configured deployment separately.

Requests are limited to 32 KiB, 20 messages, 2,000 characters per visitor message, 6,000 per assistant message, and 16,000 characters overall. Output is capped at 800 tokens. A per-process ceiling permits 30 requests per minute; this is a local safety net, **not a distributed quota**. Before public release, configure suitable hosting-level abuse protection and provider usage limits. Origin checks alone do not prevent scripted requests.

The PostCSS override keeps Next.js 15's transitive dependency on the patched version supplied by the project. Recheck it when upgrading Next.js. No major framework upgrade was performed.

## Content requiring owner confirmation

The existing experience timeline was retained. The homepage numerical metrics were removed at the owner’s request. Detailed case studies, client quotes, project roles, and quantified outcomes should use owner-approved facts and assets; none have been invented.

Publishing, pushing, and merging require separate owner approval.
