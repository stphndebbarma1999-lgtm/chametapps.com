import { Banner } from "@/components/Banner";
import { GuideBlock } from "@/components/GuideBlock";
import { Hero } from "@/components/Hero";
import { ImageNote } from "@/components/ImageNote";
import { NextSteps } from "@/components/NextSteps";
import { Section } from "@/components/Section";
import { WaveDivider } from "@/components/WaveDivider";
import { guideImages } from "@/lib/guides";
import { pageMetadata } from "@/lib/routes";

export const metadata = pageMetadata("metwallet");

export default function MetWalletPage() {
  return (
    <>
      <Hero page="metwallet" hero="metwallet" accent="From wallet balance to your payout method" title="How to Withdraw From MetWallet">
        <p>This guide starts inside MetWallet. Check your available balance and follow the account requirements displayed before choosing a withdrawal method.</p>
      </Hero>

      <WaveDivider />
      <Section tone="surface" labelledBy="steps" deco={[{ top: "4%", right: "3%", size: 100, mobile: true }, { top: "50%", left: "1%", size: 80 }]}>
        <div className="mb-6">
          <ImageNote />
        </div>
        <GuideBlock
          id="steps"
          heading="Eight Cash-Out Steps"
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

      <Section labelledBy="india">
        <div className="grid gap-5 lg:grid-cols-3" data-reveal-stagger>
          <div className="card prose-site">
            <h2 id="india" className="text-xl!">
              Which Withdrawal Method Can I Use in India?
            </h2>
            <p>
              Use the methods listed inside your own account. The methods in an example image do not establish availability for every Indian user. Check the displayed
              currency, charges and recipient details before confirming.
            </p>
          </div>
          <div className="card prose-site">
            <h2 id="rupees" className="text-xl!">
              How Much Will I Receive in Rupees?
            </h2>
            <p>
              Use the payout quote provided for your selected method. A dollar wallet balance and the final rupee credit can differ because of currency conversion and
              fees. This guide does not promise a fixed USD-to-INR rate.
            </p>
          </div>
          <div className="card prose-site">
            <h2 id="timing" className="text-xl!">
              How Long Will It Take?
            </h2>
            <p>
              Use the estimate displayed for your transaction. The seven-working-day message in our example is specific to that example. If the stated time passes, collect
              the transaction reference and contact the relevant payment support.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="surface" labelledBy="help-cta">
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
