
// src/components/sections/BlogSection.tsx
'use client'

import { memo } from 'react'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { Section } from '@/app/components/sections/Section'

interface BlogPost {
  uid: string
  title: string
  description: string
  link: string
}

interface BlogSectionProps {
  posts: BlogPost[]
}

export const BlogSection = memo(({ posts }: BlogSectionProps) => (
  <Section id="blog-heading" title="Blog">
    <AnimatedBackground
      enableHover
      className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
    >
      {posts.map((post) => (
        <Link
          key={post.uid}
          className="-mx-3 rounded-xl px-5 py-5"
          href={post.link}
          data-id={post.uid}
        >
          <div className="flex flex-col space-y-2">
            <h4 className="font-normal dark:text-zinc-100">{post.title}</h4>
            <p className="text-zinc-500 dark:text-zinc-400">
              {post.description}
            </p>
          </div>
        </Link>
      ))}
    </AnimatedBackground>
  </Section>
))

BlogSection.displayName = 'BlogSection'
