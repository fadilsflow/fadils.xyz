import { useMemo } from 'react'

import { IntroSection } from '@/app/components/sections/IntroSection'
import { ContactSection } from '@/app/components/sections/ContactSection'
import { EMAIL, SOCIAL_LINKS, BLOG_POSTS } from '../data'
import { BlogSection } from '../components/sections/BlogSection'

import { createMetadata, viewport } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Blog - Ngulik Bareng Fadil',
  description:
    'Tempat random buat ngulik dunia web development, frontend, backend, dan apapun yang berhubungan sama teknologi. Yuk, belajar bareng!',
  path: '/blog',
  keywords: [
    'web development blog, React tutorial, frontend tips, ngoding seru, teknologi random',
  ],
})

export { viewport }
export default function Blog() {
  const introParagraphs = useMemo(
    () => [
      'Haii, selamat datang di blog kecil akuu! Isinya random, apa ajaa yang lagi aku pelajari atau iseng-iseng ngulik.',
    ],
    [],
  )

  return (
    <div>
      <IntroSection paragraphs={introParagraphs} />
      <BlogSection posts={BLOG_POSTS} />
      <ContactSection email={EMAIL} socialLinks={SOCIAL_LINKS} />
    </div>
  )
}
