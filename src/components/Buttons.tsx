import Link from "next/link";
import type { ReactNode } from "react";
import { LINKS, whatsappHref } from "@/lib/site";

type Variant = "primary" | "secondary";

export function ButtonLink({ href, children, variant = "primary", track }: { href: string; children: ReactNode; variant?: Variant; track?: string }) {
  return (
    <Link href={href} className={`btn btn-${variant}`} data-track={track}>
      {children}
    </Link>
  );
}

/** Outbound link. Referral registration links are marked rel="sponsored". */
export function ExternalButton({
  href,
  children,
  variant = "primary",
  track,
  sponsored = false,
  label,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  track?: string;
  sponsored?: boolean;
  label?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel={sponsored ? "sponsored noopener" : "noopener"}
      className={`btn btn-${variant}`}
      data-track={track}
      aria-label={label}
    >
      {children}
      <ExternalIcon />
    </a>
  );
}

export function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
      <path d="M11 3h6v6M17 3l-8 8M8 5H4v11h11v-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className="shrink-0">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

/** Direct WhatsApp chat with a page-specific, URL-encoded message. */
export function WhatsAppButton({ message, children, variant = "secondary" }: { message: string; children: ReactNode; variant?: Variant }) {
  return (
    <a href={whatsappHref(message)} target="_blank" rel="noopener" className={`btn btn-${variant}`} data-track="whatsapp_chat">
      <WhatsAppIcon />
      {children}
    </a>
  );
}

export function ChannelButton({ variant = "secondary" }: { variant?: Variant }) {
  return (
    <a href={LINKS.whatsappChannel} target="_blank" rel="noopener" className={`btn btn-${variant}`} data-track="whatsapp_channel_follow">
      <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
        <path d="M4 10v4h3l5 4V6L7 10H4Zm12-1.5a4 4 0 0 1 0 7M18.5 6a7.5 7.5 0 0 1 0 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Follow WhatsApp Channel
    </a>
  );
}
