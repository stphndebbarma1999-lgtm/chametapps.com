import Link from "next/link";
import { Banner } from "@/components/Banner";
import { ButtonLink, ExternalButton, WhatsAppButton } from "@/components/Buttons";
import { Faq, type FaqItem } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { WaveDivider } from "@/components/WaveDivider";
import { pageMetadata } from "@/lib/routes";
import { LINKS, WA } from "@/lib/site";

export const metadata = pageMetadata("home");

const GUIDES = [
  { href: "/agency.html", title: "Create an agency", text: "Six illustrated steps from registration to your host and agent invitation links." },
  { href: "/host.html", title: "Set up a host account", text: "Fourteen steps covering registration, sign-in, verification and profile preparation." },
  { href: "/chamet-agency-login/", title: "Use the agency dashboard", text: "Sign in, find your invitation links and learn what each menu does." },
  { href: "/chamet-agency-withdrawal/", title: "Prepare agency payments", text: "Connect MetWallet from My Profile in your agency dashboard." },
  { href: "/chamet-host-withdrawal/", title: "Withdraw host earnings", text: "Open My Earning, check the conditions and complete the wallet-linking steps." },
  { href: "/metwallet-withdrawal/", title: "Cash out from MetWallet", text: "Add a payment method, review the amount and fee, and confirm your request." },
];

const STAGES = [
  { t: "Account linked", d: "The wallet connection is present." },
  { t: "Balance available", d: "Your account shows funds that can be withdrawn." },
  { t: "Request submitted", d: "A withdrawal has been sent for processing." },
  { t: "Money received", d: "The destination account confirms the credit." },
];

const FAQ: FaqItem[] = [
  {
    q: "Should I register as a host or an agent?",
    text: "Choose host registration to create your personal profile. Choose agency registration if you want to recruit and support a team. The two buttons lead to different registration journeys.",
    a: (
      <p>
        Choose <Link href="/host.html">host registration</Link> to create your personal profile. Choose <Link href="/agency.html">agency registration</Link> if you want to
        recruit and support a team. The two buttons lead to different registration journeys.
      </p>
    ),
  },
  {
    q: "Where is Chamet agency login?",
    text: `The agency portal is ${LINKS.agencyDashboardLabel}. Our login guide explains the sign-in screen and the menu you see afterward.`,
    a: (
      <p>
        The agency portal is <strong>{LINKS.agencyDashboardLabel}</strong>. Our <Link href="/chamet-agency-login/">agency login and dashboard guide</Link> explains the
        sign-in screen and the menu you see afterward.
      </p>
    ),
  },
  {
    q: "Can I get help before registering?",
    text: "Yes. Message ChametApps.com on WhatsApp and tell us whether you want to join as a host or an agency.",
    a: <p>Yes. Message ChametApps.com on WhatsApp and tell us whether you want to join as a host or an agency.</p>,
  },
  {
    q: "Can the agency promise a fixed income?",
    text: "No. Account activity and applicable rules determine earnings. A commission percentage or example balance is not a guaranteed salary.",
    a: <p>No. Account activity and applicable rules determine earnings. A commission percentage or example balance is not a guaranteed salary.</p>,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        page="home"
        hero="home"
        accent="Registration guides for new hosts and agents"
        title="Chamet Agency — Join as an Agency or Host"
        actions={
          <>
            <ButtonLink href="/agency.html">Join as Agency</ButtonLink>
            <ButtonLink href="/host.html" variant="secondary">
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
              <ButtonLink href="/agency.html">Create Your Agency</ButtonLink>
            </div>
          </article>
          <article className="card flex flex-col">
            <h3 className="text-2xl">Join as a host</h3>
            <p className="mt-3 flex-1">
              Create your personal account and prepare your profile. Follow our illustrated guide for registration, sign-in, language selection and profile setup.
            </p>
            <div className="mt-5">
              <ButtonLink href="/host.html">Create Your Host Account</ButtonLink>
            </div>
          </article>
        </div>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section labelledBy="what-is">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="prose-site">
            <h2 id="what-is" data-reveal>
              What Is Chamet?
            </h2>
            <p>
              Chamet is a video chat and live-streaming platform. Hosts and agencies use different account journeys: hosts use the app, while agents manage
              invitations and reports through the agency portal.
            </p>
            <p>
              If you are here to install the app, open our <Link href="/chamet-app-download/">Chamet app download guide</Link>. If you already manage an agency, go
              directly to <Link href="/chamet-agency-login/">agency login</Link>.
            </p>
          </div>
          <aside className="card" aria-labelledby="dash-shortcut" data-reveal>
            <h3 id="dash-shortcut" className="text-xl">
              Agency dashboard shortcut
            </h3>
            <p className="mt-2">
              The agency portal opens at <strong className="text-white">{LINKS.agencyDashboardLabel}</strong>. Sign in on the portal itself — ChametApps.com never asks
              for your password.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <ExternalButton href={LINKS.agencyDashboard} track="dashboard_outbound">
                Open Agency Login
              </ExternalButton>
              <ButtonLink href="/chamet-agency-login/" variant="secondary">
                Dashboard Guide
              </ButtonLink>
            </div>
          </aside>
        </div>
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

      <Section labelledBy="stages">
        <SectionHeading id="stages" accent="Linked, submitted and received are different milestones">
          Know Where You Are in the Payment Process
        </SectionHeading>
        <p className="max-w-3xl" data-reveal>
          A linked wallet means your accounts are connected. A submitted withdrawal means a request has been sent. Payment receipt is the final stage. Our withdrawal
          guides explain what to check at each point.
        </p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
          {STAGES.map((s, i) => (
            <li key={s.t} className="card">
              <span className="text-sm font-bold tracking-wider text-pink uppercase">Stage {i + 1}</span>
              <h3 className="mt-1 text-lg">{s.t}</h3>
              <p className="mt-1">{s.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <ButtonLink href="/chamet-withdrawal/">Choose Your Withdrawal Guide</ButtonLink>
        </div>
      </Section>

      <WaveDivider />
      <Section tone="surface" labelledBy="about-snippet">
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

      <Section labelledBy="faq">
        <Faq id="faq" heading="Common Questions" items={FAQ} />
      </Section>

      <Section tone="surface" labelledBy="cta" deco={[{ top: "8%", left: "3%", size: 90, mobile: true }, { bottom: "10%", right: "3%", size: 120 }]}>
        <Banner kind="recruitment" />
        <div className="mt-8 max-w-2xl">
          <h2 id="cta" className="text-[1.75rem] sm:text-[2.2rem]" data-reveal>
            Ready to Get Started?
          </h2>
          <p className="mt-3">Choose your role and follow the corresponding guide.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/agency.html">Join as Agency</ButtonLink>
            <ButtonLink href="/host.html">Join as Host</ButtonLink>
            <WhatsAppButton message={WA.general}>Ask on WhatsApp</WhatsAppButton>
          </div>
        </div>
      </Section>
    </>
  );
}
