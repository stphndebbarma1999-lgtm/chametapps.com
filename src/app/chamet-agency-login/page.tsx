import { ButtonLink, ExternalButton } from "@/components/Buttons";
import { Faq, type FaqItem } from "@/components/Faq";
import { GuideBlock } from "@/components/GuideBlock";
import { Hero } from "@/components/Hero";
import { ImageNote } from "@/components/ImageNote";
import { LongForm } from "@/components/LongForm";
import { NextSteps } from "@/components/NextSteps";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section } from "@/components/Section";
import { Toc } from "@/components/Toc";
import { WaveDivider } from "@/components/WaveDivider";
import { dashboardContent } from "@/content/pages/dashboard";
import { guideImages } from "@/lib/guides";
import { pageMetadata } from "@/lib/routes";
import { LINKS } from "@/lib/site";

export const metadata = pageMetadata("dashboard");

const PORTAL = (
  <ExternalButton href={LINKS.agencyDashboard} track="dashboard_outbound">
    Open Agency Login
  </ExternalButton>
);

const FAQ: FaqItem[] = dashboardContent.faqs.map((f) => ({ q: f.q, text: f.a }));

export default function DashboardPage() {
  return (
    <>
      <Hero
        page="dashboard"
        hero="dashboard"
        title="Chamet Agency Login and Dashboard Guide"
        actions={
          <>
            {PORTAL}
            <ButtonLink href="/chamet-agency-registration/" variant="secondary">
              Need an Account?
            </ButtonLink>
          </>
        }
      >
        <p>Open the agency portal to sign in to your agent account. Use this page for agency login; personal Chamet app sign-in is a separate journey.</p>
        <p className="text-base">
          <strong className="text-white">{LINKS.agencyDashboardLabel}</strong> — opens the agency portal in a new tab.
        </p>
      </Hero>

      <WaveDivider />
      <Section tone="surface" labelledBy="sign-in" deco={[{ top: "8%", right: "3%", size: 100, mobile: true }, { bottom: "12%", left: "2%", size: 80 }]}>
        <QuickAnswer answer={dashboardContent.quickAnswer} />
        <div className="mt-6">
          <Toc sections={dashboardContent.sections} />
        </div>
        <div className="prose-site mt-8">
          <h2 id="sign-in" data-reveal>
            How to Sign In
          </h2>
          <p>
            Enter your agency username and password, then tap <strong>Login</strong>. If your screen offers <strong>Login via Phone Number</strong>, you can use that
            option instead.
          </p>
          <p>
            Select <strong>Forget My Password</strong> if you need to recover access. Complete recovery on the portal itself. ChametApps.com does not need your password
            or verification code.
          </p>
          <ImageNote />
        </div>
        <div className="mt-10">
          <GuideBlock
            id="walkthrough"
            level={3}
            heading="Dashboard walkthrough"
            carouselLabel="Agency login and dashboard screenshots"
            images={guideImages("dashboard")}
            steps={[
              <>
                <a href={LINKS.agencyDashboard} target="_blank" rel="noopener" data-track="dashboard_outbound">
                  Click on this link
                </a>{" "}
                to open the agency dashboard. Log in with your agency username and password, or use the phone login option where offered.
              </>,
              <>
                On the homepage, use the <strong>Share</strong> button on the New Hosts or New Agents invitation card and check your commission ratio.
              </>,
              <>Open the menu (☰) at the top left to reach each dashboard section.</>,
            ]}
          />
        </div>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section labelledBy="dashboard-details">
        <LongForm sections={dashboardContent.sections} />
      </Section>

      <Section tone="surface" labelledBy="faq">
        <Faq id="faq" heading="Agency Login Questions" items={FAQ} />
      </Section>

      <WaveDivider />
      <Section tone="surface">
        <NextSteps
          items={[
            { href: "/chamet-agency-withdrawal/", label: "Link Agency MetWallet", note: "Bind MetWallet from My Profile." },
            { href: "/chamet-help/", label: "Login and Registration Help", note: "Missing codes, blank pages and unlisted invitees." },
          ]}
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {PORTAL}
        </div>
      </Section>
    </>
  );
}
