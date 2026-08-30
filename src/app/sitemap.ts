import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kaironovas.com'
  const lastModified = new Date()

  return [
    { url: base, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/case-studies`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${base}/case-studies/production-llm-deployment`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    { url: `${base}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
