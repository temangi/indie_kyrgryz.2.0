import type { Metadata } from "next";
import { SITE_ORIGIN } from "./SeoJsonLd";

export const SITE_NAME = "Indie Kyrgyz Travel";

/**
 * public/og.jpg is 1280×720. Close to a social card, not a 1200×630 crop.
 */
export const DEFAULT_OG_IMAGE = {
  url: "/og.jpg",
  width: 1280,
  height: 720,
  alt: "Indie Kyrgyz Travel over a green mountain valley in Kyrgyzstan",
} as const;

export type OgImage = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

/**
 * The site is English only. hreflang points each URL at itself for `en`
 * and `x-default`. Do not add regional codes until a real translation exists.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  image,
  index = true,
}: {
  title: string;
  description: string;
  /** "" or "/" for the homepage, otherwise a path such as "/tours". */
  path: string;
  image?: OgImage;
  index?: boolean;
}): Metadata {
  const canonical =
    path === "" || path === "/"
      ? SITE_ORIGIN
      : `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;

  const ogImage = image
    ? {
        url: image.url,
        alt: image.alt ?? title,
        ...(image.width ? { width: image.width } : {}),
        ...(image.height ? { height: image.height } : {}),
      }
    : DEFAULT_OG_IMAGE;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: {
        en: canonical,
        "x-default": canonical,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
    ...(index
      ? {}
      : {
          robots: {
            index: false,
            follow: false,
          },
        }),
  };
}
