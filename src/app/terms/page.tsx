import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LongForm } from "@/components/LongForm";
import { PageSchema } from "@/components/PageSchema";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section } from "@/components/Section";
import { Toc } from "@/components/Toc";
import { termsContent } from "@/content/pages/terms";
import { pageMetadata } from "@/lib/routes";

export const metadata = pageMetadata("terms");

export default function TermsPage() {
  return (
    <Section labelledBy="terms-title">
      <PageSchema page="terms" />
      <div className="max-w-3xl">
        <Breadcrumbs page="terms" />
        <h1 id="terms-title" className="mt-4 text-4xl">
          Terms of Use
        </h1>
        <p className="mt-2 text-sm text-muted">Last updated 26 November 2026</p>
        <div className="mt-6">
          <QuickAnswer answer={termsContent.quickAnswer} />
        </div>
        <div className="mt-6">
          <Toc sections={termsContent.sections} />
        </div>
      </div>
      <div className="mt-10">
        <LongForm sections={termsContent.sections} />
      </div>
      <p className="mt-8 max-w-3xl text-sm">
        See also: <Link href="/privacy/">Privacy Policy</Link> and <Link href="/disclaimer/">Disclaimer</Link>.
      </p>
    </Section>
  );
}
