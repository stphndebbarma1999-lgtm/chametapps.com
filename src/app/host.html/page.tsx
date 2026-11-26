import Link from "next/link";
import { ExternalButton } from "@/components/Buttons";
import { Faq, type FaqItem } from "@/components/Faq";
import { GuideBlock } from "@/components/GuideBlock";
import { Hero } from "@/components/Hero";
import { ImageNote } from "@/components/ImageNote";
import { NextSteps } from "@/components/NextSteps";
import { Section } from "@/components/Section";
import { WaveDivider } from "@/components/WaveDivider";
import { guideImages } from "@/lib/guides";
import { pageMetadata } from "@/lib/routes";
import { LINKS } from "@/lib/site";

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
    text: "Chamet's published guidance says agency membership is optional. Our service provides registration and setup assistance for people who choose agency support.",
    a: (
      <p>
        Chamet&apos;s published guidance says agency membership is optional. Our service provides registration and setup assistance for people who choose agency
        support.
      </p>
    ),
  },
  {
    q: "Why does my screen look different?",
    text: "Menu names and available steps can vary with the app version and account. Follow the current instruction on your screen; the guide helps you recognize the overall process.",
    a: (
      <p>
        Menu names and available steps can vary with the app version and account. Follow the current instruction on your screen; the guide helps you recognize the
        overall process.
      </p>
    ),
  },
  {
    q: "Is host salary a fixed monthly amount?",
    text: "This guide uses “earnings” because the balance depends on eligible activity. A screenshot balance is an example, not a monthly salary promise.",
    a: <p>This guide uses “earnings” because the balance depends on eligible activity. A screenshot balance is an example, not a monthly salary promise.</p>,
  },
];

export default function HostPage() {
  return (
    <>
      <Hero
        page="host"
        hero="host"
        accent="Fourteen illustrated steps"
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
      <Section tone="surface" labelledBy="prepare">
        <div className="prose-site">
          <h2 id="prepare" data-reveal>
            Prepare Your Account Details
          </h2>
          <p>
            Use a phone number or email address you can access. Have a suitable profile photo and a short introduction ready. Follow the age and account requirements
            displayed by Chamet.
          </p>
          <ImageNote />
        </div>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section labelledBy="register" deco={[{ top: "4%", right: "3%", size: 100, mobile: true }, { top: "55%", left: "1%", size: 80 }]}>
        <GuideBlock
          id="register"
          heading="Register and Sign In"
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
          after={
            <>
              <p>
                A useful introduction can be simple: “I enjoy music and everyday conversation. I speak Hindi and English.” Write your own description using the languages
                and interests that apply to you.
              </p>
              <p>
                <strong>Expected result:</strong> you can access your account and review your saved profile. Check the app for the features currently available to you.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">{REGISTER}</div>
            </>
          }
        />
      </Section>

      <Section labelledBy="beans">
        <div className="card prose-site max-w-3xl" data-reveal>
          <h2 id="beans" className="text-2xl!">
            Chamet Beans to Dollars
          </h2>
          <p>
            On Chamet, 10,000 Beans equal US$1. A simple conversion is Beans divided by 10,000. This dollar value is not a guaranteed net
            bank receipt.
          </p>
          <p>
            For India, check the exchange rate, fee and final payout quote displayed by your withdrawal provider. Do not assume a fixed rupee value for every dollar.
          </p>
        </div>
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
          Want to recruit a team instead? See <Link href="/agency.html">Chamet agency registration</Link>.
        </p>
      </Section>
    </>
  );
}
