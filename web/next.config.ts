import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [`localhost`],
  },
  i18n: {
    locales: ["en", 'es'],
    defaultLocale: "es",
  }
};

export default nextConfig;
