import type { TourDayFields } from "@/src/shared/ui/step-card/stepCard.types";
import { SITE_ORIGIN, toAbsoluteAssetUrl } from "./SeoJsonLd";

export type TourForSeo = {
  chapter: string;
  /** Long description; fallback to `desc` or `chapter` for schema `description`. */
  title?: string;
  slug: string;
  price: string;
  duration: string;
  desc?: string;
  arr: TourDayFields[];
  slider: readonly { item: { src?: string } }[];
};

function firstPriceAmount(priceLabel: string): string | undefined {
  const m = priceLabel.replace(/\s/g, "").match(/(\d[\d,]*)/);
  if (!m) return undefined;
  return m[1].replace(/,/g, "");
}

const ORG_ID = `${SITE_ORIGIN}/#organization`;

export function buildTourSeoGraph(tour: TourForSeo): Record<string, unknown>[] {
  const pageUrl = `${SITE_ORIGIN}/tour/${tour.slug}`;
  const hero = tour.slider[0]?.item;
  const imageUrl = toAbsoluteAssetUrl(hero?.src);

  const price = firstPriceAmount(tour.price);
  const offer: Record<string, unknown> = {
    "@type": "Offer",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: pageUrl,
  };
  if (price !== undefined) {
    offer.price = price;
  }

  const dayItems = tour.arr.map((day, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: day.title,
    description:
      day.desc.length > 500 ? `${day.desc.slice(0, 497)}…` : day.desc,
  }));

  const plainDescription = String(tour.title ?? tour.desc ?? tour.chapter)
    .trim()
    .slice(0, 8000);

  const trip: Record<string, unknown> = {
    "@type": "TouristTrip",
    "@id": `${pageUrl}/#tourist-trip`,
    name: tour.chapter,
    description: plainDescription,
    url: pageUrl,
    image: [imageUrl],
    touristType: "Adventure travelers",
    duration: tour.duration,
    itinerary: {
      "@type": "ItemList",
      itemListElement: dayItems,
    },
    provider: { "@id": ORG_ID },
    offers: offer,
  };

  if (tour.desc?.trim()) {
    trip.abstract = tour.desc.trim().slice(0, 320);
  }

  return [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Indie Kyrgyz Travel",
      url: SITE_ORIGIN,
      logo: `${SITE_ORIGIN}/logo.png`,
      image: `${SITE_ORIGIN}/og.jpg`,
    },
    trip,
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_ORIGIN,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tours",
          item: `${SITE_ORIGIN}/tours`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: tour.chapter,
          item: pageUrl,
        },
      ],
    },
  ];
}
