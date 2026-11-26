import type { ReactNode } from "react";
import { DecoField } from "./DecoField";

/** Page section with optional heading id, tone and decorative logos. tone="surface" renders a white (light) section. */
export function Section({
  id,
  children,
  tone = "ink",
  className = "",
  labelledBy,
}: {
  id?: string;
  children: ReactNode;
  tone?: "ink" | "surface";
  /** @deprecated decorative logos are now added automatically to every section */
  deco?: unknown;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative isolate py-12 sm:py-16 ${tone === "surface" ? "tone-light bg-white" : "bg-ink"} ${className}`}
    >
      <DecoField tone={tone === "surface" ? "light" : "dark"} />
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
