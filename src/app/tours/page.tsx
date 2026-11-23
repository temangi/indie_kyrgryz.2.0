import ToursPage from "@/src/pages/tours/page";
import { SeoJsonLd } from "@/src/shared/seo/SeoJsonLd";
import { buildPageMetadata } from "@/src/shared/seo/pageMeta";
import { TOURS_DESCRIPTION, TOURS_TITLE } from "@/src/shared/seo/pageCopy";
import { buildWebPageGraph } from "@/src/shared/seo/webPageGraph";
import { SITE_ORIGIN } from "@/src/shared/seo/SeoJsonLd";
import { tours } from "@/src/widgets/Tours/constants/constants";

const TOURS_URL = `${SITE_ORIGIN}/tours`;

export const metadata = buildPageMetadata({
  title: TOURS_TITLE,
  description: TOURS_DESCRIPTION,
  path: "/tours",
});

export default function Destination() {
  const graph = [
    ...buildWebPageGraph({
      url: TOURS_URL,
      name: "All Kyrgyzstan Tours",
      description: TOURS_DESCRIPTION,
      pageType: "CollectionPage",
      breadcrumbLabel: "Tours",
    }),
    {
      "@type": "ItemList",
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
      <SeoJsonLd id="tours-ld" graph={graph} />
      <ToursPage />
    </>
  );
}
  