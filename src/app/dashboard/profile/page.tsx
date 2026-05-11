import { unauthorized } from 'next/navigation'
import { getSession } from '@/lib/session'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default async function ProfilePage() {
  const session = await getSession()
  if (!session) unauthorized()

  const initials = session.name
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">프로필</h1>
        <p className="text-muted-foreground">계정 정보 및 설정</p>
      </div>
      <Separator />
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="text-xl">{initials}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{session.name}</CardTitle>
              <CardDescription>{session.email}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Badge variant="secondary">일반 회원</Badge>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>계정 정보</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="space-y-3 text-sm">
            <div className="flex gap-4">
              <dt className="w-24 font-medium text-muted-foreground">이름</dt>
              <dd>{session.name}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-24 font-medium text-muted-foreground">이메일</dt>
              <dd>{session.email}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-24 font-medium text-muted-foreground">사용자 ID</dt>
              <dd className="font-mono text-xs">{session.userId}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-24 font-medium text-muted-foreground">세션 만료</dt>
              <dd>{new Date(session.expiresAt).toLocaleDateString('ko-KR')}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </div>
  )
}
