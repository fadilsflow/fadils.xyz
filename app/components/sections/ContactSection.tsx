// src/components/sections/ContactSection.tsx (lanjutan)
'use client'

import { memo } from 'react'
import { MagneticSocialLink } from '@/app/components/ui/MagneticSocialLink'
import { Section } from '@/app/components/sections/Section'

interface SocialLink {
  label: string
  link: string
}

interface ContactSectionProps {
  email: string
  socialLinks: SocialLink[]
}

export const ContactSection = memo(
  ({ email, socialLinks }: ContactSectionProps) => (
    <Section id="connect-heading" title="Connect">
      <p className="text-zinc-600 dark:text-zinc-400">
        Feel free to contact me at{' '}
        <a
          className="underline decoration-1 underline-offset-2 transition-colors hover:text-black dark:text-zinc-200 dark:hover:text-white"
          href={`mailto:${email}`}
        >
          {email}
        </a>
      </p>
      <div className="mt-8 flex items-center justify-start space-x-4">
        {socialLinks.map((link) => (
          <MagneticSocialLink
            key={link.label}
            link={link.link}
            ariaLabel={`Visit my ${link.label} profile`}
          >
            {link.label}
          </MagneticSocialLink>
        ))}
      </div>
    </Section>
  ),
)

ContactSection.displayName = 'ContactSection'
