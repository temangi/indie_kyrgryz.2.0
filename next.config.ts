import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
    qualities: [75, 90],
  },

  async redirects() {
    return [
      // -------------------------------------------------------
      // 🔴 404 страницы — исправляем срочно
      // -------------------------------------------------------
      {
        source: "/destinations/world-nomad-games",
        destination: "/tours",
        statusCode: 301, // 301 — Google передаёт SEO-вес на новый URL
      },
      {
        source: "/destination", // пустой путь без slug
        destination: "/tours",
        statusCode: 301,
      },

      // -------------------------------------------------------
      // 🟡 Числовые URL → читаемые slug
      // Замените destination на реальные slug ваших туров!
      // -------------------------------------------------------
      {
        source: "/tour/2",
        destination: "/tour/kyrgyz-week", // ← поменяйте на реальный slug
        statusCode: 301,
      },
      {
        source: "/tour/7",
        destination: "/tour/altyn-arashan", // ← поменяйте на реальный slug
        statusCode: 301,
      },
      {
        source: "/tour/8",
        destination: "/tour/song-kul", // ← поменяйте на реальный slug
        statusCode: 301,
      },

      // -------------------------------------------------------
      // 🟢 Trailing slash — на всякий случай
      // (у вас trailingSlash: false, но редиректы подстрахуют)
      // -------------------------------------------------------
      {
        source: "/tours/",
        destination: "/tours",
        statusCode: 301,
      },
      {
        source: "/tour/:slug/",
        destination: "/tour/:slug",
        statusCode: 301,
      },
      {
        source: "/destination/:slug/",
        destination: "/destination/:slug",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;