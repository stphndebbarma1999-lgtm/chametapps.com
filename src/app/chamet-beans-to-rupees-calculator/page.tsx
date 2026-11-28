import { BeansCalculator } from "@/components/BeansCalculator";
import { Faq, type FaqItem } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { LongForm } from "@/components/LongForm";
import { NextSteps } from "@/components/NextSteps";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section } from "@/components/Section";
import { Toc } from "@/components/Toc";
import { WaveDivider } from "@/components/WaveDivider";
import { beansCalculatorContent } from "@/content/pages/beans-calculator";
import { pageMetadata } from "@/lib/routes";

export const metadata = pageMetadata("beansCalculator");

const FAQ: FaqItem[] = beansCalculatorContent.faqs.map((f) => ({ q: f.q, text: f.a }));

export default function BeansCalculatorPage() {
  return (
    <>
      <Hero
        page="beansCalculator"
        hero="withdrawals"
        title="Chamet Beans to Rupees Calculator"
        accent="Estimate, then verify in the app"
      >
        <p>
          Convert a Beans balance to dollars using the published 10,000 Beans = US$1 rule, then estimate rupees with the rate you actually receive.
        </p>
      </Hero>

      <WaveDivider />
      <Section tone="surface" labelledBy="calculator-intro">
        <QuickAnswer answer={beansCalculatorContent.quickAnswer} />
        <BeansCalculator />
        <div className="mt-8">
          <Toc sections={beansCalculatorContent.sections} />
        </div>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section labelledBy="details">
        <LongForm sections={beansCalculatorContent.sections} />
      </Section>

      <Section tone="surface" labelledBy="faq">
        <Faq id="faq" heading="Beans and Rupees Questions" items={FAQ} />
      </Section>

      <Section>
        <NextSteps
          items={[
            { href: "/chamet-host-withdrawal/", label: "Host Withdrawal Guide", note: "Move an eligible balance to MetWallet and then to your bank." },
            { href: "/blog/chamet-beans-to-dollars/", label: "Beans to Dollars Explained", note: "Why the dollar rule and the rupee credit are not the same number." },
          ]}
        />
      </Section>
    </>
  );
}