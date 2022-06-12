const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: false,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = withPWA({
  nextConfig,
  swcMinify: true,
  pwa: {
    // dest: "public",
    register: true,
    // skipWaiting: true,
    sw: "/sw.js",
    // disable: process.env.NODE_ENV === "development",
  },
  // images: {
  //   loader: "akamai",
  //   path: "",
  // },
});
