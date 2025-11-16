'use client'

import { useRouter } from 'next/navigation'
import { Heart, AlertCircle, ArrowRight, Sparkles, Activity, BookOpen, Zap } from 'lucide-react'
import WelcomeHeader from '@/components/user/wellness/welcome-header'
import EmergencyCard from '@/components/user/wellness/emergency-card'
import MoodCard from '@/components/user/wellness/mood-card'
import GrowthCard from '@/components/user/wellness/growth-card'

export default function WellnessDashboard() {
  const router = useRouter()

  const quickAccessCards = [
    {
      id: 'programs',
      title: 'Wellness Programs',
      description: '4 structured courses',
      icon: '🎯',
      color: 'from-warm-teal/30 to-warm-teal/10',
      borderColor: 'border-warm-teal/20',
      onClick: () => router.push('/programs')
    },
    {
      id: 'exercises',
      title: 'Guided Exercises',
      description: '6 therapeutic practices',
      icon: '✨',
      color: 'from-warm-yellow/30 to-warm-yellow/10',
      borderColor: 'border-warm-yellow/20',
      onClick: () => router.push('/exercises')
    },
    {
      id: 'journal',
      title: 'Journal',
      description: '3 recent entries',
      icon: '📓',
      color: 'from-warm-emergency/30 to-warm-emergency/10',
      borderColor: 'border-warm-emergency/20',
      onClick: () => router.push('/journal')
    },
    {
      id: 'mood',
      title: 'Mood History',
      description: 'Track patterns',
      icon: '📊',
      color: 'from-warm-beige/40 to-warm-beige/10',
      borderColor: 'border-warm-beige/20',
      onClick: () => router.push('/mood')
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-cream-light">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        {/* Welcome header */}
        <WelcomeHeader userName="Alex" />

        {/* Emergency assistance - prominent placement */}
        <EmergencyCard />

        {/* Two-column responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <MoodCard />
          <GrowthCard />
        </div>

        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] bg-clip-text text-transparent">Quick Access</h2>
            <span className="text-xs text-muted-foreground">Explore features</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickAccessCards.map((card) => (
              <button
                key={card.id}
                onClick={card.onClick}
                className={`p-6 rounded-[24px] bg-gradient-to-br ${card.color} border ${card.borderColor} shadow-soft hover:shadow-soft-lg transition-all text-left group`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{card.icon}</div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-[oklch(0.70_0.15_50)] transition-colors opacity-0 group-hover:opacity-100" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-[oklch(0.70_0.15_50)] transition-colors">{card.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{card.description}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] bg-clip-text text-transparent">Your Week at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-[24px] bg-white border border-warm-beige/20 shadow-soft hover:shadow-soft-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Exercises Completed</p>
                <Activity className="w-5 h-5 text-[oklch(0.70_0.15_50)]" />
              </div>
              <p className="text-3xl font-semibold text-foreground">8</p>
              <p className="text-xs text-muted-foreground mt-2">+2 from last week</p>
            </div>

            <div className="p-6 rounded-[24px] bg-white border border-warm-beige/20 shadow-soft hover:shadow-soft-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Journal Entries</p>
                <BookOpen className="w-5 h-5 text-warm-yellow" />
              </div>
              <p className="text-3xl font-semibold text-foreground">3</p>
              <p className="text-xs text-muted-foreground mt-2">Keep reflecting daily</p>
            </div>

            <div className="p-6 rounded-[24px] bg-white border border-warm-beige/20 shadow-soft hover:shadow-soft-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Wellness Streak</p>
                <Sparkles className="w-5 h-5 text-[oklch(0.70_0.15_50)]" />
              </div>
              <p className="text-3xl font-semibold text-foreground">12</p>
              <p className="text-xs text-muted-foreground mt-2">Days of commitment</p>
            </div>
            
            {/* New Achievement Card */}
            <div className="p-6 rounded-[24px] bg-gradient-to-br from-[oklch(0.70_0.15_50)]/20 to-[oklch(0.65_0.15_130)]/10 border border-[oklch(0.70_0.15_50)]/30 shadow-soft hover:shadow-soft-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Certificates Earned</p>
                <div className="flex items-center gap-1">
                  <span className="text-xs bg-[oklch(0.70_0.15_50)] text-white px-2 py-1 rounded-full">New!</span>
                </div>
              </div>
              <p className="text-3xl font-semibold text-foreground">1</p>
              <p className="text-xs text-muted-foreground mt-2">CBT for Anxiety completed</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] bg-clip-text text-transparent">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-[24px] bg-gradient-to-br from-warm-teal/20 to-warm-teal/5 border border-warm-teal/20 shadow-soft hover:shadow-soft-lg transition-all cursor-pointer group">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm text-muted-foreground">Try this exercise</p>
                  <h3 className="font-semibold text-foreground mt-1 group-hover:text-[oklch(0.70_0.15_50)] transition-colors">5-Minute Breathing</h3>
                  <p className="text-xs text-muted-foreground mt-2">Quick reset for your nervous system</p>
                </div>
                <span className="text-2xl">💨</span>
              </div>
              <button className="text-xs font-medium text-[oklch(0.70_0.15_50)] hover:opacity-75 transition-opacity bg-gradient-to-r from-[oklch(0.70_0.15_50)]/20 to-[oklch(0.65_0.15_130)]/10 px-3 py-1 rounded-full border border-[oklch(0.70_0.15_50)]/30">Start Now →</button>
            </div>

            <div className="p-6 rounded-[24px] bg-gradient-to-br from-warm-yellow/20 to-warm-yellow/5 border border-warm-yellow/20 shadow-soft hover:shadow-soft-lg transition-all cursor-pointer group">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm text-muted-foreground">Enroll in program</p>
                  <h3 className="font-semibold text-foreground mt-1 group-hover:text-[oklch(0.70_0.15_50)] transition-colors">Mindfulness for Beginners</h3>
                  <p className="text-xs text-muted-foreground mt-2">4 weeks • 2314 people enrolled</p>
                </div>
                <span className="text-2xl">🧘</span>
              </div>
              <button className="text-xs font-medium text-[oklch(0.70_0.15_50)] hover:opacity-75 transition-opacity bg-gradient-to-r from-[oklch(0.70_0.15_50)]/20 to-[oklch(0.65_0.15_130)]/10 px-3 py-1 rounded-full border border-[oklch(0.70_0.15_50)]/30">Explore →</button>
            </div>
          </div>
        </div>

        {/* Breathing space */}
        <div className="h-12" />
      </div>
    </main>
  )
}
