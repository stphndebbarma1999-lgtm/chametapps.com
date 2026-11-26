import type { MetadataRoute } from "next";
import { IS_INDEXABLE, absoluteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!IS_INDEXABLE) {
    // Preview / staging deployments: keep out of search results.
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  // Nothing needed for rendering (CSS, JS, images, /_next/) is blocked.
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: absoluteUrl("/sitemap.xml") };
}
