import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    serverActions: {
      // Resumes are capped at 2 MB; the rest is multipart overhead headroom.
      bodySizeLimit: "3mb",
    },
  },
};

export default nextConfig;
