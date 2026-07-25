import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // GitHub Pages serves static files only, so emit a fully static site to out/.
    output: "export",

    // No Next.js image optimization server exists on Pages.
    images: { unoptimized: true },

    // Pages serves /about as /about/index.html; without this the route 404s.
    trailingSlash: true
};

export default nextConfig;
