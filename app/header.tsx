'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export function Header() {
  const pathname = usePathname()
  // Daftar menu navigasi
  const navItems = [
    { href: '/', label: 'Root', title: 'Halaman Utama Wahyu Akhmad Fadillah' },
    { href: '/blog', label: 'Blog', title: 'Blog Wahyu Akhmad Fadillah' },
    { href: '/about', label: 'About', title: 'Tentang Wahyu Akhmad Fadillah' },
    {
      href: '/services',
      label: 'Services',
      title: 'Layanan Fullstack Web Development',
    },
    {
      href: '/contact',
      label: 'Contact',
      title: 'Hubungi Wahyu Akhmad Fadillah',
    },
  ]
  return (
    <header className="mb-8">
      {/* Bagian Profil dan Ikon Media Sosial */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            title="Beranda Wahyu Akhmad Fadillah - Fullstack Web Developer"
          >
            <Image
              src="https://res.cloudinary.com/dxurnpbrc/image/upload/v1742120154/profile_mtt1fl.png"
              width={48}
              height={48}
              alt="Profile Picture - Wahyu Akhmad Fadillah"
              title="Profile Picture - Wahyu Akhmad Fadillah"
              priority
              className="rounded-full transition-transform duration-300 hover:scale-105"
            />
          </Link>
          <div>
            <p className="text-lg font-semibold text-black dark:text-white">
              Wahyu Akhmad Fadillah
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Fullstack Web Developer
            </p>
          </div>
        </div>
        {/* Ikon Media Sosial */}
        <div className="flex gap-4">
          {[
            {
              href: 'https://github.com/fadilsflow',
              src: '/github.svg',
              alt: 'GitHub',
              title: 'Profil GitHub Wahyu Akhmad Fadillah',
            },
            {
              href: 'https://linkedin.com/in/wahyu-akhmad-fadillah',
              src: '/linkedin.svg',
              alt: 'LinkedIn',
              title: 'Profil LinkedIn Wahyu Akhmad Fadillah',
            },
            {
              href: 'https://wa.me/+6285157739978',
              src: '/whatsapp.svg',
              alt: 'Whatsapp',
              title: 'Hubungi Wahyu Akhmad Fadillah via WhatsApp',
            },
            {
              href: 'https://www.instagram.com/fadils.xyz',
              src: '/instagram.svg',
              alt: 'Instagram',
              title: 'Profil Instagram Wahyu Akhmad Fadillah',
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.title}
            >
              <Image
                src={social.src}
                width={18}
                height={18}
                alt={social.alt}
                title={social.title}
                className="opacity-70 invert transition-all duration-300 hover:scale-110 hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </div>
      {/* Menu Navigasi */}
      <nav className="mt-4 flex gap-6 border-b border-zinc-200 dark:border-zinc-800">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            title={item.title}
            className={`group relative pb-3 text-sm font-medium transition-all duration-300 ${
              pathname === item.href
                ? 'text-black dark:text-white'
                : 'text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white'
            }`}
          >
            {item.label}
            {/* Efek underlining yang smooth tanpa getaran */}
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-full bg-black transition-transform duration-300 dark:bg-white ${
                pathname === item.href
                  ? 'scale-x-100'
                  : 'scale-x-0 group-hover:scale-x-100'
              }`}
            ></span>
          </Link>
        ))}
      </nav>
    </header>
  )
}
