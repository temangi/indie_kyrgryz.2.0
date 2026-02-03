import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', 
        },
        sitemap: 'https://indie-kyrgryz-2-0.vercel.app/sitemap.xml',
  }
}