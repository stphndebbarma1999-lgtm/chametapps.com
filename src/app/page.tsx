import Link from "next/link";
import { Banner } from "@/components/Banner";
import { ButtonLink, ExternalButton } from "@/components/Buttons";
import { Faq, type FaqItem } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { LongForm } from "@/components/LongForm";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section, SectionHeading } from "@/components/Section";
import { Toc } from "@/components/Toc";
import { WaveDivider } from "@/components/WaveDivider";
import { homeContent } from "@/content/pages/home";
import { pageMetadata } from "@/lib/routes";
import { LINKS } from "@/lib/site";

export const metadata = pageMetadata("home");

const GUIDES = [
  { href: "/chamet-agency-registration/", title: "Create an agency", text: "Six illustrated steps from phone verification to your host and agent invitation links." },
  { href: "/chamet-host-registration/", title: "Set up a host account", text: "Registration, sign-in, verification and profile preparation, step by step." },
  { href: "/chamet-agency-login/", title: "Use the agency dashboard", text: "Sign in, find your invitation links and learn what each menu does." },
  { href: "/chamet-agency-withdrawal/", title: "Prepare agency payments", text: "Connect MetWallet from My Profile in your agency dashboard." },
  { href: "/chamet-host-withdrawal/", title: "Withdraw host earnings", text: "Open My Earning, check the conditions and complete the wallet-linking steps." },
  { href: "/metwallet-withdrawal/", title: "Cash out from MetWallet", text: "Add a payment method, review the amount and fee, and confirm your request." },
];

const FAQ: FaqItem[] = homeContent.faqs.map((f) => ({ q: f.q, text: f.a }));

export default function HomePage() {
  return (
    <>
      <Hero
        page="home"
        hero="home"
        accent="Chamet App Certified Agency"
        title="Chamet Agency — Join as an Agency or Host"
        actions={
          <>
            <ButtonLink href="/chamet-agency-registration/">Join as Agency</ButtonLink>
            <ButtonLink href="/chamet-host-registration/" variant="secondary">
              Join as Host
            </ButtonLink>
          </>
        }
      >
        <p>
          Register your account, follow the setup steps and find the right guide for your next action. ChametApps.com helps new hosts and agents understand
          registration, dashboard use and MetWallet withdrawals.
        </p>
        <p className="text-base">
          Already a member? <Link href="/chamet-agency-login/">Agency login guide</Link> · <Link href="/chamet-withdrawal/">Withdrawal help</Link>
        </p>
      </Hero>

      <WaveDivider />
      <Section tone="surface" labelledBy="choose" deco={[{ top: "10%", right: "3%", size: 110, mobile: true }, { bottom: "6%", left: "2%", size: 80 }]}>
        <SectionHeading id="choose" accent="Two different journeys">
          Choose Your Chamet Registration
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2" data-reveal-stagger>
          <article className="card flex flex-col">
            <h3 className="text-2xl">Join as an agency</h3>
            <p className="mt-3 flex-1">
              Build and support a team. Create an agent account, find your host and agent invitation links, and use the dashboard to review the activity and
              commission information available to your account.
            </p>
            <div className="mt-5">
              <ButtonLink href="/chamet-agency-registration/">Create Your Agency</ButtonLink>
            </div>
          </article>
          <article className="card flex flex-col">
            <h3 className="text-2xl">Join as a host</h3>
            <p className="mt-3 flex-1">
              Create your personal account and prepare your profile. Follow our illustrated guide for registration, sign-in, language selection and profile setup.
            </p>
            <div className="mt-5">
              <ButtonLink href="/chamet-host-registration/">Create Your Host Account</ButtonLink>
            </div>
          </article>
        </div>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section labelledBy="guide-content">
        <div className="space-y-6">
          <QuickAnswer answer={homeContent.quickAnswer} />
          <Toc sections={homeContent.sections} />
        </div>
        <LongForm sections={homeContent.sections} />
      </Section>

      <Section tone="surface" labelledBy="guides" deco={[{ top: "4%", left: "45%", size: 70 }, { bottom: "8%", right: "4%", size: 100, mobile: true }]}>
        <SectionHeading id="guides" accent="Every step explained, with screenshots">
          Step-by-Step Process to Get Started
        </SectionHeading>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
          {GUIDES.map((g, i) => (
            <li key={g.href}>
              <Link href={g.href} className="card group flex h-full flex-col no-underline hover:border-lavender/70">
                <span className="mb-3 grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-pink-deep font-extrabold text-white" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="text-lg font-bold text-white">{g.title}</span>
                <span className="mt-2 text-body">{g.text}</span>
                <span className="mt-4 font-semibold text-lavender" aria-hidden="true">
                  Step-by-step process <span className="inline-block transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <WaveDivider />
      <Section labelledBy="about-snippet">
        <div className="prose-site max-w-3xl">
          <h2 id="about-snippet" data-reveal>
            About ChametApps.com
          </h2>
          <p>
            ChametApps.com is a certified Chamet agency website offering agency and host registration guidance. We provide illustrated instructions and help you find
            the relevant setup steps.
          </p>
          <p>
            We are not the official Chamet platform website. Visit{" "}
            <a href={LINKS.officialChamet} target="_blank" rel="noopener">
              {LINKS.officialChametLabel}
            </a>{" "}
            for official platform information, or{" "}
            <a href={LINKS.agencyDashboard} target="_blank" rel="noopener" data-track="dashboard_outbound">
              {LINKS.agencyDashboardLabel}
            </a>{" "}
            for the agency portal. <Link href="/about/">More about ChametApps.com</Link>.
          </p>
        </div>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section tone="surface" labelledBy="faq">
        <Faq id="faq" heading="Common Questions" items={FAQ} />
      </Section>

      <Section labelledBy="cta" deco={[{ top: "8%", left: "3%", size: 90, mobile: true }, { bottom: "10%", right: "3%", size: 120 }]}>
        <Banner kind="recruitment" />
        <div className="mt-8 max-w-2xl">
          <h2 id="cta" className="text-[1.75rem] sm:text-[2.2rem]" data-reveal>
            Ready to Get Started?
          </h2>
          <p className="mt-3">Choose your role and follow the corresponding guide.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/chamet-agency-registration/">Join as Agency</ButtonLink>
            <ButtonLink href="/chamet-host-registration/">Join as Host</ButtonLink>
            <ExternalButton href={LINKS.whatsappChat} variant="secondary" track="whatsapp_enquiry">
              Ask on WhatsApp
            </ExternalButton>
          </div>
        </div>
      </Section>
    </>
  );
}
