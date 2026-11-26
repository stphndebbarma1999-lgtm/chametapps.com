import { SOURCES_CHECKED_LABEL } from "@/lib/site";

export type SourceRef = { href: string; label: string; usedFor: string };

/** Short "Sources and review" note: which primary sources support which facts, and when they were checked. */
export function SourcesReview({ sources }: { sources: SourceRef[] }) {
  return (
    <aside className="mt-8 max-w-3xl rounded-2xl border border-lavender/25 bg-surface/80 p-4 text-sm" aria-labelledby="sources-review">
      <h2 id="sources-review" className="text-base">
        Sources and review
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        {sources.map((s) => (
          <li key={s.href}>
            <a href={s.href} target="_blank" rel="noopener">
              {s.label}
            </a>{" "}
            — {s.usedFor}
          </li>
        ))}
      </ul>
      <p className="mt-2">
        Checked against these official Chamet pages on {SOURCES_CHECKED_LABEL}. Requirements shown in your own account take priority.
      </p>
    </aside>
  );
}
