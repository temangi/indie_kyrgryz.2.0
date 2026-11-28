import aboutStyles from "../about/about.module.scss";
import tourStyles from "@/src/widgets/Tours/Tours.module.scss";
import { SeoJsonLd } from "@/src/shared/seo/SeoJsonLd";
import { buildPageMetadata } from "@/src/shared/seo/pageMeta";
import {
  DESTINATIONS_DESCRIPTION,
  DESTINATIONS_TITLE,
} from "@/src/shared/seo/pageCopy";
import { buildWebPageGraph } from "@/src/shared/seo/webPageGraph";
import { SITE_ORIGIN } from "@/src/shared/seo/SeoJsonLd";
import { Breadcrumbs } from "@/src/shared/ui/Breadcrumbs";
import { ToursCard } from "@/src/shared/ui/ToursCard/Card";
import { destiontaionTour } from "@/src/widgets/Reise/constants/constants";

const DESTINATIONS_URL = `${SITE_ORIGIN}/destinations`;

export const metadata = buildPageMetadata({
  title: DESTINATIONS_TITLE,
  description: DESTINATIONS_DESCRIPTION,
  path: "/destinations",
});

export default function DestinationsPage() {
  const graph = [
    ...buildWebPageGraph({
      url: DESTINATIONS_URL,
      name: "Places in Kyrgyzstan",
      description: DESTINATIONS_DESCRIPTION,
      pageType: "CollectionPage",
      breadcrumbLabel: "Destinations",
    }),
    {
      "@type": "ItemList",
      name: "Places in Kyrgyzstan",
      itemListElement: destiontaionTour.map((place, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: place.title,
        url: `${SITE_ORIGIN}/destination/${place.slug}`,
      })),
    },
  ];

  return (
    <>
      <SeoJsonLd id="destinations-ld" graph={graph} />
      <section className={aboutStyles.page}>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Destinations" },
          ]}
        />
        <div className="container">
          <header className={aboutStyles.hero}>
            <h1>Places in Kyrgyzstan</h1>
            <p className={aboutStyles.lead}>{DESTINATIONS_DESCRIPTION}</p>
          </header>
          <div className={tourStyles["tour-page-list__main"]}>
            {destiontaionTour.map((place) => (
              <ToursCard key={place.id} {...place} showPrice={false} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
