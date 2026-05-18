import { MetadataRoute } from "next";
import { stepsTours } from "@/src/widgets/HowItGoing/model/constants/step";
import { destiontaionTour } from "../widgets/Reise/constants/constants"; 

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://indiekyrgyz.com";

  const tourUrls = stepsTours.map((tour) => ({
    url: `${baseUrl}/tour/${tour.slug}`, 
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));
  const destinationUrls = destiontaionTour.map((dest) => ({
    url: `${baseUrl}/destination/${dest.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));


  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/tours`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  return [...staticPages, ...tourUrls , ...destinationUrls];
}