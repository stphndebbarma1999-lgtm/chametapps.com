import Link from "next/link";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/routes";

export const metadata = pageMetadata("privacy");

export default function PrivacyPage() {
  return (
    <Section>
      <div className="prose-site max-w-3xl">
        <Breadcrumbs page="privacy" />
        <h1 className="text-4xl">Privacy Policy</h1>
        <p className="text-sm">Last updated 26 November 2026</p>
        <p>This policy describes how ChametApps.com works today. It is a guidance website: it has no user accounts, no contact forms and no payment features.</p>

        <h2>Information we do not collect</h2>
        <p>
          We never ask for Chamet, agency portal or MetWallet passwords, verification codes or payment passwords, and this site has no form that collects them. Sign-in and
          recovery happen only on the platforms themselves.
        </p>

        <h2>Hosting and technical data</h2>
        <p>
          Like any website, our hosting provider processes technical request data (such as IP address, browser type and the page requested) to deliver pages and keep the
          service secure.
        </p>

        <h2>Analytics (only if enabled)</h2>
        <p>
          The site can use Google Analytics 4. When it is enabled, a notice asks for your choice, and the analytics script loads only after you select Accept. It records
          page views and which guide controls and outbound buttons are used (for example registration, dashboard, WhatsApp and channel buttons), with the destination
          domain and page path. It does not record names, phone numbers, passwords or messages. Your choice is stored in your browser&apos;s local storage; clearing site
          data resets it. If analytics is not enabled, no analytics script is loaded.
        </p>

        <h2>Outgoing links</h2>
        <p>
          Buttons on this site open other services, including WhatsApp (direct chat and our channel), Chamet registration pages, the Chamet agency portal, the official
          Chamet website and MetWallet. Those services have their own privacy policies. WhatsApp chat buttons pre-fill a short message that you can edit before sending;
          nothing is sent until you send it.
        </p>

        <h2>Messages you send us</h2>
        <p>
          If you message us on WhatsApp, we see the information you choose to share in that conversation, and we use it to answer your question. Please do not share
          passwords, codes or more personal information than needed.
        </p>

        <h2>Questions</h2>
        <p>
          Contact us through the options on our <Link href="/contact/">contact page</Link>.
        </p>
      </div>
    </Section>
  );
}
