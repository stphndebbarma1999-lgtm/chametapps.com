import type { ReactNode } from "react";
import type { GuideImage } from "@/lib/guides";
import { GuidePhotos } from "./GuidePhotos";

/**
 * Fixed (non-sliding) guide layout: two written steps, then their two screenshots
 * side by side, then the next two steps and their screenshots, and so on.
 * Step i is illustrated by image i. An odd final step shows one photo with an empty partner slot.
 */
export function GuideBlock({
  id,
  heading,
  level = 2,
  intro,
  steps,
  start = 1,
  images,
  carouselLabel,
  after,
}: {
  id: string;
  heading: ReactNode;
  level?: 2 | 3;
  intro?: ReactNode;
  steps: ReactNode[];
  start?: number;
  images: GuideImage[];
  carouselLabel: string;
  after?: ReactNode;
}) {
  const H = level === 2 ? "h2" : "h3";
  const pairs: { steps: ReactNode[]; images: GuideImage[]; first: number }[] = [];
  for (let i = 0; i < Math.max(steps.length, images.length); i += 2) {
    pairs.push({ steps: steps.slice(i, i + 2), images: images.slice(i, i + 2), first: start + i });
  }
  return (
    <div className="prose-site" aria-labelledby={id} role="group">
      <H id={id} data-reveal className={level === 3 ? "text-xl sm:text-2xl" : undefined}>
        {heading}
      </H>
      {intro}
      {pairs.map((p) => (
        <div key={p.first} className="guide-pair">
          {p.steps.length > 0 && (
            <ol className="steps" start={p.first} style={{ ["--start" as string]: p.first - 1 }} data-reveal-stagger>
              {p.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          )}
          {p.images.length > 0 && <GuidePhotos images={p.images} label={`${carouselLabel}, steps ${p.first}–${p.first + p.images.length - 1}`} />}
        </div>
      ))}
      {after}
    </div>
  );
}
