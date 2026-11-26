import Link from "next/link";
import { ButtonLink, WhatsAppButton } from "@/components/Buttons";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { WaveDivider } from "@/components/WaveDivider";
import { pageMetadata } from "@/lib/routes";
import { LINKS, WA } from "@/lib/site";

export const metadata = pageMetadata("about");

export default function AboutPage() {
  return (
    <>
      <Hero page="about" hero="aboutContact" accent="Agency guidance, explained plainly" title="About ChametApps.com">
        <p>
          ChametApps.com is a certified Chamet agency website providing agency and host registration guidance. Our illustrated tutorials cover account setup, the agency
          dashboard, wallet linking and cash out.
        </p>
      </Hero>

      <WaveDivider />
      <Section tone="surface" labelledBy="what-we-do" deco={[{ top: "10%", right: "3%", size: 100, mobile: true }, { bottom: "10%", left: "2%", size: 80 }]}>
        <div className="prose-site max-w-3xl">
          <h2 id="what-we-do" data-reveal>
            What We Do
          </h2>
          <p>
            We help readers identify their next step and understand the screens shown in our guides. Our registration links are agency referral links: when you register
            through them, you join with our agency.
          </p>
          <p>
            The “certified Chamet agency” description is provided by the site owner. We do not display certificate numbers or official badges, and we do not operate the
            Chamet platform.
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <Link href="/agency.html">Agency registration</Link> and <Link href="/host.html">host registration</Link> walkthroughs
            </li>
            <li>
              The <Link href="/chamet-agency-login/">agency login and dashboard guide</Link>
            </li>
            <li>
              <Link href="/chamet-withdrawal/">Withdrawal guides</Link> for hosts, agencies and MetWallet cash out
            </li>
            <li>
              <Link href="/chamet-help/">Help tables</Link> for login, registration and payment problems
            </li>
          </ul>
        </div>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section labelledBy="relationship">
        <div className="card prose-site max-w-3xl" data-reveal>
          <h2 id="relationship" className="text-2xl!">
            Our Relationship With Chamet
          </h2>
          <p>
            ChametApps.com is not Chamet&apos;s official platform website. Chamet manages its platform and account rules. MetWallet and the selected payment providers manage
            their respective wallet and payout services.
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              Official Chamet website:{" "}
              <a href={LINKS.officialChamet} target="_blank" rel="noopener">
                {LINKS.officialChametLabel}
              </a>
            </li>
            <li>
              Agency portal:{" "}
              <a href={LINKS.agencyDashboard} target="_blank" rel="noopener" data-track="dashboard_outbound">
                {LINKS.agencyDashboardLabel}
              </a>
            </li>
          </ul>
          <p>
            The portraits in our page banners are generated promotional illustrations. They are not our staff, hosts or customers, and they are not testimonials.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact/">Contact ChametApps.com</ButtonLink>
          <WhatsAppButton message={WA.general}>Chat on WhatsApp</WhatsAppButton>
        </div>
      </Section>
    </>
  );
}
