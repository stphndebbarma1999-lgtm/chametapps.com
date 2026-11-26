import { Banner } from "@/components/Banner";
import { WhatsAppButton } from "@/components/Buttons";
import { GuideBlock } from "@/components/GuideBlock";
import { Hero } from "@/components/Hero";
import { ImageNote } from "@/components/ImageNote";
import { NextSteps } from "@/components/NextSteps";
import { Section } from "@/components/Section";
import { WaveDivider } from "@/components/WaveDivider";
import { guideImages } from "@/lib/guides";
import { pageMetadata } from "@/lib/routes";
import { WA } from "@/lib/site";

export const metadata = pageMetadata("hostWithdrawal");

export default function HostWithdrawalPage() {
  return (
    <>
      <Hero page="hostWithdrawal" hero="hostWithdrawal" accent="Profile → My Earning → Withdraw → MetWallet" title="How to Withdraw Money From Chamet as a Host">
        <p>
          Start in your Chamet profile. Open your earnings, review the withdrawal conditions and link the correct MetWallet account before submitting an eligible
          request.
        </p>
      </Hero>

      <WaveDivider />
      <Section tone="surface" labelledBy="overview">
        <div className="prose-site">
          <h2 id="overview" data-reveal>
            The Host Withdrawal Journey
          </h2>
          <p>
            The journey has three parts: four screens inside Chamet, a short MetWallet linking sub-guide, and a final check back in Chamet. The MetWallet screenshots keep
            their own 1–5 numbering because the same wallet steps are used in other guides.
          </p>
          <ImageNote />
        </div>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section labelledBy="part-1" deco={[{ top: "5%", right: "3%", size: 100, mobile: true }, { top: "60%", left: "1%", size: 80 }]}>
        <GuideBlock
          id="part-1"
          heading="Part 1: Open Your Earnings and Check the Conditions"
          carouselLabel="Chamet earnings and withdrawal screenshots"
          images={guideImages("host-withdrawal", 1, 4)}
          steps={[
            <>Tap the bottom-right profile icon in the Chamet app.</>,
            <>
              Select <strong>My Earning</strong>. Your screen may use a different earnings label; follow the current menu shown in your account.
            </>,
            <>
              Tap <strong>Withdraw</strong> beside your withdrawable money.
            </>,
            <>
              Review the phone, face-verification and MetWallet conditions shown on the withdrawal page. Tap the <strong>Metwallet</strong> condition to begin linking if it
              is still incomplete.
            </>,
          ]}
        />
      </Section>

      <Section tone="surface" labelledBy="part-2">
        <GuideBlock
          id="part-2"
          heading="Part 2: Link MetWallet (five-step sub-guide)"
          intro={<p>Continue to the wallet, select a sign-in method, enter your details and verify the code. Review the account displayed before authorizing the link.</p>}
          carouselLabel="MetWallet linking screenshots"
          images={guideImages("host-withdrawal", 5, 9)}
          steps={[
            <>
              Tap <strong>Go to MetWallet</strong>.
            </>,
            <>
              Read the terms and tick the agreement only if you agree, then choose <strong>Phone</strong> (or another available sign-in method).
            </>,
            <>
              Check your country, enter your phone number and tap <strong>Next</strong>.
            </>,
            <>
              Enter the verification code you receive and tap <strong>Next</strong>.
            </>,
            <>
              Check the account and the access requested. Tap <strong>Authorize</strong> if the details are correct, or <strong>Switch Account</strong> if it is the wrong
              account.
            </>,
          ]}
        />
      </Section>

      <Section labelledBy="part-3">
        <GuideBlock
          id="part-3"
          heading="Part 3: Return to Chamet and Withdraw"
          carouselLabel="Linked MetWallet withdrawal screenshot"
          images={guideImages("host-withdrawal", 10, 10)}
          steps={[
            <>
              Check that MetWallet is marked as linked — in our example the condition changes to a green check. Review your withdrawable balance and tap{" "}
              <strong>Withdraw</strong> to follow the remaining prompts.
            </>,
          ]}
          after={
            <p>
              <strong>Expected result:</strong> confirm the request&apos;s status in your account. The green wallet check confirms linking, not receipt of a bank payment.
            </p>
          }
        />
      </Section>

      <Section tone="surface" labelledBy="no-button">
        <div className="card prose-site max-w-3xl" data-reveal>
          <h2 id="no-button" className="text-2xl!">
            No Withdraw Button or an Incomplete Condition?
          </h2>
          <p>
            Check the balance actually available for withdrawal, complete the conditions listed on the screen, and read any error message. Do not use an example
            screenshot&apos;s balance to judge your own eligibility.
          </p>
        </div>
      </Section>

      <Section labelledBy="help-cta">
        <Banner kind="support" />
        <div className="mt-8 flex flex-wrap gap-3">
          <WhatsAppButton message={WA.hostWithdrawal} variant="primary">
            Ask About Host Withdrawal
          </WhatsAppButton>
        </div>
        <div className="mt-10">
          <NextSteps
            items={[
              { href: "/metwallet-withdrawal/", label: "Cash Out From MetWallet", note: "Bind a method, set your payment password and confirm." },
              { href: "/chamet-help/#payment-problems", label: "Payment Problem Help", note: "Pending, failed or not received." },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
