import { unauthorized } from 'next/navigation'
import { getSession } from '@/lib/session'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default async function AnalyticsPage() {
  const session = await getSession()
  if (!session) unauthorized()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">분석</h1>
        <p className="text-muted-foreground">사이트 트래픽 및 사용 현황</p>
      </div>
      <Separator />
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>페이지뷰</CardDescription>
            <CardTitle className="text-3xl">24,521</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary">+18% 지난주 대비</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>평균 세션 시간</CardDescription>
            <CardTitle className="text-3xl">3분 42초</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary">+5% 지난주 대비</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>이탈률</CardDescription>
            <CardTitle className="text-3xl">42.3%</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="outline">-2% 지난주 대비</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>신규 방문자</CardDescription>
            <CardTitle className="text-3xl">1,892</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary">+31% 지난주 대비</Badge>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>인기 페이지</CardTitle>
          <CardDescription>최근 7일 기준</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm">
            {[
              { path: '/', views: '8,234', pct: '33.6%' },
              { path: '/dashboard', views: '5,102', pct: '20.8%' },
              { path: '/login', views: '3,891', pct: '15.9%' },
              { path: '/register', views: '2,140', pct: '8.7%' },
            ].map(({ path, views, pct }) => (
              <li key={path} className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">{path}</span>
                <span className="flex gap-4">
                  <span>{views} 뷰</span>
                  <Badge variant="outline">{pct}</Badge>
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
