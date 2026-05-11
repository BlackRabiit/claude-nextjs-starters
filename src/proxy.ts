import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifySessionToken } from '@/lib/auth'

const protectedRoutes = ['/dashboard']
const authRoutes = ['/login', '/register']

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('session')?.value

  const isProtected = protectedRoutes.some((r) => pathname.startsWith(r))
  const isAuthRoute = authRoutes.some((r) => pathname.startsWith(r))

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isProtected && token) {
    const session = await verifySessionToken(token)
    if (!session) {
      const res = NextResponse.redirect(new URL('/login', request.url))
      res.cookies.delete('session')
      return res
    }
  }

  if (isAuthRoute && token) {
    const session = await verifySessionToken(token)
    if (session) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)', '/'],
}
