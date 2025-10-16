import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // No basePath needed if using custom domain or root of Pages
  // basePath: process.env.NODE_ENV === 'production' ? '/eaos-web' : '',
};

export default nextConfig;
