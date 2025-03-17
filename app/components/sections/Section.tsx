// src/components/sections/Section.tsx
import React from 'react'

interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
}

export const Section = ({ id, title, children }: SectionProps) => (
  <section aria-labelledby={id} className="py-16 first:pt-8">
    <h2
      id={id}
      className="mb-5 text-xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100"
    >
      {title}
    </h2>
    {children}
  </section>
)
