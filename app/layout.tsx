// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { WEBSITE_URL } from '@/lib/constants'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://bulba.cloud'),
  title: {
    default: 'Wahyu Akhmad Fadillah - Fullstack Web Developer',
    template: '%s | Wahyu Akhmad Fadillah',
  },
  applicationName: 'Wahyu Akhmad Fadillah',
  description:
    'Seorang Fullstack Developer yang passionate dalam membangun aplikasi web yang cepat, intuitif, dan menarik. Ahli dalam TypeScript, React, Next.js, dan Node.js.',
  openGraph: {
    title: 'Wahyu Akhmad Fadillah - Fullstack Web Developer',
    description:
      'Seorang Fullstack Developer yang passionate dalam membangun aplikasi web yang cepat, intuitif, dan menarik. Ahli dalam TypeScript, React, Next.js, dan Node.js.',
    url: WEBSITE_URL,
    siteName: 'Wahyu Akhmad Fadillah - Fullstack Web Developer',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: `${WEBSITE_URL}/profile.png`,
        width: 1200,
        height: 630,
        alt: 'Wahyu Akhmad Fadillah - Fullstack Developer',
      },
    ],
  },
  alternates: {
    canonical: WEBSITE_URL,
  },

  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    'fullstack developer',
    'web development',
    'TypeScript',
    'react',
    'next.js',
    'node.js',
    'wahyu',
    'wahyu akhmad',
    'wahyu akhmad fadillah',
    'fadils',
    'fadil',
    'wahyu fadil',
    'wahyu fadillah',
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Wahyu Akhmad Fadillah - Fullstack Web Developer',
    description:
      'Seorang Fullstack Developer yang passionate dalam membangun aplikasi web yang cepat, intuitif, dan menarik. Ahli dalam TypeScript, React, Next.js, dan Node.js.',
    site: '@wahyuakhmadfad3',
    creator: '@wahyuakhmadfad3',
    images: [`${WEBSITE_URL}/profile.png`],
  },
}

// Menggunakan font Geist dan Geist Mono
const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Wahyu Akhmad Fadillah',
              alternateName: 'Fadil',
              description:
                'Seorang Fullstack Developer yang passionate dalam membangun aplikasi web yang cepat, intuitif, dan menarik. Ahli dalam TypeScript, React, Next.js, dan Node.js.',
              url: WEBSITE_URL,
              image: 'https://fadils.xyz/profile.png',
              jobTitle: 'Fullstack Web Developer',
              knowsAbout: ['TypeScript', 'React', 'Next.js', 'Node.js'],
              sameAs: [
                'https://github.com/fadilsflow',
                'https://linkedin.com/in/wahyu-akhmad-fadillah',
                'https://twitter.com/wahyuakhmadfad3',
                'https://instagram.com/fadils.xyz',
              ],
              potentialAction: {
                '@type': 'SearchAction',
                target: `${WEBSITE_URL}/search?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <SpeedInsights />
              <Analytics />
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
