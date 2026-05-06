import HomePage from "../pages/home/page";
import type { Metadata } from "next";
import { faqDataHome } from "@/src/features/faq/model/constant";
import { SeoJsonLd } from "@/src/shared/seo/SeoJsonLd";

const HOME_URL = "https://indiekyrgyz.com";

export const metadata: Metadata = {
  title: "Tours in Kyrgyzstan with Local Guides",
  description:
    "Discover authentic Kyrgyzstan tours: horseback riding, trekking, yurt stays, and cultural journeys with local guides.",
  alternates: {
    canonical: HOME_URL,
  },
  openGraph: {
    title: "Indie Kyrgyz Travel — Tours in Kyrgyzstan",
    description:
      "Horse trekking, mountain routes, nomadic culture, and custom tours across Kyrgyzstan.",
    url: HOME_URL,
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Indie Kyrgyz Travel",
      },
    ],
  },
};

export default function Home() {
  const faqGraph = [
    {
      "@type": "FAQPage",
      mainEntity: faqDataHome.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer.replace(/\n/g, " ").trim(),
        },
      })),
    },
  ];

  return (
    <>
      <SeoJsonLd id="home-faq-ld" graph={faqGraph} />
      <HomePage />
    </>
  );
}
