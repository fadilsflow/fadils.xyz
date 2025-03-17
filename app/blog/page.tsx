'use client'

import { useMemo } from 'react'
import { PageLayout } from '@/app/components/layout/PageLayout'
import { IntroSection } from '@/app/components/sections/IntroSection'
import { ContactSection } from '@/app/components/sections/ContactSection'
import { EMAIL, SOCIAL_LINKS, BLOG_POSTS } from '../data'
import { BlogSection } from '../components/sections/BlogSection'

const META_TITLE = 'Blog - Ngulik Bareng Fadil'
const META_DESCRIPTION =
  'Tempat random buat ngulik dunia web development, frontend, backend, dan apapun yang berhubungan sama teknologi. Yuk, belajar bareng!'
const META_KEYWORDS =
  'web development blog, React tutorial, frontend tips, ngoding seru, teknologi random'

export default function Blog() {
  const introParagraphs = useMemo(
    () => [
      'Haii, selamat datang di blog kecil akuu! Isinya random, apa ajaa yang lagi aku pelajari atau iseng-iseng ngulik.',
    ],
    [],
  )

  return (
    <PageLayout
      title={META_TITLE}
      description={META_DESCRIPTION}
      keywords={META_KEYWORDS}
      canonicalUrl="https://fadils.xyz/blog"
    >
      <IntroSection paragraphs={introParagraphs} />
      <BlogSection posts={BLOG_POSTS} />
      <ContactSection email={EMAIL} socialLinks={SOCIAL_LINKS} />
    </PageLayout>
  )
}
