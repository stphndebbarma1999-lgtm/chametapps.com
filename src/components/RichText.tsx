import Link from "next/link";
import type { ReactNode } from "react";

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
const LINK = /^\[([^\]]+)\]\(([^)]+)\)$/;

/** Renders **bold** and [label](href) inside plain strings so long-form copy can stay in data files. */
export function RichText({ text }: { text: string }) {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((part, i): ReactNode => {
        if (!part) return null;
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        const link = LINK.exec(part);
        if (link) {
          const [, label, href] = link;
          if (href.startsWith("/") || href.startsWith("#")) {
            return (
              <Link key={i} href={href}>
                {label}
              </Link>
            );
          }
          return (
            <a key={i} href={href} target="_blank" rel="noopener">
              {label}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
