import { Banner } from "@/components/Banner";
import { Faq, type FaqItem } from "@/components/Faq";
import { GuideBlock } from "@/components/GuideBlock";
import { Hero } from "@/components/Hero";
import { ImageNote } from "@/components/ImageNote";
import { LongForm } from "@/components/LongForm";
import { NextSteps } from "@/components/NextSteps";
import { PaymentStagesTable } from "@/components/PaymentStagesTable";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section } from "@/components/Section";
import { Toc } from "@/components/Toc";
import { WaveDivider } from "@/components/WaveDivider";
import { metwalletContent } from "@/content/pages/metwallet";
import { guideImages } from "@/lib/guides";
import { pageMetadata } from "@/lib/routes";

export const metadata = pageMetadata("metwallet");

const FAQ: FaqItem[] = metwalletContent.faqs.map((f) => ({ q: f.q, text: f.a }));

export default function MetWalletPage() {
  return (
    <>
      <Hero page="metwallet" hero="metwallet" title="How to Withdraw From MetWallet">
        <p>This guide starts inside MetWallet. Check your available balance and follow the account requirements displayed before choosing a withdrawal method.</p>
      </Hero>

      <Section labelledBy="stages">
        <QuickAnswer answer={metwalletContent.quickAnswer} />
        <div className="mt-6">
          <Toc sections={metwalletContent.sections} />
        </div>
        <div className="prose-site mt-8 max-w-3xl">
          <h2 id="stages" data-reveal>
            Where MetWallet Cash Out Fits
          </h2>
          <p>
            Cashing out from MetWallet is a separate stage from moving money into the wallet. A linked wallet, a submitted request and money received in your account are
            different milestones — check each one.
          </p>
        </div>
        <div className="mt-6">
          <PaymentStagesTable current="metwallet" />
        </div>
      </Section>

      <WaveDivider />
      <Section tone="surface" labelledBy="steps" deco={[{ top: "4%", right: "3%", size: 100, mobile: true }, { top: "50%", left: "1%", size: 80 }]}>
        <div className="mb-6">
          <ImageNote />
        </div>
        <GuideBlock
          id="steps"
          heading="Cash-Out Steps"
          carouselLabel="MetWallet cash-out screenshots"
          images={guideImages("metwallet-cash-out")}
          steps={[
            <>Open MetWallet and review your balance.</>,
            <>
              Open <strong>Basic Level</strong> where shown, complete the requested details and submit them. Complete additional verification if your account requires it.
            </>,
            <>
              Return to the homepage and select <strong>Cash Out</strong> when available.
            </>,
            <>Choose a listed withdrawal method and bind your own destination account. Review the details carefully.</>,
            <>If prompted, create your payment password and enter it again to confirm. This setup step may appear at a different point in your account.</>,
            <>Select your destination and enter the amount. Read the displayed minimum, fee and payout quote.</>,
            <>Submit the request and enter your payment password when prompted.</>,
            <>Read the confirmation and estimated arrival time. Save the transaction reference and check the destination account for receipt.</>,
          ]}
          after={
            <p>
              <strong>Expected result:</strong> a request status or confirmation appears. Check final receipt separately.
            </p>
          }
        />
      </Section>
      <WaveDivider from="#180725" flip />

      <Section labelledBy="details">
        <LongForm sections={metwalletContent.sections} />
      </Section>

      <Section tone="surface" labelledBy="faq">
        <Faq id="faq" heading="MetWallet Questions" items={FAQ} />
      </Section>

      <Section labelledBy="help-cta">
        <Banner kind="support" />
        <div className="mt-10">
          <NextSteps
            items={[
              { href: "/chamet-help/#payment-problems", label: "Check a Payment Problem", note: "What pending, failed and completed statuses mean." },
              { href: "/chamet-withdrawal/", label: "All Withdrawal Guides", note: "Host, agency and wallet stages." },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
