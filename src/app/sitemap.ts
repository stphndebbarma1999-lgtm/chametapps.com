import type { MetadataRoute } from "next";
import { ROUTES } from "@/lib/routes";
import { IS_INDEXABLE, absoluteUrl } from "@/lib/site";

/** Only indexable canonical 200 pages. lastmod = each page's own last material content change. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!IS_INDEXABLE) return [];
  return Object.values(ROUTES).map((r: { path: string; priority: number; lastModified: string }) => ({
    url: absoluteUrl(r.path),
    lastModified: r.lastModified,
    priority: r.priority,
  }));
}
