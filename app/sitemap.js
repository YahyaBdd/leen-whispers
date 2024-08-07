import { MetadataRoute } from 'next'
 
export default function sitemap() {
  return [
    {
      url: 'https://www.leenwhispers.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
  ]
}