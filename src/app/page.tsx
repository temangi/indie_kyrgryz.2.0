import HomePage from "../pages/home/page";
import { faqDataHome } from "@/src/features/faq/model/constant";
import { SeoJsonLd } from "@/src/shared/seo/SeoJsonLd";
import { buildPageMetadata } from "@/src/shared/seo/pageMeta";
import { HOME_DESCRIPTION, HOME_TITLE } from "@/src/shared/seo/pageCopy";

export const metadata = buildPageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
});

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
