import { Banner } from "@/components/Banner";
import { Faq, type FaqItem } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { LongForm } from "@/components/LongForm";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section } from "@/components/Section";
import { Toc } from "@/components/Toc";
import { WaveDivider } from "@/components/WaveDivider";
import { helpContent } from "@/content/pages/help";
import { pageMetadata } from "@/lib/routes";

export const metadata = pageMetadata("help");

const FAQ: FaqItem[] = helpContent.faqs.map((f) => ({ q: f.q, text: f.a }));

export default function HelpPage() {
  return (
    <>
      <Hero page="help" hero="help" title="Chamet Registration, Login and Withdrawal Help">
        <p>Find the step where the process stopped. A specific screen message and the correct account type make it easier to choose the right guide.</p>
      </Hero>

      <WaveDivider />
      <Section tone="surface" labelledBy="triage" deco={[{ top: "6%", right: "3%", size: 100, mobile: true }, { bottom: "8%", left: "2%", size: 80 }]}>
        <QuickAnswer answer={helpContent.quickAnswer} />
        <div className="mt-6">
          <Toc sections={helpContent.sections} />
        </div>
        <div className="prose-site mt-8 max-w-3xl">
          <h2 id="triage" data-reveal>
            Start With the Stage, Not the Symptom
          </h2>
          <p>
            A problem that looks like a login failure can be a registration issue, and a payment that looks missing can be sitting in a wallet. Identify the last screen
            that showed a status or a balance, then follow the matching section.
          </p>
        </div>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section labelledBy="details">
        <LongForm sections={helpContent.sections} />
      </Section>

      <Section tone="surface" labelledBy="faq">
        <Faq id="faq" heading="Chamet Help Questions" items={FAQ} />
      </Section>

      <Section labelledBy="ask">
        <Banner kind="support" />
        <div className="prose-site mt-8 max-w-3xl">
          <h2 id="ask" data-reveal>
            Ask for Help With the Right Details
          </h2>
          <p>
            Message us with the WhatsApp button at the bottom of your screen. Include your account type, the step you reached, the exact error message and the time it happened. For payment enquiries, keep the transaction reference
            ready. Hide private information in screenshots and do not send passwords, OTPs or payment passwords.
          </p>
          <p className="text-sm">Account restrictions and payment-provider decisions must be reviewed by the relevant service. Our guidance does not override them.</p>
        </div>
      </Section>
    </>
  );
}
