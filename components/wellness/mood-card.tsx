'use client'

import { useRouter } from 'next/navigation'
import { Sun } from 'lucide-react'
import { useState } from 'react'

const moodOptions = [
  { label: 'Great', value: 'great', emoji: '😊' },
  { label: 'Good', value: 'good', emoji: '🙂' },
  { label: 'Okay', value: 'okay', emoji: '😐' },
  { label: 'Struggling', value: 'struggling', emoji: '😟' },
]

export default function MoodCard() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const router = useRouter()

  return (
    <div className="group rounded-[28px] bg-gradient-to-br from-warm-yellow/25 via-warm-yellow/10 to-transparent p-8 border border-warm-yellow/20 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:border-warm-yellow/30">
      {/* Decorative orb */}
      <div className="absolute inset-0 -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br from-warm-yellow/15 to-transparent blur-3xl opacity-40 -z-10 group-hover:opacity-60 transition-opacity duration-300 rounded-[28px]" />
      
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-warm-yellow/20 flex items-center justify-center">
          <Sun className="w-5 h-5 text-warm-yellow" />
        </div>
        <h3 className="text-lg font-medium text-foreground">How's your mood today?</h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {moodOptions.map((mood) => (
          <button
            key={mood.value}
            onClick={() => setSelectedMood(mood.value)}
            className={`p-4 rounded-xl transition-all duration-200 text-sm font-medium ${
              selectedMood === mood.value
                ? 'bg-warm-yellow/40 text-foreground shadow-md scale-105'
                : 'bg-white/40 text-muted-foreground hover:bg-white/60'
            }`}
          >
            <div className="text-2xl mb-2">{mood.emoji}</div>
            <div>{mood.label}</div>
          </button>
        ))}
      </div>

      <div className="flex gap-3 mt-6">
        <button className="flex-1 py-3 rounded-full bg-warm-yellow/30 text-foreground font-medium text-sm hover:bg-warm-yellow/40 transition-colors">
          Log Mood
        </button>
        <button
          onClick={() => router.push('/mood')}
          className="flex-1 py-3 rounded-full bg-white/40 text-foreground font-medium text-sm hover:bg-white/60 transition-colors"
        >
          View History
        </button>
      </div>
    </div>
  )
}
