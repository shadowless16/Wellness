'use client'

import { Heart, BarChart3, BookOpen, Bell, Settings, Music, Users, TrendingUp, BookMarked, Bookmark, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/user', icon: <Heart className="w-5 h-5" />, label: 'Dashboard' },
  { href: '/user/meditation', icon: <Music className="w-5 h-5" />, label: 'Meditation' },
  { href: '/user/goals', icon: <Target className="w-5 h-5" />, label: 'Goals' },
  { href: '/user/mood', icon: <BarChart3 className="w-5 h-5" />, label: 'Mood' },
  { href: '/user/community', icon: <Users className="w-5 h-5" />, label: 'Community' },
  { href: '/user/insights', icon: <TrendingUp className="w-5 h-5" />, label: 'Insights' },
  { href: '/user/journal', icon: <BookOpen className="w-5 h-5" />, label: 'Journal' },
  { href: '/user/resources', icon: <BookMarked className="w-5 h-5" />, label: 'Resources' },
  { href: '/user/saved', icon: <Bookmark className="w-5 h-5" />, label: 'Saved' },
  { href: '/user/profile', icon: <Settings className="w-5 h-5" />, label: 'Profile' },
]

export default function UserNavbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-warm-beige/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/user" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="Wellness Logo"
              width={110}
              height={50}
              className="rounded-full"
            />
            {/* <span className="text-sm font-semibold text-foreground">Wellness</span> */}
          </Link>

          <div className="hidden md:flex items-center gap-1 overflow-x-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-[20px] transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-[oklch(0.65_0.15_130)]/15 to-[oklch(0.70_0.15_50)]/10 text-[oklch(0.65_0.15_130)]'
                      : 'text-muted-foreground hover:text-foreground hover:bg-gradient-to-r hover:from-[oklch(0.65_0.15_130)]/5 hover:to-[oklch(0.70_0.15_50)]/5'
                  }`}
                >
                  {item.icon}
                  <span className="text-xs font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <div className="md:hidden">
              <select
                value={pathname}
                onChange={(e) => window.location.href = e.target.value}
                className="px-3 py-2 rounded-[16px] bg-warm-beige/20 text-foreground border-0 cursor-pointer text-sm"
              >
                {navItems.map((item) => (
                  <option key={item.href} value={item.href}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}