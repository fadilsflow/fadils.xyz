import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Fullstack Web Developer - Wahyu Akhmad Fadillah',
  description:
    'Passionate Fullstack Web Developer specializing in high-performance, intuitive, and visually stunning web experiences. Expert in JavaScript, React, Next.js, Node.js, and UI/UX design.',
  icons: 'profile.svg',
  abstract:
    'Passionate about crafting intuitive, high-performance, and visually stunning web experiences. I thrive at the intersection of design and development, ensuring every interaction feels seamless and every detail is thoughtfully executed.',
  creator: 'Wahyu Akhmad Fadillah',
  keywords:
    'Fullstack Developer, Web Developer, Next.js, React, JavaScript, UI/UX, Frontend, Backend, Node.js, Portfolio, Web Design, Software Engineer',
  openGraph: {
    title: 'Fullstack Web Developer - Wahyu Akhmad Fadillah',
    description:
      'Experienced Fullstack Developer with expertise in JavaScript, React, Next.js, and Node.js. Crafting seamless and visually appealing web experiences.',
    url: 'https://your-portfolio.com', // Ganti dengan URL portofoliomu
    type: 'website',
    images: [
      {
        url: 'https://your-portfolio.com/profile-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fullstack Web Developer - Wahyu Akhmad Fadillah',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@your_twitter_handle', // Ganti dengan username Twitter-mu
    creator: '@your_twitter_handle',
    title: 'Fullstack Web Developer - Wahyu Akhmad Fadillah',
    description:
      'Experienced Fullstack Developer with expertise in JavaScript, React, Next.js, and Node.js. Crafting seamless and visually appealing web experiences.',
    images: ['https://your-portfolio.com/profile-image.jpg'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://your-portfolio.com', // Ganti dengan URL portofoliomu
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
