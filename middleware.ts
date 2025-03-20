// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Jika berada di halaman blog, pastikan canonical URL sesuai
  if (pathname.startsWith('/blog/')) {
    const url = request.nextUrl.clone()
    const response = NextResponse.next()

    // Set canonical URL yang sesuai
    response.headers.set('Link', `<${url.origin}${pathname}>; rel="canonical"`)

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/blog/:path*',
}
