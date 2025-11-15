'use client'

import { Heart, AlertCircle, Sun, Zap, Bell } from 'lucide-react'
import Navbar from '@/components/wellness/navbar'
import WelcomeHeader from '@/components/wellness/welcome-header'
import EmergencyCard from '@/components/wellness/emergency-card'
import MoodCard from '@/components/wellness/mood-card'
import GrowthCard from '@/components/wellness/growth-card'

export default function WellnessDashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-cream-light">
      <Navbar />

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

        {/* Breathing space */}
        <div className="h-12" />
      </div>
    </main>
  )
}
