import { MetadataRoute } from "next";
import { stepsTours } from "@/src/widgets/HowItGoing/model/constants/step";
import { destiontaionTour } from "../widgets/Reise/constants/constants";
import { PAGE_LAST_MODIFIED, lastModifiedDate } from "@/src/shared/seo/contentDates";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://indiekyrgyz.com";

  const tourUrls = stepsTours.map((tour) => ({
    url: `${baseUrl}/tour/${tour.slug}`,
    lastModified: lastModifiedDate(PAGE_LAST_MODIFIED.tour),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  const destinationUrls = destiontaionTour.map((dest) => ({
    url: `${baseUrl}/destination/${dest.slug}`,
    lastModified: lastModifiedDate(PAGE_LAST_MODIFIED.destination),
    priority: 0.7,
  }));

  const staticPages = [
    {
      url: baseUrl,
      lastModified: lastModifiedDate(PAGE_LAST_MODIFIED["/"]),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/tours`,
      lastModified: lastModifiedDate(PAGE_LAST_MODIFIED["/tours"]),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: lastModifiedDate(PAGE_LAST_MODIFIED["/contacts"]),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastModifiedDate(PAGE_LAST_MODIFIED["/about"]),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: lastModifiedDate(PAGE_LAST_MODIFIED["/team"]),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: lastModifiedDate(PAGE_LAST_MODIFIED["/privacy-policy"]),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  return [...staticPages, ...tourUrls, ...destinationUrls];
}
