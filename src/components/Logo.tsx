import Link from "next/link";

/**
 * Brand link: the Chamet app emblem (derived from the supplied app screenshot) + a name.
 * Header uses "Chamet Agency"; the footer keeps the site name "ChametApps.com".
 */
export function Logo({ variant = "site" }: { variant?: "site" | "agency" }) {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-2.5 text-white no-underline"
      aria-label={variant === "agency" ? "Chamet Agency, ChametApps.com home" : "ChametApps.com home"}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- tiny inline SVG, no optimisation needed */}
      <img src="/images/brand/chamet-app-icon.svg" alt="" width={36} height={36} className="h-9 w-9 drop-shadow-[0_0_10px_rgba(197,132,255,0.55)]" />
      <span className="text-[1.05rem] font-extrabold tracking-tight sm:text-lg">
        {variant === "agency" ? (
          <>
            Chamet <span className="text-lavender">Agency</span>
          </>
        ) : (
          <>
            Chamet<span className="text-lavender">Apps</span>.com
          </>
        )}
      </span>
    </Link>
  );
}
