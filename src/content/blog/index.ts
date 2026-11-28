import type { BlogPost } from "@/lib/content";
import { postBeans } from "./beans";
import { postCommission } from "./commission";
import { postAccountBanned } from "./account-banned";
import { postAppNotWorking } from "./app-not-working";
import { postCoins } from "./coins-price";
import { postPaise } from "./paise-kamaye";
import { postCommissionMissing } from "./commission-missing";
import { postCustomerCare } from "./customer-care";
import { postDownload } from "./download";
import { postEarnings } from "./earnings";
import { postLogin } from "./login-problems";
import { postMetwalletKyc } from "./metwallet-kyc";
import { postNearMe } from "./near-me";
import { postPending } from "./pending";
import { postProfile } from "./profile";
import { postVersus } from "./versus";
import { postIsChametSafe } from "./is-chamet-safe";
import { postVerificationFailed } from "./verification-failed";

/** All published guides, newest first. */
export const BLOG_POSTS: BlogPost[] = [
  postPaise,
  postCoins,
  postAppNotWorking,
  postAccountBanned,
  postIsChametSafe,
  postCustomerCare,
  postCommissionMissing,
  postVerificationFailed,
  postNearMe,
  postVersus,
  postProfile,
  postDownload,
  postEarnings,
  postLogin,
  postMetwalletKyc,
  postPending,
  postBeans,
  postCommission,
].sort((a, b) => (a.published < b.published ? 1 : -1));

export const BLOG_CATEGORIES = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Approximate visible word count used for Article structured data. */
export function postWordCount(post: BlogPost): number {
  const text: string[] = [post.quickAnswer];
  for (const section of post.sections) {
    text.push(section.heading);
    for (const block of section.blocks) {
      if (block.kind === "p" || block.kind === "note") text.push(block.text);
      else if (block.kind === "list" || block.kind === "steps") text.push(block.items.join(" "));
      else if (block.kind === "table") text.push(block.head.join(" ") + " " + block.rows.flat().join(" "));
      else if (block.kind === "cards") text.push(block.items.map((c) => c.title + " " + c.text).join(" "));
      else if (block.kind === "sub") text.push(block.heading + " " + block.blocks.length);
    }
  }
  for (const faq of post.faqs) text.push(faq.q + " " + faq.a);
  return text.join(" ").split(/\s+/).filter(Boolean).length;
}