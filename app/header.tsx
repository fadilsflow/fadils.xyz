'use client'

import Image from 'next/image'

import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href={'/'}>
          <Image
            src="https://res.cloudinary.com/dxurnpbrc/image/upload/v1742120154/profile_mtt1fl.png"
            width={40}
            height={40}
            alt="Profile Picture - Wahyu Akhmad Fadillah "
            priority
            className="rounded-full"
          />
        </Link>
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Wahyu Akhmad Fadillah
          </Link>
          <p className="text-zinc-600 dark:text-zinc-500">
            Fullstack Web Developer
          </p>
        </div>
      </div>
    </header>
  )
}
