import { cookies } from 'next/headers'
import { createSessionToken, verifySessionToken } from './auth'
import type { SessionPayload } from '@/types/auth'

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get('session')?.value
  if (!token) return null
  return verifySessionToken(token)
}

export async function createSession(userId: string, email: string, name: string) {
  const token = await createSessionToken({ userId, email, name })
  const cookieStore = await cookies()
  cookieStore.set('session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60,
    path: '/',
  })
}

export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete('session')
}
