import { absoluteUrl, LINKS, SITE } from "./site";
import { ROUTES, heroImage, type RouteDef, type RouteKey } from "./routes";

type Json = Record<string, unknown>;

const ORG_ID = absoluteUrl("/#organization");
const SITE_ID = absoluteUrl("/#website");
const SERVICE_ID = absoluteUrl("/#service");

export function organizationSchema(): Json {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: "Chamet Apps",
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/brand/icon-512.png"),
      width: 512,
      height: 512,
    },
    image: absoluteUrl("/images/brand/icon-512.png"),
    description:
      "Independent Chamet agency website (certified agency, owner-stated) providing illustrated agency and host registration, dashboard and withdrawal guidance for users in India. Not the official Chamet platform.",
    areaServed: { "@type": "Country", name: "India" },
    knowsAbout: [
      "Chamet agency registration",
      "Chamet host registration",
      "Chamet agency dashboard",
      "Chamet withdrawal",
      "MetWallet cash out",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+91-9233262700",
        url: LINKS.whatsappChat,
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
    sameAs: [LINKS.whatsappChannel],
  };
}

export function websiteSchema(): Json {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    name: SITE.name,
    url: absoluteUrl("/"),
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
    about: { "@id": SERVICE_ID },
  };
}

export function serviceSchema(): Json {
  return {
    "@type": "Service",
    "@id": SERVICE_ID,
    name: "Chamet agency and host onboarding guidance",
    serviceType: "Chamet agency and host registration guidance",
    description:
      "Step-by-step help with Chamet agency registration, host account setup, the agency dashboard, MetWallet linking and withdrawal checks, delivered online across India.",
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "India" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: LINKS.whatsappChat,
      availableLanguage: ["en", "hi"],
    },
  };
}

export function webPageSchema(key: RouteKey, wordCount?: number): Json {
  const route: RouteDef = ROUTES[key];
  const url = absoluteUrl(route.path);
  const img = heroImage(route.hero);
  const isArticle = route.type === "article";
  return {
    "@type": isArticle ? "BlogPosting" : "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: route.title,
    headline: isArticle ? route.title : undefined,
    description: route.description,
    isPartOf: { "@id": SITE_ID },
    about: [{ "@id": SERVICE_ID }, { "@id": ORG_ID }],
    inLanguage: "en-IN",
    datePublished: route.published,
    dateModified: route.lastModified,
    keywords: isArticle ? route.keywords.join(", ") : undefined,
    articleSection: isArticle ? "Chamet guides" : undefined,
    wordCount: isArticle ? wordCount : undefined,
    image: isArticle ? [absoluteUrl(img.og)] : undefined,
    author: isArticle ? { "@id": ORG_ID } : undefined,
    publisher: isArticle ? { "@id": ORG_ID } : undefined,
    mainEntityOfPage: url,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(img.og),
      width: 1200,
      height: 750,
      caption: img.alt,
    },
    breadcrumb: { "@id": `${url}#breadcrumb` },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["#quick-answer"] },
  };
}

export function articleSchema(key: RouteKey): Json {
  const route: RouteDef = ROUTES[key];
  const url = absoluteUrl(route.path);
  const img = heroImage(route.hero);
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: route.title,
    description: route.description,
    image: [absoluteUrl(img.og)],
    datePublished: route.published,
    dateModified: route.lastModified,
    inLanguage: "en-IN",
    articleSection: "Chamet guides",
    keywords: route.keywords.join(", "),
    wordCount: undefined,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@id": `${url}#webpage` },
    isPartOf: { "@id": SITE_ID },
  };
}

export function howToSchema(
  name: string,
  description: string,
  path: string,
  stepList: { name: string; text: string }[],
): Json {
  return {
    "@type": "HowTo",
    name,
    description,
    inLanguage: "en-IN",
    mainEntityOfPage: absoluteUrl(path),
    step: stepList.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url: `${absoluteUrl(path)}#step-${i + 1}`,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]): Json {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Site-wide identity graph rendered once in the root layout. */
export function siteGraph(): Json {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), websiteSchema(), serviceSchema()],
  };
}
