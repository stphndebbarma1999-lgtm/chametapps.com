import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/lib/routes";

export const metadata = pageMetadata("terms");

export default function TermsPage() {
  return (
    <Section>
      <div className="prose-site max-w-3xl">
        <Breadcrumbs page="terms" />
        <h1 className="text-4xl">Terms of Use</h1>
        <p className="text-sm">Last updated 26 November 2026</p>
        <p>By using ChametApps.com you agree to these terms.</p>

        <h2>Guidance only</h2>
        <p>
          Our pages explain registration, dashboard and withdrawal steps using example screenshots. Screens, labels, requirements, fees and timings can change and may differ
          for your account. Always follow the instructions displayed by Chamet, MetWallet or your payment provider.
        </p>

        <h2>Referral registration links</h2>
        <p>
          Our host and agency registration buttons are agency referral links. Registering through them connects your account with our agency. You are free to compare
          options before registering.
        </p>

        <h2>No guarantees</h2>
        <p>
          We do not promise income, approval, commission rates, exchange rates or payment times. Platform and payment decisions are made by the relevant service, not by
          ChametApps.com.
        </p>

        <h2>Your responsibilities</h2>
        <p>
          Keep your passwords, verification codes and payment passwords private. Meet the age and account requirements displayed by Chamet. Do not use our guides to break
          platform rules.
        </p>

        <h2>Third-party services</h2>
        <p>
          Links to WhatsApp, Chamet, the agency portal and MetWallet take you to services we do not control. Their own terms apply. See also our{" "}
          <Link href="/disclaimer/">disclaimer</Link> and <Link href="/privacy/">privacy policy</Link>.
        </p>

        <h2>Changes</h2>
        <p>We may update these terms when the site changes. The date above shows the latest revision.</p>
      </div>
    </Section>
  );
}
