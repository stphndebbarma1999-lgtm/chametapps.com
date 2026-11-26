import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/lib/routes";
import { LINKS } from "@/lib/site";

export const metadata = pageMetadata("disclaimer");

export default function DisclaimerPage() {
  return (
    <Section>
      <div className="prose-site max-w-3xl">
        <Breadcrumbs page="disclaimer" />
        <h1 className="text-4xl">Disclaimer</h1>
        <p className="text-sm">Last updated 26 November 2026</p>

        <h2>Not the official Chamet website</h2>
        <p>
          ChametApps.com is an agency guidance website. It is not operated by Chamet. The “certified Chamet agency” description is provided by the site owner; we do not
          display certificate numbers or official badges. For official information visit{" "}
          <a href={LINKS.officialChamet} target="_blank" rel="noopener">
            {LINKS.officialChametLabel}
          </a>
          .
        </p>

        <h2>Referral relationship</h2>
        <p>Our registration buttons are agency referral links. Registering through them connects you with our agency.</p>

        <h2>Earnings and payments</h2>
        <p>
          Earnings depend on eligible activity and the rules that apply to your account. Example balances, commission percentages, fees and arrival times shown in
          screenshots are examples only. Exchange rates, minimums and charges are shown by your wallet or payment provider and can change.
        </p>

        <h2>Images</h2>
        <p>
          Tutorial screenshots are annotated example screens; labels may differ in your app. Banner portraits are generated promotional illustrations, not real staff,
          hosts or customers, and not testimonials.
        </p>

        <h2>Changing requirements</h2>
        <p>Platform screens, eligibility rules and payout methods change over time. When our guide and your screen differ, follow your screen.</p>
      </div>
    </Section>
  );
}
