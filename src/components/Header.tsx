"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/chamet-agency-registration/", label: "Agency" },
  { href: "/chamet-host-registration/", label: "Host" },
  { href: "/chamet-agency-login/", label: "Dashboard" },
] as const;

const WITHDRAWALS = [
  { href: "/chamet-withdrawal/", label: "Overview" },
  { href: "/chamet-host-withdrawal/", label: "Host" },
  { href: "/chamet-agency-withdrawal/", label: "Agency" },
  { href: "/metwallet-withdrawal/", label: "MetWallet" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const subRef = useRef<HTMLLIElement>(null);
  const [lastPath, setLastPath] = useState(pathname);

  // Close menus after navigation (state adjustment during render, no effect needed).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setSubOpen(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSubOpen(false);
        setMenuOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (subRef.current && !subRef.current.contains(e.target as Node)) setSubOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href);
  const inWithdrawals = WITHDRAWALS.some((w) => pathname === w.href);
  const linkCls = (active: boolean) =>
    `block rounded-full px-3.5 py-2.5 font-semibold no-underline transition ${active ? "bg-surface-2 text-white" : "text-body hover:bg-surface-2/70 hover:text-white"}`;

  return (
    <header className="sticky top-0 z-40 border-b border-lavender/15 bg-ink/85 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <Logo variant="agency" />
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-lavender/40 text-white lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <nav
          id="site-nav"
          aria-label="Main"
          className={`${menuOpen ? "block" : "hidden"} absolute inset-x-0 top-16 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-lavender/15 bg-ink px-4 pb-5 lg:static lg:block lg:max-h-none lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0`}
        >
          <ul className="flex flex-col gap-1 pt-2 lg:flex-row lg:items-center lg:pt-0">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={linkCls(isActive(n.href))} aria-current={isActive(n.href) ? "page" : undefined}>
                  {n.label}
                </Link>
              </li>
            ))}
            <li ref={subRef} className="relative">
              <button
                type="button"
                className={`${linkCls(inWithdrawals)} flex w-full items-center justify-between gap-1.5 text-left lg:w-auto`}
                aria-expanded={subOpen}
                aria-controls="withdrawals-menu"
                onClick={() => setSubOpen((o) => !o)}
              >
                Withdrawals
                <svg aria-hidden="true" viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className={`transition ${subOpen ? "rotate-180" : ""}`}>
                  <path d="m5 8 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <ul
                id="withdrawals-menu"
                className={`${subOpen ? "block" : "hidden"} mt-1 ml-3 border-l border-lavender/25 pl-2 lg:absolute lg:right-0 lg:mt-2 lg:ml-0 lg:w-56 lg:rounded-2xl lg:border lg:border-lavender/30 lg:bg-surface lg:p-2 lg:shadow-[0_16px_40px_-12px_rgba(146,43,238,0.6)]`}
              >
                {WITHDRAWALS.map((w) => (
                  <li key={w.href}>
                    <Link href={w.href} className={linkCls(pathname === w.href)} aria-current={pathname === w.href ? "page" : undefined}>
                      {w.label === "Overview" ? "Overview" : `${w.label} ${w.label === "MetWallet" ? "Cash Out" : "Withdrawal"}`}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/chamet-help/" className={linkCls(isActive("/chamet-help/"))} aria-current={isActive("/chamet-help/") ? "page" : undefined}>
                Help
              </Link>
            </li>
            <li>
              <Link href="/blog/" className={linkCls(pathname.startsWith("/blog"))} aria-current={pathname.startsWith("/blog") ? "page" : undefined}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}