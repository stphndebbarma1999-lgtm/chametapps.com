import { ButtonLink, ExternalButton } from "@/components/Buttons";
import { Faq, type FaqItem } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { LongForm } from "@/components/LongForm";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section } from "@/components/Section";
import { Toc } from "@/components/Toc";
import { WaveDivider } from "@/components/WaveDivider";
import { aboutContent } from "@/content/pages/about";
import { pageMetadata } from "@/lib/routes";
import { LINKS } from "@/lib/site";

export const metadata = pageMetadata("about");

const FAQ: FaqItem[] = aboutContent.faqs.map((f) => ({ q: f.q, text: f.a }));

export default function AboutPage() {
  return (
    <>
      <Hero page="about" hero="aboutContact" title="About ChametApps.com">
        <p>
          ChametApps.com is a certified Chamet agency website providing agency and host registration guidance. Our illustrated tutorials cover account setup, the agency
          dashboard, wallet linking and cash out.
        </p>
      </Hero>

      <WaveDivider />
      <Section tone="surface" labelledBy="what-we-do" deco={[{ top: "10%", right: "3%", size: 100, mobile: true }, { bottom: "10%", left: "2%", size: 80 }]}>
        <QuickAnswer answer={aboutContent.quickAnswer} />
        <div className="mt-6">
          <Toc sections={aboutContent.sections} />
        </div>
        <div className="prose-site mt-8 max-w-3xl">
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
        </div>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section labelledBy="details">
        <LongForm sections={aboutContent.sections} />
      </Section>

      <Section tone="surface" labelledBy="relationship">
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
          <ExternalButton href={LINKS.whatsapp} track="whatsapp_about">
            Chat on WhatsApp
          </ExternalButton>
        </div>
      </Section>

      <Section labelledBy="faq">
        <Faq id="faq" heading="About ChametApps.com Questions" items={FAQ} />
      </Section>
    </>
  );
}
