import { MetadataRoute } from 'next'
import { stepsTours } from '../widgets/HowItGoing/model/constants/step'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://indie-kyrgryz-2-0.vercel.app' 

  const tourUrls = stepsTours.map((tour ,index) => ({
    url: `${baseUrl}/tours/${index}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...tourUrls,
  ]
}