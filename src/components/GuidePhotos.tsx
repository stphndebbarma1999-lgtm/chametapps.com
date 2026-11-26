"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { GuideImage } from "@/lib/guides";

const ZOOM_MS = 280;
const EASE = "cubic-bezier(0.2, 0.7, 0.2, 1)";

function reducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Two fixed screenshots side by side (also on 320px phones). Images stay intact
 * (width 100%, height auto, contain). The right photo appears a moment after the left one.
 * Clicking one opens an accessible enlarged view that zooms smoothly out of the tapped photo
 * and back into it on close (no motion when the visitor prefers reduced motion).
 */
export function GuidePhotos({ images, label }: { images: GuideImage[]; label: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const closingRef = useRef(false);
  const [open, setOpen] = useState<number | null>(null);
  const current = open !== null ? images[open] : null;

  /** Transform that maps the enlarged frame onto the tapped thumbnail. */
  const fromThumb = () => {
    const frame = frameRef.current;
    const opener = openerRef.current;
    if (!frame || !opener) return null;
    const a = opener.getBoundingClientRect();
    const b = frame.getBoundingClientRect();
    if (!b.width || !b.height) return null;
    const dx = a.left + a.width / 2 - (b.left + b.width / 2);
    const dy = a.top + a.height / 2 - (b.top + b.height / 2);
    const s = Math.max(0.2, Math.min(1, a.width / b.width));
    return `translate(${dx}px, ${dy}px) scale(${s})`;
  };

  const show = (i: number, opener: HTMLButtonElement) => {
    openerRef.current = opener;
    setOpen(i);
    const d = dialogRef.current;
    if (d && !d.open) d.showModal();
    window.dispatchEvent(new CustomEvent("guide-interaction", { detail: { guide: label, action: "enlarge" } }));
    if (reducedMotion()) return;
    // Wait one frame so the enlarged image is laid out, then zoom out of the thumbnail.
    requestAnimationFrame(() => {
      const from = fromThumb();
      if (!from || !frameRef.current) return;
      frameRef.current.animate([{ transform: from, opacity: 0.4 }, { transform: "none", opacity: 1 }], { duration: ZOOM_MS, easing: EASE });
    });
  };

  const close = () => {
    const d = dialogRef.current;
    if (!d || !d.open || closingRef.current) return;
    const from = reducedMotion() ? null : fromThumb();
    if (!from || !frameRef.current) {
      d.close();
      return;
    }
    closingRef.current = true;
    const anim = frameRef.current.animate([{ transform: "none", opacity: 1 }, { transform: from, opacity: 0.3 }], {
      duration: ZOOM_MS - 40,
      easing: EASE,
    });
    const done = () => {
      closingRef.current = false;
      d.close();
    };
    anim.onfinish = done;
    anim.oncancel = done;
  };

  const btnBase =
    "grid h-11 w-11 place-items-center rounded-full border border-lavender/50 bg-surface-2/90 text-white transition hover:bg-primary";

  return (
    <div role="group" aria-label={label}>
      <div className="guide-photos" data-reveal-stagger="180">
        {images.map((img, i) => (
          <div key={img.src} className="glow-frame">
            <button
              type="button"
              className="block w-full cursor-zoom-in rounded-[calc(1.25rem-3px)] p-0"
              onClick={(e) => show(i, e.currentTarget)}
              aria-label={`Enlarge screenshot: ${img.alt}`}
              aria-haspopup="dialog"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(min-width: 768px) 360px, 50vw"
                loading="lazy"
                quality={85}
                className="carousel-shot rounded-[calc(1.25rem-3px)]"
              />
            </button>
          </div>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Enlarged screenshot"
        onCancel={(e) => {
          // Escape: run the zoom-back animation instead of closing instantly.
          e.preventDefault();
          close();
        }}
        onClose={() => {
          setOpen(null);
          openerRef.current?.focus();
        }}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        {current && (
          <div className="flex max-h-[94dvh] flex-col items-center gap-3">
            <div className="flex w-full justify-end">
              <button type="button" className={btnBase} onClick={close} aria-label="Close enlarged screenshot" autoFocus>
                <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M5 5l10 10M15 5L5 15" />
                </svg>
              </button>
            </div>
            <div ref={frameRef} className="glow-frame min-h-0">
              <Image
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="(min-width: 640px) 540px, 94vw"
                quality={85}
                loading="eager"
                className="block rounded-[calc(1.25rem-3px)] bg-white object-contain"
                style={{
                  height: `min(calc(94dvh - 4.5rem), calc((94vw - 6px) * ${current.height / current.width}), ${Math.round((540 * current.height) / current.width)}px)`,
                  width: "auto",
                  maxWidth: "calc(94vw - 6px)",
                }}
              />
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
