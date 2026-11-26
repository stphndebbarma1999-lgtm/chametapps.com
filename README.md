# ChametApps.com

Production source for **ChametApps.com**, a Chamet agency guidance website: agency and host registration, agency login/dashboard, host/agency withdrawal, MetWallet cash out and help pages.

Built with Next.js 16 (App Router, TypeScript), React 19 and Tailwind CSS 4. Every public route is statically prerendered. There's no database, authentication, CMS or contact form.

> The build brief, researched copy, links and original assets that this site implements are kept unchanged in [`design-source/`](design-source/) (`MASTER-PROMPT.md`, `content/`, `LINKS.json`, `assets/`).

## Requirements

- Node.js 20.9 or newer (tested with Node 22)
- npm (lockfile: `package-lock.json`)

## Setup and local development

```bash
npm ci
cp .env.example .env.local   # optional — every variable is optional
npm run dev                  # http://localhost:3000
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build (type-checks and prerenders all pages) |
| `npm start` | Serves the production build (`PORT` env or `-p` to change port) |
| `npm run lint` | ESLint (Next.js core-web-vitals + TypeScript rules) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run validate [-- http://localhost:3000]` | Crawls a running build and checks status codes, H1s, unique titles/descriptions, canonicals, sitemap, JSON-LD, internal links, assets and registration-link roles |

`scripts/prepare-assets.py` regenerates `public/images/**`, `public/og/*` and `src/content/image-dimensions.json` from `design-source/assets/` (requires Python 3 + Pillow). You only need it if you change source images.

## Where things live

```
src/app/                 routes (one folder per URL; agency.html/ and host.html/ keep the legacy URLs)
src/app/layout.tsx       header, footer, sticky WhatsApp button, Organization/WebSite JSON-LD
src/app/sitemap.ts       robots.ts, manifest.ts, not-found.tsx
src/components/          Hero, GuideBlock (steps + carousel), GuideCarousel, WaveDivider, DecoLogos, Faq, …
src/content/links.json   ← single source of all outbound links (copied from LINKS.json)
src/content/*.json       image filenames, alt text and dimensions
src/lib/site.ts          link helpers, WhatsApp messages, indexing switch, CONTENT_UPDATED date
src/lib/routes.ts        titles, descriptions, heroes, breadcrumbs, metadata builder
public/images/           delivery images (semantic filenames) and brand icons
docs/                    asset manifest, route/metadata map, validation report
```

### Changing links

Edit `src/content/links.json` only. The agency and host registration URLs are **different endpoints** (`inviteAgent/bind.html` vs `agent/bind.html`, both `companyId=87692`). `/agency.html` uses only the agency link and `/host.html` uses only the host link; `npm run validate` fails if they are swapped or used elsewhere.

### Changing content

Page copy is in each `src/app/**/page.tsx`. When you change copy, update `CONTENT_UPDATED` in `src/lib/site.ts` so the sitemap `lastmod` stays truthful.

## Environment variables

See `.env.example`. None are secrets.

| Variable | Effect |
|---|---|
| `NEXT_PUBLIC_ALLOW_INDEXING` | Only used off Vercel. Set to `false` on a staging host to make every page `noindex` and disallow robots. |
| `NEXT_PUBLIC_GA4_ID` | Optional GA4 ID. If it's empty, no analytics code or consent notice is rendered. If it's set, a notice asks for consent and GA4 loads only after the visitor clicks Accept. Events: `agency_registration`, `host_registration`, `dashboard_outbound`, `whatsapp_chat`, `whatsapp_channel_follow`, `official_chamet`, `guide_interaction`. Each event records only the destination domain and page path, with no personal data. |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Optional Google Search Console HTML-tag token. |

On Vercel, indexing follows `VERCEL_ENV`: **production** is indexable, while **preview** deployments get `noindex, nofollow` (meta and `X-Robots-Tag`), `Disallow: /` and an empty sitemap.

## Deployment

The site needs a Node.js host. It isn't configured as a static export (`output: "export"`) because it relies on the Next.js image optimiser, response headers and trailing-slash redirects.

### Vercel (recommended)

1. Push this repository to GitHub and import it in Vercel. Vercel detects Next.js, so no build settings need changing.
2. Optionally add `NEXT_PUBLIC_GA4_ID` / `NEXT_PUBLIC_GSC_VERIFICATION` under Project → Settings → Environment Variables (Production).
3. Deploy. Check the generated `*.vercel.app` preview URL. It should show `noindex`.
4. Add the domain `chametapps.com` (and `www.chametapps.com`, redirecting to the apex) under Project → Domains. Then update DNS at your registrar as Vercel instructs. **This DNS change is yours to make.** Nothing has been deployed or changed in DNS.
5. After going live, submit `https://chametapps.com/sitemap.xml` in Google Search Console.

### Any other Node host

```bash
npm ci
npm run build
NODE_ENV=production PORT=3000 npm start
```

Put it behind HTTPS (reverse proxy such as Nginx or Caddy) on `chametapps.com`. Set `NEXT_PUBLIC_ALLOW_INDEXING=false` **at build time** on any staging copy.

### Replacing the old site

The old site's `/agency.html` and `/host.html` URLs are preserved as real pages, so they need no redirects. If the previous host served other URLs that still get traffic (for example a blog), list them before switching DNS. Each one should then either be kept or redirected once to its exact replacement in `next.config.ts` (`redirects()`). Don't redirect everything to the homepage.

## Known open items before launch

See [`docs/VALIDATION.md`](docs/VALIDATION.md). In short:

- The external destinations couldn't be reached from the build environment: the registration links, `agent.ichamet.com`, `chamet.com`, WhatsApp and `chametagency.org`. Open each one manually before launch.
- The header emblem was traced from the Chamet app icon in a supplied screenshot, because the reference site's logo file wasn't downloadable. Swap in the original file if you have it.
- Recheck the dated platform facts against `chamet.com/host-earnings` before launch: 10,000 Beans = US$1, and the US$10 host minimum.
