import { MetadataRoute } from "next";
import { stepsTours } from "@/src/widgets/HowItGoing/model/constants/step";
import { destiontaionTour } from "../widgets/Reise/constants/constants"; 

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://indiekyrgyz.com";

  const tourUrls = stepsTours.map((tour, index) => ({
    url: `${baseUrl}/tour/${index + 1}`, 
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));
  const destinationUrls = destiontaionTour.map((dest,index) => ({
    url: `${baseUrl}/destination/${index + 1 || dest.title.toLowerCase()}`,
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
      url: `${baseUrl}/destination`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  return [...staticPages, ...tourUrls , ...destinationUrls];
}