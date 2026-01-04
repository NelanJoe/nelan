import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
    ],
  },
  i18n: {
    locales: ["id", "en"],
    defaultLocale: "en",
    localeDetection: false,
  },
};

export default withContentCollections(nextConfig);
