# Validation and QA

Two gates protect the site: `npm run build` must compile every route, and `npm run validate` must crawl the running build without finding a broken rule. Both are expected to pass before a change is published.

```powershell
npm run typecheck   # tsc --noEmit
npm run lint        # eslint .
npm run build       # next build (36 prerendered outputs incl. metadata routes)
npm start -- -p 3123
npm run validate -- http://localhost:3123
```

The validator reads the sitemap, so a route that is missing from the sitemap is a route that is not checked. It currently expects **27 URLs**: 17 pages (including the three legal pages and the blog hub) and 10 articles. An intentional route change must update that number and `ROUTES` together.

## What the crawl checks

| Check | Rule |
|---|---|
| Status | Every sitemap URL returns 200. |
| Headings | Exactly one `<h1>` per page. |
| Metadata | Unique title and description; every page has an absolute `og:image` under `/og/`. |
| Canonical | Self-referencing absolute URL on `https://chametapps.com`, matching the sitemap path. |
| Breadcrumbs | `BreadcrumbList` ends at the page URL and each label is visible on the page. |
| FAQ | `FAQPage` entry count matches the visible FAQ cards, and every question and answer matches the rendered text word for word. |
| Schema hygiene | JSON-LD parses; no `Review`, `AggregateRating` or `LocalBusiness` schema types. Prose that merely contains the word "review" is allowed; the check inspects the `@type` value. |
| Role links | `/chamet-agency-registration/` contains only the agency endpoint; `/chamet-host-registration/` contains only the host endpoint; no other page contains either endpoint. |
| Internal links | Every internal `href` returns 200 without a redirect. |
| Assets | Every local image and static asset returns 200. |
| Forbidden text | No "SD Agency" and no lorem ipsum. |
| Edge cases | An unknown path returns 404; robots.txt does not block `/_next` or `/images`. |

## Content checks done by hand

The crawl cannot judge writing quality, so these are reviewed manually before publishing a page:

- Visible copy is at least 4,000 words on the eleven core pages (home, both registrations, agency login, the four withdrawal guides, download, India, help), excluding navigation and footer. Supporting pages (about, contact, legal) are proportionate rather than padded.
- Articles run roughly 1,600–2,000 words, each with a quick answer, question-shaped H2s, tables or checklists, FAQs and at least three descriptive internal links.
- Every statement about fees, minimums or timing is hedged and attributed to the screen or the platform, never presented as a fixed promise.
- No invented certification, office, salary, testimonial or dollar-to-rupee rate.
- Locations appear only where they fit: India, INR, IST, regional languages and online-first "near me" context.
- Registration endpoints appear only on their role page, with `rel="sponsored noopener"`.

## Word-count method

The counts in the QA notes are taken from the rendered `<main>` element after removing scripts and tags, so they measure visible prose rather than JSON payloads. Re-run the count after any large content edit:

```powershell
# in a Node script or the browser console
const html = await (await fetch("http://localhost:3123/chamet-help/")).text();
const main = html.split('<main id="main"')[1].split("</main>")[0];
main.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ")
  .split(/\s+/).filter(Boolean).length;
```

## Known limitations

- The validator does not execute JavaScript, so it sees the server-rendered HTML only. Interactive behaviour (analytics consent, mobile menu) is checked in a browser.
- FAQ text comparison is literal. Styling inside an answer is fine, but changing the schema text without changing the visible card is a failure by design.
- The crawl does not check external URLs. Platform links can change without notice; they are re-checked manually when a guide is reviewed.
- `hreflang` currently declares `en-IN` only. Adding another locale means adding real translated pages, not just tags.
