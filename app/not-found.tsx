'use client'

import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="bg-background text-foreground mx-auto flex w-full max-w-md flex-col items-start justify-center p-6 text-left">
      <h1 className="text-muted-foreground mb-4 text-3xl">404</h1>
      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
        "Mereka yang tersesat, sering menemukan diri mereka di mana-mana, tapi
        tak pernah sampai ke tujuan."
      </p>
      <button
        onClick={() => router.back()}
        className="text-base underline transition-opacity hover:opacity-80"
      >
        Pulangg...
      </button>
    </div>
  )
}
