# Route, metadata and schema map

All routes are statically prerendered. Canonical = `https://chametapps.com` + path (self-referencing). Directory routes end in `/` (`trailingSlash: true`); slash/no-slash variants redirect once (308) to the canonical form. Unknown URLs return a real 404 with the custom not-found page.

Every route is defined once in `src/lib/routes.ts` (`ROUTES`), which supplies the title, meta description, keyword set, hero image, breadcrumb parent, sitemap priority, type (page or article) and `lastModified`. Pages call `pageMetadata(key)`; they do not hand-write metadata.

Legacy URLs redirect permanently in `next.config.ts`:

| From | To |
|---|---|
| `/agency.html` | `/chamet-agency-registration/` |
| `/host.html` | `/chamet-host-registration/` |
| `/agency` | `/chamet-agency-registration/` |
| `/host` | `/chamet-host-registration/` |

## Pages (17)

| Path | H1 | Title | Primary intent |
|---|---|---|---|
| `/` | Chamet Agency and Host Registration in India | Chamet Agency & Host Registration in India \| ChametApps | chamet agency, chamet registration, chamet host registration |
| `/chamet-agency-registration/` | Chamet Agency Registration | Chamet Agency Registration in India: Step-by-Step Guide | chamet agency registration, chamet agent account |
| `/chamet-host-registration/` | Chamet Host Registration and Profile Setup | Chamet Host Registration: Create Your Host Account | chamet host registration, create chamet host account |
| `/chamet-agency-login/` | Chamet Agency Login and Dashboard | Chamet Agency Login & Dashboard Guide (2026) | chamet agency login, chamet agency dashboard |
| `/chamet-withdrawal/` | Chamet Withdrawal Guide | Chamet Withdrawal Guide: Host, Agency & MetWallet | chamet withdrawal, chamet payout |
| `/chamet-host-withdrawal/` | How to Withdraw Money From Chamet as a Host | How to Withdraw Money From Chamet App: Host Guide | how to withdraw money from chamet app |
| `/chamet-agency-withdrawal/` | Chamet Agency Withdrawal and MetWallet Setup | Chamet Agency Withdrawal & MetWallet Setup Guide | chamet agency withdrawal, bind metwallet |
| `/metwallet-withdrawal/` | How to Withdraw From MetWallet | MetWallet Withdrawal for Chamet: Cash Out in India | metwallet withdrawal, metwallet cash out |
| `/chamet-app-download/` | Chamet App Download and Login | Chamet App Download & Login Guide (Android & iOS) | chamet app download |
| `/chamet-agency-india/` | Chamet Agency in India: Online Registration and Support | Chamet Agency in India: Registration, Login & Support | chamet agency in india, chamet agency near me |
| `/chamet-beans-to-rupees-calculator/` | Beans to Rupees Calculator | Chamet Beans to Rupees Calculator (Free Estimate) | chamet beans to rupees |
| `/chamet-help/` | Chamet Help by Stage | Chamet Help: Login, Registration & Withdrawal Problems | chamet help, chamet withdrawal problem |
| `/blog/` | Chamet Agency and Host Guides | Chamet Agency & Host Blog: Guides, Tips & Payout Help | chamet blog, chamet agency guide |
| `/about/` | About ChametApps.com | About ChametApps.com: Chamet Agency Guidance in India | about chametapps |
| `/contact/` | Contact ChametApps.com | Contact ChametApps.com: Chamet Registration Help | chamet agency contact |
| `/privacy/` | Privacy Policy | Privacy Policy \| ChametApps.com | privacy policy |
| `/terms/` | Terms of Use | Terms of Use \| ChametApps.com | terms of use |
| `/disclaimer/` | Disclaimer | Disclaimer \| ChametApps.com | chamet agency disclaimer |

## Blog articles (18)

| Path | Primary keyword | Published |
|---|---|---|
| `/blog/chamet-agency-commission-explained/` | chamet agency commission | 2026-10-06 |
| `/blog/chamet-beans-to-dollars/` | chamet beans to dollars | 2026-10-10 |
| `/blog/chamet-withdrawal-pending/` | chamet withdrawal pending | 2026-10-15 |
| `/blog/metwallet-kyc-verification/` | metwallet kyc | 2026-10-20 |
| `/blog/chamet-agency-login-problems/` | chamet agency login problem | 2026-10-24 |
| `/blog/chamet-host-earnings-guide/` | chamet host earnings | 2026-10-28 |
| `/blog/chamet-app-download-install/` | chamet app download install | 2026-11-02 |
| `/blog/chamet-host-profile-tips/` | chamet host profile | 2026-11-08 |
| `/blog/chamet-agency-vs-host-account/` | chamet agency vs host | 2026-11-14 |
| `/blog/chamet-agency-near-me/` | chamet agency near me | 2026-11-20 |
| `/blog/chamet-host-verification-failed/` | chamet host verification failed | 2026-11-22 |
| `/blog/chamet-agency-commission-not-received/` | chamet agency commission not received | 2026-11-24 |
| `/blog/chamet-customer-care-number/` | chamet customer care number | 2026-11-26 |
| `/blog/is-chamet-safe/` | is chamet safe | 2026-11-27 |
| `/blog/chamet-app-not-working/` | chamet app not working | 2026-11-27 |
| `/blog/chamet-account-banned/` | chamet account banned | 2026-11-27 |
| `/blog/chamet-coins-price/` | chamet coins price | 2026-11-27 |
| `/blog/chamet-me-paise-kaise-kamaye/` | chamet me paise kaise kamaye | 2026-11-27 |

Article copy lives in `src/content/blog/*.ts` and is registered in `src/content/blog/index.ts`. Slug, publication date and keyword ownership must match `ROUTES`; the validator and `generateStaticParams` both depend on that match.

## Rendering and structured data

- Hero renders `PageSchema`, which emits a single `WebPage` or `BlogPosting` node with title, description, dates, image, breadcrumb reference, `speakable` (`#quick-answer`) and, for articles, keywords and section.
- `Breadcrumbs` emits a matching `BreadcrumbList` with an absolute `@id`.
- `Faq` emits `FAQPage` JSON-LD whose question and answer text match the visible cards word for word.
- `howToSchema` adds `HowTo` to the agency, host and host-withdrawal guides.
- The root layout emits the site graph: `Organization`, `WebSite` and `Service`, with India `areaServed`, the WhatsApp contact point and `sameAs`.
- No `Review`, `AggregateRating` or `LocalBusiness` markup is used, because the site has no verified ratings and no walk-in office.

## Machine-readable files

| File | Purpose |
|---|---|
| `/sitemap.xml` | All 36 canonical routes with `lastModified`, priority, change frequency and hero images. Empty when indexing is disabled. |
| `/robots.txt` | Allows all crawlers and explicitly allows named search and AI agents; points to the sitemap. Disallows everything on previews. |
| `/rss.xml` | RSS 2.0 feed of the 18 articles, newest first. Linked from `<link rel="alternate">` on every page and from the footer. |
| `/llms.txt` | Short, structured orientation for AI assistants: what the site is, key pages, core facts and limits. |
| `/llms-full.txt` | Longer per-page summaries and a citation guide for AI systems. |
| `/manifest.webmanifest` | App name, scope, colours and icons. |

## On-page conventions

- One `<h1>` per page; H2s are question-shaped where the section answers a real query.
- A "Quick answer" block appears before the table of contents and is the speakable target.
- The table of contents only renders when a page has at least three sections.
- Every article and guide carries a last-updated date and a sources line.
- Internal anchors are descriptive and use trailing slashes; no internal link relies on a redirect.
- Registration endpoints appear only on their role-specific page: agency link on `/chamet-agency-registration/`, host link on `/chamet-host-registration/`, both with `rel="sponsored noopener"`.