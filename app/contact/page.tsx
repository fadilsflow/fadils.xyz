import { useMemo } from 'react'

import { IntroSection } from '@/app/components/sections/IntroSection'
import { Section } from '@/app/components/sections/Section'
import { MagneticSocialLink } from '@/app/components/ui/MagneticSocialLink'
import { EMAIL, SOCIAL_LINKS } from '../data'

import { createMetadata, viewport } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Hubungi Saya - Mari Berkolaborasi!',
  description:
    'Hubungi saya untuk diskusi proyek, kolaborasi, atau sekadar menyapa. Saya selalu senang mendengar ide-ide baru!',
  path: '/contact',
  ogImage: 'profile.png',
  ogImageAlt: 'Wahyu Akhmad Fadillah',
  keywords: [
    'hubungi fadil, kolaborasi proyek, konsultasi web development, freelance developer',
  ],
})

export { viewport }

export default function Contact() {
  const introParagraphs = useMemo(
    () => [
      'Saya selalu tertarik untuk mendengar proyek dan kesempatan baru. Apakah Anda punya pertanyaan tentang pekerjaan saya, ingin mendiskusikan proyek potensial, atau sekadar menyapa, saya akan senang mendengarnya!',
      'Anda bisa menghubungi saya melalui email atau media sosial di bawah ini.',
    ],
    [],
  )

  return (
    <div>
      <IntroSection paragraphs={introParagraphs} />

      <div className="mt-12">
        <Section id="contact-info-heading" title="Informasi Kontak">
          <div className="space-y-8">
            <div>
              <h3 className="mb-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Email
              </h3>
              <a
                href={`mailto:${EMAIL}`}
                className="text-lg text-zinc-600 underline decoration-1 underline-offset-2 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                {EMAIL}
              </a>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Media Sosial
              </h3>
              <div className="flex flex-wrap gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <MagneticSocialLink
                    key={link.label}
                    link={link.link}
                    ariaLabel={`Kunjungi profil ${link.label} saya`}
                  >
                    {link.label}
                  </MagneticSocialLink>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-zinc-50 p-6 dark:bg-zinc-900/50">
              <h3 className="mb-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Tersedia Untuk
              </h3>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                {[
                  'Proyek Freelance',
                  'Konsultasi',
                  'Kolaborasi',
                  'Diskusi',
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-emerald-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
