'use client'

import { useActionState } from 'react'
import { registerAction } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { ActionState } from '@/actions/types'

const initialState: ActionState = { success: false }

export function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerAction, initialState)

  return (
    <form action={formAction} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">이름</Label>
        <Input id="name" name="name" type="text" placeholder="홍길동" required />
        {state.errors?.name && (
          <p className="text-xs text-destructive">{state.errors.name[0]}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">이메일</Label>
        <Input id="email" name="email" type="email" placeholder="you@example.com" required />
        {state.errors?.email && (
          <p className="text-xs text-destructive">{state.errors.email[0]}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">비밀번호</Label>
        <Input id="password" name="password" type="password" placeholder="••••••••" required />
        {state.errors?.password && (
          <p className="text-xs text-destructive">{state.errors.password[0]}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">비밀번호 확인</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="••••••••"
          required
        />
        {state.errors?.confirmPassword && (
          <p className="text-xs text-destructive">{state.errors.confirmPassword[0]}</p>
        )}
      </div>
      {state.message && (
        <p className="text-sm text-destructive rounded-md bg-destructive/10 px-3 py-2">
          {state.message}
        </p>
      )}
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? '가입 중...' : '회원가입'}
      </Button>
    </form>
  )
}
