import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ChametApps.com — Chamet agency and host guidance",
    short_name: "ChametApps",
    description:
      "Independent step-by-step guides for Chamet agency registration, host onboarding, dashboard login and MetWallet withdrawal in India.",
    start_url: "/",
    scope: "/",
    display: "browser",
    background_color: "#08030E",
    theme_color: "#08030E",
    lang: "en-IN",
    categories: ["education", "business"],
    icons: [
      { src: "/images/brand/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/images/brand/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
