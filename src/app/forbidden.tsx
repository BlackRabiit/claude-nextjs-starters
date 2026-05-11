import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ForbiddenPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center px-4">
      <div className="space-y-2">
        <h1 className="text-6xl font-bold text-muted-foreground">403</h1>
        <h2 className="text-xl font-semibold">접근 권한이 없습니다</h2>
        <p className="text-muted-foreground">이 페이지에 접근할 권한이 없습니다.</p>
      </div>
      <Button variant="outline" asChild>
        <Link href="/">홈으로 돌아가기</Link>
      </Button>
    </div>
  )
}
