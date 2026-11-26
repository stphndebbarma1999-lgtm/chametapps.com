import type { ReactNode } from "react";

/** Concise source/review note for policy-bearing pages. */
export function SourceNote({ children, reviewed = "26 November 2026" }: { children: ReactNode; reviewed?: string }) {
  return (
    <aside className="mt-8 rounded-2xl border border-lavender/25 bg-surface/80 p-4 text-sm" aria-label="Sources and review">
      <p>
        <strong className="text-white">Sources &amp; review:</strong> {children} Last reviewed {reviewed}. Requirements shown in your own account take priority.
      </p>
    </aside>
  );
}
