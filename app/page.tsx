'use client'

import { memo, useMemo } from 'react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { Badge } from '@/components/ui/badge'
import {
  PRODUCTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
  SKILLS,
} from './data'
import Head from 'next/head'

// SEO meta data
const META_TITLE = 'Personal Portfolio - Web Developer & Designer'
const META_DESCRIPTION =
  'Professional web developer passionate about crafting intuitive, high-performance, and visually stunning web experiences.'
const META_KEYWORDS =
  'web developer, frontend developer, UI/UX designer, React, Next.js'

type ProjectVideoProps = {
  src: string
  alt: string
}

interface WorkExperienceItemProps {
  job: {
    id: string
    title: string
    company: string
    start: string
    end: string
    link: string
  }
}

// Memoized components for better performance
const ProjectVideo = memo(({ src, alt }: ProjectVideoProps) => {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="aspect-video w-full cursor-zoom-in rounded-xl"
          aria-label={alt}
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
            aria-label={alt}
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          aria-label="Close"
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
})

ProjectVideo.displayName = 'ProjectVideo'

const MagneticSocialLink = memo(
  ({
    children,
    link,
    ariaLabel,
  }: {
    children: React.ReactNode
    link: string
    ariaLabel: string
  }) => {
    return (
      <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
        >
          {children}
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            aria-hidden="true"
          >
            <path
              d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </Magnetic>
    )
  },
)

MagneticSocialLink.displayName = 'MagneticSocialLink'

const WorkExperienceItem = memo(({ job }: WorkExperienceItemProps) => (
  <Link
    className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] transition-transform duration-200 hover:scale-[1.01] dark:bg-zinc-600/30"
    href={job.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Spotlight
      className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
      size={64}
    />
    <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
      <div className="relative flex w-full flex-row justify-between">
        <div>
          <h4 className="font-normal dark:text-zinc-100">{job.title}</h4>
          <p className="text-zinc-500 dark:text-zinc-400">{job.company}</p>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400">
          {job.start} - {job.end}
        </p>
      </div>
    </div>
  </Link>
))

WorkExperienceItem.displayName = 'WorkExperienceItem'

// Section component to standardize styling across sections
const Section = memo(
  ({
    id,
    title,
    children,
  }: {
    id: string
    title: string
    children: React.ReactNode
  }) => (
    <section aria-labelledby={id} className="py-16 first:pt-8">
      <h2
        id={id}
        className="mb-5 text-xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100"
      >
        {title}
      </h2>
      {children}
    </section>
  ),
)

Section.displayName = 'Section'

export default function Personal() {
  // Memoized product list
  const renderProducts = useMemo(
    () => (
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {PRODUCTS.map((product) => (
          <div key={product.name} className="space-y-4">
            <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
              <ProjectVideo src={product.video} alt={product.name} />
            </div>
            <div className="px-1">
              <a
                className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {product.name}
                <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full"></span>
              </a>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    ),
    [],
  )

  // Memoized skills list
  const renderSkills = useMemo(
    () => (
      <div className="flex flex-wrap gap-3">
        {SKILLS.map((skill) => (
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
    ),
    [],
  )

  // Memoized work experience list
  const renderWorkExperience = useMemo(
    () => (
      <div className="flex flex-col space-y-5">
        {WORK_EXPERIENCE.map((job) => (
          <WorkExperienceItem key={job.id} job={job} />
        ))}
      </div>
    ),
    [],
  )

  // Memoized blog posts
  const renderBlogPosts = useMemo(
    () => (
      <AnimatedBackground
        enableHover
        className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.2,
        }}
      >
        {BLOG_POSTS.map((post) => (
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
    ),
    [],
  )

  // Memoized social links
  const renderSocialLinks = useMemo(
    () => (
      <div className="mt-8 flex items-center justify-start space-x-4">
        {SOCIAL_LINKS.map((link) => (
          <MagneticSocialLink
            key={link.label}
            link={link.link}
            ariaLabel={`Visit my ${link.label} profile`}
          >
            {link.label}
          </MagneticSocialLink>
        ))}
      </div>
    ),
    [],
  )

  return (
    <>
      <Head>
        <title>{META_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta name="keywords" content={META_KEYWORDS} />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={META_TITLE} />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <link rel="canonical" href="https://yourdomain.com" />
      </Head>

      <article className="mt-12 flex-1">
        <section className="space-y-2">
          <h1 className="sr-only">Personal Portfolio</h1>
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            I&apos;m passionate about crafting intuitive, high-performance, and
            visually stunning web experiences. I thrive at the intersection of
            design and development, ensuring every interaction feels seamless
            and every detail is thoughtfully executed.
          </p>
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            For me, coding isn't just about writing lines of code—it's about
            creating something meaningful. Whether it's shaping fluid user
            experiences or building scalable solutions, I focus on delivering
            work that is modern, efficient, and user-friendly.
          </p>
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            Beyond coding, I'm always exploring new ideas, learning, and pushing
            boundaries. I believe great development is a balance of logic and
            creativity, where structure serves purpose and simplicity enhances
            clarity.
          </p>
        </section>

        <Section id="products-heading" title="Products">
          {renderProducts}
        </Section>

        <Section id="skills-heading" title="Technical Skills">
          {renderSkills}
        </Section>

        <Section id="experience-heading" title="Work Experience">
          {renderWorkExperience}
        </Section>

        <Section id="blog-heading" title="Blog">
          {renderBlogPosts}
        </Section>

        <Section id="connect-heading" title="Connect">
          <p className="text-zinc-600 dark:text-zinc-400">
            Feel free to contact me at{' '}
            <a
              className="underline decoration-1 underline-offset-2 transition-colors hover:text-black dark:text-zinc-200 dark:hover:text-white"
              href={`mailto:${EMAIL}`}
            >
              {EMAIL}
            </a>
          </p>
          {renderSocialLinks}
        </Section>
      </article>
    </>
  )
}
