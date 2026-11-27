import { Banner } from "@/components/Banner";
import { Faq, type FaqItem } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { LongForm } from "@/components/LongForm";
import { NextSteps } from "@/components/NextSteps";
import { PaymentStagesTable } from "@/components/PaymentStagesTable";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section, SectionHeading } from "@/components/Section";
import { Toc } from "@/components/Toc";
import { WaveDivider } from "@/components/WaveDivider";
import { withdrawalContent } from "@/content/pages/withdrawal";
import { pageMetadata } from "@/lib/routes";

export const metadata = pageMetadata("withdrawal");

const FAQ: FaqItem[] = withdrawalContent.faqs.map((f) => ({ q: f.q, text: f.a }));

export default function WithdrawalPage() {
  return (
    <>
      <Hero page="withdrawal" hero="withdrawals" title="Chamet Withdrawal Guide">
        <p>
          Choose your account type first. Host withdrawals begin in the Chamet app. Agency wallet setup begins in the agency dashboard. Cashing out an available
          MetWallet balance is a further step.
        </p>
      </Hero>

      <WaveDivider />
      <Section tone="surface" labelledBy="which" deco={[{ top: "6%", right: "3%", size: 100, mobile: true }, { bottom: "10%", left: "2%", size: 80 }]}>
        <QuickAnswer answer={withdrawalContent.quickAnswer} />
        <div className="mt-6">
          <Toc sections={withdrawalContent.sections} />
        </div>
        <div className="prose-site mt-8">
          <h2 id="which" data-reveal>
            Start With the Stage, Not the Button
          </h2>
          <p>
            Most withdrawal problems are really stage problems. The money is still in Chamet, or it has reached MetWallet but not the bank, or a request is waiting on a
            check. Identify the stage first, then open the guide that matches it.
          </p>
        </div>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section labelledBy="stage">
        <SectionHeading id="stage">Check the Payment Stage</SectionHeading>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
          {[
            ["Account linked", "The wallet connection exists, but no money has moved."],
            ["Balance available", "Funds are eligible and above the threshold shown."],
            ["Request submitted", "A reference exists and processing has begun."],
            ["Money received", "The destination account confirms the credit."],
          ].map(([t, d], i) => (
            <li key={t} className="card">
              <span className="text-sm font-bold tracking-wider text-pink uppercase">Stage {i + 1}</span>
              <h3 className="mt-1 text-lg">{t}</h3>
              <p className="mt-1">{d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-3xl" data-reveal>
          Do not treat the first three stages as proof of the last one. Review the transaction status in the account where you submitted the request.
        </p>
      </Section>

      <Section tone="surface" labelledBy="minimums">
        <div className="prose-site max-w-3xl">
          <h2 id="minimums" data-reveal>
            Host, Agency and MetWallet Payments Compared
          </h2>
          <p>
            These are separate stages with different requirements. Chamet currently publishes a US$10 minimum only for withdrawing an eligible host balance to
            MetWallet; agency commission and MetWallet cash-out methods have their own conditions. Review the values displayed before submitting — your account&apos;s
            screen always takes priority.
          </p>
        </div>
        <div className="mt-6">
          <PaymentStagesTable />
        </div>
      </Section>

      <Section labelledBy="details">
        <LongForm sections={withdrawalContent.sections} />
      </Section>

      <Section tone="surface" labelledBy="faq">
        <Faq id="faq" heading="Chamet Withdrawal Questions" items={FAQ} />
      </Section>

      <Section labelledBy="support-cta">
        <Banner kind="support" />
        <div className="mt-8 max-w-2xl">
          <h2 id="support-cta" className="text-[1.5rem] sm:text-[1.9rem]" data-reveal>
            Not sure which guide fits?
          </h2>
          <p className="mt-3">Tap the WhatsApp button at the bottom of your screen and tell us your account type and the screen you reached. Never send passwords, OTPs or payment passwords.</p>
        </div>
        <div className="mt-8">
          <NextSteps
            items={[
              { href: "/chamet-host-withdrawal/", label: "Host Withdrawal", note: "My Earning, conditions and MetWallet." },
              { href: "/chamet-agency-withdrawal/", label: "Agency Withdrawal", note: "Bind the agency wallet from My Profile." },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
