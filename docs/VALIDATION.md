# Validation report

Run locally on 26 November 2026 against a production build (`next build` + `next start`), in a sandboxed Linux container with Chromium (Playwright). These are lab results, not field data.

## Build and static checks

| Check | Result |
|---|---|
| `npm run build` (Next.js 16.4.6, Turbopack) | ✅ Passes; 15 pages plus metadata routes, all prerendered as static (○) |
| `npm run typecheck` | ✅ No errors |
| `npm run lint` | ✅ No errors or warnings |
| `npm run validate` (crawler, `scripts/validate-site.mjs`) | ✅ 15 sitemap pages, 15 internal link targets and 370 asset URLs return 200. Exactly one H1 per page. Titles and descriptions are unique. Canonicals are self-referencing on `https://chametapps.com`. Absolute `og:image` on every page. JSON-LD parses. BreadcrumbList matches the visible breadcrumb. Every FAQPage question is visible. No Review/AggregateRating/LocalBusiness. No "SD Agency". Unknown URLs return 404. robots.txt doesn't block assets. |
| Registration link roles | ✅ `/agency.html` uses only `…/inviteAgent/bind.html?companyId=87692`. `/host.html` uses only `…/agent/bind.html?companyId=87692`. Neither appears on any other page. Query strings are preserved. |
| URL behaviour | `/agency.html` and `/host.html` return 200. `/agency.html/` returns a single 308 to `/agency.html`. `/chamet-help` returns a single 308 to `/chamet-help/`. |
| Preview indexing | With `VERCEL_ENV=preview`: `<meta name="robots" content="noindex, nofollow">`, `X-Robots-Tag: noindex, nofollow`, `Disallow: /`, empty sitemap. In production: `index, follow`. |

## Responsive layout and guide photos (Playwright)

> Update: the sliding carousel was replaced (at the owner's request) with a fixed layout — two written steps, then their two screenshots side by side, repeated. Re-checked: no overflow at all widths; two photos per row (132 px each at 320 px, 352 px each at 1440 px); build, lint, validator and axe (0 violations) pass. Carousel-specific rows below describe the earlier version.

| Check | Result |
|---|---|
| Horizontal overflow on all 15 pages at 320, 375, 390, 430, 768, 1024 and 1440 px | ✅ None (`scrollWidth − innerWidth = 0`) |
| Two portrait screenshots side by side in every carousel at all widths | ✅ The second card is fully inside the track. At 320 px: track 300 px, cards 138 px each. At 390 px: cards 173 px each. |
| Image integrity | ✅ `width:100%`, `height:auto`, `object-fit:contain`, no cropping or stretching. Odd final images leave an empty partner slot (no duplicates). |
| Next/previous arrows | ✅ Scroll by one view (2 cards). Disabled at the ends. Accessible names. |
| Keyboard | ✅ Arrow keys page the track. The enlarge dialog opens with focus on Close, Escape closes it, and focus returns to the screenshot that opened it. |
| Sequence | ✅ Folders are used in numerical order. Host withdrawal is split into 4 Chamet screens + a 5-screen MetWallet sub-guide + the final linked screen. |
| Lazy loading | ✅ A host page load at 390 px requests the hero plus 4 guide thumbnails (first two of each carousel). Further slides render only when their carousel nears the viewport, using fixed-aspect placeholders. |
| Reduced motion (`prefers-reduced-motion: reduce`) | ✅ Animations and transitions effectively off. Nothing is hidden for reveal. |
| JavaScript disabled | ✅ All written steps, tables, FAQs and links render and are visible. |
| Scroll reveal | ✅ Only elements below the fold are hidden before reveal. All are revealed after scrolling. |
| Mobile menu and Withdrawals submenu | ✅ Open, close and Escape work. |

## Accessibility (axe-core 4, WCAG 2 A/AA + best practice)

✅ 0 violations on all 15 pages at 390 px and 1440 px (after fixing in-text links that weren't underlined). Palette contrast was computed rather than assumed. Body text `#DDC5F2` on `#08030E` is 12.9:1. Lavender `#C584FF` on `#08030E` is 7.9:1. CTA white text on the `#922BEE → #C2269F` gradient is ≥ 5.2:1. White on `#F02CC4` is only 3.6:1, so pink is used as an accent and never under text.

## Lighthouse 12 (mobile preset, simulated throttling, localhost)

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| `/` | 90 | 100 | 100 | 100 | 2.8 s | 0 | 280 ms |
| `/agency.html` | 94 | 100 | 100 | 100 | 2.8 s | 0 | 160 ms |
| `/host.html` | 96 | 100 | 100 | 100 | 2.3 s | 0 | 200 ms |
| `/chamet-host-withdrawal/` | 91 | 100 | 100 | 100 | 3.0 s | 0 | 210 ms |

The Lighthouse runs were made before the slide-gating change, which only reduces image work. The LCP element is the hero photo. Most of the simulated LCP is "render delay" under 4× CPU throttling rather than download time. Treat these as diagnostics. The LCP ≤ 2.5 s / CLS ≤ 0.1 / INP ≤ 200 ms targets can only be confirmed with field data (Search Console Core Web Vitals or CrUX) after launch.

## Unresolved external checks

The build environment's network policy blocks these hosts, so they were **not** tested:

| Destination | Status |
|---|---|
| `https://h5.schamet.com/webH5/inviteAgent/bind.html?companyId=87692` (agency registration) | Not reachable from the build environment, so untested. Open it manually and confirm it shows agent registration. |
| `https://h5.schamet.com/webH5/agent/bind.html?companyId=87692` (host registration) | Untested. Confirm it shows host registration. |
| `https://agent.ichamet.com/` (agency portal, current reference) | Untested. Earlier research and screenshots used `agent.rchamet.com`. The config uses the current `agent.ichamet.com` as instructed. Confirm which one is live, and edit `agencyDashboard` in `src/content/links.json` if needed. Authenticated login was never tested, and this site never collects credentials. |
| `https://www.chamet.com/` and `/host-earnings` | Untested. Recheck "10,000 Beans = US$1" and "US$10 host minimum" before launch. |
| `https://wa.me/919233262700`, WhatsApp channel `0029VbCCYeQ2P59t8LBOSe1V` | Untested. The channel link came from an owner-provided message. Confirm it opens "Best Apps Hiring ✅💯". |
| `https://www.chametagency.org/` (logo source) | Does not resolve here. The emblem was derived from the supplied screenshot instead (see the Brand section of `docs/ASSET-MANIFEST.md`). |

Not done: no deployment, no DNS change, no field performance data, and no testing on real iOS or Android devices.
