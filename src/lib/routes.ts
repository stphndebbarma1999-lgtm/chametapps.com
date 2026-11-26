import type { Metadata } from "next";
import heroes from "@/content/hero-images.json";
import { SITE, IS_INDEXABLE, absoluteUrl } from "./site";

export type HeroKey = keyof typeof heroes;

type RouteDef = {
  path: string;
  /** Short label for navigation and breadcrumbs. */
  label: string;
  title: string;
  description: string;
  hero: HeroKey;
  /** Parent route key for breadcrumbs (home is implicit). */
  parent?: string;
  /** Sitemap priority hint. */
  priority: number;
};

export const ROUTES = {
  home: {
    path: "/",
    label: "Home",
    title: "Chamet Agency & Host Registration | ChametApps.com",
    description:
      "Join as a Chamet agency or host with step-by-step registration guides. Find agency login, dashboard help and MetWallet withdrawal instructions.",
    hero: "home",
    priority: 1,
  },
  agency: {
    path: "/agency.html",
    label: "Agency",
    title: "Chamet Agency Registration: Create Your Agent Account",
    description:
      "Follow six Chamet agency registration steps, verify your phone, complete your profile and find separate invitation links for hosts and agents.",
    hero: "agency",
    priority: 0.9,
  },
  host: {
    path: "/host.html",
    label: "Host",
    title: "Chamet Host Registration & Account Setup Guide",
    description:
      "Create your Chamet host account with an illustrated registration guide. Learn sign-in, profile setup, verification and the next steps for withdrawals.",
    hero: "host",
    priority: 0.9,
  },
  dashboard: {
    path: "/chamet-agency-login/",
    label: "Agency Login & Dashboard",
    title: "Chamet Agency Login & Dashboard Guide | ChametApps.com",
    description:
      "Open Chamet agency login and learn password recovery, invitation links, host lists, agent reports and MetWallet settings in the dashboard.",
    hero: "dashboard",
    priority: 0.8,
  },
  withdrawal: {
    path: "/chamet-withdrawal/",
    label: "Withdrawals",
    title: "Chamet Withdrawal: Host, Agency & MetWallet Guides",
    description:
      "Choose the right Chamet withdrawal steps for hosts or agencies. Understand wallet linking, cash out and what to check when a payment is delayed.",
    hero: "withdrawals",
    priority: 0.8,
  },
  hostWithdrawal: {
    path: "/chamet-host-withdrawal/",
    label: "Host Withdrawal",
    title: "How to Withdraw Money From Chamet: Host Guide",
    description:
      "Find My Earning, check withdrawal conditions and bind MetWallet in Chamet. Follow ten illustrated steps and continue to wallet cash out.",
    hero: "hostWithdrawal",
    parent: "withdrawal",
    priority: 0.7,
  },
  agencyWithdrawal: {
    path: "/chamet-agency-withdrawal/",
    label: "Agency Withdrawal",
    title: "Chamet Agency Withdrawal & MetWallet Setup Guide",
    description:
      "Connect MetWallet from My Profile in the Chamet agency dashboard. Review your payment account and continue to the wallet cash-out guide.",
    hero: "agencyWithdrawal",
    parent: "withdrawal",
    priority: 0.7,
  },
  metwallet: {
    path: "/metwallet-withdrawal/",
    label: "MetWallet Cash Out",
    title: "MetWallet Withdrawal for Chamet: Cash-Out Steps",
    description:
      "Complete MetWallet details, link a withdrawal method, set your payment password and review your cash-out request with an eight-step guide.",
    hero: "metwallet",
    parent: "withdrawal",
    priority: 0.7,
  },
  download: {
    path: "/chamet-app-download/",
    label: "App Download",
    title: "Chamet App Download & Login Guide | ChametApps.com",
    description:
      "Find Chamet's official download destination and understand the difference between app login, host registration and the agency dashboard.",
    hero: "download",
    priority: 0.7,
  },
  help: {
    path: "/chamet-help/",
    label: "Help",
    title: "Chamet Help: Login, Registration & Payment Problems",
    description:
      "Check common Chamet registration and login problems. Find separate steps for unlinked wallets, pending withdrawals and payments not received.",
    hero: "help",
    priority: 0.7,
  },
  about: {
    path: "/about/",
    label: "About",
    title: "About ChametApps.com | Chamet Agency Guidance",
    description:
      "Learn about ChametApps.com, its agency and host registration guidance, illustrated tutorials and relationship with the Chamet platform.",
    hero: "aboutContact",
    priority: 0.5,
  },
  contact: {
    path: "/contact/",
    label: "Contact",
    title: "Contact ChametApps.com | Registration & Setup Help",
    description:
      "Contact ChametApps.com for agency or host registration guidance, dashboard questions and help finding the relevant withdrawal instructions.",
    hero: "aboutContact",
    priority: 0.5,
  },
  privacy: {
    path: "/privacy/",
    label: "Privacy Policy",
    title: "Privacy Policy | ChametApps.com",
    description:
      "How ChametApps.com handles visits, outbound WhatsApp and Chamet links, optional analytics and the information you choose to send us.",
    hero: "aboutContact",
    priority: 0.3,
  },
  terms: {
    path: "/terms/",
    label: "Terms of Use",
    title: "Terms of Use | ChametApps.com",
    description:
      "Terms for using ChametApps.com guides, referral registration links and WhatsApp help, including the limits of our guidance.",
    hero: "aboutContact",
    priority: 0.3,
  },
  disclaimer: {
    path: "/disclaimer/",
    label: "Disclaimer",
    title: "Disclaimer | ChametApps.com",
    description:
      "ChametApps.com is an agency guidance website, not the official Chamet platform. Read about referral links, earnings, images and changing requirements.",
    hero: "aboutContact",
    priority: 0.3,
  },
} as const satisfies Record<string, RouteDef>;

export type RouteKey = keyof typeof ROUTES;

/**
 * Fraction of each image's width that is empty purple space on the left (reserved for
 * overlaid text). When the image is shown without overlaid text it is trimmed by this much
 * so the people and logo sit centred, with similar margins on both sides. Faces and logos
 * are never cut (measured per image).
 */
const HERO_TRIM_LEFT: Record<HeroKey, number> = {
  home: 0.37,
  agency: 0.39,
  host: 0.34,
  dashboard: 0.34,
  withdrawals: 0.39,
  hostWithdrawal: 0.31,
  agencyWithdrawal: 0.35,
  metwallet: 0.35,
  download: 0.36,
  help: 0.37,
  aboutContact: 0.31,
  recruitment: 0.51,
  support: 0.45,
};

export function heroImage(key: HeroKey) {
  const [, file, alt, width, height] = heroes[key] as [string, string, string, number, number];
  const trim = HERO_TRIM_LEFT[key];
  return {
    src: `/images/heroes/${file}`,
    alt,
    width,
    height,
    og: `/og/${file.replace(".webp", ".jpg")}`,
    /** CSS aspect ratio of the centred (trimmed) view. */
    centredRatio: `${Math.round(width * (1 - trim))} / ${height}`,
  };
}

/** Builds unique, self-canonical metadata for a route. */
export function pageMetadata(key: RouteKey): Metadata {
  const r: RouteDef = ROUTES[key];
  const img = heroImage(r.hero);
  const url = absoluteUrl(r.path);
  return {
    title: { absolute: r.title },
    description: r.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      title: r.title,
      description: r.description,
      images: [{ url: absoluteUrl(img.og), width: 1200, height: 800, alt: img.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: r.title,
      description: r.description,
      images: [absoluteUrl(img.og)],
    },
    robots: IS_INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
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
