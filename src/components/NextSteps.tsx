import Link from "next/link";

/** "Next step" cards with descriptive internal anchor text. */
export function NextSteps({ items, heading = "Your next step" }: { heading?: string; items: { href: string; label: string; note: string }[] }) {
  return (
    <nav aria-label={heading}>
      <h2 className="mb-5 text-[1.5rem] sm:text-[1.9rem]" data-reveal>
        {heading}
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2" data-reveal-stagger>
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="card group flex h-full items-start justify-between gap-4 no-underline hover:border-lavender/70">
              <span>
                <span className="block text-lg font-bold text-white">{i.label}</span>
                <span className="mt-1 block text-body">{i.note}</span>
              </span>
              <span aria-hidden="true" className="mt-1 text-xl text-lavender transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
