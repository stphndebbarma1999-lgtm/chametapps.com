import { ButtonLink } from "@/components/Buttons";
import { Faq, type FaqItem } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { LongForm } from "@/components/LongForm";
import { NextSteps } from "@/components/NextSteps";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section } from "@/components/Section";
import { Toc } from "@/components/Toc";
import { WaveDivider } from "@/components/WaveDivider";
import { indiaContent } from "@/content/pages/india";
import { pageMetadata } from "@/lib/routes";

export const metadata = pageMetadata("india");

const FAQ: FaqItem[] = indiaContent.faqs.map((f) => ({ q: f.q, text: f.a }));

export default function IndiaPage() {
  return (
    <>
      <Hero
        page="india"
        hero="home"
        title="Chamet Agency in India: Online Registration and Support"
        actions={
          <>
            <ButtonLink href="/chamet-agency-registration/">Agency Registration Guide</ButtonLink>
            <ButtonLink href="/chamet-host-registration/" variant="secondary">
              Host Registration Guide
            </ButtonLink>
          </>
        }
      >
        <p>
          Chamet agency work in India is online. Register through a verified invitation, manage your team from a browser dashboard, and receive eligible payments
          through MetWallet before cashing out to rupees.
        </p>
      </Hero>

      <WaveDivider />
      <Section tone="surface" labelledBy="india-intro" deco={[{ top: "6%", right: "3%", size: 100, mobile: true }, { bottom: "8%", left: "2%", size: 80 }]}>
        <QuickAnswer answer={indiaContent.quickAnswer} />
        <div className="mt-6">
          <Toc sections={indiaContent.sections} />
        </div>
        <div className="prose-site mt-8 max-w-3xl">
          <h2 id="india-intro" data-reveal>
            Guidance for Indian Hosts and Agencies
          </h2>
          <p>
            This page is written for people searching for a Chamet agency in India, a Chamet agency near me or Chamet support in India. It explains the honest
            version: the work is online, the location affects language and support more than office addresses, and no guide can promise earnings.
          </p>
        </div>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section labelledBy="details">
        <LongForm sections={indiaContent.sections} />
      </Section>

      <Section tone="surface" labelledBy="faq">
        <Faq id="faq" heading="Chamet Agency India Questions" items={FAQ} />
      </Section>

      <Section>
        <NextSteps
          items={[
            { href: "/chamet-agency-registration/", label: "Agency Registration", note: "Six steps, profile setup and invitation links." },
            { href: "/blog/chamet-agency-near-me/", label: "Near Me Checklist", note: "How to verify an agency before joining." },
            { href: "/chamet-withdrawal/", label: "Withdrawal Guide", note: "From Beans to MetWallet to rupees." },
          ]}
        />
      </Section>
    </>
  );
}
