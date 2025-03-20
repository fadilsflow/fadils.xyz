

import { useMemo } from 'react'

import { IntroSection } from '@/app/components/sections/IntroSection'
import { Section } from '@/app/components/sections/Section'
import { ContactSection } from '@/app/components/sections/ContactSection'
import { EMAIL, SOCIAL_LINKS } from '../data'

import { createMetadata, viewport } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Layanan - Solusi Web Development & Desain',
  description:
    'Temukan layanan web development dan desain yang saya tawarkan, mulai dari pembuatan website custom, desain UI/UX, hingga konsultasi teknis.',
  path: '/services',
  ogImage: 'profile.png',
  ogImageAlt: 'Wahyu Akhmad Fadillah',
  keywords: [
    'layanan web development, desain UI/UX, konsultasi teknis, frontend development, React development',
  ],
})

export { viewport }

// Service type definition
interface Service {
  title: string
  description: string
  features: string[]
}

export default function Services() {
  const introParagraphs = useMemo(
    () => [
      'Halo, selamat datang di halaman layanan saya! Saya menawarkan berbagai solusi web development dan desain yang bisa disesuaikan dengan kebutuhan bisnis atau proyek pribadi Anda.',
      'Dengan pendekatan yang menggabungkan keahlian teknis dan kreativitas, saya berusaha memberikan solusi yang tidak hanya menarik secara visual, tetapi juga berkinerja tinggi.',
    ],
    [],
  )

  const services: Service[] = useMemo(
    () => [
      {
        title: 'Pembuatan Website Custom',
        description:
          'Saya membuat website custom yang sesuai dengan identitas brand dan tujuan bisnis Anda.',
        features: [
          'Desain responsif yang tampil sempurna di semua perangkat',
          'Optimasi performa untuk kecepatan loading yang tinggi',
          'Struktur SEO-friendly untuk meningkatkan visibilitas di mesin pencari',
          'Kesesuaian dengan standar aksesibilitas (WCAG)',
          'Integrasi dengan sistem manajemen konten (CMS)',
        ],
      },
      {
        title: 'Frontend Development',
        description:
          'Saya membangun antarmuka pengguna modern dan interaktif menggunakan teknologi dan framework terbaru.',
        features: [
          'Pengembangan aplikasi dengan React dan Next.js',
          'Implementasi manajemen state',
          'Pengembangan komponen yang reusable',
          'Animasi dan elemen interaktif',
          'Optimasi performa dan code splitting',
        ],
      },
      {
        title: 'Desain UI/UX',
        description:
          'Saya merancang pengalaman pengguna yang intuitif dan menarik untuk memandu pengguna dalam berinteraksi.',
        features: [
          'Penelitian pengguna dan pengembangan persona',
          'Wireframing dan prototyping',
          'Desain visual dan konsistensi branding',
          'Optimasi alur pengguna',
          'Desain interaksi dan microanimations',
        ],
      },
      {
        title: 'Konsultasi Teknis',
        description:
          'Saya memberikan panduan ahli terkait keputusan teknis dan strategi implementasi.',
        features: [
          'Rekomendasi teknologi stack',
          'Perencanaan arsitektur dan desain',
          'Code review dan audit performa',
          'Penilaian technical debt',
          'Optimasi alur kerja development',
        ],
      },
    ],
    [],
  )

  const processSteps = useMemo(
    () => [
      {
        title: 'Discovery',
        description:
          'Kita mulai dengan eksplorasi mendalam tentang tujuan, kebutuhan, dan visi Anda.',
      },
      {
        title: 'Perencanaan',
        description:
          'Saya membuat roadmap detail yang mencakup ruang lingkup, timeline, dan deliverables.',
      },
      {
        title: 'Desain',
        description:
          'Saya mengembangkan wireframe dan desain visual untuk menentukan tampilan dan nuansa proyek Anda.',
      },
      {
        title: 'Pengembangan',
        description:
          'Saya menulis kode yang bersih dan efisien untuk menghidupkan desain dengan semua fungsionalitas yang dibutuhkan.',
      },
      {
        title: 'Testing',
        description:
          'Setiap proyek melalui proses testing yang ketat untuk memastikan kualitas, performa, dan kegunaan.',
      },
      {
        title: 'Launch',
        description:
          'Setelah disetujui, proyek Anda akan diluncurkan dengan deployment dan monitoring yang cermat.',
      },
      {
        title: 'Dukungan',
        description:
          'Saya menawarkan dukungan dan maintenance berkelanjutan untuk menjaga proyek Anda tetap berjalan lancar.',
      },
    ],
    [],
  )

  return (
    <div>
      <IntroSection paragraphs={introParagraphs} />

      <Section id="services-heading" title="Layanan Saya">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl bg-zinc-50/40 p-6 ring-1 ring-zinc-200/50 dark:bg-zinc-900/40 dark:ring-zinc-800/50"
            >
              <h3 className="mb-3 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                {service.title}
              </h3>
              <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-emerald-600">•</span>
                    <span className="text-zinc-600 dark:text-zinc-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="process-heading" title="Proses Saya">
        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800">
                <span className="font-medium text-zinc-800 dark:text-zinc-200">
                  {index + 1}
                </span>
              </div>
              <div>
                <h4 className="mb-1 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  {step.title}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ContactSection email={EMAIL} socialLinks={SOCIAL_LINKS} />
    </div>
  )
}
