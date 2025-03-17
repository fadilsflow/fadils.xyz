
// src/components/sections/IntroSection.tsx
'use client'

import { memo } from 'react'

interface IntroSectionProps {
  paragraphs: string[]
}

export const IntroSection = memo(({ paragraphs }: IntroSectionProps) => (
  <section className="space-y-2">
    <h1 className="sr-only">Personal Portfolio</h1>
    {paragraphs.map((paragraph, index) => (
      <p key={index} className="leading-relaxed text-zinc-600 dark:text-zinc-400">
        {paragraph}
      </p>
    ))}
  </section>
))

IntroSection.displayName = 'IntroSection'
