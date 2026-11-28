#!/usr/bin/env node
/**
 * Crawls a running build (default http://localhost:3000) and checks:
 *  - every sitemap URL returns 200 and has exactly one H1, a unique title/description,
 *    a self-referencing absolute canonical on https://chametapps.com
 *  - every internal link and local image/asset returns 200 (after at most one redirect)
 *  - JSON-LD parses; BreadcrumbList matches the visible breadcrumb; every FAQPage question AND answer
 *    matches a visible FAQ card word for word (after removing markup)
 *  - registration links: the agency page uses only the agency link, the host page only the host link,
 *    and the two links are never swapped anywhere
 *  - no canonical points at chametagency.org; no "SD Agency" text; no lorem ipsum
 * Usage: npm run build && npm start  (in another shell)  then  npm run validate [-- baseUrl]
 */
import { readFileSync } from "node:fs";

const BASE = process.argv[2] || process.env.BASE_URL || "http://localhost:3000";
const SITE = "https://chametapps.com";
const links = JSON.parse(readFileSync(new URL("../src/content/links.json", import.meta.url)));
const errors = [];
const warn = (m) => errors.push(m);

const decode = (s) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const attrAll = (html, re) => [...html.matchAll(re)].map((m) => decode(m[1]));

/** Text content of HTML: comments and tags removed, entities decoded, whitespace collapsed. */
function norm(htmlOrText) {
  return decode(htmlOrText.replace(/<!--.*?-->/gs, "").replace(/<[^>]+>/g, ""))
    .replace(/\s+/g, " ")
    .trim();
}

/** Map of visible FAQ question → visible answer text, read from the server-rendered FAQ cards. */
function visibleFaqs(html) {
  const out = new Map();
  const re = /<h3[^>]*data-faq-question[^>]*>(.*?)<\/h3>\s*<div[^>]*data-faq-answer[^>]*>(.*?)<\/div><\/div>/gs;
  for (const m of html.matchAll(re)) out.set(norm(m[1]), norm(m[2]));
  return out;
}

async function get(path, redirect = "manual") {
  const res = await fetch(new URL(path, BASE), { redirect });
  return res;
}

const sitemapXml = await (await get("/sitemap.xml")).text();
const pages = attrAll(sitemapXml, /<loc>([^<]+)<\/loc>/g).map((u) => u.replace(SITE, ""));
if (pages.length !== 36) warn(`sitemap has ${pages.length} URLs (expected 36)`);

const titles = new Map();
const descs = new Map();
const internal = new Set();
const assets = new Set();

for (const path of pages) {
  const res = await get(path);
  if (res.status !== 200) {
    warn(`${path}: status ${res.status}`);
    continue;
  }
  const html = await res.text();
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) warn(`${path}: ${h1} H1 elements`);
  const title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || "");
  const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "");
  const canon = decode((html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || "");
  if (!title) warn(`${path}: missing title`);
  if (!desc) warn(`${path}: missing description`);
  if (titles.has(title)) warn(`${path}: duplicate title with ${titles.get(title)}`);
  if (descs.has(desc)) warn(`${path}: duplicate description with ${descs.get(desc)}`);
  titles.set(title, path);
  descs.set(desc, path);
  if (canon !== SITE + path) warn(`${path}: canonical ${canon}`);
  if (/chametagency\.org/.test(canon)) warn(`${path}: canonical to chametagency.org`);
  if (!/property="og:image" content="https:\/\/chametapps\.com\/og\//.test(html)) warn(`${path}: missing absolute og:image`);
  if (/SD Agency/i.test(html)) warn(`${path}: contains "SD Agency"`);
  if (/lorem ipsum/i.test(html)) warn(`${path}: lorem ipsum`);

  // Links
  for (const href of attrAll(html, /<a [^>]*href="([^"]+)"/g)) {
    if (href.startsWith("/") && !href.startsWith("//")) internal.add(href.split("#")[0]);
  }
  for (const src of attrAll(html, /(?:src|href)="(\/(?:images|og|_next\/static)[^"]+)"/g)) assets.add(src);
  for (const set of attrAll(html, /srcSet="([^"]+)"/gi)) set.split(",").forEach((s) => assets.add(s.trim().split(" ")[0]));

  // Registration role matching
  const hasAgency = html.includes(links.agencyRegistration.replace(/&/g, "&amp;")) || html.includes(links.agencyRegistration);
  const hasHost = html.includes(links.hostRegistration.replace(/&/g, "&amp;")) || html.includes(links.hostRegistration);
  const agencyPath = "/chamet-agency-registration/";
  const hostPath = "/chamet-host-registration/";
  if (path === agencyPath && (!hasAgency || hasHost)) warn(`${agencyPath} must link only the agency registration endpoint`);
  if (path === hostPath && (!hasHost || hasAgency)) warn(`${hostPath} must link only the host registration endpoint`);
  if (path !== agencyPath && path !== hostPath && (hasAgency || hasHost)) warn(`${path}: registration endpoint outside its role page`);

  // JSON-LD
  const blocks = attrAll(html, /<script type="application\/ld\+json">(.*?)<\/script>/gs);
  for (const b of blocks) {
    let data;
    try {
      data = JSON.parse(b.replace(/\\u003c/g, "<"));
    } catch {
      warn(`${path}: invalid JSON-LD`);
      continue;
    }
    if (data["@type"] === "BreadcrumbList") {
      const last = data.itemListElement.at(-1);
      if (last.item !== SITE + path) warn(`${path}: breadcrumb last item ${last.item}`);
      for (const it of data.itemListElement) if (!decode(html).includes(`>${it.name}<`)) warn(`${path}: breadcrumb "${it.name}" not visible`);
    }
    if (data["@type"] === "FAQPage") {
      const visible = visibleFaqs(html);
      if (visible.size !== data.mainEntity.length) warn(`${path}: ${data.mainEntity.length} FAQ schema entries but ${visible.size} visible FAQ cards`);
      for (const q of data.mainEntity) {
        const shown = visible.get(norm(q.name));
        if (shown === undefined) warn(`${path}: FAQ "${q.name}" not visible`);
        else if (shown !== norm(q.acceptedAnswer.text))
          warn(`${path}: FAQ answer for "${q.name}" differs from visible text\n    schema:  ${norm(q.acceptedAnswer.text)}\n    visible: ${shown}`);
      }
    }
    // Match schema types only, not prose that happens to contain words like "review".
    if (/"@type"\s*:\s*"(Review|AggregateRating|LocalBusiness)"/.test(JSON.stringify(data))) warn(`${path}: forbidden schema type`);
  }
}

for (const href of internal) {
  const res = await get(href);
  let status = res.status;
  if (status >= 300 && status < 400) {
    const loc = res.headers.get("location");
    status = (await get(loc)).status;
    warn(`internal link ${href} redirects to ${loc} (${status}) — link to the canonical URL instead`);
  }
  if (status !== 200) warn(`internal link ${href}: ${status}`);
}
for (const a of assets) {
  const res = await get(a, "follow");
  if (res.status !== 200) warn(`asset ${a}: ${res.status}`);
}

// Status codes for edge cases
const nf = await get("/this-page-does-not-exist/");
if (nf.status !== 404) warn(`unknown page returns ${nf.status} (expected 404)`);
const robots = await (await get("/robots.txt")).text();
if (/Disallow: \/_next|Disallow: \/images/.test(robots)) warn("robots.txt blocks rendering assets");

console.log(`Checked ${pages.length} pages, ${internal.size} internal links, ${assets.size} asset URLs.`);
if (errors.length) {
  console.log(`\n${errors.length} problem(s):\n- ` + errors.join("\n- "));
  process.exit(1);
}
console.log("All checks passed.");