"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RELATED_GUIDES } from "@/content/related";

/** Contextual links from a guide to three related articles. Renders nothing on unmatched paths. */
export function RelatedGuides() {
  const pathname = usePathname() || "/";
  const key = pathname.length > 1 ? pathname.replace(/\/$/, "") : "/";
  const links = RELATED_GUIDES[key];
  if (!links) return null;

  return (
    <section aria-labelledby="related-guides" className="relative isolate border-t border-lavender/15 bg-ink py-10 sm:py-12">
      <div className="container-site">
        <h2 id="related-guides" className="text-[1.35rem] sm:text-[1.6rem]">
          Related guides
        </h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="card group flex h-full flex-col justify-between gap-2 no-underline hover:border-lavender/70">
                <span className="font-bold text-white">{l.label}</span>
                <span className="text-sm text-body">{l.note}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-5">
          <Link href="/blog/" className="text-lavender underline">
            Browse all Chamet guides
          </Link>
        </p>
      </div>
    </section>
  );
}
