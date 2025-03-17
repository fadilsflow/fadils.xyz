

// src/components/sections/WorkExperienceSection.tsx
'use client'

import { memo } from 'react'
import { WorkExperienceCard } from '@/app/components/cards/WorkExperienceCard'
import { Section } from '@/app/components/sections/Section'

interface Job {
  id: string
  title: string
  company: string
  start: string
  end: string
  link: string
}

interface WorkExperienceSectionProps {
  jobs: Job[]
}

export const WorkExperienceSection = memo(({ jobs }: WorkExperienceSectionProps) => (
  <Section id="experience-heading" title="Work Experience">
    <div className="flex flex-col space-y-5">
      {jobs.map((job) => (
        <WorkExperienceCard key={job.id} job={job} />
      ))}
    </div>
  </Section>
))

WorkExperienceSection.displayName = 'WorkExperienceSection'
