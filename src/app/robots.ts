import { MetadataRoute } from 'next'
import { DOMAIN } from '@/data/context'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/admin/',
        '*.json',
      ],
    },
    sitemap: `${DOMAIN}/sitemap.xml`,
    host: DOMAIN
  }
}