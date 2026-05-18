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
  },

  async redirects() {
    return [
      // -------------------------------------------------------
      // 🔴 404 страницы — исправляем срочно
      // -------------------------------------------------------
      {
        source: "/destinations/world-nomad-games",
        destination: "/tours",
        permanent: true, // 301 — Google передаёт SEO-вес на новый URL
      },
      {
        source: "/destination", // пустой путь без slug
        destination: "/tours",
        permanent: true,
      },

      // -------------------------------------------------------
      // 🟡 Числовые URL → читаемые slug
      // Замените destination на реальные slug ваших туров!
      // -------------------------------------------------------
      {
        source: "/tour/2",
        destination: "/tour/kyrgyz-week", // ← поменяйте на реальный slug
        permanent: true,
      },
      {
        source: "/tour/7",
        destination: "/tour/altyn-arashan", // ← поменяйте на реальный slug
        permanent: true,
      },
      {
        source: "/tour/8",
        destination: "/tour/song-kul", // ← поменяйте на реальный slug
        permanent: true,
      },

      // -------------------------------------------------------
      // 🟢 Trailing slash — на всякий случай
      // (у вас trailingSlash: false, но редиректы подстрахуют)
      // -------------------------------------------------------
      {
        source: "/tours/",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/tour/:slug/",
        destination: "/tour/:slug",
        permanent: true,
      },
      {
        source: "/destination/:slug/",
        destination: "/destination/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;