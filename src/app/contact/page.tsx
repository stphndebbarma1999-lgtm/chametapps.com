import { ExternalButton } from "@/components/Buttons";
import { Faq, type FaqItem } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { LongForm } from "@/components/LongForm";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section } from "@/components/Section";
import { Toc } from "@/components/Toc";
import { WaveDivider } from "@/components/WaveDivider";
import { contactContent } from "@/content/pages/contact";
import { pageMetadata } from "@/lib/routes";
import { LINKS } from "@/lib/site";

export const metadata = pageMetadata("contact");

const FAQ: FaqItem[] = contactContent.faqs.map((f) => ({ q: f.q, text: f.a }));

export default function ContactPage() {
  return (
    <>
      <Hero page="contact" hero="aboutContact" title="Contact ChametApps.com">
        <p>
          Need help choosing between host and agency registration, finding a dashboard option or following a guide? Send a WhatsApp message with a short description of
          your question using the WhatsApp button at the bottom of your screen.
        </p>
      </Hero>

      <WaveDivider />
      <Section tone="surface" labelledBy="ways" deco={[{ top: "10%", right: "3%", size: 100, mobile: true }, { bottom: "10%", left: "2%", size: 80 }]}>
        <QuickAnswer answer={contactContent.quickAnswer} />
        <div className="mt-6">
          <Toc sections={contactContent.sections} />
        </div>
        <div className="mt-8 grid max-w-3xl gap-5" data-reveal-stagger>
          <div className="card prose-site">
            <h3 className="text-xl">Chat directly on WhatsApp</h3>
            <p>
              WhatsApp: <strong>{LINKS.whatsappDisplay}</strong>
            </p>
            <p>Tap the round WhatsApp button at the bottom-right of any page, or use the button below.</p>
            <p>Suggested message: “Hello, I need help with Chamet [host/agency] registration. I am at the [step name] step.”</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <ExternalButton href={LINKS.whatsapp} track="whatsapp_contact">
                Message Us on WhatsApp
              </ExternalButton>
            </div>
          </div>
        </div>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section labelledBy="details">
        <LongForm sections={contactContent.sections} />
      </Section>

      <Section tone="surface" labelledBy="faq">
        <Faq id="faq" heading="Contact Questions" items={FAQ} />
      </Section>
    </>
  );
}
