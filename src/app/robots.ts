import type { MetadataRoute } from "next";
import { IS_INDEXABLE, SITE, absoluteUrl } from "@/lib/site";

/**
 * Search and AI crawlers are explicitly allowed so pages can be indexed and quoted.
 * Nothing needed for rendering (CSS, JS, images under /_next/, /images/) is blocked.
 */
const EXPLICIT_AGENTS = [
  "Googlebot",
  "Googlebot-Image",
  "Google-Extended",
  "Bingbot",
  "Applebot",
  "Applebot-Extended",
  "DuckDuckBot",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "CCBot",
  "Amazonbot",
  "Bytespider",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  if (!IS_INDEXABLE) {
    // Preview / staging deployments: keep out of search results and AI answers.
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...EXPLICIT_AGENTS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE.url,
  };
}
