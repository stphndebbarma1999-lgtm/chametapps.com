import { RichText } from "./RichText";

/** Direct answer block placed early in the page for featured snippets, AEO and speakable schema. */
export function QuickAnswer({ answer }: { answer: string }) {
  return (
    <aside id="quick-answer" aria-labelledby="quick-answer-title" className="card max-w-3xl border-lavender/50" data-reveal>
      <p className="eyebrow-italic mb-1 text-sm">Quick answer</p>
      <h2 id="quick-answer-title" className="text-xl sm:text-2xl">
        The short version
      </h2>
      <p className="mt-2">
        <RichText text={answer} />
      </p>
    </aside>
  );
}
