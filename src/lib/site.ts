import links from "@/content/links.json";

/** Centralised site + outbound link configuration (source: LINKS.json). */
export const SITE = {
  url: links.siteUrl,
  name: links.brand,
  locale: "en_IN",
} as const;

export const LINKS = {
  /** Agency (agent) invitation endpoint — only for people creating an AGENCY account. */
  agencyRegistration: links.agencyRegistration,
  /** Host invitation endpoint — only for people creating a HOST account. */
  hostRegistration: links.hostRegistration,
  agencyDashboard: links.agencyDashboard,
  agencyDashboardLabel: new URL(links.agencyDashboard).host,
  earlierDashboardReference: links.earlierDashboardReference,
  officialChamet: links.officialChamet,
  officialChametLabel: new URL(links.officialChamet).host,
  whatsappChat: links.whatsappChat,
  whatsappDisplay: links.whatsappDisplay,
  whatsappChannel: links.whatsappChannel,
  whatsappChannelName: links.whatsappChannelName,
} as const;

/** WhatsApp chat link with a URL-encoded, page-specific prefilled message. */
export function whatsappHref(message: string): string {
  return `${LINKS.whatsappChat}?text=${encodeURIComponent(message)}`;
}

export const WA = {
  general: "Hello ChametApps.com, I have a question about Chamet agency or host registration.",
  agency: "Hello ChametApps.com, I need help with Chamet agency registration. I am at the [step name] step.",
  host: "Hello ChametApps.com, I need help with Chamet host registration. I am at the [step name] step.",
  dashboard: "Hello ChametApps.com, I have a question about the Chamet agency dashboard.",
  withdrawal: "Hello ChametApps.com, I need help choosing the right Chamet withdrawal guide.",
  hostWithdrawal: "Hello ChametApps.com, I need help with Chamet host withdrawal. I am at the [step name] step.",
  agencyWithdrawal: "Hello ChametApps.com, I need help linking MetWallet to my Chamet agency. I am at the [step name] step.",
  metwallet: "Hello ChametApps.com, I need help with MetWallet cash out. I am at the [step name] step.",
  download: "Hello ChametApps.com, I have a question about downloading the Chamet app.",
  help: "Hello ChametApps.com, I need help. Account type: [host/agency]. Step reached: [step]. Error message: [message].",
  contact: "Hello, I need help with Chamet [host/agency] registration. I am at the [step name] step.",
} as const;

/** Date of the last real content change; used for sitemap lastmod. Update only when copy changes. */
export const CONTENT_UPDATED = "2026-11-26";

/** Production indexing: Vercel previews and explicit opt-outs are noindex. */
export const IS_INDEXABLE =
  process.env.VERCEL_ENV !== undefined
    ? process.env.VERCEL_ENV === "production"
    : process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "false";

export function absoluteUrl(path: string): string {
  return new URL(path, SITE.url).toString();
}
