import type { Metadata, Viewport } from 'next'

// Fungsi helper untuk membuat metadata yang konsisten
export function createMetadata({
  title,
  description,
  path = '',
  ogImage = '/profile.png',
  ogImageAlt = 'Wahyu Akhmad Fadillah',
  keywords = [],
  noIndex = false,
  locale = 'id-ID',
}: {
  title: string
  description: string
  path?: string
  ogImage?: string
  ogImageAlt?: string
  keywords?: string[]
  noIndex?: boolean
  locale?: string
  type?: 'website' | 'blog'
}): Metadata {
  // Base URL
  const baseUrl = 'https://fadils.xyz'
  const url = `${baseUrl}${path}`

  // Default keywords untuk semua halaman
  const defaultKeywords = [
    'fullstack developer',
    'web development',
    'javascript',
    'typescript',
    'next.js',
    'wahyu',
    'wahyu akhmad',
    'wahyu akhmad fadillah',
    'fadils',
    'fadil',
    'wahyu fadil',
    'wahyu fadillah',
  ]
  const combinedKeywords = [...defaultKeywords, ...keywords]

  return {
    title,
    description,
    keywords: combinedKeywords,

    // Pengaturan Robots
    robots: {
      index: !noIndex,
      follow: true,
      nocache: noIndex,
      googleBot: {
        index: !noIndex,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },

    // Canonical URL
    alternates: {
      canonical: url,
      languages: {
        'id-ID': url,
      },
    },

    // Open Graph
    openGraph: {
      title,
      description,
      url,
      siteName: 'Wahyu Akhmad Fadillah',
      locale,
      type: 'website',
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`],
      creator: '@wahyuakhmadfad3',
      site: '@wahyuakhmadfad3',
    },

    // Penulis dan Pemilik Konten
    authors: [{ name: 'Wahyu Akhmad Fadillah', url: baseUrl }],
    creator: 'Wahyu Akhmad Fadillah',
    publisher: 'Wahyu Akhmad Fadillah',

    // Verifikasi untuk search console dan webmaster tools
    verification: {
      google: 'google-site-verification-code',
      yandex: 'yandex-verification-code',
      yahoo: 'yahoo-verification-code',
    },
  }
}

// Viewport metadata yang konsisten untuk responsive design
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}
