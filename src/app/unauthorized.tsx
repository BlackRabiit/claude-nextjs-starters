import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center px-4">
      <div className="space-y-2">
        <h1 className="text-6xl font-bold text-muted-foreground">401</h1>
        <h2 className="text-xl font-semibold">인증이 필요합니다</h2>
        <p className="text-muted-foreground">이 페이지에 접근하려면 로그인이 필요합니다.</p>
      </div>
      <Button asChild>
        <Link href="/login">로그인하기</Link>
      </Button>
    </div>
  )
}
