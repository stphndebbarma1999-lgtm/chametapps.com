import type { MetadataRoute } from "next";
import { guideImages, type GuideKey } from "@/lib/guides";
import { ROUTES, heroImage, type RouteDef } from "@/lib/routes";
import { IS_INDEXABLE, absoluteUrl } from "@/lib/site";

const ROUTE_GUIDE_IMAGES: Partial<Record<string, GuideKey>> = {
  "/chamet-agency-registration/": "create-agency",
  "/chamet-host-registration/": "create-host",
  "/chamet-agency-login/": "dashboard",
  "/chamet-agency-withdrawal/": "agency-withdrawal",
  "/chamet-host-withdrawal/": "host-withdrawal",
  "/metwallet-withdrawal/": "metwallet-cash-out",
};

/**
 * Only indexable canonical 200 pages. lastmod = each page's own last material content change.
 * Article routes carry their publication date and guide routes include tutorial screenshots for image discoverability.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!IS_INDEXABLE) return [];
  const routes: RouteDef[] = Object.values(ROUTES);
  return routes.map((route) => {
    const img = heroImage(route.hero);
    const guideKey = ROUTE_GUIDE_IMAGES[route.path];
    const tutorialUrls = guideKey ? guideImages(guideKey).map((g) => absoluteUrl(g.src)) : [];
    const isArticle = route.type === "article";
    return {
      url: absoluteUrl(route.path),
      lastModified: route.lastModified,
      changeFrequency: isArticle ? "monthly" : route.path === "/" ? "weekly" : "monthly",
      priority: route.priority,
      images: [absoluteUrl(img.og), absoluteUrl(img.src), ...tutorialUrls],
    };
  });
}
