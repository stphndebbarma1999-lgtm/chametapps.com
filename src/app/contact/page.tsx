import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { WaveDivider } from "@/components/WaveDivider";
import { pageMetadata } from "@/lib/routes";
import { LINKS } from "@/lib/site";

export const metadata = pageMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <Hero
        page="contact"
        hero="aboutContact"
        accent="Direct WhatsApp help"
        title="Contact ChametApps.com"
      >
        <p>
          Need help choosing between host and agency registration, finding a dashboard option or following a guide? Send a WhatsApp message with a short description of
          your question using the WhatsApp button at the bottom of your screen.
        </p>
      </Hero>

      <WaveDivider />
      <Section tone="surface" labelledBy="ways" deco={[{ top: "10%", right: "3%", size: 100, mobile: true }, { bottom: "10%", left: "2%", size: 80 }]}>
        <h2 id="ways" className="mb-6 text-[1.65rem] sm:text-[2.1rem]" data-reveal>
          Ways to Reach Us
        </h2>
        <div className="grid gap-5 lg:grid-cols-2" data-reveal-stagger>
          <div className="card prose-site">
            <h3 className="text-xl">Chat directly on WhatsApp</h3>
            <p>
              WhatsApp: <strong>{LINKS.whatsappDisplay}</strong>
            </p>
            <p>Tap the round WhatsApp button at the bottom-right of any page to start a chat.</p>
            <p>Suggested message: “Hello, I need help with Chamet [host/agency] registration. I am at the [step name] step.”</p>
          </div>
          <div className="card prose-site">
            <h3 className="text-xl">Follow our WhatsApp channel</h3>
            <p>
              Our channel <strong>{LINKS.whatsappChannelName}</strong> shares updates. Following a channel is separate from chatting with us — use the direct chat for
              questions about your account.
            </p>
            <p>
              <a href={LINKS.whatsappChannel} target="_blank" rel="noopener" data-track="whatsapp_channel_follow">
                Open the {LINKS.whatsappChannelName} channel
              </a>
            </p>
          </div>
        </div>
      </Section>
      <WaveDivider from="#180725" flip />

      <Section labelledBy="safety">
        <div className="card prose-site max-w-3xl" data-reveal>
          <h2 id="safety" className="text-2xl!">
            Before You Send a Message
          </h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>Say whether you are a host or an agency, and which step you reached.</li>
            <li>Copy the exact error message if one appears.</li>
            <li>Never send passwords, OTP codes or payment passwords. Hide private details in screenshots.</li>
          </ul>
          <p>
            Many answers are already in our <Link href="/chamet-help/">help tables</Link>. For platform account decisions, use{" "}
            <a href={LINKS.officialChamet} target="_blank" rel="noopener">
              Chamet&apos;s official channels
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
