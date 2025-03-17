import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { WEBSITE_URL } from '@/lib/constants'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: {
    default: 'Wahyu Akhmad Fadillah - Fullstack Web Developer',
    template: '%s | Wahyu Akhmad Fadillah',
  },
  description:
    'Seorang Fullstack Developer yang passionate dalam membangun aplikasi web yang cepat, intuitif, dan menarik. Ahli dalam JavaScript, React, Next.js, dan Node.js.',
  openGraph: {
    title: 'Wahyu Akhmad Fadillah - Fullstack Web Developer',
    description:
      'Seorang Fullstack Developer yang passionate dalam membangun aplikasi web yang cepat, intuitif, dan menarik. Ahli dalam JavaScript, React, Next.js, dan Node.js.',
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
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
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
    'javascript',
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
      'Seorang Fullstack Developer yang passionate dalam membangun aplikasi web yang cepat, intuitif, dan menarik. Ahli dalam JavaScript, React, Next.js, dan Node.js.',
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
        {/* Ikon untuk berbagai perangkat */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Metadata tambahan */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        {/* Structured Data (JSON-LD) */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Wahyu Akhmad Fadillah',
              url: WEBSITE_URL,
              image: `${WEBSITE_URL}/profile.png`,
              jobTitle: 'Fullstack Web Developer',
              knowsAbout: ['JavaScript', 'React', 'Next.js', 'Node.js'],
              sameAs: [
                'https://github.com/fadilsflow',
                'https://linkedin.com/in/wahyu-akhmad-fadillah',
                'https://twitter.com/wahyuakhmadfad3',
              ],
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
          <div className="flex min-h-screen w-full flex-col">
            {/* Header */}
            <Header />

            {/* Konten utama */}
            <main className="mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              {children}
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
