import type { ReactNode } from "react";
import type { GuideImage } from "@/lib/guides";
import { GuideCarousel } from "./GuideCarousel";

/** Written, indexable numbered steps first; the screenshot carousel directly below. */
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
  return (
    <div className="prose-site" aria-labelledby={id} role="group">
      <H id={id} data-reveal className={level === 3 ? "text-xl sm:text-2xl" : undefined}>
        {heading}
      </H>
      {intro}
      <ol className="steps" start={start} style={{ ["--start" as string]: start - 1 }} data-reveal-stagger>
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
      <GuideCarousel images={images} label={carouselLabel} />
      {after}
    </div>
  );
}
