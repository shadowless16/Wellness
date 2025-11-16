'use client'

import { ArrowLeft, Share2, BookOpen, Sparkles } from 'lucide-react'
import Link from 'next/link'

const moodEmojis = ['😔', '😕', '😐', '🙂', '😊', '😄', '😍', '🤩', '🥰', '✨']

interface MoodDetail {
  id: number
  date: string
  mood: number
  note: string
  triggers: string[]
  activities: string[]
  gratitude: string
}

const moodData: { [key: string]: MoodDetail } = {
  '1': {
    id: 1,
    date: 'Today',
    mood: 8,
    note: 'Feeling peaceful',
    triggers: ['Morning meditation', 'sunshine'],
    activities: ['Meditation', 'Journaling', 'Walking'],
    gratitude: 'Grateful for quiet mornings and supportive friends'
  },
  '2': {
    id: 2,
    date: 'Yesterday',
    mood: 7,
    note: 'Good day at work',
    triggers: ['Completed project', 'positive feedback'],
    activities: ['Work focus', 'Lunch walk', 'Evening call with friend'],
    gratitude: 'Thankful for productive energy and kind colleagues'
  },
}

export default function MoodDetailPage({ params }: { params: { id: string } }) {
  const mood = moodData[params.id] || moodData['1']
  const moodPercentage = (mood.mood / 10) * 100

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-cream-light">

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <Link href="/user/mood" className="flex items-center gap-2 text-warm-teal hover:opacity-75 transition-opacity mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Mood Tracker
        </Link>

        {/* Main card */}
        <div className="p-12 rounded-[32px] bg-gradient-to-br from-warm-yellow/20 to-warm-yellow/5 border border-warm-yellow/20 shadow-soft-lg space-y-8">
          {/* Mood visualization */}
          <div className="text-center space-y-4">
            <div className="text-6xl">{moodEmojis[mood.mood]}</div>
            <div>
              <p className="text-sm text-muted-foreground">{mood.date}</p>
              <h1 className="text-3xl font-semibold text-foreground mt-2">{mood.mood}/10 - {mood.note}</h1>
            </div>
          </div>

          {/* Mood progress */}
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">Mood Level</p>
            <div className="w-full h-3 rounded-full bg-white/50 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-warm-yellow to-warm-teal transition-all duration-500"
                style={{ width: `${moodPercentage}%` }}
              />
            </div>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Triggers */}
            <div className="p-6 rounded-[24px] bg-white/50 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-warm-yellow" />
                <p className="font-semibold text-foreground">Triggers</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {mood.triggers.map((trigger, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-warm-yellow/20 text-sm text-warm-yellow">
                    {trigger}
                  </span>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div className="p-6 rounded-[24px] bg-white/50 space-y-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-warm-teal" />
                <p className="font-semibold text-foreground">Activities</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {mood.activities.map((activity, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-warm-teal/20 text-sm text-warm-teal">
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Gratitude */}
          <div className="p-6 rounded-[24px] bg-white/50 space-y-3">
            <p className="font-semibold text-foreground">Gratitude Note</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{mood.gratitude}</p>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-6">
            <button className="flex-1 px-6 py-3 rounded-[24px] bg-warm-teal text-white font-medium hover:opacity-90 transition-opacity">
              Edit Entry
            </button>
            <button className="px-6 py-3 rounded-[24px] bg-white/50 text-foreground font-medium hover:bg-white transition-colors flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}