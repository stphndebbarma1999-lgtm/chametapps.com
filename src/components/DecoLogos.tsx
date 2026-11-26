type Spot = { top?: string; left?: string; right?: string; bottom?: string; size: number; rot?: number; mobile?: boolean; delay?: number };

/** Low-opacity floating Chamet emblems behind a section. Purely decorative. */
export function DecoLogos({ spots }: { spots: Spot[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true" data-anim>
      {spots.map((s, i) => (
        // eslint-disable-next-line @next/next/no-img-element -- decorative SVG
        <img
          key={i}
          src="/images/brand/chamet-emblem-white.svg"
          alt=""
          width={s.size}
          height={Math.round(s.size * 1.2)}
          loading="lazy"
          className={`deco-logo ${s.mobile ? "" : "deco-hide-mobile"}`}
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            bottom: s.bottom,
            width: s.size,
            height: "auto",
            ["--rot" as string]: `${s.rot ?? -8}deg`,
            animationDelay: `${s.delay ?? i * -2.3}s`,
          }}
        />
      ))}
    </div>
  );
}
