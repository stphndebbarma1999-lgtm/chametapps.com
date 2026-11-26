"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { GuideImage } from "@/lib/guides";

/**
 * Two fixed screenshots side by side (also on 320px phones). Images stay intact
 * (width 100%, height auto, contain). Clicking one opens an accessible enlarged view.
 */
export function GuidePhotos({ images, label }: { images: GuideImage[]; label: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState<number | null>(null);
  const current = open !== null ? images[open] : null;

  const show = (i: number, opener: HTMLButtonElement) => {
    openerRef.current = opener;
    setOpen(i);
    const d = dialogRef.current;
    if (d && !d.open) d.showModal();
    window.dispatchEvent(new CustomEvent("guide-interaction", { detail: { guide: label, action: "enlarge" } }));
  };
  const close = () => dialogRef.current?.close();

  const btnBase =
    "grid h-11 w-11 place-items-center rounded-full border border-lavender/50 bg-surface-2/90 text-white transition hover:bg-primary";

  return (
    <div className="guide-photos" role="group" aria-label={label}>
      {images.map((img, i) => (
        <div key={img.src} className="glow-frame" data-reveal>
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

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Enlarged screenshot"
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
