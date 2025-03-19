// src/components/layout/PageLayout.tsx
import Head from 'next/head'
import React from 'react'

interface PageLayoutProps {
  title: string
  description: string
  keywords: string
  children: React.ReactNode
  ogImage?: string
  canonicalUrl?: string
}

export const PageLayout = ({
  title,
  description,
  keywords,
  children,
  ogImage = 'https://fadils.xyz/profile.png',
  canonicalUrl = 'https://fadils.xyz',
}: PageLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <article className="mt-12 flex-1">{children}</article>
    </>
  )
}
