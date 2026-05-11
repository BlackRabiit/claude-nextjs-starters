import Link from 'next/link'
import { getSession } from '@/lib/session'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { UserMenu } from './user-menu'
import { MobileNav } from './mobile-nav'

const navLinks = [
  { href: '/', label: '홈' },
  { href: '/dashboard', label: '대시보드' },
]

export async function Header() {
  const session = await getSession()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-4">
        <MobileNav />
        <div className="flex items-center gap-6 flex-1">
          <Link href="/" className="hidden md:flex font-bold text-lg">
            MyApp
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {session ? (
            <UserMenu user={session} />
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">로그인</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/register">회원가입</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
