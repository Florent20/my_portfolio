import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  experimental: {
    turbopackClientSideNestedAsyncChunking: true,
  },
};

export default nextConfig;