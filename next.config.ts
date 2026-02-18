import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
};

export default nextConfig;
