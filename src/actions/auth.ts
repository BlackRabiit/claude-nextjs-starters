'use server'

import { redirect } from 'next/navigation'
import { createSession, deleteSession } from '@/lib/session'
import { loginSchema, registerSchema } from '@/lib/validations'
import type { ActionState } from './types'

export async function loginAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const raw = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const parsed = loginSchema.safeParse(raw)
  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors }
  }

  // 실제 구현 시 DB 조회 및 bcrypt 비밀번호 검증으로 교체
  if (parsed.data.email !== 'demo@example.com' || parsed.data.password !== 'password123') {
    return { success: false, message: '이메일 또는 비밀번호가 올바르지 않습니다' }
  }

  await createSession('user-demo', parsed.data.email, 'Demo User')
  redirect('/dashboard')
}

export async function registerAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const raw = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirmPassword') as string,
  }

  const parsed = registerSchema.safeParse(raw)
  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors }
  }

  // 실제 구현 시 중복 이메일 확인 및 DB 저장으로 교체
  await createSession('user-new', parsed.data.email, parsed.data.name)
  redirect('/dashboard')
}

export async function logoutAction() {
  await deleteSession()
  redirect('/login')
}
