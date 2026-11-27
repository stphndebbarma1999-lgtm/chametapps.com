import type { ContentBlock, ContentSection } from "@/lib/content";
import { RichText } from "./RichText";

function Blocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.kind === "p") {
          return (
            <p key={i}>
              <RichText text={block.text} />
            </p>
          );
        }
        if (block.kind === "list") {
          const Tag = block.ordered ? "ol" : "ul";
          return (
            <Tag key={i} className={block.ordered ? "list-decimal" : "list-disc"} style={{ paddingLeft: "1.5rem" }}>
              {block.items.map((item, j) => (
                <li key={j}>
                  <RichText text={item} />
                </li>
              ))}
            </Tag>
          );
        }
        if (block.kind === "steps") {
          return (
            <ol key={i} className="steps">
              {block.items.map((item, j) => (
                <li key={j}>
                  <RichText text={item} />
                </li>
              ))}
            </ol>
          );
        }
        if (block.kind === "table") {
          return (
            <div key={i} className="table-wrap">
              <table className="table-site table-stack">
                {block.caption && <caption className="sr-only">{block.caption}</caption>}
                <thead>
                  <tr>
                    {block.head.map((h) => (
                      <th key={h} scope="col">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, r) => (
                    <tr key={r}>
                      {row.map((cell, c) =>
                        c === 0 ? (
                          <th key={c} scope="row">
                            <RichText text={cell} />
                          </th>
                        ) : (
                          <td key={c} data-label={block.head[c]}>
                            <RichText text={cell} />
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        if (block.kind === "note") {
          return (
            <aside key={i} className="rounded-2xl border border-lavender/30 bg-surface/80 p-4 text-sm" role="note">
              <RichText text={block.text} />
            </aside>
          );
        }
        if (block.kind === "cards") {
          return (
            <div key={i} className="grid gap-4 sm:grid-cols-2">
              {block.items.map((card) => (
                <div key={card.title} className="card">
                  <h3 className="text-lg">{card.title}</h3>
                  <p className="mt-1 text-sm">
                    <RichText text={card.text} />
                  </p>
                </div>
              ))}
            </div>
          );
        }
        return (
          <div key={i} className="mt-6">
            <h3>{block.heading}</h3>
            <Blocks blocks={block.blocks} />
          </div>
        );
      })}
    </>
  );
}

/** Renders long-form content sections as real, indexable HTML. */
export function LongForm({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="prose-site">
      {sections.map((section) => (
        <section key={section.id} aria-labelledby={section.id} className="mt-10 first:mt-0">
          <h2 id={section.id} className="scroll-mt-24" data-reveal>
            {section.heading}
          </h2>
          <Blocks blocks={section.blocks} />
        </section>
      ))}
    </div>
  );
}
