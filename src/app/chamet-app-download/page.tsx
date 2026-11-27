import { ButtonLink, ExternalButton } from "@/components/Buttons";
import { Faq, type FaqItem } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { LongForm } from "@/components/LongForm";
import { NextSteps } from "@/components/NextSteps";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section } from "@/components/Section";
import { Toc } from "@/components/Toc";
import { WaveDivider } from "@/components/WaveDivider";
import { downloadContent } from "@/content/pages/download";
import { pageMetadata } from "@/lib/routes";
import { LINKS } from "@/lib/site";

export const metadata = pageMetadata("download");

const FAQ: FaqItem[] = downloadContent.faqs.map((f) => ({ q: f.q, text: f.a }));

export default function DownloadPage() {
  return (
    <>
      <Hero
        page="download"
        hero="download"
        title="Chamet App Download and Login"
        actions={
          <ExternalButton href={LINKS.officialChamet} track="official_chamet">
            Visit Official Chamet Website
          </ExternalButton>
        }
      >
        <p>
          Use Chamet&apos;s official website for current download options. If you registered through a host invitation, follow the onboarding instructions and sign in
          with the same account details afterward.
        </p>
      </Hero>

      <WaveDivider />
      <Section tone="surface" labelledBy="which-login" deco={[{ top: "10%", right: "3%", size: 100, mobile: true }, { bottom: "10%", left: "2%", size: 80 }]}>
        <QuickAnswer answer={downloadContent.quickAnswer} />
        <div className="mt-6">
          <Toc sections={downloadContent.sections} />
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2" data-reveal-stagger>
          <div className="card prose-site">
            <h2 id="which-login" className="text-2xl!">
              App Login or Agency Login?
            </h2>
            <p>Use the Chamet app for your personal profile and app activity. Use the agency portal ({LINKS.agencyDashboardLabel}) for agency invitations, reports and profile settings.</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink href="/chamet-host-registration/">Host Setup Guide</ButtonLink>
              <ButtonLink href="/chamet-agency-login/" variant="secondary">
                Agency Login
              </ButtonLink>
            </div>
          </div>
          <div className="card prose-site">
            <h2 id="devices" className="text-2xl!">
              Download Options for Your Device
            </h2>
            <p>
              Open Chamet&apos;s official website and choose the download option available for your device and region. After installation, sign in using the same account
              details used during registration. This page does not host an APK or any app file.
            </p>
          </div>
        </div>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section labelledBy="details">
        <LongForm sections={downloadContent.sections} />
      </Section>

      <Section tone="surface" labelledBy="faq">
        <Faq id="faq" heading="Download Questions" items={FAQ} />
      </Section>

      <Section>
        <NextSteps
          items={[
            { href: "/chamet-host-registration/", label: "Chamet Host Registration", note: "Register, sign in and set up your profile." },
            { href: "/chamet-agency-registration/", label: "Chamet Agency Registration", note: "Create an agent account and find invitation links." },
          ]}
        />
      </Section>
    </>
  );
}
