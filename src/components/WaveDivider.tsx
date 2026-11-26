/** Animated wavy purple divider. Two translating SVG paths (transform only, no filters). */
export function WaveDivider({ flip = false, from = "#08030E", className = "" }: { flip?: boolean; from?: string; className?: string }) {
  const d1 = "M0 42 C 150 8 350 76 600 42 S 1050 8 1200 42 S 1650 76 1800 42 S 2250 8 2400 42 V 80 H 0 Z";
  const d2 = "M0 34 C 200 2 400 66 600 34 S 1000 2 1200 34 S 1600 66 1800 34 S 2200 2 2400 34 V 80 H 0 Z";
  return (
    <div className={`wave-divider ${className}`} aria-hidden="true" data-anim style={{ background: from, transform: flip ? "scaleY(-1)" : undefined }}>
      <svg viewBox="0 0 2400 80" preserveAspectRatio="none" focusable="false">
        <path className="wave-b" d={d2} fill="#32104F" opacity="0.75" />
        <path className="wave-a" d={d1} fill="#180725" />
        <path className="wave-a" d={d1} fill="none" stroke="#922BEE" strokeOpacity="0.6" strokeWidth="2" />
      </svg>
    </div>
  );
}
