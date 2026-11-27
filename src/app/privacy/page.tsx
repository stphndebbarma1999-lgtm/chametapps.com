import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LongForm } from "@/components/LongForm";
import { PageSchema } from "@/components/PageSchema";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section } from "@/components/Section";
import { Toc } from "@/components/Toc";
import { privacyContent } from "@/content/pages/privacy";
import { pageMetadata } from "@/lib/routes";

export const metadata = pageMetadata("privacy");

export default function PrivacyPage() {
  return (
    <Section labelledBy="policy-title">
      <PageSchema page="privacy" />
      <div className="max-w-3xl">
        <Breadcrumbs page="privacy" />
        <h1 id="policy-title" className="mt-4 text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted">Last updated 26 November 2026</p>
        <div className="mt-6">
          <QuickAnswer answer={privacyContent.quickAnswer} />
        </div>
        <div className="mt-6">
          <Toc sections={privacyContent.sections} />
        </div>
      </div>
      <div className="mt-10">
        <LongForm sections={privacyContent.sections} />
      </div>
      <p className="mt-8 max-w-3xl text-sm">
        Related: <Link href="/terms/">Terms of Use</Link> and <Link href="/disclaimer/">Disclaimer</Link>.
      </p>
    </Section>
  );
}
