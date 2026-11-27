import { BLOG_POSTS } from "@/content/blog";
import { ROUTES, type RouteKey } from "@/lib/routes";
import { SITE, absoluteUrl } from "@/lib/site";

function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rfc822(date: string) {
  return new Date(date + "T00:00:00Z").toUTCString();
}

function routeKeyFor(slug: string): RouteKey | undefined {
  return (Object.keys(ROUTES) as RouteKey[]).find((key) => ROUTES[key].path === `/blog/${slug}/`);
}

export const dynamic = "force-static";

/** RSS 2.0 feed of every published guide, newest first. */
export function GET() {
  const items = BLOG_POSTS.map((post) => {
    const key = routeKeyFor(post.slug);
    const route = key ? ROUTES[key] : undefined;
    const url = absoluteUrl(`/blog/${post.slug}/`);
    const categories = [post.category, "Chamet", "India"].map((c) => `      <category>${esc(c)}</category>`).join("\n");
    return [
      "    <item>",
      `      <title>${esc(route?.title ?? post.slug)}</title>`,
      `      <link>${esc(url)}</link>`,
      `      <guid isPermaLink="true">${esc(url)}</guid>`,
      `      <pubDate>${rfc822(post.published)}</pubDate>`,
      `      <description>${esc(post.excerpt)}</description>`,
      categories,
      "    </item>",
    ].join("\n");
  }).join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>${esc(`${SITE.name} — Chamet agency and host guides`)}</title>`,
    `    <link>${esc(absoluteUrl("/blog/"))}</link>`,
    `    <atom:link href="${esc(absoluteUrl("/rss.xml"))}" rel="self" type="application/rss+xml" />`,
    "    <description>Independent, source-checked Chamet guides for hosts and agencies in India: commission, Beans, withdrawals, login fixes and agency checks.</description>",
    "    <language>en-IN</language>",
    `    <lastBuildDate>${rfc822(BLOG_POSTS[0]?.updated ?? "2026-11-26")}</lastBuildDate>`,
    "    <ttl>1440</ttl>",
    items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
