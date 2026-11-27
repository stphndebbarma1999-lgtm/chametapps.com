/** Shared content model for long-form page and blog copy. */

export type ContentBlock =
  | { kind: "p"; text: string }
  | { kind: "list"; items: string[]; ordered?: boolean }
  | { kind: "steps"; items: string[] }
  | { kind: "table"; caption?: string; head: string[]; rows: string[][] }
  | { kind: "note"; text: string }
  | { kind: "cards"; items: { title: string; text: string }[] }
  | { kind: "sub"; heading: string; blocks: ContentBlock[] };

export type ContentSection = { id: string; heading: string; blocks: ContentBlock[] };

export type FaqEntry = { q: string; a: string };

export type PageContent = {
  /** Short direct answer rendered in the Quick answer box and used for speakable schema. */
  quickAnswer: string;
  sections: ContentSection[];
  faqs: FaqEntry[];
};

export type BlogPost = {
  slug: string;
  category: string;
  published: string;
  updated: string;
  readingMinutes: number;
  excerpt: string;
  keywords: string[];
  quickAnswer: string;
  sections: ContentSection[];
  faqs: FaqEntry[];
  related: { href: string; label: string }[];
};

export const p = (text: string): ContentBlock => ({ kind: "p", text });
export const list = (items: string[], ordered = false): ContentBlock => ({ kind: "list", items, ordered });
export const steps = (items: string[]): ContentBlock => ({ kind: "steps", items });
export const note = (text: string): ContentBlock => ({ kind: "note", text });
export const cards = (items: { title: string; text: string }[]): ContentBlock => ({ kind: "cards", items });
export const table = (head: string[], rows: string[][], caption?: string): ContentBlock => ({ kind: "table", head, rows, caption });
export const sub = (heading: string, blocks: ContentBlock[]): ContentBlock => ({ kind: "sub", heading, blocks });
