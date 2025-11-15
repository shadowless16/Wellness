'use client'

import { Heart, Users, BarChart3, Calendar, Settings, Bell } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const coachNavItems = [
  { name: 'dashboard', href: '/coach', icon: <Heart className="w-5 h-5" />, label: 'Dashboard' },
  { name: 'clients', href: '/coach/clients', icon: <Users className="w-5 h-5" />, label: 'Clients' },
  { name: 'programs', href: '/coach/programs', icon: <Calendar className="w-5 h-5" />, label: 'Programs' },
  { name: 'analytics', href: '/coach/analytics', icon: <BarChart3 className="w-5 h-5" />, label: 'Analytics' },
  { name: 'profile', href: '/coach/profile', icon: <Settings className="w-5 h-5" />, label: 'Profile' },
]

export default function CoachNavbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-warm-beige/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/coach" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[oklch(0.65_0.15_130)]/30 to-[oklch(0.70_0.15_50)]/10 flex items-center justify-center">
              <Heart className="w-4 h-4 text-[oklch(0.65_0.15_130)]" />
            </div>
            <span className="text-sm font-semibold text-foreground">Wellness Coach</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {coachNavItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-[20px] transition-all duration-200 ${
                    isActive
                      ? 'bg-[oklch(0.65_0.15_130)]/15 text-[oklch(0.65_0.15_130)]'
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