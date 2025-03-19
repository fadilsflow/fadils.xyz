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

interface BlogPost {
  uid: string
  title: string
  description: string
  link: string
  date?: string // Tambahkan properti tanggal (opsional)
  readingTime?: string // Tambahkan properti waktu baca (opsional)
  badges?: string[] // Tambahkan properti badge (opsional)
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
    description: 'Smart & Reliable Digital Solutions for Everyone.',
    link: 'https://bulba.cloud/',
    video:
      'https://res.cloudinary.com/dxurnpbrc/video/upload/v1742080791/iofanevzavqso4joxjj5.mov',
    id: 'project1',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Bulba Cloud',
    title: 'Chief Technology Officer',
    start: '2025',
    end: 'Present',
    link: 'https://bulba.cloud',
    id: 'work1',
  },

  {
    company: 'Freelance',
    title: 'Full-stack Web Developer',
    start: '2025',
    end: 'Present',
    link: 'https://github.com/fadilsflow',
    id: 'work2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'mengenal-dan-menginstal-laravel-di-arch-linux',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: 'blog/mengenal-dan-menginstal-laravel-di-arch-linux',
    uid: 'blog-1',
    date: '2025-3-18',
    readingTime: '5', // Tambahkan waktu baca
    badges: ['AI', 'Design', 'Web Development'], // Tambahkan badge
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/wahyu-akhmad-fadillah',
  },
  {
    label: 'Github',
    link: 'https://github.com/fadilsflow',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/fadils.xyz',
  },
  {
    label: 'Whatsapp',
    link: 'https://wa.me/+6285157739978',
  },
]
export const SKILLS: Skill[] = [
  {
    label: 'Linux',
    link: 'https://linux.org/',
  },
  {
    label: 'VIM',
    link: 'https://www.vim.org/',
  },
  {
    label: 'Bun',
    link: 'https://bun.sh/',
  },
  {
    label: 'Node.js',
    link: 'https://nodejs.org/',
  },
  {
    label: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    link: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    link: 'https://nextjs.org/',
  },

  {
    label: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
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
    label: 'Git',
    link: 'https://git-scm.com/',
  },
]

export const EMAIL = 'wahyufadil1140@gmail.com'
