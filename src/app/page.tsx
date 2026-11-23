import HomePage from "../pages/home/page";
import { faqDataHome } from "@/src/features/faq/model/constant";
import { SeoJsonLd } from "@/src/shared/seo/SeoJsonLd";
import { buildPageMetadata } from "@/src/shared/seo/pageMeta";
import { HOME_DESCRIPTION, HOME_TITLE } from "@/src/shared/seo/pageCopy";
import { SITE_ORIGIN } from "@/src/shared/seo/SeoJsonLd";
import { tours } from "@/src/widgets/Tours/constants/constants";

export const metadata = buildPageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
});

export default function Home() {
  const faqGraph = [
    {
      "@type": "WebPage",
      "@id": `${SITE_ORIGIN}/#webpage`,
      url: SITE_ORIGIN,
      name: "Private Tours in Kyrgyzstan",
      description: HOME_DESCRIPTION,
      isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
      inLanguage: "en",
    },
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
    {
      "@type": "ItemList",
      name: "Kyrgyzstan tours",
      itemListElement: tours.map((tour, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: tour.title,
        url: `${SITE_ORIGIN}/tour/${tour.slug}`,
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
