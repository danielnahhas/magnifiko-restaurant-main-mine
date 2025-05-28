import { MetadataRoute } from 'next'
import { DOMAIN } from '@/data/context'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = DOMAIN
  const locales = ['fr', 'en']
  const pages = ['', '/about', '/menu', '/contact']
  
  const sitemap: MetadataRoute.Sitemap = []
  
  pages.forEach(page => {
    locales.forEach(locale => {
      const url = `${baseUrl}/${locale}${page}`
      
      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: getPriority(page)
      })
    })
  })
  
  return sitemap
}

function getPriority(page: string): number {
  switch (page) {
    case '':
      return 1.0
    case '/menu':
      return 0.9
    case '/about':
      return 0.8
    case '/contact':
      return 0.8
    default:
      return 0.6
  }
}