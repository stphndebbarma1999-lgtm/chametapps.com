import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LongForm } from "@/components/LongForm";
import { PageSchema } from "@/components/PageSchema";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section } from "@/components/Section";
import { Toc } from "@/components/Toc";
import { disclaimerContent } from "@/content/pages/disclaimer";
import { pageMetadata } from "@/lib/routes";
import { LINKS } from "@/lib/site";

export const metadata = pageMetadata("disclaimer");

export default function DisclaimerPage() {
  return (
    <Section labelledBy="disclaimer-title">
      <PageSchema page="disclaimer" />
      <div className="max-w-3xl">
        <Breadcrumbs page="disclaimer" />
        <h1 id="disclaimer-title" className="mt-4 text-4xl">
          Disclaimer
        </h1>
        <p className="mt-2 text-sm text-muted">Last updated 26 November 2026</p>
        <div className="mt-6">
          <QuickAnswer answer={disclaimerContent.quickAnswer} />
        </div>
        <div className="mt-6">
          <Toc sections={disclaimerContent.sections} />
        </div>
      </div>
      <div className="mt-10">
        <LongForm sections={disclaimerContent.sections} />
      </div>
      <p className="mt-8 max-w-3xl text-sm">
        Official platform:{" "}
        <a href={LINKS.officialChamet} target="_blank" rel="noopener">
          {LINKS.officialChametLabel}
        </a>
        . See also <Link href="/terms/">Terms of Use</Link> and <Link href="/privacy/">Privacy Policy</Link>.
      </p>
    </Section>
  );
}
