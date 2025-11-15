'use client'

import { Shield, Users, FileText, BarChart3, Settings, Bell } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const adminNavItems = [
  { name: 'dashboard', href: '/admin', icon: <Shield className="w-5 h-5" />, label: 'Dashboard' },
  { name: 'users', href: '/admin/users', icon: <Users className="w-5 h-5" />, label: 'Users' },
  { name: 'content', href: '/admin/content', icon: <FileText className="w-5 h-5" />, label: 'Content' },
  { name: 'analytics', href: '/admin/analytics', icon: <BarChart3 className="w-5 h-5" />, label: 'Analytics' },
  { name: 'settings', href: '/admin/settings', icon: <Settings className="w-5 h-5" />, label: 'Settings' },
]

export default function AdminNavbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-warm-beige/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/admin" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[oklch(0.70_0.15_50)]/30 to-[oklch(0.65_0.15_130)]/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-[oklch(0.70_0.15_50)]" />
            </div>
            <span className="text-sm font-semibold text-foreground">Wellness Admin</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {adminNavItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-[20px] transition-all duration-200 ${
                    isActive
                      ? 'bg-[oklch(0.70_0.15_50)]/15 text-[oklch(0.70_0.15_50)]'
                      : 'text-muted-foreground hover:text-foreground hover:bg-warm-beige/10'
                  }`}
                >
                  {item.icon}
                  <span className="text-xs font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>

          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  )
}