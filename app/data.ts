type Product = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type Skill = {
  label: string
  link: string
}
export const PRODUCTS: Product[] = [
  {
    name: 'Bulba Cloud',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Bulba Cloud',
    title: 'CEO',
    start: '2025',
    end: 'Present',
    link: 'https://github.com/fadilsflow',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Full-stack Web Developer',
    start: '2025',
    end: 'Present',
    link: 'https://github.com/fadilsflow',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/fadilsflow',
  },
  {
    label: 'Github',
    link: 'https://github.com/fadilsflow',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/fadilsflow',
  },
  {
    label: 'Whatsapp',
    link: 'https://wa.me/+6285157739978',
  },
]
export const SKILLS: Skill[] = [
  {
    label: 'React',
    link: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    link: 'https://nextjs.org/',
  },
  {
    label: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
  },
  {
    label: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
  },
  {
    label: 'Node.js',
    link: 'https://nodejs.org/',
  },
  {
    label: 'Express.js',
    link: 'https://expressjs.com/',
  },
  {
    label: 'PostgreSQL',
    link: 'https://www.postgresql.org/',
  },
  {
    label: 'MySQL',
    link: 'https://www.mysql.com/',
  },
  {
    label: 'Prisma',
    link: 'https://www.prisma.io/',
  },
  {
    label: 'Git',
    link: 'https://git-scm.com/',
  },
  {
    label: 'Docker',
    link: 'https://www.docker.com/',
  },
]

export const EMAIL = 'wahyufadil1140@gmail.com'
