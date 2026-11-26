/**
 * Animated wavy divider between a dark and a white section (transform-only motion).
 * Default: dark section above, white section below. flip: white above, dark below.
 */
export function WaveDivider({ flip = false, className = "" }: { flip?: boolean; from?: string; className?: string }) {
  const top = flip ? "#FFFFFF" : "#08030E";
  const bottom = flip ? "#08030E" : "#FFFFFF";
  const d1 = "M0 42 C 150 8 350 76 600 42 S 1050 8 1200 42 S 1650 76 1800 42 S 2250 8 2400 42 V 80 H 0 Z";
  const line = d1.replace(" V 80 H 0 Z", "");
  const d2 = "M0 34 C 200 2 400 66 600 34 S 1000 2 1200 34 S 1600 66 1800 34 S 2200 2 2400 34 V 80 H 0 Z";
  return (
    <div className={`wave-divider ${className}`} aria-hidden="true" data-anim style={{ background: top }}>
      <svg viewBox="0 0 2400 80" preserveAspectRatio="none" focusable="false">
        <path className="wave-b" d={d2} fill="#922BEE" opacity="0.45" />
        <path className="wave-a" d={d1} fill={bottom} />
        <path className="wave-a" d={line} fill="none" stroke="#C584FF" strokeOpacity="0.8" strokeWidth="2.5" />
      </svg>
    </div>
  );
}
