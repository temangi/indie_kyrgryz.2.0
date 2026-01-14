import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "optim.tildacdn.com",
      },
    ],
  },
};

export default nextConfig;
