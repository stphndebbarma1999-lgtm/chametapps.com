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
import { IS_INDEXABLE, LINKS, SITE, absoluteUrl } from "@/lib/site";
import "./globals.css";

const inter = localFont({
  src: "./fonts/InterVariable-latin.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  title: { default: SITE.name, template: `%s | ${SITE.name}` },
  robots: IS_INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } : undefined,
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
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": absoluteUrl("/#organization"),
                name: SITE.name,
                url: absoluteUrl("/"),
                logo: absoluteUrl("/images/brand/icon-512.png"),
                description: "Certified Chamet agency website (owner-stated) providing Chamet agency and host registration guidance. Not the official Chamet platform.",
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    contactType: "customer support",
                    telephone: "+91-9233262700",
                    url: LINKS.whatsappChat,
                    availableLanguage: ["English"],
                  },
                ],
                sameAs: [LINKS.whatsappChannel],
              },
              {
                "@type": "WebSite",
                "@id": absoluteUrl("/#website"),
                name: SITE.name,
                url: absoluteUrl("/"),
                inLanguage: "en-IN",
                publisher: { "@id": absoluteUrl("/#organization") },
              },
            ],
          }}
        />
      </body>
    </html>
  );
}
