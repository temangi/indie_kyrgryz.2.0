import { SITE_ORIGIN } from "./SeoJsonLd";

export function buildWebPageGraph({
  url,
  name,
  description,
  pageType = "WebPage",
  breadcrumbLabel,
}: {
  url: string;
  name: string;
  description: string;
  pageType?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  /** Visible breadcrumb text. Defaults to `name`. */
  breadcrumbLabel?: string;
}): Record<string, unknown>[] {
  const page: Record<string, unknown> = {
    "@type": pageType,
    "@id": `${url}/#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
    inLanguage: "en",
  };

  if (pageType === "ContactPage") {
    page.mainEntity = { "@id": `${SITE_ORIGIN}/#organization` };
  }

  return [
    page,
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
          name: breadcrumbLabel ?? name,
          item: url,
        },
      ],
    },
  ];
}
