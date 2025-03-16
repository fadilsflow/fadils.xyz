import fs from 'fs'
import path from 'path'
import type { MetadataRoute } from 'next'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')
const BASE_URL = 'https://fadils.xyz'

/**
 * Gets all blog posts and their metadata for sitemap generation
 * @returns Array of sitemap entries for blog posts
 */
function getBlogPosts(): MetadataRoute.Sitemap {
  try {
    // Check if blog directory exists
    if (!fs.existsSync(BLOG_DIR)) {
      console.warn(`Blog directory not found: ${BLOG_DIR}`)
      return []
    }

    const folders = fs.readdirSync(BLOG_DIR)

    return folders.reduce<MetadataRoute.Sitemap>((validPosts, folder) => {
      try {
        const postPath = path.join(BLOG_DIR, folder, 'page.mdx')

        // Skip if page.mdx doesn't exist in the folder
        if (!fs.existsSync(postPath)) {
          return validPosts
        }

        const stats = fs.statSync(postPath)

        validPosts.push({
          url: `${BASE_URL}/blog/${folder}`,
          lastModified: stats.mtime,
          changeFrequency: 'weekly',
          priority: 0.7,
        })

        return validPosts
      } catch (folderError) {
        console.error(
          `Error processing blog post folder ${folder}:`,
          folderError,
        )
        return validPosts
      }
    }, [])
  } catch (error) {
    console.error('Error reading blog directory:', error)
    return []
  }
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
  const blogPosts = getBlogPosts()

  return [...corePages, ...blogPosts]
}
