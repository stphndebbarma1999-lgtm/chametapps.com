"use client";

import { useEffect } from "react";

/**
 * Deterrent against casual image saving: blocks the right-click / long-press image menu and
 * dragging for <img> elements only. It cannot stop screenshots or someone fetching the file
 * directly — no website can — but it removes the one-tap "Save image" options.
 */
export function ImageGuard() {
  useEffect(() => {
    const block = (e: Event) => {
      if ((e.target as Element | null)?.closest?.("img")) e.preventDefault();
    };
    document.addEventListener("contextmenu", block);
    document.addEventListener("dragstart", block);
    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("dragstart", block);
    };
  }, []);
  return null;
}
