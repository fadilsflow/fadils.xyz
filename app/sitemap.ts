import type { MetadataRoute } from 'next'

const BASE_URL = 'https://fadils.xyz'

/**
 * Hardcoded blog posts since App Router does not store files directly
 */
function getBlogPosts(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/blog/mengenal-dan-menginstal-laravel-di-arch-linux`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Ta mbahkan postingan blog lainnya di sini
    // Contoh:
    // {
    //   url: `${BASE_URL}/blog/another-blog-post`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.7,
    // },
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
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Blog posts
  const blogPosts = getBlogPosts()

  return [...corePages, ...blogPosts]
}
