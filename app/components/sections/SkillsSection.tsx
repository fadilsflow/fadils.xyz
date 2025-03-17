
// src/components/sections/SkillsSection.tsx
'use client'

import { memo } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Section } from './Section'

interface Skill {
  label: string
  link: string
}

interface SkillsSectionProps {
  skills: Skill[]
}

export const SkillsSection = memo(({ skills }: SkillsSectionProps) => (
  <Section id="skills-heading" title="Technical Skills">
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <div key={skill.label}>
          <Link href={skill.link} target="_blank" rel="noopener noreferrer">
            <Badge
              variant={'secondary'}
              className="cursor-pointer rounded-full px-3 py-1 text-sm"
            >
              {skill.label}
            </Badge>
          </Link>
        </div>
      ))}
    </div>
  </Section>
))

SkillsSection.displayName = 'SkillsSection'
