import { SITE_ORIGIN, toAbsoluteAssetUrl } from "./SeoJsonLd";

export type DestinationForSeo = {
  slug: string;
  title: string;
  desc: string;
  imgs: string | { src?: string }[];
};

const ORG_ID = `${SITE_ORIGIN}/#organization`;

function destinationHeroImage(d: DestinationForSeo): string {
  if (typeof d.imgs === "string") return toAbsoluteAssetUrl(d.imgs);
  const src = d.imgs[0]?.src;
  return toAbsoluteAssetUrl(src);
}

export function buildDestinationSeoGraph(
  dest: DestinationForSeo
): Record<string, unknown>[] {
  const pageUrl = `${SITE_ORIGIN}/destination/${dest.slug}`;
  const imageUrl = destinationHeroImage(dest);

  return [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Indie Kyrgyz Travel",
      url: SITE_ORIGIN,
      logo: `${SITE_ORIGIN}/logo.png`,
      image: `${SITE_ORIGIN}/og.jpg`,
    },
    {
      "@type": "TouristDestination",
      "@id": `${pageUrl}/#destination`,
      name: dest.title,
      description: dest.desc.trim().slice(0, 8000),
      url: pageUrl,
      image: imageUrl,
      touristType: "Sightseeing travelers",
      provider: { "@id": ORG_ID },
    },
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
          name: dest.title,
          item: pageUrl,
        },
      ],
    },
  ];
}
