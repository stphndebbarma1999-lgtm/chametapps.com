import type { Metadata } from "next";
import heroes from "@/content/hero-images.json";
import { SITE, IS_INDEXABLE, absoluteUrl } from "./site";

export type HeroKey = keyof typeof heroes;

export type RouteDef = {
  path: string;
  /** Short label for navigation and breadcrumbs. */
  label: string;
  title: string;
  description: string;
  /** Primary and supporting search phrases this page is written for. */
  keywords: string[];
  hero: HeroKey;
  /** Parent route key for breadcrumbs (home is implicit). */
  parent?: string;
  /** Sitemap priority hint. */
  priority: number;
  /** Search intent: a landing page or a dated article. */
  type?: "page" | "article";
  /** Article publication date (YYYY-MM-DD). */
  published?: string;
  /**
   * Sitemap lastmod: date of this page's last material content change (YYYY-MM-DD).
   * Update by hand only when the page's content changes; never generated at build time.
   */
  lastModified: string;
};

const UPDATED = "2026-11-28";

export const ROUTES = {
  home: {
    path: "/",
    label: "Home",
    title: "Chamet Agency & Host Registration in India | ChametApps",
    description:
      "Join Chamet as an agency or host with step-by-step India guides for registration, agency login, app download and MetWallet withdrawal.",
    keywords: ["chamet agency", "chamet registration", "chamet agency registration", "chamet host registration", "chamet app"],
    hero: "home",
    priority: 1,
    lastModified: UPDATED,
  },
  agency: {
    path: "/chamet-agency-registration/",
    label: "Agency Registration",
    title: "Chamet Agency Registration in India: Step-by-Step Guide",
    description:
      "Create a Chamet agency account in six steps. Verify your phone, set a password, complete your profile and share host and agent invitations safely.",
    keywords: ["chamet agency registration", "chamet agency registration process", "chamet agent account", "chamet agency in india"],
    hero: "agency",
    priority: 0.9,
    lastModified: UPDATED,
  },
  host: {
    path: "/chamet-host-registration/",
    label: "Host Registration",
    title: "Chamet Host Registration: Create Your Host Account",
    description:
      "Create your Chamet host account with a 14-step illustrated guide: registration, sign-in, email verification, face check and profile setup.",
    keywords: ["chamet host registration", "chamet host account", "create chamet host account", "chamet host sign up"],
    hero: "host",
    priority: 0.9,
    lastModified: UPDATED,
  },
  dashboard: {
    path: "/chamet-agency-login/",
    label: "Agency Login & Dashboard",
    title: "Chamet Agency Login & Dashboard Guide (2026)",
    description:
      "Open Chamet agency login, recover a forgotten password, find host and agent invite links, read reports and link MetWallet from My Profile.",
    keywords: ["chamet agency login", "chamet agency login password", "chamet login", "chamet agency dashboard"],
    hero: "dashboard",
    priority: 0.85,
    lastModified: UPDATED,
  },
  withdrawal: {
    path: "/chamet-withdrawal/",
    label: "Withdrawals",
    title: "Chamet Withdrawal Guide: Host, Agency & MetWallet",
    description:
      "Compare Chamet host, agency and MetWallet withdrawal stages. Learn wallet linking, minimums, pending statuses and what to check before cash out.",
    keywords: ["chamet withdrawal", "chamet withdrawal guide", "chamet payment", "chamet payout"],
    hero: "withdrawals",
    priority: 0.8,
    lastModified: UPDATED,
  },
  hostWithdrawal: {
    path: "/chamet-host-withdrawal/",
    label: "Host Withdrawal",
    title: "How to Withdraw Money From Chamet App: Host Guide",
    description:
      "Learn how to withdraw money from the Chamet app: find My Earning, check conditions, bind MetWallet and confirm your host withdrawal request.",
    keywords: ["how to withdraw money from chamet app", "chamet host withdrawal", "chamet withdraw", "chamet withdrawal minimum"],
    hero: "hostWithdrawal",
    parent: "withdrawal",
    priority: 0.75,
    lastModified: UPDATED,
  },
  agencyWithdrawal: {
    path: "/chamet-agency-withdrawal/",
    label: "Agency Withdrawal",
    title: "Chamet Agency Withdrawal & MetWallet Setup Guide",
    description:
      "Connect MetWallet from My Profile in the Chamet agency dashboard, confirm the linked account and understand when commission becomes payable.",
    keywords: ["chamet agency withdrawal", "chamet agency salary", "chamet agency commission payment", "bind metwallet"],
    hero: "agencyWithdrawal",
    parent: "withdrawal",
    priority: 0.75,
    lastModified: UPDATED,
  },
  metwallet: {
    path: "/metwallet-withdrawal/",
    label: "MetWallet Cash Out",
    title: "MetWallet Withdrawal for Chamet: Cash Out in India",
    description:
      "Complete MetWallet cash out for Chamet in eight steps: verify your account, bind a payout method, set a payment password and track the transfer.",
    keywords: ["metwallet withdrawal", "metwallet cash out", "metwallet chamet", "metwallet withdrawal india"],
    hero: "metwallet",
    parent: "withdrawal",
    priority: 0.75,
    lastModified: UPDATED,
  },
  download: {
    path: "/chamet-app-download/",
    label: "App Download",
    title: "Chamet App Download & Login Guide (Android & iOS)",
    description:
      "Find the official Chamet app download route, install on Android or iPhone, and tell app login, host registration and agency login apart.",
    keywords: ["chamet app download", "chamet app", "chamet app download for android", "chamet app download for iphone"],
    hero: "download",
    priority: 0.8,
    lastModified: UPDATED,
  },
  india: {
    path: "/chamet-agency-india/",
    label: "Chamet Agency in India",
    title: "Chamet Agency in India: Registration, Login & Support",
    description:
      "Looking for a Chamet agency in India? Compare registration routes, verify an agency, understand rupee payouts and get online support from anywhere.",
    keywords: ["chamet agency in india", "chamet agency near me", "chamet agency india", "best chamet agency in india", "chamet agency support india"],
    hero: "home",
    priority: 0.8,
    lastModified: UPDATED,
  },
  help: {
    path: "/chamet-help/",
    label: "Help",
    title: "Chamet Help: Login, Registration & Withdrawal Problems",
    description:
      "Fix Chamet registration, login and withdrawal problems: missing codes, blank dashboard pages, unlinked wallets, pending payouts and failed transfers.",
    keywords: ["chamet help", "chamet withdrawal problem", "chamet login problem", "chamet registration problem"],
    hero: "help",
    priority: 0.75,
    lastModified: UPDATED,
  },
  blog: {
    path: "/blog/",
    label: "Blog",
    title: "Chamet Agency & Host Blog: Guides, Tips & Payout Help",
    description:
      "Practical Chamet guides for Indian hosts and agencies: commissions, Beans conversion, login fixes, withdrawal problems, MetWallet KYC and more.",
    keywords: ["chamet blog", "chamet agency guide", "chamet host guide", "chamet tips"],
    hero: "help",
    priority: 0.7,
    lastModified: UPDATED,
  },
  about: {
    path: "/about/",
    label: "About",
    title: "About ChametApps.com: Chamet Agency Guidance in India",
    description:
      "Learn who runs ChametApps.com, how our Chamet agency and host guidance works, how we review sources and where we stand versus the official app.",
    keywords: ["about chametapps", "chamet agency website", "chamet agency guidance"],
    hero: "aboutContact",
    priority: 0.5,
    lastModified: UPDATED,
  },
  contact: {
    path: "/contact/",
    label: "Contact",
    title: "Contact ChametApps.com: Chamet Registration Help",
    description:
      "Contact ChametApps.com on WhatsApp for Chamet agency or host registration help. Share your account type, step and error message safely.",
    keywords: ["contact chametapps", "chamet agency contact", "chamet registration help"],
    hero: "aboutContact",
    priority: 0.5,
    lastModified: UPDATED,
  },
  privacy: {
    path: "/privacy/",
    label: "Privacy Policy",
    title: "Privacy Policy | ChametApps.com",
    description:
      "How ChametApps.com handles technical data, optional analytics, WhatsApp messages, outbound links and the information you choose to share.",
    keywords: ["chametapps privacy policy", "privacy policy"],
    hero: "aboutContact",
    priority: 0.3,
    lastModified: UPDATED,
  },
  terms: {
    path: "/terms/",
    label: "Terms of Use",
    title: "Terms of Use | ChametApps.com",
    description:
      "Read the terms for using ChametApps.com guides, agency referral registration links and WhatsApp help, including limits and responsibilities.",
    keywords: ["chametapps terms", "terms of use"],
    hero: "aboutContact",
    priority: 0.3,
    lastModified: UPDATED,
  },
  disclaimer: {
    path: "/disclaimer/",
    label: "Disclaimer",
    title: "Disclaimer | ChametApps.com",
    description:
      "ChametApps.com is an independent agency guidance site, not the official Chamet platform. Read about referral links, earnings and changing rules.",
    keywords: ["chametapps disclaimer", "chamet agency disclaimer"],
    hero: "aboutContact",
    priority: 0.3,
    lastModified: UPDATED,
  },
  postCommission: {
    path: "/blog/chamet-agency-commission-explained/",
    label: "Agency Commission Explained",
    title: "Chamet Agency Commission Explained: Rates & Reports",
    description:
      "Understand how Chamet agency commission is calculated, where to find your ratio, how reports differ from payouts and which numbers to check first.",
    keywords: ["chamet agency commission", "chamet agency commission ratio", "chamet agency salary", "chamet commission report"],
    hero: "agency",
    parent: "blog",
    priority: 0.7,
    type: "article",
    published: "2026-10-06",
    lastModified: UPDATED,
  },
  postBeans: {
    path: "/blog/chamet-beans-to-dollars/",
    label: "Beans to Dollars",
    title: "Chamet Beans to Dollars: Conversion & Payout Guide",
    description:
      "Convert Chamet Beans to dollars with the 10,000 Beans = US$1 rule, then see why your Indian rupee payout can be lower after fees and FX.",
    keywords: ["chamet beans to dollars", "chamet beans to rupees", "chamet beans conversion", "chamet 10000 beans"],
    hero: "host",
    parent: "blog",
    priority: 0.7,
    type: "article",
    published: "2026-10-10",
    lastModified: UPDATED,
  },
  postPending: {
    path: "/blog/chamet-withdrawal-pending/",
    label: "Withdrawal Pending",
    title: "Chamet Withdrawal Pending? 7 Checks Before You Retry",
    description:
      "A Chamet withdrawal can sit pending for several reasons. Work through these seven checks before you retry, cancel or contact support.",
    keywords: ["chamet withdrawal pending", "chamet withdrawal not received", "chamet withdrawal problem", "chamet payout pending"],
    hero: "withdrawals",
    parent: "blog",
    priority: 0.7,
    type: "article",
    published: "2026-10-15",
    lastModified: UPDATED,
  },
  postMetwalletKyc: {
    path: "/blog/metwallet-kyc-verification/",
    label: "MetWallet KYC",
    title: "MetWallet KYC Verification: Documents & Fixes for India",
    description:
      "What MetWallet Basic Level verification usually asks for, how to fix a rejected document and what to do before requesting a Chamet payout.",
    keywords: ["metwallet kyc", "metwallet verification", "metwallet basic level", "metwallet india kyc"],
    hero: "metwallet",
    parent: "blog",
    priority: 0.7,
    type: "article",
    published: "2026-10-20",
    lastModified: UPDATED,
  },
  postLogin: {
    path: "/blog/chamet-agency-login-problems/",
    label: "Agency Login Problems",
    title: "Chamet Agency Login Problems: 9 Fixes That Work",
    description:
      "Fix Chamet agency login problems: wrong portal, forgotten password, blank page, phone login, browser issues and account restrictions.",
    keywords: ["chamet agency login problem", "chamet agency login not working", "chamet agency login password reset", "chamet agency portal"],
    hero: "dashboard",
    parent: "blog",
    priority: 0.7,
    type: "article",
    published: "2026-10-24",
    lastModified: UPDATED,
  },
  postEarnings: {
    path: "/blog/chamet-host-earnings-guide/",
    label: "Host Earnings Guide",
    title: "Chamet Host Earnings Guide: Beans, Bonuses & Payouts",
    description:
      "See how Chamet host earnings work, what Beans are worth, how bonuses and agency support fit in, and when a payout becomes withdrawable.",
    keywords: ["chamet host earnings", "chamet host salary", "chamet host income", "chamet beans earning"],
    hero: "host",
    parent: "blog",
    priority: 0.7,
    type: "article",
    published: "2026-10-28",
    lastModified: UPDATED,
  },
  postDownload: {
    path: "/blog/chamet-app-download-install/",
    label: "App Download & Install",
    title: "Chamet App Download & Install: Android and iPhone",
    description:
      "Install Chamet safely on Android or iPhone, avoid modified APKs, fix download errors and sign in with the account you registered.",
    keywords: ["chamet app download install", "chamet apk", "chamet app install", "chamet app for iphone"],
    hero: "download",
    parent: "blog",
    priority: 0.7,
    type: "article",
    published: "2026-11-02",
    lastModified: UPDATED,
  },
  postProfile: {
    path: "/blog/chamet-host-profile-tips/",
    label: "Host Profile Tips",
    title: "Chamet Host Profile Tips: Photos, Tags and Intro",
    description:
      "Build a host profile that passes review and helps viewers understand you: photo rules, nickname ideas, tags, languages and a short intro.",
    keywords: ["chamet host profile", "chamet profile photo", "chamet host bio", "chamet host tips"],
    hero: "host",
    parent: "blog",
    priority: 0.7,
    type: "article",
    published: "2026-11-08",
    lastModified: UPDATED,
  },
  postVersus: {
    path: "/blog/chamet-agency-vs-host-account/",
    label: "Agency vs Host Account",
    title: "Chamet Agency vs Host Account: Which Should You Pick?",
    description:
      "Compare a Chamet host account and an agency account: what each one does, who should choose it, income paths and switching rules.",
    keywords: ["chamet agency vs host", "chamet host or agency", "chamet account types", "chamet agency account"],
    hero: "agency",
    parent: "blog",
    priority: 0.7,
    type: "article",
    published: "2026-11-14",
    lastModified: UPDATED,
  },
  postNearMe: {
    path: "/blog/chamet-agency-near-me/",
    label: "Chamet Agency Near Me",
    title: "Chamet Agency Near Me: How to Find a Genuine Agency",
    description:
      "Searching for a Chamet agency near me? Verify an agency online, spot fake offers, check referral links and choose support that fits your city.",
    keywords: ["chamet agency near me", "chamet agency near me india", "genuine chamet agency", "chamet agency finder"],
    hero: "home",
    parent: "blog",
    priority: 0.7,
    type: "article",
    published: "2026-11-20",
    lastModified: UPDATED,
  },
  beansCalculator: {
    path: "/chamet-beans-to-rupees-calculator/",
    label: "Beans to Rupees Calculator",
    title: "Chamet Beans to Rupees Calculator (Free Estimate)",
    description:
      "Convert Chamet Beans to dollars at 10,000 Beans = US$1, then estimate rupees using your own exchange rate. Includes minimum and fee notes.",
    keywords: ["chamet beans to rupees", "chamet beans calculator", "chamet beans to dollars", "chamet beans value"],
    hero: "withdrawals",
    parent: "withdrawal",
    priority: 0.8,
    lastModified: UPDATED,
  },
  postPaise: {
    path: "/blog/chamet-me-paise-kaise-kamaye/",
    label: "Paise Kaise Kamaye",
    title: "Chamet Me Paise Kaise Kamaye: Real Routes & Maths",
    description:
      "Host, agency or platform rewards: the three routes that actually pay, the Bean-to-rupee maths, first-month plan and the offers that never pay.",
    keywords: [
      "chamet me paise kaise kamaye",
      "chamet se paise kaise kamaye",
      "chamet par paise kaise kamaye",
      "chamet money earning",
    ],
    hero: "withdrawals",
    parent: "blog",
    priority: 0.7,
    type: "article",
    published: "2026-11-27",
    lastModified: UPDATED,
  },
  postCoins: {
    path: "/blog/chamet-coins-price/",
    label: "Coins Price",
    title: "Chamet Coins Price: Packs, Gifts and Real Cost",
    description:
      "Why a coin pack costs what it does, how to work out the real cost of a gift, and how to spot resellers and generators that cost you the account.",
    keywords: ["chamet coins price", "chamet coins", "chamet coin rate", "chamet recharge"],
    hero: "withdrawals",
    parent: "blog",
    priority: 0.7,
    type: "article",
    published: "2026-11-27",
    lastModified: UPDATED,
  },
  postAccountBanned: {
    path: "/blog/chamet-account-banned/",
    label: "Account Banned",
    title: "Chamet Account Banned? Appeal Steps and Scam Warnings",
    description:
      "Read the notice, tell a restriction from a ban, and appeal once with evidence. Plus why paid 'unban' offers make the situation worse.",
    keywords: ["chamet account banned", "chamet account suspended", "chamet account restricted", "chamet unban"],
    hero: "help",
    parent: "blog",
    priority: 0.7,
    type: "article",
    published: "2026-11-27",
    lastModified: UPDATED,
  },
  postAppNotWorking: {
    path: "/blog/chamet-app-not-working/",
    label: "App Not Working",
    title: "Chamet App Not Working? Fix Crashes and Black Camera",
    description:
      "Diagnose the failing layer: launch, network, permissions, version or stream. Safe fixes in order, and what to send support if nothing works.",
    keywords: ["chamet app not working", "chamet app crash", "chamet app not opening", "chamet app problem"],
    hero: "download",
    parent: "blog",
    priority: 0.7,
    type: "article",
    published: "2026-11-27",
    lastModified: UPDATED,
  },
  postCustomerCare: {
    path: "/blog/chamet-customer-care-number/",
    label: "Customer Care Number",
    title: "Chamet Customer Care Number: Real Support vs Scams",
    description:
      "Chamet does not publish a public phone helpline. Learn the official support route, what to have ready and how to spot fake customer care numbers.",
    keywords: ["chamet customer care number", "chamet customer care", "chamet support number", "chamet helpline"],
    hero: "help",
    parent: "blog",
    priority: 0.7,
    type: "article",
    published: "2026-11-26",
    lastModified: UPDATED,
  },
  postIsChametSafe: {
    path: "/blog/is-chamet-safe/",
    label: "Is Chamet Safe?",
    title: "Is Chamet Safe? Money, Privacy and Scam Risks",
    description:
      "An honest safety read for Indian hosts and agencies: the common scams, privacy settings worth changing, age rules and what no guide can verify.",
    keywords: ["is chamet safe", "chamet app safe or not", "chamet scam", "chamet safety"],
    hero: "home",
    parent: "blog",
    priority: 0.7,
    type: "article",
    published: "2026-11-27",
    lastModified: UPDATED,
  },
  postCommissionMissing: {
    path: "/blog/chamet-agency-commission-not-received/",
    label: "Commission Not Received",
    title: "Chamet Agency Commission Not Received? 8 Checks",
    description:
      "Commission shows calculated but never arrives? Check the period, the payable status and the wallet used before treating an agency payment as missing.",
    keywords: ["chamet agency commission not received", "chamet commission payment pending", "chamet agency payment problem", "chamet commission not showing"],
    hero: "agency",
    parent: "blog",
    priority: 0.7,
    type: "article",
    published: "2026-11-24",
    lastModified: UPDATED,
  },
  postVerificationFailed: {
    path: "/blog/chamet-host-verification-failed/",
    label: "Host Verification Failed",
    title: "Chamet Host Verification Failed: Fixes and Next Steps",
    description:
      "Fix a failed Chamet host verification: face check lighting, document matching, cooldowns and what to send support after a rejected attempt.",
    keywords: ["chamet host verification failed", "chamet face verification failed", "chamet verification problem", "chamet host verification fix"],
    hero: "host",
    parent: "blog",
    priority: 0.7,
    type: "article",
    published: "2026-11-22",
    lastModified: UPDATED,
  },
} as const satisfies Record<string, RouteDef>;

export type RouteKey = keyof typeof ROUTES;

export function heroImage(key: HeroKey) {
  const [, file, alt, width, height] = heroes[key] as [string, string, string, number, number];
  return { src: `/images/heroes/${file}`, alt, width, height, og: `/og/${file.replace(".webp", ".jpg")}` };
}

function sharedAlternates(url: string) {
  return {
    canonical: url,
    languages: { "en-IN": url, "x-default": url },
    types: {
      "application/rss+xml": absoluteUrl("/rss.xml"),
      "text/plain": absoluteUrl("/llms.txt"),
    },
  };
}

/** Builds unique, self-canonical metadata for a route. */
export function pageMetadata(key: RouteKey): Metadata {
  const r: RouteDef = ROUTES[key];
  const img = heroImage(r.hero);
  const url = absoluteUrl(r.path);
  const isArticle = r.type === "article";
  return {
    title: { absolute: r.title },
    description: r.description,
    keywords: r.keywords,
    alternates: sharedAlternates(url),
    openGraph: {
      type: isArticle ? "article" : "website",
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      title: r.title,
      description: r.description,
      publishedTime: r.published,
      modifiedTime: r.lastModified,
      authors: [SITE.name],
      section: isArticle ? "Chamet guides" : undefined,
      images: [{ url: absoluteUrl(img.og), width: 1200, height: 750, alt: img.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: r.title,
      description: r.description,
      images: [absoluteUrl(img.og)],
    },
    robots: IS_INDEXABLE ? { index: true, follow: true, "max-image-preview": "large" } : { index: false, follow: false },
  };
}

/** Breadcrumb trail: Home → (parent) → page. */
export function breadcrumbTrail(key: RouteKey): { name: string; path: string }[] {
  if (key === "home") return [{ name: "Home", path: "/" }];
  const r: RouteDef = ROUTES[key];
  const trail = [{ name: "Home", path: "/" }];
  if (r.parent) {
    const p: RouteDef = ROUTES[r.parent as RouteKey];
    trail.push({ name: p.label, path: p.path });
  }
  trail.push({ name: r.label, path: r.path });
  return trail;
}