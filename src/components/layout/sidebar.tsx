import Link from 'next/link'
import { LayoutDashboard, Settings, User, BarChart3 } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const sidebarItems = [
  { href: '/dashboard', label: '대시보드', icon: LayoutDashboard },
  { href: '/dashboard/analytics', label: '분석', icon: BarChart3 },
  { href: '/dashboard/profile', label: '프로필', icon: User },
  { href: '/dashboard/settings', label: '설정', icon: Settings },
]

export function Sidebar() {
  return (
    <aside className="hidden md:flex w-60 flex-col border-r bg-sidebar">
      <div className="flex h-14 items-center px-4 font-bold border-b">
        <Link href="/">MyApp</Link>
      </div>
      <Separator />
      <nav className="flex-1 p-3 space-y-1">
        {sidebarItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
          >
            <Icon className="h-4 w-4 shrink-0" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
