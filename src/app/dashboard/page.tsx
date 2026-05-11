import { unauthorized } from 'next/navigation'
import { getSession } from '@/lib/session'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default async function DashboardPage() {
  const session = await getSession()

  if (!session) unauthorized()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">대시보드</h1>
        <p className="text-muted-foreground">안녕하세요, {session.name}님! 👋</p>
      </div>
      <Separator />
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>총 방문</CardDescription>
            <CardTitle className="text-3xl">1,234</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary">+12% 이번 달</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>활성 사용자</CardDescription>
            <CardTitle className="text-3xl">567</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary">+8% 이번 달</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>완료된 작업</CardDescription>
            <CardTitle className="text-3xl">89</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary">+23% 이번 달</Badge>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>세션 정보</CardTitle>
          <CardDescription>현재 로그인된 계정 정보</CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="space-y-2 text-sm">
            <div className="flex gap-4">
              <dt className="w-20 font-medium text-muted-foreground">이름</dt>
              <dd>{session.name}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-20 font-medium text-muted-foreground">이메일</dt>
              <dd>{session.email}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-20 font-medium text-muted-foreground">사용자 ID</dt>
              <dd className="font-mono text-xs">{session.userId}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </div>
  )
}
