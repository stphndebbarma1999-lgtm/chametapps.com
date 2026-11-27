import Link from "next/link";
import { ExternalButton } from "@/components/Buttons";
import { Faq, type FaqItem } from "@/components/Faq";
import { GuideBlock } from "@/components/GuideBlock";
import { Hero } from "@/components/Hero";
import { ImageNote } from "@/components/ImageNote";
import { JsonLd } from "@/components/JsonLd";
import { LongForm } from "@/components/LongForm";
import { NextSteps } from "@/components/NextSteps";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section } from "@/components/Section";
import { Toc } from "@/components/Toc";
import { WaveDivider } from "@/components/WaveDivider";
import { agencyContent } from "@/content/pages/agency";
import { guideImages } from "@/lib/guides";
import { pageMetadata } from "@/lib/routes";
import { howToSchema } from "@/lib/seo";
import { LINKS } from "@/lib/site";

export const metadata = pageMetadata("agency");

/** Agency (agent) invitation link only — never the host link. */
const REGISTER = (
  <ExternalButton href={LINKS.agencyRegistration} sponsored track="agency_registration">
    Open Agency Registration
  </ExternalButton>
);

const FAQ: FaqItem[] = [
  {
    q: "Is agency registration the same as downloading Chamet?",
    text: "No. Agency registration creates access to the management dashboard shown here. The Chamet app is a separate download for hosts and viewers, explained in our app download guide.",
    a: (
      <p>
        No. Agency registration creates access to the management dashboard shown here. The Chamet app is a separate download for hosts and viewers, explained in our{" "}
        <Link href="/chamet-app-download/">app download guide</Link>.
      </p>
    ),
  },
  ...agencyContent.faqs.map((f) => ({ q: f.q, text: f.a })),
];

export default function AgencyPage() {
  return (
    <>
      <Hero
        page="agency"
        hero="agency"
        title="Chamet Agency Registration"
        actions={
          <>
            {REGISTER}
          </>
        }
      >
        <p>
          Create an agency account, complete the requested contact information and learn where to find your invitation links.
        </p>
      </Hero>

      <WaveDivider />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          ...howToSchema(
            "How to create a Chamet agency account",
            "Register a Chamet agency account with a phone number, verification code and password, then find the host and agent invitation links.",
            "/chamet-agency-registration/",
            [
              { name: "Open agency registration", text: "Open the agency invitation link, select the country code and enter your phone number." },
              { name: "Complete the security check", text: "Complete the security check shown on screen and request the verification code." },
              { name: "Create a password", text: "Enter the code, create and confirm a password, then select Register." },
              { name: "Sign in to the dashboard", text: "Follow the login instructions and enter your new agency account." },
              { name: "Complete contact details", text: "Fill in the requested phone, WhatsApp and contact fields and review the visibility notice before saving." },
              { name: "Find invitation links", text: "Return to the dashboard home and locate the separate New Hosts and New Agents invitation cards." },
            ],
          ),
        }}
      />
      <Section tone="surface" labelledBy="overview">
        <QuickAnswer answer={agencyContent.quickAnswer} />
        <div className="mt-6">
          <Toc sections={agencyContent.sections} />
        </div>
        <div className="prose-site mt-8 max-w-3xl">
          <p data-reveal>
            This guide follows the six registration screens shown in our walkthrough. Prepare an active phone number, access to its verification messages,
            your agency contact details and a password you can keep secure. The detailed sections below explain each screen, the invitation cards and the
            commission information you see after login.
          </p>
          <ImageNote />
        </div>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section labelledBy="how-to" deco={[{ top: "6%", right: "3%", size: 100, mobile: true }, { bottom: "20%", left: "1%", size: 80 }]}>
        <GuideBlock
          id="how-to"
          heading="How to Create Your Agency"
          stepAnchors
          carouselLabel="Agency registration screenshots"
          images={guideImages("create-agency")}
          steps={[
            <>
              <a href={LINKS.agencyRegistration} target="_blank" rel="sponsored noopener" data-track="agency_registration">
                Click on this link
              </a>{" "}
              to open agency registration. Select your country code and enter your phone number.
            </>,
            <>Complete the security check shown on the screen and request the verification code.</>,
            <>
              Enter the code, create your password, repeat it where requested and select <strong>Register</strong>.
            </>,
            <>Follow the login instructions and enter your new agency account.</>,
            <>Complete the requested phone, WhatsApp and other contact fields. Review the visibility notice before saving.</>,
            <>
              Return to the homepage and locate the separate <strong>New Hosts</strong> and <strong>New Agents</strong> invitation cards.
            </>,
          ]}
          after={
            <>
              <p>
                <strong>Expected result:</strong> you can access your account and see its invitation links. If registration does not complete, follow the displayed
                error before continuing.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">{REGISTER}</div>
            </>
          }
        />
      </Section>

      <Section tone="surface" labelledBy="details">
        <LongForm sections={agencyContent.sections} />
      </Section>

      <WaveDivider />
      <Section labelledBy="faq">
        <Faq id="faq" heading="Agency Registration Questions" items={FAQ} />
      </Section>

      <Section tone="surface">
        <NextSteps
          items={[
            { href: "/chamet-agency-login/", label: "Explore the Agency Dashboard", note: "Sign in, share invitation links and learn each menu." },
            { href: "/chamet-agency-withdrawal/", label: "Set Up Agency Payments", note: "Bind MetWallet from My Profile." },
          ]}
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {REGISTER}
        </div>
      </Section>
    </>
  );
}
