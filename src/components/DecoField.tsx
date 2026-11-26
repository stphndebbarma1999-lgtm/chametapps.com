/**
 * Decorative floating Chamet emblems behind a section's content (aria-hidden, no text).
 * Spots repeat every 1600px of section height, so any section shows roughly 4–5 logos per
 * screen. Sizes vary (small to medium). Colours: violet on white sections; a mix of white
 * and violet on dark sections. Motion is a slow transform-only float, paused offscreen and
 * disabled for prefers-reduced-motion.
 */
type Spot = { top: number; side: "left" | "right"; pos: number; size: number; tint: "w" | "v"; dur: number; delay: number; rot: number };

const BLOCK: Spot[] = [
  { top: 40, side: "left", pos: 3, size: 46, tint: "w", dur: 8.5, delay: 0, rot: -10 },
  { top: 150, side: "right", pos: 6, size: 34, tint: "v", dur: 7.2, delay: -2, rot: 8 },
  { top: 330, side: "left", pos: 40, size: 26, tint: "v", dur: 9.4, delay: -4, rot: 0 },
  { top: 470, side: "right", pos: 2, size: 58, tint: "w", dur: 10, delay: -1, rot: 12 },
  { top: 640, side: "left", pos: 8, size: 30, tint: "v", dur: 7.8, delay: -3, rot: -6 },
  { top: 820, side: "right", pos: 30, size: 40, tint: "w", dur: 8.8, delay: -5, rot: 6 },
  { top: 1000, side: "left", pos: 2, size: 52, tint: "v", dur: 9.8, delay: -2.5, rot: -12 },
  { top: 1180, side: "right", pos: 10, size: 28, tint: "w", dur: 7.5, delay: -6, rot: 10 },
  { top: 1380, side: "left", pos: 27, size: 36, tint: "w", dur: 8.2, delay: -1.5, rot: 4 },
];
const BLOCK_HEIGHT = 1600;
const BLOCKS = 3; // covers sections up to 4800px tall

const SPOTS: Spot[] = Array.from({ length: BLOCKS }, (_, b) =>
  BLOCK.map((s) => ({
    ...s,
    top: s.top + b * BLOCK_HEIGHT,
    // mirror alternate blocks so the pattern does not visibly repeat
    side: b % 2 === 1 ? (s.side === "left" ? "right" : "left") : s.side,
    delay: s.delay - b * 1.3,
  })),
).flat();

export function DecoField({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <div className="deco-field" aria-hidden="true" data-anim>
      {SPOTS.map((s, i) => {
        const violet = tone === "light" || s.tint === "v";
        return (
          <span
            key={i}
            className={`deco-mark ${violet ? (tone === "light" ? "deco-violet-light" : "deco-violet") : "deco-white"}`}
            style={{
              top: s.top,
              [s.side]: `${s.pos}%`,
              width: s.size,
              ["--dur" as string]: `${s.dur}s`,
              ["--delay" as string]: `${s.delay}s`,
              ["--rot" as string]: `${s.rot}deg`,
            }}
          />
        );
      })}
    </div>
  );
}
