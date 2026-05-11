import { unauthorized } from 'next/navigation'
import { getSession } from '@/lib/session'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'

export default async function SettingsPage() {
  const session = await getSession()
  if (!session) unauthorized()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">설정</h1>
        <p className="text-muted-foreground">앱 환경설정 관리</p>
      </div>
      <Separator />
      <Card>
        <CardHeader>
          <CardTitle>알림 설정</CardTitle>
          <CardDescription>이메일 및 앱 알림 수신 여부를 관리합니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm">
            {[
              { label: '이메일 알림', status: '활성' },
              { label: '마케팅 수신', status: '비활성' },
              { label: '보안 알림', status: '활성' },
            ].map(({ label, status }) => (
              <li key={label} className="flex items-center justify-between">
                <span>{label}</span>
                <Badge variant={status === '활성' ? 'secondary' : 'outline'}>{status}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>보안</CardTitle>
          <CardDescription>비밀번호 변경 및 2단계 인증 관리</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm">
            {[
              { label: '비밀번호 변경', note: '마지막 변경: 30일 전' },
              { label: '2단계 인증', note: '미설정' },
              { label: '로그인 기기 관리', note: '1개 기기 활성' },
            ].map(({ label, note }) => (
              <li key={label} className="flex items-center justify-between">
                <span>{label}</span>
                <span className="text-xs text-muted-foreground">{note}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>계정</CardTitle>
          <CardDescription>계정 관련 위험 영역</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            계정 삭제, 데이터 내보내기 등의 기능은 고객 지원에 문의하세요.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
