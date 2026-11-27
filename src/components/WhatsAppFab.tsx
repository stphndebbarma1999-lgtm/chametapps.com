"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { WA, whatsappHref } from "@/lib/site";
import { WhatsAppIcon } from "./Buttons";

const MESSAGES: Record<string, string> = {
  "/chamet-agency-registration/": WA.agency,
  "/chamet-host-registration/": WA.host,
  "/chamet-agency-login/": WA.dashboard,
  "/chamet-withdrawal/": WA.withdrawal,
  "/chamet-host-withdrawal/": WA.hostWithdrawal,
  "/chamet-agency-withdrawal/": WA.agencyWithdrawal,
  "/metwallet-withdrawal/": WA.metwallet,
  "/chamet-app-download/": WA.download,
  "/chamet-help/": WA.help,
  "/contact/": WA.contact,
};

/**
 * Sticky direct-chat button (purple/white, no green). It hides while the footer or any
 * [data-avoid-fab] element is in the bottom zone of the viewport, so it never covers it, and it respects the device safe area.
 */
export function WhatsAppFab() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
        setHidden(visible.size > 0);
      },
      { rootMargin: "-72% 0px 0px 0px" },
    );
    document.querySelectorAll("[data-footer], [data-avoid-fab]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <a
      href={whatsappHref(MESSAGES[pathname] ?? WA.general)}
      target="_blank"
      rel="noopener"
      data-track="whatsapp_chat"
      aria-label="Chat with ChametApps.com on WhatsApp"
      className={`fixed z-30 inline-flex items-center gap-2 rounded-full border border-white/25 bg-gradient-to-r from-primary to-pink-deep px-4 py-3 font-bold text-white no-underline shadow-[0_8px_28px_-6px_rgba(240,44,196,0.7)] transition-[opacity,transform] duration-300 ${hidden ? "pointer-events-none translate-y-4 opacity-0" : "opacity-100"}`}
      style={{ right: "max(1rem, env(safe-area-inset-right))", bottom: "max(1rem, env(safe-area-inset-bottom))" }}
      tabIndex={hidden ? -1 : undefined}
      aria-hidden={hidden || undefined}
    >
      <WhatsAppIcon size={22} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}