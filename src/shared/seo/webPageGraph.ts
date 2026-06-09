import { SITE_ORIGIN } from "./SeoJsonLd";

export function buildWebPageGraph({
  url,
  name,
  description,
}: {
  url: string;
  name: string;
  description: string;
}): Record<string, unknown>[] {
  return [
    {
      "@type": "WebPage",
      "@id": `${url}/#webpage`,
      url,
      name,
      description,
      isPartOf: {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: SITE_ORIGIN,
        name: "Indie Kyrgyz Travel",
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}/#breadcrumb`,
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
          name,
          item: url,
        },
      ],
    },
  ];
}
