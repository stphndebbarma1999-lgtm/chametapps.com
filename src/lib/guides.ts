import data from "@/content/tutorial-images.json";
import dims from "@/content/image-dimensions.json";

export type GuideKey = keyof typeof data;
export type GuideImage = { src: string; alt: string; width: number; height: number };

/** Returns tutorial images for a guide, 1-based inclusive range, in numerical order. */
export function guideImages(guide: GuideKey, from = 1, to?: number): GuideImage[] {
  const list = data[guide].images.map(([, name, alt]) => {
    const src = `/images/guides/${guide}/${name}.webp`;
    const [width, height] = (dims as Record<string, number[]>)[src];
    return { src, alt, width, height };
  });
  return list.slice(from - 1, to ?? list.length);
}
