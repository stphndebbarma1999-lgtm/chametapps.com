import type { RouteKey } from "@/lib/routes";
import { webPageSchema } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

/** WebPage (or BlogPosting) JSON-LD for a route, including speakable and breadcrumb references. */
export function PageSchema({ page, wordCount }: { page: RouteKey; wordCount?: number }) {
  return <JsonLd data={{ "@context": "https://schema.org", ...webPageSchema(page, wordCount) }} />;
}
