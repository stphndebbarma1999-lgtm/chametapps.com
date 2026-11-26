import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ChametApps.com",
    short_name: "ChametApps",
    description: "Chamet agency and host registration guidance.",
    start_url: "/",
    display: "browser",
    background_color: "#08030E",
    theme_color: "#08030E",
    icons: [
      { src: "/images/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/images/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
