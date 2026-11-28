import Link from "next/link";
import { ButtonLink } from "@/components/Buttons";
import { Faq, type FaqItem } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { NextSteps } from "@/components/NextSteps";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section } from "@/components/Section";
import { WaveDivider } from "@/components/WaveDivider";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/content/blog";
import { pageMetadata, ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata("blog");

const FAQ: FaqItem[] = [
  {
    q: "What can I find on the ChametApps blog?",
    text: "Practical guides for Chamet hosts and agencies: commission and Beans conversions, login fixes, withdrawal problems, MetWallet verification, app installation, profile setup and how to verify an agency before joining.",
  },
  {
    q: "Are these guides official Chamet documentation?",
    text: "No. This is an independent guidance site with an agency referral route. Screens and rules can change, so when a guide and your app differ, follow your app and confirm with official support.",
  },
  {
    q: "How often are the guides updated?",
    text: "Pages carry a last-updated date and are reviewed when a platform change is reported or a source is re-checked. The most recent site-wide review is shown on each article.",
  },
  {
    q: "Do the guides promise earnings?",
    text: "No. Host and agency income depends on eligible activity, platform rules and other factors. Example amounts are illustrations, not benchmarks or promises.",
  },
  {
    q: "Where should a new reader start?",
    text: "Start with the commission or Beans guide if you are comparing income, the registration guides if you have not signed up, and the pending withdrawal or KYC guide if a payout is stuck.",
  },
];

function fmt(date: string) {
  return new Date(date + "T00:00:00Z").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}

export default function BlogPage() {
  const featured = BLOG_POSTS[0];
  const featuredRoute = featured
    ? (Object.values(ROUTES).find((r) => r.path === `/blog/${featured.slug}/`) ?? ROUTES.postNearMe)
    : ROUTES.postNearMe;
  return (
    <>
      <Hero
        page="blog"
        hero="help"
        accent="Guides for hosts and agencies"
        title="Chamet Agency and Host Guides"
        actions={
          <>
            <ButtonLink href="/chamet-agency-registration/">Agency Registration</ButtonLink>
            <ButtonLink href="/chamet-host-registration/" variant="secondary">
              Host Registration
            </ButtonLink>
          </>
        }
      >
        <p>
          Eighteen long-form guides on commission, Beans, withdrawals, verification, login problems and agency checks, written for readers in India who want the honest
          version of how the platform workflow fits together.
        </p>
      </Hero>

      <WaveDivider />

      <Section tone="surface" labelledBy="blog-intro">
        <QuickAnswer answer="This library holds eighteen long-form guides for Chamet hosts and agencies in India, grouped into agency basics, payments, troubleshooting and hosting. Every guide names the party that controls each decision, carries a last-updated date and avoids fixed exchange rates or promised income." />
        <div className="prose-site mt-8 max-w-3xl">
          <h2 id="blog-intro" data-reveal>
            What this blog covers, and what it avoids
          </h2>
          <p>
            Most Chamet search results promise a salary, a guaranteed payout or an official badge. This blog does the opposite. It explains the stages, names the party
            that controls each decision and tells you what to check before you send money or share a document.
          </p>
          <p>
            The articles fall into four groups. <strong>Agency basics</strong> explains commission, roles and how to verify a team. <strong>Payments</strong> covers Beans,
            MetWallet verification and the difference between a report and a transfer. <strong>Troubleshooting</strong> walks through login and pending-withdrawal problems.
            <strong>Hosting</strong> deals with installation, profile setup and realistic first-month expectations.
          </p>
          <p>
            Every guide is dated, links to the relevant step-by-step page and avoids a fixed exchange rate or a fabricated income figure. When a rule is set by the
            platform, the article says so and points you to the official source rather than inventing a detail.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" aria-label="Guide categories">
          {BLOG_CATEGORIES.map((c) => (
            <span key={c} className="rounded-full border border-lavender/40 bg-surface/70 px-3 py-1 text-sm text-body">
              {c}
            </span>
          ))}
        </div>

        {featured && featuredRoute && (
          <article className="card mt-8 max-w-3xl" data-reveal>
            <p className="eyebrow-italic text-sm">Latest guide</p>
            <h3 className="mt-1 text-2xl">
              <Link href={featuredRoute.path} className="no-underline hover:underline">
                {featuredRoute.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm text-muted">
              {featured.category} · {fmt(featured.published)} · {featured.readingMinutes} min read
            </p>
            <p className="mt-3">{featured.excerpt}</p>
            <p className="mt-4">
              <Link href={featuredRoute.path}>Read {featuredRoute.label.toLowerCase()}</Link>
            </p>
          </article>
        )}

        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Chamet agency and host guides",
            itemListElement: BLOG_POSTS.map((post, i) => {
              const route = Object.values(ROUTES).find((r) => r.path === `/blog/${post.slug}/`);
              return {
                "@type": "ListItem",
                position: i + 1,
                name: route?.title ?? post.slug,
                url: absoluteUrl(`/blog/${post.slug}/`),
              };
            }),
          }}
        />
      </Section>

      <Section labelledBy="how-to-use">
        <div className="prose-site max-w-3xl">
          <h2 id="how-to-use" data-reveal>
            How to use these guides without wasting a week
          </h2>
          <p>
            Start from the decision you are actually making, not from the guide that ranks first. Someone comparing income needs the commission and Beans articles.
            Someone who cannot sign in needs the login article and the dashboard walkthrough. Someone waiting for money needs the pending-withdrawal checks before
            they open a support ticket. Reading in that order saves the most time.
          </p>
          <p>
            Each article opens with a quick answer, then explains the detail and ends with the steps that apply to your situation. If the quick answer is enough, stop
            there. The rest of the page exists for the reader whose screen does not match the simple version, and for the reader who wants to understand why a rule exists
            before trusting it.
          </p>
          <h3>What we verify, and what we cannot</h3>
          <p>
            We check platform-published facts such as the Beans conversion and the host withdrawal minimum against Chamet&apos;s own pages. We describe dashboard and
            wallet flows from hands-on use. We do not have access to your account, your wallet or platform support, and we cannot confirm an individual payment, approve a
            registration or recover a password.
          </p>
          <ul>
            <li>Dates and sources appear on every article so you can judge freshness.</li>
            <li>Amounts are examples, never promises or benchmarks.</li>
            <li>Rules that belong to the platform are attributed, not paraphrased into certainty.</li>
            <li>Locations appear only where they change the advice, such as INR payouts or IST support hours.</li>
          </ul>
          <h3>Reading order for a new host or agent</h3>
          <p>
            A new host can read the <Link href="/chamet-host-registration/">host registration guide</Link>, then the{" "}
            <Link href="/blog/chamet-host-earnings-guide/">earnings guide</Link> and the{" "}
            <Link href="/blog/chamet-host-profile-tips/">profile tips</Link> before the first session. A new agent can read the{" "}
            <Link href="/chamet-agency-registration/">agency registration guide</Link>, then the{" "}
            <Link href="/blog/chamet-agency-commission-explained/">commission explainer</Link> and the{" "}
            <Link href="/blog/chamet-agency-login-problems/">login troubleshooting</Link> article before inviting anyone.
          </p>
          <p>
            If a guide and your app disagree, trust your app and tell us. A dated correction is more useful to the next reader than a confident sentence that was true six
            months ago.
          </p>
        </div>
      </Section>

      <WaveDivider from="#180725" flip />

      <Section labelledBy="all-guides">
        <h2 id="all-guides" className="text-[1.65rem] sm:text-[2.1rem]" data-reveal>
          All guides by topic
        </h2>
        <div className="mt-8 space-y-12">
          {BLOG_CATEGORIES.map((category) => {
            const posts = BLOG_POSTS.filter((p) => p.category === category);
            if (!posts.length) return null;
            return (
              <section key={category} aria-labelledby={`cat-${category.replace(/\s+/g, "-").toLowerCase()}`}>
                <h3 id={`cat-${category.replace(/\s+/g, "-").toLowerCase()}`} className="text-xl">
                  {category}
                </h3>
                <ul className="mt-4 grid gap-4 md:grid-cols-2">
                  {posts.map((post) => {
                    const route = Object.values(ROUTES).find((r) => r.path === `/blog/${post.slug}/`);
                    return (
                      <li key={post.slug}>
                        <article className="card h-full">
                          <p className="text-xs uppercase tracking-wide text-lavender">{fmt(post.published)} · {post.readingMinutes} min</p>
                          <h4 className="mt-2 text-lg">
                            <Link href={`/blog/${post.slug}/`} className="no-underline hover:underline">
                              {route?.title ?? post.slug}
                            </Link>
                          </h4>
                          <p className="mt-2 text-sm text-body">{post.excerpt}</p>
                        </article>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>
      </Section>

      <Section tone="surface" labelledBy="faq">
        <Faq id="faq" heading="Blog Questions" items={FAQ} />
      </Section>

      <Section>
        <NextSteps
          items={[
            { href: "/blog/chamet-agency-commission-explained/", label: "Commission basics", note: "What the ratio means and how reports differ from payouts." },
            { href: "/chamet-help/", label: "Fix a problem", note: "Registration, login and withdrawal troubleshooting by stage." },
            { href: "/blog/chamet-beans-to-dollars/", label: "Beans to dollars", note: "The published conversion and the rupee gap." },
          ]}
        />
      </Section>
    </>
  );
}