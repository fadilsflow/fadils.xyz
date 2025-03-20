import { useMemo } from 'react'

import { IntroSection } from '@/app/components/sections/IntroSection'
import { Section } from '@/app/components/sections/Section'
import { ContactSection } from '@/app/components/sections/ContactSection'
import { EMAIL, SOCIAL_LINKS } from '../data'

import { createMetadata, viewport } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Tentang Saya - Wahyu Akhmad Fadillah',
  description:
    'Kenalan lebih dekat dengan Wahyu Akhmad Fadillah, mahasiswa Teknik Informatika yang fokus pada web development dan sedang membangun startup bernama Bulba Cloud.',
  path: '/about',
  keywords: [
    'tentang wahyu akhmad fadillah, web developer, mahasiswa teknik informatika, bulba cloud, vps hosting, game hosting',
  ],
})

export { viewport }

export default function About() {
  const introParagraphs = useMemo(
    () => [
      'Halo, perkenalkan nama saya Wahyu Akhmad Fadillah. Saya lahir di Tegal pada 12 Agustus 2005 dan saat ini sedang menempuh pendidikan sebagai mahasiswa Teknik Informatika semester 4. ini adalah sedikit ringkasan kehidupan aku saat ini!',
    ],
    [],
  )

  const backgroundParagraphs = useMemo(
    () => [
      'Awalnya, aku tuh milih jurusan Teknik Informatika karena suka main game dan berharap bisa membuat game sendiri. Ternyata, buat game itu gak semudah atau seseru maininnya! Setelah 3 semester mencari jati diri, akhirnya aku memutuskan untuk fokus pada web development di semester 4 ini.',
      'Web development memberikan tantangan dan kepuasan tersendiri bagi saya. Dari membangun tampilan yang menarik hingga mengoptimalkan backend, setiap proyek adalah kesempatan untuk belajar dan berkembang.',
    ],
    [],
  )

  const currentProjectsParagraphs = useMemo(
    () => [
      'Saat ini, aku lagi bikin startup dengan nama "Bulba Cloud", bisa coba akses di bulba.cloud. Di sana, kami menyediakan layanan VPS hosting, game hosting (seperti Minecraft), domain, dan jasa pembuatan website. Selain untuk menyalurkan skill web development, ini juga jadi cara seru untuk menambah uang jajan, hehe.',
      'Melalui Bulba Cloud, saya berharap bisa membantu orang-orang yang membutuhkan solusi hosting dan website, sekaligus terus mengasah kemampuan saya di dunia teknologi.',
    ],
    [],
  )

  return (
    <div>
      <IntroSection paragraphs={introParagraphs} />

      <Section id="background-heading" title="Latar Belakang">
        <div className="space-y-4">
          {backgroundParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section id="current-projects-heading" title="Proyek Saat Ini">
        <div className="space-y-4">
          {currentProjectsParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <ContactSection email={EMAIL} socialLinks={SOCIAL_LINKS} />
    </div>
  )
}
