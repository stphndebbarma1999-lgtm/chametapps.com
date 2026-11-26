"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { GuideImage } from "@/lib/guides";

/**
 * Screenshot carousel: exactly two intact portrait screenshots per view (from 320px up),
 * native swipe + scroll snap, compact previous/next arrows, no autoplay.
 * Clicking a screenshot opens it in an accessible modal dialog.
 */
export function GuideCarousel({ images, label }: { images: GuideImage[]; label: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(images.length <= 2);
  const [open, setOpen] = useState<number | null>(null);
  // Slides after the first two are only rendered once the carousel is near the viewport.
  const [near, setNear] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const update = useCallback(() => {
    const t = trackRef.current;
    if (!t) return;
    setAtStart(t.scrollLeft <= 4);
    setAtEnd(t.scrollLeft + t.clientWidth >= t.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    update();
    t.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      t.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const page = (dir: 1 | -1) => {
    const t = trackRef.current;
    if (!t) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    t.scrollBy({ left: dir * t.clientWidth, behavior: reduce ? "auto" : "smooth" });
    window.dispatchEvent(new CustomEvent("guide-interaction", { detail: { guide: label, action: dir > 0 ? "next" : "previous" } }));
  };

  const show = (i: number, opener?: HTMLButtonElement) => {
    if (opener) openerRef.current = opener;
    setOpen(i);
    const d = dialogRef.current;
    if (d && !d.open) d.showModal();
    window.dispatchEvent(new CustomEvent("guide-interaction", { detail: { guide: label, action: "enlarge" } }));
  };

  const close = () => dialogRef.current?.close();

  const btnBase =
    "grid h-11 w-11 place-items-center rounded-full border border-lavender/50 bg-surface-2/90 text-white transition hover:bg-primary disabled:cursor-default disabled:opacity-35 disabled:hover:bg-surface-2/90";

  const current = open !== null ? images[open] : null;

  return (
    <div ref={wrapRef} className="carousel-wrap mt-6" role="region" aria-roledescription="carousel" aria-label={label}>
      <div className="mb-1 flex items-center justify-between gap-3" data-avoid-fab>
        <button type="button" className={btnBase} onClick={() => page(-1)} disabled={atStart} aria-controls={id} aria-label={`Previous screenshots: ${label}`}>
          <Arrow dir="left" />
        </button>
        <span className="select-none text-xs tracking-[0.2em] text-lavender" aria-hidden="true">
          ← Swipe →
        </span>
        <button type="button" className={btnBase} onClick={() => page(1)} disabled={atEnd} aria-controls={id} aria-label={`Next screenshots: ${label}`}>
          <Arrow dir="right" />
        </button>
      </div>

      <div
        ref={trackRef}
        id={id}
        className="carousel-track"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            page(1);
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            page(-1);
          }
        }}
      >
        {images.map((img, i) => (
          <div key={img.src} className="carousel-slide" role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${images.length}`}>
            <div className="glow-frame">
              <button
                type="button"
                className="block w-full cursor-zoom-in rounded-[calc(1.25rem-3px)] p-0"
                onClick={(e) => show(i, e.currentTarget)}
                aria-label={`Enlarge screenshot ${i + 1}: ${img.alt}`}
                aria-haspopup="dialog"
              >
                {i < 2 || near ? (
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
                ) : (
                  <span
                    role="img"
                    aria-label={img.alt}
                    className="block w-full rounded-[calc(1.25rem-3px)] bg-surface-2"
                    style={{ aspectRatio: `${img.width} / ${img.height}` }}
                  />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={current ? `Screenshot ${(open ?? 0) + 1} of ${images.length}` : label}
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
            <div className="flex w-full items-center justify-between gap-2">
              <button type="button" className={btnBase} onClick={() => setOpen((o) => (o! > 0 ? o! - 1 : o))} disabled={open === 0} aria-label="Previous screenshot">
                <Arrow dir="left" />
              </button>
              <span className="text-sm text-body">
                {(open ?? 0) + 1} / {images.length}
              </span>
              <div className="flex gap-2">
                <button type="button" className={btnBase} onClick={() => setOpen((o) => (o! < images.length - 1 ? o! + 1 : o))} disabled={open === images.length - 1} aria-label="Next screenshot">
                  <Arrow dir="right" />
                </button>
                <button type="button" className={btnBase} onClick={close} aria-label="Close enlarged screenshot" autoFocus>
                  <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M5 5l10 10M15 5L5 15" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="glow-frame min-h-0">
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

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {dir === "left" ? <path d="M12.5 4.5 7 10l5.5 5.5" /> : <path d="M7.5 4.5 13 10l-5.5 5.5" />}
    </svg>
  );
}
