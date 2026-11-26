import type { NextConfig } from "next";

const isIndexable =
  process.env.VERCEL_ENV !== undefined
    ? process.env.VERCEL_ENV === "production"
    : process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "false";

const nextConfig: NextConfig = {
  // Directory-style URLs end with "/", e.g. /chamet-help/. Paths with a file
  // extension (/agency.html, /host.html, /sitemap.xml) are left untouched by Next.js.
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
    deviceSizes: [360, 480, 640, 828, 1080, 1280, 1536, 1920, 2172],
    imageSizes: [96, 160, 200, 240, 320],
  },
  async redirects() {
    // Consolidate the production Vercel alias onto the main domain with one permanent hop.
    // Matches this exact host only: other *.vercel.app preview URLs, localhost and
    // chametapps.com are unaffected. Query strings are forwarded automatically.
    const has = [{ type: "host" as const, value: "chametapps-com.vercel.app" }];
    return [
      { source: "/", has, destination: "https://chametapps.com/", permanent: true },
      // Files keep their exact path (e.g. /agency.html, /sitemap.xml) — no trailing slash added.
      { source: "/:file(.*\\.[A-Za-z0-9]+)", has, destination: "https://chametapps.com/:file", permanent: true },
      // Page directories keep the site's trailing-slash form (e.g. /chamet-help/).
      { source: "/:path+", has, destination: "https://chametapps.com/:path+/", permanent: true },
    ];
  },
  async headers() {
    const headers = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
    ];
    if (!isIndexable) headers.push({ key: "X-Robots-Tag", value: "noindex, nofollow" });
    return [{ source: "/:path*", headers }];
  },
};

export default nextConfig;
