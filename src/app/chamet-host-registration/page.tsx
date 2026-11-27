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
import { SourcesReview } from "@/components/SourcesReview";
import { Section } from "@/components/Section";
import { Toc } from "@/components/Toc";
import { WaveDivider } from "@/components/WaveDivider";
import { hostContent } from "@/content/pages/host";
import { guideImages } from "@/lib/guides";
import { pageMetadata } from "@/lib/routes";
import { howToSchema } from "@/lib/seo";
import { LINKS, SOURCES } from "@/lib/site";

export const metadata = pageMetadata("host");

/** Host invitation link only — never the agent link. */
const REGISTER = (
  <ExternalButton href={LINKS.hostRegistration} sponsored track="host_registration">
    Open Host Registration
  </ExternalButton>
);

const FAQ: FaqItem[] = [
  {
    q: "Do I have to join an agency to host?",
    text: "Chamet's published guidance says agency membership is optional (source: Chamet host earnings page). Our service provides registration and setup assistance for people who choose agency support.",
    a: (
      <p>
        Chamet&apos;s published guidance says agency membership is optional (source:{" "}
        <a href={SOURCES.hostEarnings} target="_blank" rel="noopener">
          Chamet host earnings page
        </a>
        ). Our service provides registration and setup assistance for people who choose agency support.
      </p>
    ),
  },
  ...hostContent.faqs.map((f) => ({ q: f.q, text: f.a })),
];

export default function HostPage() {
  return (
    <>
      <Hero
        page="host"
        hero="host"
        title="Chamet Host Registration and Profile Setup"
        actions={
          <>
            {REGISTER}
          </>
        }
      >
        <p>
          Follow the registration and profile steps in order. Our example uses email registration; choose the method offered to you and use the same account when
          signing in to the app.
        </p>
      </Hero>

      <WaveDivider />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          ...howToSchema(
            "How to create a Chamet host account",
            "Register a Chamet host account, install the app, verify your email and complete the language and profile steps before going live.",
            "/chamet-host-registration/",
            [
              { name: "Register with an email or phone", text: "Open the host registration link, enter your details and complete the image check." },
              { name: "Verify the code and install the app", text: "Enter the code sent to your email, finish registration and download the Chamet app." },
              { name: "Sign in to Chamet", text: "Open the app and sign in with the same email or phone method used during registration." },
              { name: "Choose your language", text: "Select the language you speak best and confirm it." },
              { name: "Complete face verification if requested", text: "Position your face inside the frame and follow the on-screen prompts." },
              { name: "Finish your profile", text: "Add a photo, nickname, second language, tags and a short self-introduction, then open the live screen when ready." },
            ],
          ),
        }}
      />
      <Section tone="surface" labelledBy="overview">
        <QuickAnswer answer={hostContent.quickAnswer} />
        <div className="mt-6">
          <Toc sections={hostContent.sections} />
        </div>
        <div className="prose-site mt-8 max-w-3xl">
          <p data-reveal>
            Chamet&apos;s published host guidance is for adults aged 18 or older. Prepare a smartphone with a working camera and microphone, a stable internet
            connection, access to the phone number or email used for registration, a suitable profile photo and a short introduction (source:{" "}
            <a href={SOURCES.hostTraining} target="_blank" rel="noopener">
              Chamet host training page
            </a>
            ).
          </p>
          <ImageNote />
        </div>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section labelledBy="register" deco={[{ top: "4%", right: "3%", size: 100, mobile: true }, { top: "55%", left: "1%", size: 80 }]}>
        <GuideBlock
          id="register"
          heading="Register and Sign In"
          stepAnchors
          carouselLabel="Host registration and sign-in screenshots"
          images={guideImages("create-host", 1, 4)}
          steps={[
            <>
              <a href={LINKS.hostRegistration} target="_blank" rel="sponsored noopener" data-track="host_registration">
                Click on this link
              </a>{" "}
              to open host registration and enter your registration details. Complete the image check and enter the code sent to your email.
            </>,
            <>
              Finish registration. On the success screen, tap <strong>Download</strong> to install Chamet.
            </>,
            <>Open the app and sign in with the same email or phone method used during registration.</>,
            <>
              Enter the verification code sent to you and tap <strong>Next</strong>.
            </>,
          ]}
        />
      </Section>

      <Section tone="surface" labelledBy="profile">
        <GuideBlock
          id="profile"
          heading="Complete Your Profile"
          start={5}
          stepAnchors
          intro={<p>Choose your preferred language. Complete face verification if requested, then open My Profile to add your photo, nickname, languages, tags and introduction.</p>}
          carouselLabel="Host profile setup screenshots"
          images={guideImages("create-host", 5, 14)}
          steps={[
            <>
              Select the language you speak best and tap <strong>Confirm</strong>.
            </>,
            <>
              If a feature asks you to pass face verification first, tap <strong>Face Verification</strong> to begin.
            </>,
            <>Position your face inside the frame and follow the on-screen prompts.</>,
            <>
              Open the profile tab at the bottom right and tap <strong>My Profile</strong>.
            </>,
            <>
              Tap <strong>My Avatar</strong> to choose your profile photo.
            </>,
            <>Enter your preferred nickname and tap the checkmark to save.</>,
            <>Add a second language you speak, or choose None if it does not apply.</>,
            <>Select the preference, personality and profession tags that describe you.</>,
            <>Write a short self-introduction and tap the checkmark to save.</>,
            <>
              When you are ready, open the menu with the <strong>+</strong> button and tap <strong>Live</strong> to open the live screen.
            </>,
          ]}
        />
      </Section>

      <Section labelledBy="details">
        <LongForm sections={hostContent.sections} />
        <SourcesReview
          sources={[
            { href: SOURCES.hostTraining, label: "Chamet host training", usedFor: "adult (18+) host guidance and device requirements" },
            { href: SOURCES.hostEarnings, label: "Chamet host earnings", usedFor: "optional agency membership and the 10,000 Beans = US$1 conversion" },
          ]}
        />
      </Section>

      <Section tone="surface" labelledBy="faq">
        <Faq id="faq" heading="Host Registration Questions" items={FAQ} />
      </Section>

      <WaveDivider from="#180725" flip />
      <Section>
        <NextSteps
          items={[
            { href: "/chamet-host-withdrawal/", label: "Host Withdrawal Guide", note: "Find My Earning, check conditions and link MetWallet." },
            { href: "/chamet-app-download/", label: "Chamet App Download", note: "Official download destination and app versus agency login." },
          ]}
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {REGISTER}
        </div>
        <p className="mt-4 text-sm">
          Want to recruit a team instead? See <Link href="/chamet-agency-registration/">Chamet agency registration</Link>.
        </p>
      </Section>
    </>
  );
}
