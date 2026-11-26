import type { ReactNode } from "react";
import { JsonLd } from "./JsonLd";

/**
 * One FAQ entry. `text` is the answer used in FAQPage JSON-LD. If `a` is omitted, the visible
 * answer is rendered from `text`, so both are identical. If `a` is given (to include links),
 * its visible wording must match `text` exactly — `npm run validate` checks this.
 */
export type FaqItem = { q: string; text: string; a?: ReactNode };

/** Visible FAQ list. FAQPage JSON-LD mirrors exactly the visible questions and answers. */
export function Faq({ id, heading, items }: { id: string; heading: string; items: FaqItem[] }) {
  return (
    <div>
      <h2 id={id} className="mb-6 text-[1.65rem] sm:text-[2.1rem]" data-reveal>
        {heading}
      </h2>
      <div className="grid gap-4 md:grid-cols-2" data-reveal-stagger>
        {items.map((f) => (
          <div key={f.q} className="card" data-faq-item>
            <h3 className="text-lg" data-faq-question>
              {f.q}
            </h3>
            <div className="mt-2 space-y-2" data-faq-answer>
              {f.a ?? <p>{f.text}</p>}
            </div>
          </div>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.text } })),
        }}
      />
    </div>
  );
}
