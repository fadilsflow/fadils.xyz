// src/pages/personal.tsx (refaktorisasi ke komponen reusable)
'use client'

import { useMemo } from 'react'
import { PageLayout } from '@/app/components/layout/PageLayout'
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

// SEO meta data
const META_TITLE = 'Personal Portfolio - Web Developer & Designer'
const META_DESCRIPTION =
  'Professional web developer passionate about crafting intuitive, high-performance, and visually stunning web experiences.'
const META_KEYWORDS =
  'web developer, frontend developer, UI/UX designer, React, Next.js'

export default function Personal() {
  const introParagraphs = useMemo(
    () => [
      'Haii, aku Fadil. Biasa dipanggil Wahyu Akhmad Fadillah sama dosen pas absen, tapi panggil aja Fadil yaaa. Aku mahasiswa semester 4 saat ini dan sekarang lagi suka ngulik-ngulik banyak hal, terutama di dunia teknologi. Teknologi itu nggak pernah bosenin yaa — selalu ada hal baru yang bikin penasaran dan bikin mikir. Makin banyak yang di pelajarin, Makin banyak juga yang ngerasa gak tau nyaa. Tapi justru itu yang bikin seru dan nggak ada habisnya! 😭',
      "Kata Steve Jobs, 'Satu-satunya cara untuk melakukan pekerjaan hebat adalah dengan mencintai apa yang kamu lakukan.' Aku percaya kalau kita punya passion dan terus belajar, kita bisa bikin sesuatu yang bukan cuma keren, tapi juga berguna buat banyak orang. Oh yaaa, I use Arch Btw. Let’s create something awesome together! 🚀",
    ],
    [],
  )

  return (
    <PageLayout
      title={META_TITLE}
      description={META_DESCRIPTION}
      keywords={META_KEYWORDS}
      canonicalUrl="https://fadils.xyz"
    >
      <IntroSection paragraphs={introParagraphs} />
      <ProductsSection products={PRODUCTS} />
      <SkillsSection skills={SKILLS} />
      <WorkExperienceSection jobs={WORK_EXPERIENCE} />
      <BlogSection posts={BLOG_POSTS} />
      <ContactSection email={EMAIL} socialLinks={SOCIAL_LINKS}/>
    </PageLayout>
  )
}
