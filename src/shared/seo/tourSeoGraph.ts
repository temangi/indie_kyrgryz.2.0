import type { TourDayFields } from "@/src/shared/ui/step-card/stepCard.types";
import { SITE_ORIGIN, toAbsoluteAssetUrl } from "./SeoJsonLd";
import { TRAVEL_AGENCY_LD } from "./organizationJsonLd";
import { tourPageH1 } from "./tourPageHeading";

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

/** "7 days" → P7D. Driving distances and other labels are not a trip duration. */
function toIsoDuration(label: string): string | undefined {
  const match = label.trim().match(/^(\d+)\s+days?$/i);
  if (!match) return undefined;
  return `P${Number(match[1])}D`;
}

const ORG_ID = TRAVEL_AGENCY_LD["@id"];

export function buildTourSeoGraph(tour: TourForSeo): Record<string, unknown>[] {
  const pageUrl = `${SITE_ORIGIN}/tour/${tour.slug}`;
  const hero = tour.slider[0]?.item;
  const imageUrl = toAbsoluteAssetUrl(hero?.src);

  const price = firstPriceAmount(tour.price);
  const isoDuration = toIsoDuration(tour.duration);

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
    name: tourPageH1(tour.slug, tour.duration, tour.chapter),
    description: plainDescription,
    url: pageUrl,
    image: [imageUrl],
    touristType: "Adventure travelers",
    ...(isoDuration ? { duration: isoDuration } : {}),
    itinerary: {
      "@type": "ItemList",
      itemListElement: dayItems,
    },
    provider: { "@id": ORG_ID },
  };

  if (price !== undefined) {
    trip.offers = {
      "@type": "Offer",
      url: pageUrl,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: price,
        priceCurrency: "USD",
      },
    };
  }

  if (tour.desc?.trim()) {
    trip.abstract = tour.desc.trim().slice(0, 320);
  }

  return [
    TRAVEL_AGENCY_LD,
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
