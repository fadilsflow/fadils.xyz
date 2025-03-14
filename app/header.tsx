'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { TextEffect } from '@/components/ui/text-effect'

import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href={'/'}>
          <Avatar>
            <AvatarImage
              src="/profile.png"
              alt="wahyu akhmad fadillah profile picture"
              width={40}
              height={40}
            />
            <AvatarFallback>W</AvatarFallback>
          </Avatar>
        </Link>
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Wahyu Akhmad Fadillah
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Fullstack Web Developer
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
