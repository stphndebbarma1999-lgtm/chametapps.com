import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@/components/Analytics";
import { ChannelPopup } from "@/components/ChannelPopup";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ImageGuard } from "@/components/ImageGuard";
import { JsonLd } from "@/components/JsonLd";
import { SiteEffects } from "@/components/SiteEffects";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { IS_INDEXABLE, SITE } from "@/lib/site";
import { siteGraph } from "@/lib/seo";
import "./globals.css";

const inter = localFont({
  src: "./fonts/InterVariable-latin.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

// Google Search Console HTML-tag verification token. Env var wins so previews can override.
const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION || "V92Wpr7UKAM0hDzSY1RcO5GoFeyH74Ptqz6IG_6sHP4";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Chamet agency and host guidance",
  title: { default: "Chamet Agency & Host Registration in India | ChametApps", template: `%s | ${SITE.name}` },
  robots: IS_INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
  verification: { google: GSC_VERIFICATION },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#08030E",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-white px-4 py-2 font-bold text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <WhatsAppFab />
        <ChannelPopup />
        <SiteEffects />
        <ImageGuard />
        <Analytics />
        <JsonLd data={siteGraph()} />
      </body>
    </html>
  );
}