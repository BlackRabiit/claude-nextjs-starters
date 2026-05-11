import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {/* 히어로 */}
      <section className="text-center space-y-4 py-8">
        <Badge variant="secondary" className="mb-2">Next.js 16 + Tailwind CSS 4 + shadcn/ui</Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          웹 개발 스타터 킷
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          기본 레이아웃, 인증 예제, shadcn/ui 컴포넌트가 포함된 빠른 시작 템플릿
        </p>
        <div className="flex items-center justify-center gap-3 pt-2">
          <Button asChild size="lg">
            <Link href="/dashboard">대시보드 보기</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/login">로그인 예제</Link>
          </Button>
        </div>
      </section>

      <Separator />

      {/* 기능 소개 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">포함된 기능</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">기본 레이아웃</CardTitle>
              <CardDescription>헤더, 푸터, 사이드바, 모바일 메뉴</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline">반응형</Badge>
                <Badge variant="outline">다크모드</Badge>
                <Badge variant="outline">Sheet</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">인증 예제</CardTitle>
              <CardDescription>JWT 세션, 로그인, 회원가입, 보호된 라우트</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline">jose</Badge>
                <Badge variant="outline">zod</Badge>
                <Badge variant="outline">proxy.ts</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">shadcn/ui 컴포넌트</CardTitle>
              <CardDescription>Button, Card, Input, Badge, Avatar 등</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline">radix-nova</Badge>
                <Badge variant="outline">Tailwind 4</Badge>
                <Badge variant="outline">OKLCH</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* 컴포넌트 쇼케이스 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">컴포넌트 쇼케이스</h2>

        {/* 버튼 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Button</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
            <Button disabled>Disabled</Button>
          </CardContent>
        </Card>

        {/* 배지 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Badge</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </CardContent>
        </Card>

        {/* 아바타 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Avatar</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>홍</AvatarFallback>
            </Avatar>
            <Avatar className="h-10 w-10">
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar className="h-12 w-12">
              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
          </CardContent>
        </Card>

        {/* 입력 폼 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Input + Label</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 max-w-sm">
            <div className="space-y-2">
              <Label htmlFor="demo-email">이메일</Label>
              <Input id="demo-email" type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="demo-password">비밀번호</Label>
              <Input id="demo-password" type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full">제출하기</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
