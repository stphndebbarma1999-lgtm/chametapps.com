"use client";

import { useEffect, useRef } from "react";
import { LINKS } from "@/lib/site";

const NEVER_KEY = "ca-channel-popup-never"; // "Don't show this again" (permanent, this browser)
const SESSION_KEY = "ca-channel-popup-seen"; // already shown during this visit
const DELAY_MS = 10_000;

function read(store: () => Storage, key: string): string | null {
  try {
    return store().getItem(key);
  } catch {
    return null;
  }
}
function write(store: () => Storage, key: string, value: string) {
  try {
    store().setItem(key, value);
  } catch {}
}

/**
 * WhatsApp channel invitation. Opens once per visit, 10 seconds after the page loads,
 * unless the visitor chose "Don't show this again". Accessible modal dialog:
 * Escape, the close button, "Not now" and a backdrop click all close it.
 */
export function ChannelPopup() {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (read(() => localStorage, NEVER_KEY) || read(() => sessionStorage, SESSION_KEY)) return;
    const t = window.setTimeout(() => {
      const d = ref.current;
      if (!d || d.open || document.querySelector("dialog[open]")) return;
      write(() => sessionStorage, SESSION_KEY, "1");
      d.showModal();
    }, DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  const close = () => ref.current?.close();
  const never = () => {
    write(() => localStorage, NEVER_KEY, "1");
    close();
  };

  return (
    <dialog
      ref={ref}
      className="channel-popup"
      aria-labelledby="channel-popup-title"
      aria-describedby="channel-popup-text"
      onClick={(e) => {
        if (e.target === ref.current) close();
      }}
    >
      <div className="relative rounded-3xl border border-lavender/40 bg-surface p-6 text-left shadow-[0_20px_60px_-10px_rgba(146,43,238,0.7)]">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 grid h-10 w-10 place-items-center rounded-full text-body hover:bg-surface-2 hover:text-white"
        >
          <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M5 5l10 10M15 5L5 15" />
          </svg>
        </button>
        <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-pink-deep text-white" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 10v4h3l5 4V6L7 10H4Zm12-1.5a4 4 0 0 1 0 7M18.5 6a7.5 7.5 0 0 1 0 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 id="channel-popup-title" className="pr-8 text-xl">
          Follow our WhatsApp channel
        </h2>
        <p id="channel-popup-text" className="mt-2">
          Join <strong className="text-white">{LINKS.whatsappChannelName}</strong> for Chamet agency and host updates.
        </p>
        <div className="mt-5 flex flex-col gap-2">
          <a
            href={LINKS.whatsappChannel}
            target="_blank"
            rel="noopener"
            className="btn btn-primary w-full"
            data-track="whatsapp_channel_follow"
            onClick={never}
          >
            Follow Channel
          </a>
          <button type="button" className="btn btn-secondary w-full" onClick={close} autoFocus>
            Not now
          </button>
          <button type="button" className="mt-1 min-h-11 text-sm font-semibold text-lavender underline underline-offset-4" onClick={never}>
            Don&apos;t show this again
          </button>
        </div>
      </div>
    </dialog>
  );
}
