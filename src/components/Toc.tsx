import type { ContentSection } from "@/lib/content";

/** On-page table of contents with real anchor links. */
export function Toc({ sections, heading = "On this page" }: { sections: ContentSection[]; heading?: string }) {
  if (sections.length < 3) return null;
  return (
    <nav aria-label={heading} className="toc-box my-8 max-w-[50rem] rounded-2xl p-4 sm:p-5">
      <h2 className="text-base">{heading}</h2>
      <ol className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
        {sections.map((s, i) => (
          <li key={s.id} className="flex gap-2">
            <span aria-hidden="true" className="font-bold text-pink">
              {String(i + 1).padStart(2, "0")}
            </span>
            <a href={`#${s.id}`} className="no-underline hover:underline">
              {s.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
