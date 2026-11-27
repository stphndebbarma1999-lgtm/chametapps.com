import { Banner } from "@/components/Banner";
import { ExternalButton } from "@/components/Buttons";
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
import { agencyWithdrawalContent } from "@/content/pages/agency-withdrawal";
import { guideImages } from "@/lib/guides";
import { pageMetadata } from "@/lib/routes";
import { LINKS } from "@/lib/site";

export const metadata = pageMetadata("agencyWithdrawal");

const FAQ: FaqItem[] = agencyWithdrawalContent.faqs.map((f) => ({ q: f.q, text: f.a }));

export default function AgencyWithdrawalPage() {
  return (
    <>
      <Hero
        page="agencyWithdrawal"
        hero="agencyWithdrawal"
        title="Chamet Agency Withdrawal and MetWallet Setup"
        actions={
          <ExternalButton href={LINKS.agencyDashboard} track="dashboard_outbound">
            Open Agency Login
          </ExternalButton>
        }
      >
        <p>
          Connect your agency account to the correct MetWallet account from My Profile. After linking, review commission payment information and wallet funds
          separately.
        </p>
      </Hero>

      <WaveDivider />
      <Section tone="surface" labelledBy="open-profile" deco={[{ top: "6%", right: "3%", size: 100, mobile: true }, { bottom: "8%", left: "1%", size: 80 }]}>
        <QuickAnswer answer={agencyWithdrawalContent.quickAnswer} />
        <div className="mt-6">
          <Toc sections={agencyWithdrawalContent.sections} />
        </div>
        <div className="mt-8">
          <ImageNote />
        </div>
        <div className="mt-6">
          <GuideBlock
            id="open-profile"
            heading="Open My Profile"
            intro={<p>Sign in to the agency portal, open the menu and select My Profile. Scroll to the MetWallet account section and choose Bind Wallet.</p>}
            carouselLabel="Agency My Profile and Bind Wallet screenshots"
            images={guideImages("agency-withdrawal", 1, 2)}
            steps={[
              <>
                Open the dashboard menu and tap <strong>My Profile</strong>.
              </>,
              <>
                Scroll down to <strong>MetWallet Account</strong> and tap <strong>Bind Wallet</strong>.
              </>,
            ]}
          />
        </div>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section labelledBy="connect">
        <GuideBlock
          id="connect"
          heading="Complete the Wallet Connection"
          start={3}
          intro={<p>Continue to MetWallet. Register or sign in using an available method, verify access and review the authorization request. Complete the account information requested during setup.</p>}
          carouselLabel="MetWallet connection screenshots for agencies"
          images={guideImages("agency-withdrawal", 3, 9)}
          steps={[
            <>
              Tap <strong>Go to MetWallet</strong>.
            </>,
            <>
              Read the terms and tick the agreement only if you agree, then choose <strong>Phone</strong> (or another available method).
            </>,
            <>
              Check your country, enter your phone number and tap <strong>Next</strong>.
            </>,
            <>
              Enter the verification code sent to your phone and tap <strong>Next</strong>.
            </>,
            <>
              Check the account and requested access. Tap <strong>Authorize</strong> if the details are correct, or <strong>Switch Account</strong> for the wrong account.
            </>,
            <>
              In MetWallet, tap <strong>Basic Level</strong> to add your details.
            </>,
            <>Fill in the required personal details, verify your email with the code, review everything and submit. Follow any additional prompts shown in your account.</>,
          ]}
        />
      </Section>

      <Section tone="surface" labelledBy="confirm">
        <GuideBlock
          id="confirm"
          heading="Confirm the Linked Account"
          start={10}
          intro={<p>Return to your agency profile. Check the masked phone or email shown under MetWallet Account. If the Withdraw From Wallet option is present, use it to continue to the wallet flow.</p>}
          carouselLabel="Linked MetWallet in agency profile screenshot"
          images={guideImages("agency-withdrawal", 10, 10)}
          steps={[
            <>
              Confirm the masked phone or email under <strong>MetWallet Account</strong>, then tap <strong>Withdraw From Wallet</strong> to continue.
            </>,
          ]}
          after={
            <p>
              <strong>Expected result:</strong> the intended MetWallet account appears in your agency profile.
            </p>
          }
        />
      </Section>

      <Section labelledBy="details">
        <LongForm sections={agencyWithdrawalContent.sections} />
      </Section>

      <Section tone="surface" labelledBy="faq">
        <Faq id="faq" heading="Agency Withdrawal Questions" items={FAQ} />
      </Section>

      <Section labelledBy="help-cta">
        <Banner kind="support" />
        <div className="mt-10">
          <NextSteps
            items={[
              { href: "/metwallet-withdrawal/", label: "MetWallet Cash Out", note: "Move an available balance to your chosen method." },
              { href: "/chamet-help/#payment-problems", label: "Payment Problems", note: "Unlinked wallet, pending, failed or not received." },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
