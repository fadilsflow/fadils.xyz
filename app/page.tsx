import { useMemo } from 'react'

import { IntroSection } from '@/app/components/sections/IntroSection'
import { ProductsSection } from '@/app/components/sections/ProductsSection'
import { SkillsSection } from '@/app/components/sections/SkillsSection'
import { WorkExperienceSection } from '@/app/components/sections/WorkExperienceSection'
import { BlogSection } from '@/app/components/sections/BlogSection'

import {
  PRODUCTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  SKILLS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'
import { ContactSection } from './components/sections/ContactSection'
import Script from 'next/script'
import { WEBSITE_URL } from '@/lib/constants'

import { createMetadata, viewport } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Wahyu Akhmad Fadillah - Fullstack Web Developer',
  description:
    'Fullstack Developer yang passionate dalam membangun aplikasi web yang cepat, intuitif, dan menarik. Ahli dalam JavaScript, React, Next.js, dan Node.js.',
  path: '/',
  keywords: [
    'web developer, frontend developer, UI/UX designer, React, Next.js',
  ],
})

export { viewport }

export default function Personal() {
  const introParagraphs = useMemo(
    () => [
      'Haii, aku Fadil. Biasa dipanggil Wahyu Akhmad Fadillah sama dosen pas absen, tapi panggil aja Fadil yaaa. Aku mahasiswa semester 4 saat ini dan sekarang lagi suka ngulik-ngulik banyak hal, terutama di dunia teknologi. Teknologi itu nggak pernah bosenin yaa — selalu ada hal baru yang bikin penasaran dan bikin mikir. Makin banyak yang di pelajarin, Makin banyak juga yang ngerasa gak tau nyaa. Tapi justru itu yang bikin seru dan nggak ada habisnya! 😭',
      "Kata Steve Jobs, 'Satu-satunya cara untuk melakukan pekerjaan hebat adalah dengan mencintai apa yang kamu lakukan.' Aku percaya kalau kita punya passion dan terus belajar, kita bisa bikin sesuatu yang bukan cuma keren, tapi juga berguna buat banyak orang. Oh yaaa, I use Arch Btw. Let’s create something awesome together! 🚀",
    ],
    [],
  )

  return (
    <div>
      <Script
        id="schema-personal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            mainEntity: {
              '@type': 'Person',
              name: 'Wahyu Akhmad Fadillah',
              alternateName: 'Fadil',
              description:
                'Fullstack Web Developer yang passionate dalam membangun aplikasi web yang cepat, intuitif, dan menarik.',
              image: `${WEBSITE_URL}/profile.png`,
              jobTitle: 'Fullstack Web Developer',
              url: WEBSITE_URL,
              sameAs: [
                'https://github.com/fadilsflow',
                'https://linkedin.com/in/wahyu-akhmad-fadillah',
                'https://twitter.com/wahyuakhmadfad3',
                'https://instagram.com/wahyuakhmadfadillah',
              ],
              knowsAbout: [
                'JavaScript',
                'React',
                'Next.js',
                'Node.js',
                'Web Development',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
            },
          }),
        }}
      />
      <IntroSection paragraphs={introParagraphs} />
      <ProductsSection products={PRODUCTS} />
      <SkillsSection skills={SKILLS} />
      <WorkExperienceSection jobs={WORK_EXPERIENCE} />
      <BlogSection posts={BLOG_POSTS} />
      <ContactSection email={EMAIL} socialLinks={SOCIAL_LINKS} />
    </div>
  )
}
