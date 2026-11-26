"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Progressive enhancements, all optional:
 *  - Scroll reveal for [data-reveal] elements that start BELOW the viewport (content stays
 *    visible without JS, and anything already on screen is never hidden).
 *  - Children of [data-reveal-stagger] reveal with a small stagger (the attribute value, if set,
 *    is the step in ms; default 90).
 *  - Pauses CSS animations of [data-anim] elements while they are offscreen.
 */
export function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observers: IntersectionObserver[] = [];

    // Offscreen animation pausing
    const animIO = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("anim-paused", !e.isIntersecting)),
      { rootMargin: "100px" },
    );
    document.querySelectorAll("[data-anim]").forEach((el) => animIO.observe(el));
    observers.push(animIO);

    if (!reduce && "IntersectionObserver" in window) {
      const targets: HTMLElement[] = [];
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => targets.push(el));
      document.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
        const step = Number(group.dataset.revealStagger) || 90;
        Array.from(group.children).forEach((child, i) => {
          const c = child as HTMLElement;
          c.style.setProperty("--reveal-delay", `${Math.min(i, 6) * step}ms`);
          targets.push(c);
        });
      });
      const vh = window.innerHeight;
      const revealIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("reveal-in");
              e.target.classList.remove("reveal-pending");
              revealIO.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
      );
      targets.forEach((el) => {
        if (el.getBoundingClientRect().top > vh * 0.95) {
          el.classList.add("reveal-pending");
          revealIO.observe(el);
        }
      });
      observers.push(revealIO);
      // Safety net: never leave content hidden.
      const t = window.setTimeout(() => {
        document.querySelectorAll(".reveal-pending").forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight) el.classList.replace("reveal-pending", "reveal-in");
        });
      }, 2500);
      return () => {
        window.clearTimeout(t);
        observers.forEach((o) => o.disconnect());
      };
    }
    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  return null;
}
