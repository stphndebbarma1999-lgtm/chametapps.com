import type { ReactNode } from "react";
import { DecoLogos } from "./DecoLogos";

type Spot = Parameters<typeof DecoLogos>[0]["spots"][number];

/** Page section with optional heading id, tone and decorative logos. */
export function Section({
  id,
  children,
  tone = "ink",
  deco,
  className = "",
  labelledBy,
}: {
  id?: string;
  children: ReactNode;
  tone?: "ink" | "surface";
  deco?: Spot[];
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative isolate py-12 sm:py-16 ${tone === "surface" ? "bg-surface" : "bg-ink"} ${className}`}
    >
      {deco && <DecoLogos spots={deco} />}
      <div className="container-site">{children}</div>
    </section>
  );
}

export function SectionHeading({ id, children, accent }: { id: string; children: ReactNode; accent?: ReactNode }) {
  return (
    <div className="mb-6 max-w-3xl" data-reveal>
      {accent && <p className="eyebrow-italic mb-2">{accent}</p>}
      <h2 id={id} className="text-[1.65rem] sm:text-[2.1rem]">
        {children}
      </h2>
    </div>
  );
}
