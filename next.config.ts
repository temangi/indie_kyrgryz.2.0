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
    // Cap the largest srcset candidate. The default list goes up to 3840px.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    qualities: [75, 80],
  },

  async headers() {
    // Report-Only until the browser console / report shows no unexpected blocks.
    // Maps iframes need frame-src. Next and the gtag snippet need inline scripts.
    const csp = [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'self'",
      "form-action 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com https://pagead2.googlesyndication.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://www.google.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://pagead2.googlesyndication.com",
      "font-src 'self' data:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://www.googletagmanager.com https://www.google.com https://googleads.g.doubleclick.net https://stats.g.doubleclick.net https://www.googleadservices.com https://pagead2.googlesyndication.com",
      "frame-src 'self' https://www.googletagmanager.com https://maps.google.com https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com",
      "worker-src 'self' blob:",
      "manifest-src 'self'",
    ].join("; ");

    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Content-Security-Policy-Report-Only", value: csp },
        ],
      },
    ];
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