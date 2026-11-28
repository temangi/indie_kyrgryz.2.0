import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/home/page",
        "/tours/page",
        "/destination/page",
        "/tourDetail/page",
      ],
    },
    sitemap: "https://indiekyrgyz.com/sitemap.xml",
  };
}
