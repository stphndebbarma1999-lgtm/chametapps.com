"use client";

import Script from "next/script";
import { useEffect, useSyncExternalStore } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;
const KEY = "ca-analytics-consent";

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: unknown[];
  }
}

/**
 * Optional GA4. Nothing renders unless NEXT_PUBLIC_GA4_ID is set. When set, GA4 loads only
 * after the visitor accepts. Tracked events carry no personal data: only the event name,
 * the link's destination host and the page path.
 */
type Consent = "granted" | "denied" | null | "unknown";
const listeners = new Set<() => void>();
let memory: Consent = null; // fallback when storage is unavailable
function readConsent(): Consent {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : memory;
  } catch {
    return memory;
  }
}
function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function Analytics() {
  const consent = useSyncExternalStore<Consent>(subscribe, readConsent, () => "unknown");

  useEffect(() => {
    if (!GA_ID || consent !== "granted") return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest<HTMLAnchorElement>("[data-track]");
      if (!a || !window.gtag) return;
      let host = "";
      try {
        host = new URL(a.href, location.href).host;
      } catch {}
      window.gtag("event", a.dataset.track, { link_domain: host, page_path: location.pathname });
    };
    const onGuide = (e: Event) => {
      const d = (e as CustomEvent<{ guide: string; action: string }>).detail;
      window.gtag?.("event", "guide_interaction", { guide: d.guide, action: d.action, page_path: location.pathname });
    };
    document.addEventListener("click", onClick, { capture: true });
    window.addEventListener("guide-interaction", onGuide);
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      window.removeEventListener("guide-interaction", onGuide);
    };
  }, [consent]);

  if (!GA_ID || consent === "unknown") return null;

  const decide = (v: "granted" | "denied") => {
    memory = v;
    try {
      localStorage.setItem(KEY, v);
    } catch {}
    listeners.forEach((l) => l());
  };

  return (
    <>
      {consent === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
      {consent === null && (
        <div role="region" aria-label="Analytics choice" className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-lg rounded-2xl border border-lavender/40 bg-surface p-4 text-sm shadow-xl sm:inset-x-auto sm:right-4">
          <p>
            May we use Google Analytics to count page visits and which guide and outbound buttons are used? No names, phone numbers or passwords are collected. See our{" "}
            <a href="/privacy/" className="underline">privacy policy</a>.
          </p>
          <div className="mt-3 flex gap-2">
            <button type="button" className="btn btn-primary min-h-11 px-4 py-2" onClick={() => decide("granted")}>
              Accept
            </button>
            <button type="button" className="btn btn-secondary min-h-11 px-4 py-2" onClick={() => decide("denied")}>
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
