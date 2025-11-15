'use client'

import { useRouter } from 'next/navigation'
import { BarChart3, TrendingUp } from 'lucide-react'
import Navbar from '@/components/user/wellness/navbar'

interface MoodEntry {
  date: string
  mood: number
  note: string
}

const moodHistory: MoodEntry[] = [
  { date: 'Today', mood: 8, note: 'Feeling peaceful' },
  { date: 'Yesterday', mood: 7, note: 'Good day at work' },
  { date: '2 days ago', mood: 6, note: 'Bit tired' },
  { date: '3 days ago', mood: 8, note: 'Great morning run' },
  { date: '4 days ago', mood: 7, note: 'Neutral day' },
  { date: '5 days ago', mood: 9, note: 'Excellent health session' },
]

const moodEmojis = ['😔', '😕', '😐', '🙂', '😊', '😄', '😍', '🤩', '🥰', '✨']

export default function MoodPage() {
  const router = useRouter()
  const avgMood = (moodHistory.reduce((sum, entry) => sum + entry.mood, 0) / moodHistory.length).toFixed(1)

  const handleMoodClick = (index: number) => {
    router.push(`/mood/${index + 1}`)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-cream-light">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold text-foreground">Mood Tracker</h1>
          <p className="text-muted-foreground">Track your emotional wellbeing over time</p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-[28px] bg-gradient-to-br from-warm-yellow/30 to-warm-yellow/10 border border-warm-yellow/20 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average Mood</p>
                <p className="text-3xl font-semibold text-foreground mt-2">{avgMood}</p>
              </div>
              <div className="text-4xl">{moodEmojis[Math.round(parseFloat(avgMood))]}</div>
            </div>
          </div>

          <div className="p-8 rounded-[28px] bg-gradient-to-br from-warm-teal/30 to-warm-teal/10 border border-warm-teal/20 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Entries</p>
                <p className="text-3xl font-semibold text-foreground mt-2">{moodHistory.length}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-warm-teal" />
            </div>
          </div>

          <div className="p-8 rounded-[28px] bg-gradient-to-br from-warm-emergency/30 to-warm-emergency/10 border border-warm-emergency/20 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Best Streak</p>
                <p className="text-3xl font-semibold text-foreground mt-2">6 days</p>
              </div>
              <TrendingUp className="w-8 h-8 text-warm-emergency" />
            </div>
          </div>
        </div>

        {/* Mood history */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Recent Mood Entries</h2>
          <div className="space-y-3">
            {moodHistory.map((entry, idx) => (
              <div
                key={idx}
                onClick={() => handleMoodClick(idx)}
                className="p-6 rounded-[24px] bg-white border border-warm-beige/20 shadow-soft hover:shadow-soft-lg transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{entry.date}</p>
                    <p className="text-foreground font-medium mt-1 group-hover:text-warm-teal transition-colors">{entry.note}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-2xl">{moodEmojis[entry.mood]}</p>
                      <p className="text-xs text-muted-foreground">{entry.mood}/10</p>
                    </div>
                    <div className="w-1 h-12 rounded-full bg-gradient-to-b from-warm-yellow to-warm-teal opacity-50" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
