import { ButtonLink, ExternalButton } from "@/components/Buttons";
import { Faq, type FaqItem } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { NextSteps } from "@/components/NextSteps";
import { Section } from "@/components/Section";
import { WaveDivider } from "@/components/WaveDivider";
import { pageMetadata } from "@/lib/routes";
import { LINKS } from "@/lib/site";

export const metadata = pageMetadata("download");

const FAQ: FaqItem[] = [
  {
    q: "Do agents need a separate agency APK?",
    text: "The management flow in our guide uses the browser-based agency portal. Start with the dashboard link if your goal is to invite members or review agency reports.",
    a: (
      <p>
        The management flow in our guide uses the browser-based agency portal. Start with the dashboard link if your goal is to invite members or review agency reports.
      </p>
    ),
  },
  {
    q: "Does ChametApps.com host the Chamet APK?",
    text: "No. This page does not host a modified APK or any app file. Use the options on Chamet's official website for your device and region.",
    a: <p>No. This page does not host a modified APK or any app file. Use the options on Chamet&apos;s official website for your device and region.</p>,
  },
];

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
        <div className="grid gap-5 lg:grid-cols-2" data-reveal-stagger>
          <div className="card prose-site">
            <h2 id="which-login" className="text-2xl!">
              App Login or Agency Login?
            </h2>
            <p>Use the Chamet app for your personal profile and app activity. Use the agency portal ({LINKS.agencyDashboardLabel}) for agency invitations, reports and profile settings.</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink href="/host.html">Host Setup Guide</ButtonLink>
              <ButtonLink href="/chamet-agency-login/" variant="secondary">
                Agency Login
              </ButtonLink>
            </div>
          </div>
          <div className="card prose-site">
            <h2 id="devices" className="text-2xl!">
              Android and iPhone Download Options
            </h2>
            <p>
              Check the official website for the options currently offered for your device and region. We do not label a link “App Store” or “Google Play” unless it
              actually opens the verified listing. This page does not host a modified APK.
            </p>
          </div>
        </div>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section labelledBy="faq">
        <Faq id="faq" heading="Download Questions" items={FAQ} />
      </Section>

      <Section tone="surface">
        <NextSteps
          items={[
            { href: "/host.html", label: "Chamet Host Registration", note: "Register, sign in and set up your profile." },
            { href: "/agency.html", label: "Chamet Agency Registration", note: "Create an agent account and find invitation links." },
          ]}
        />
      </Section>
    </>
  );
}
