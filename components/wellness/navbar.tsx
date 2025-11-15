'use client'

import { Heart, BarChart3, BookOpen, Sparkles, Zap, Bell, Settings, Music, Users, TrendingUp, BookMarked, Bookmark, Target } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
  name: string
  href: string
  icon: React.ReactNode
  label: string
}

const navItems: NavItem[] = [
  { name: 'dashboard', href: '/', icon: <Heart className="w-5 h-5" />, label: 'Dashboard' },
  { name: 'meditation', href: '/meditation', icon: <Music className="w-5 h-5" />, label: 'Meditation' },
  { name: 'goals', href: '/goals', icon: <Target className="w-5 h-5" />, label: 'Goals' },
  { name: 'mood', href: '/mood', icon: <BarChart3 className="w-5 h-5" />, label: 'Mood' },
  { name: 'community', href: '/community', icon: <Users className="w-5 h-5" />, label: 'Community' },
  { name: 'insights', href: '/insights', icon: <TrendingUp className="w-5 h-5" />, label: 'Insights' },
  { name: 'journal', href: '/journal', icon: <BookOpen className="w-5 h-5" />, label: 'Journal' },
  { name: 'resources', href: '/resources', icon: <BookMarked className="w-5 h-5" />, label: 'Resources' },
  { name: 'saved', href: '/saved', icon: <Bookmark className="w-5 h-5" />, label: 'Saved' },
  { name: 'profile', href: '/profile', icon: <Settings className="w-5 h-5" />, label: 'Profile' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-warm-beige/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and brand */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-warm-teal/30 to-warm-teal/10 flex items-center justify-center">
              <Heart className="w-4 h-4 text-warm-teal" />
            </div>
            <span className="text-sm font-semibold text-foreground">Wellness</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1 overflow-x-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-[20px] transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-warm-teal/15 text-warm-teal'
                      : 'text-muted-foreground hover:text-foreground hover:bg-warm-beige/10'
                  }`}
                  title={item.label}
                >
                  {item.icon}
                  <span className="text-xs font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Notification and mobile menu */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => {/* Handle notifications */}}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Bell className="w-5 h-5" />
            </button>
            {/* Mobile menu - simplified for now */}
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
