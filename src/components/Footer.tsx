import Link from "next/link";
import { LINKS } from "@/lib/site";
import { ExternalIcon } from "./Buttons";
import { Logo } from "./Logo";

const GUIDES = [
  { href: "/agency.html", label: "Agency registration" },
  { href: "/host.html", label: "Host registration" },
  { href: "/chamet-agency-login/", label: "Agency login & dashboard" },
  { href: "/chamet-withdrawal/", label: "Withdrawal overview" },
  { href: "/chamet-host-withdrawal/", label: "Host withdrawal" },
  { href: "/chamet-agency-withdrawal/", label: "Agency withdrawal" },
  { href: "/metwallet-withdrawal/", label: "MetWallet cash out" },
  { href: "/chamet-help/", label: "Help & payment problems" },
];
const SITE_LINKS = [
  { href: "/chamet-app-download/", label: "App download" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
  { href: "/privacy/", label: "Privacy policy" },
  { href: "/terms/", label: "Terms of use" },
  { href: "/disclaimer/", label: "Disclaimer" },
];

export function Footer() {
  const linkCls = "text-body no-underline hover:text-white hover:underline underline-offset-4";
  return (
    <footer className="relative border-t border-lavender/15 bg-surface pb-24 lg:pb-10" data-footer>
      <div className="container-site grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm">
            ChametApps.com is a certified Chamet agency website providing registration and onboarding guidance. It is not the official Chamet
            website. Registration links include agency referrals. Earnings depend on eligible activity and applicable rules.
          </p>
        </div>
        <nav aria-label="Guides">
          <h2 className="mb-3 text-base">Guides</h2>
          <ul className="space-y-2 text-sm">
            {GUIDES.map((g) => (
              <li key={g.href}>
                <Link href={g.href} className={linkCls}>
                  {g.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Site information">
          <h2 className="mb-3 text-base">ChametApps.com</h2>
          <ul className="space-y-2 text-sm">
            {SITE_LINKS.map((g) => (
              <li key={g.href}>
                <Link href={g.href} className={linkCls}>
                  {g.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-5">
          <div>
            <h2 className="mb-3 text-base">Official platform links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={LINKS.officialChamet} target="_blank" rel="noopener" className={`${linkCls} inline-flex items-center gap-1.5`} data-track="official_chamet">
                  Official Chamet website ({LINKS.officialChametLabel}) <ExternalIcon />
                </a>
              </li>
              <li>
                <a href={LINKS.agencyDashboard} target="_blank" rel="noopener" className={`${linkCls} inline-flex items-center gap-1.5`} data-track="dashboard_outbound">
                  Chamet agency portal ({LINKS.agencyDashboardLabel}) <ExternalIcon />
                </a>
              </li>
              <li>
                <a href={LINKS.whatsappChannel} target="_blank" rel="noopener" className={`${linkCls} inline-flex items-center gap-1.5`} data-track="whatsapp_channel_follow">
                  WhatsApp channel: {LINKS.whatsappChannelName} <ExternalIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-site border-t border-lavender/15 pt-6 text-xs text-body/90">
        <p>© {new Date().getFullYear()} ChametApps.com. Chamet and MetWallet names and logos belong to their respective owners. Promotional images on this site are generated illustrations, not real staff or customers.</p>
      </div>
    </footer>
  );
}
