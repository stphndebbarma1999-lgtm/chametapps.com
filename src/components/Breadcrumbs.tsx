import Link from "next/link";
import { breadcrumbTrail, type RouteKey } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";
import { JsonLd } from "./JsonLd";

/** Visible breadcrumbs with matching BreadcrumbList JSON-LD. */
export function Breadcrumbs({ page }: { page: RouteKey }) {
  const trail = breadcrumbTrail(page);
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-body/90">
          {trail.map((c, i) => (
            <li key={c.path} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true" className="text-lavender/70">›</span>}
              {i < trail.length - 1 ? (
                <Link href={c.path} className="text-lavender underline-offset-4 hover:underline">
                  {c.name}
                </Link>
              ) : (
                <span aria-current="page" className="text-body">{c.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: absoluteUrl(c.path) })),
        }}
      />
    </>
  );
}
