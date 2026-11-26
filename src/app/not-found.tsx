import type { Metadata } from "next";
import Link from "next/link";
import { DecoLogos } from "@/components/DecoLogos";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | ChametApps.com" },
  description: "The page you requested does not exist on ChametApps.com.",
  robots: { index: false, follow: true },
};

const LINKS_404 = [
  { href: "/agency.html", label: "Chamet agency registration" },
  { href: "/host.html", label: "Chamet host registration" },
  { href: "/chamet-agency-login/", label: "Agency login & dashboard guide" },
  { href: "/chamet-withdrawal/", label: "Withdrawal guides" },
  { href: "/chamet-help/", label: "Help with login and payments" },
];

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden py-20" aria-labelledby="nf-title">
      <DecoLogos spots={[{ top: "10%", right: "6%", size: 140, mobile: true }, { bottom: "10%", left: "4%", size: 100 }]} />
      <div className="container-site max-w-2xl">
        <p className="eyebrow-italic mb-2">Error 404</p>
        <h1 id="nf-title" className="text-4xl sm:text-5xl">This page could not be found</h1>
        <p className="mt-4 text-lg">The address may be mistyped, or the page may have moved. These guides cover the most common tasks:</p>
        <ul className="mt-6 grid gap-3">
          {LINKS_404.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="card block font-semibold text-white no-underline hover:border-lavender/70">
                {l.label} →
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link href="/" className="btn btn-primary">Back to the homepage</Link>
        </p>
      </div>
    </section>
  );
}
