import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/Buttons";
import { Faq, type FaqItem } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { LongForm } from "@/components/LongForm";
import { NextSteps } from "@/components/NextSteps";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Section } from "@/components/Section";
import { Toc } from "@/components/Toc";
import { WaveDivider } from "@/components/WaveDivider";
import { BLOG_POSTS, getPost, postWordCount } from "@/content/blog";
import { pageMetadata, ROUTES, type RouteKey } from "@/lib/routes";
import { SOURCES, SOURCES_CHECKED_LABEL } from "@/lib/site";

type Params = { slug: string };

function routeKeyFor(slug: string): RouteKey | undefined {
  return (Object.keys(ROUTES) as RouteKey[]).find((key) => ROUTES[key].path === `/blog/${slug}/`);
}

export function generateStaticParams(): Params[] {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const key = routeKeyFor(slug);
  if (!key) return { title: "Guide not found" };
  return pageMetadata(key);
}

function formatDate(date: string) {
  return new Date(date + "T00:00:00Z").toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  const key = routeKeyFor(slug);
  if (!post || !key) notFound();

  const route = ROUTES[key];
  const faqs: FaqItem[] = post.faqs.map((f) => ({ q: f.q, text: f.a }));
  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Hero
        page={key}
        hero={route.hero}
        accent={`${post.category} guide`}
        title={route.title}
        wordCount={postWordCount(post)}
        actions={
          <>
            <ButtonLink href="/blog/" variant="secondary">
              All guides
            </ButtonLink>
            <ButtonLink href="/chamet-help/" variant="secondary">
              Get help by stage
            </ButtonLink>
          </>
        }
      >
        <p>{post.excerpt}</p>
      </Hero>

      <WaveDivider />

      <Section tone="surface">
        <p className="max-w-3xl text-sm text-muted">
          By the ChametApps editorial team · Published {formatDate(post.published)} · Updated {formatDate(post.updated)} · {post.readingMinutes} min read
        </p>
        <div className="mt-6">
          <QuickAnswer answer={post.quickAnswer} />
        </div>
        <div className="mt-6">
          <Toc sections={post.sections} />
        </div>
        <div className="mt-4">
          <LongForm sections={post.sections} />
        </div>
        <p className="mt-8 max-w-3xl text-sm text-muted">
          Sources checked {SOURCES_CHECKED_LABEL}:{" "}
          <a href={SOURCES.hostEarnings} target="_blank" rel="noopener">
            Chamet host earnings
          </a>{" "}
          and{" "}
          <a href={SOURCES.hostTraining} target="_blank" rel="noopener">
            Chamet host training
          </a>
          . Rules and screens can change; when this guide and your app differ, follow your app.
        </p>
      </Section>

      <WaveDivider from="#180725" flip />

      <Section labelledBy="article-faq">
        <Faq id="article-faq" heading="Questions readers ask" items={faqs} />
      </Section>

      <Section tone="surface">
        <NextSteps
          heading="Keep reading"
          items={post.related.map((item) => ({ ...item, note: "Step-by-step guide on this topic." }))}
        />
        <div className="mt-10">
          <h2 className="text-xl">More guides</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {others.map((other) => {
              const otherKey = routeKeyFor(other.slug);
              return (
                <li key={other.slug}>
                  <Link href={`/blog/${other.slug}/`} className="card block h-full no-underline hover:border-lavender/70">
                    <span className="block text-sm uppercase tracking-wide text-lavender">{other.category}</span>
                    <span className="mt-1 block font-bold text-white">{otherKey ? ROUTES[otherKey].title : other.slug}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>
    </>
  );
}
