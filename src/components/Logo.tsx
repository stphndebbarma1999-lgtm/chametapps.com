import Link from "next/link";

/** Header brand: the Chamet app emblem (derived from the supplied app screenshot) + site name. */
export function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5 text-white no-underline" aria-label="ChametApps.com home">
      {/* eslint-disable-next-line @next/next/no-img-element -- tiny inline SVG, no optimisation needed */}
      <img src="/images/brand/chamet-app-icon.svg" alt="" width={36} height={36} className="h-9 w-9 drop-shadow-[0_0_10px_rgba(197,132,255,0.55)]" />
      <span className="text-[1.05rem] font-extrabold tracking-tight sm:text-lg">
        Chamet<span className="text-lavender">Apps</span>.com
      </span>
    </Link>
  );
}
