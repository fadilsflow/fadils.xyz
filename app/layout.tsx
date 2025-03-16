import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
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
    default: 'Fullstack Web Developer - Wahyu Akhmad Fadillah',
    template: '%s | Fullstack Web Developer - Wahyu Akhmad Fadillah',
  },
  description:
    'Passionate Fullstack Developer crafting high-performance, intuitive, and stunning web experiences. Expert in JavaScript, React, Next.js & Node.js',
  openGraph: {
    title: 'Fullstack Web Developer - Wahyu Akhmad Fadillah',
    description:
      'Passionate Fullstack Developer crafting high-performance, intuitive, and stunning web experiences. Expert in JavaScript, React, Next.js & Node.js',
    url: WEBSITE_URL,
    siteName: 'Fullstack Web Developer - Wahyu Akhmad Fadillah',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: WEBSITE_URL,
  },
  icons: {
    icon: '/profile.svg',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Fullstack Web Developer - Wahyu Akhmad Fadillah',
    description:
      'Passionate Fullstack Developer crafting high-performance, intuitive, and stunning web experiences. Expert in JavaScript, React, Next.js & Node.js',
    site: '@yourTwitterHandle',
    creator: '@yourTwitterHandle',
    images: [`${WEBSITE_URL}/profile.png`],
  },
}

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
    <html lang="en" suppressHydrationWarning>
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
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
