import type { MetadataRoute } from 'next'

const BASE_URL = 'https://fadils.xyz'

/**
 * Hardcoded blog posts since App Router does not store files directly
 */
function getBlogPosts(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/blog/exploring-the-intersection-of-design-ai-and-design-engineering`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]
}

/**
 * Generates the sitemap for the website
 * @returns Sitemap configuration for Next.js
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Core site pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Blog posts
  return [...corePages, ...getBlogPosts()]
}
