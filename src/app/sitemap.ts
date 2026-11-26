import type { MetadataRoute } from "next";
import { ROUTES } from "@/lib/routes";
import { CONTENT_UPDATED, IS_INDEXABLE, absoluteUrl } from "@/lib/site";

/** Only indexable canonical 200 pages. lastmod = date of the last real content change. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!IS_INDEXABLE) return [];
  return Object.values(ROUTES).map((r: { path: string; priority: number }) => ({
    url: absoluteUrl(r.path),
    lastModified: CONTENT_UPDATED,
    priority: r.priority,
  }));
}
