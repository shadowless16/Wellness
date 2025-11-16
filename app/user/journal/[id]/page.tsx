'use client'

import { ArrowLeft, Edit2, Trash2, Share2 } from 'lucide-react'
import Link from 'next/link'

const journalEntries: { [key: string]: any } = {
  '1': {
    id: 1,
    date: 'Nov 15, 2025',
    title: 'Finding Peace in Stillness',
    mood: '🧘',
    color: 'from-[oklch(0.65_0.15_130)]/15 to-[oklch(0.65_0.15_130)]/5',
    content: `Today I learned that sometimes the best insights come when we stop trying so hard. I spent 20 minutes just breathing and observing my thoughts without judgment.

It\'s amazing how much clarity emerges when we create space for stillness. All the worries that seemed so urgent this morning suddenly felt less important when I simply sat with them.

I\'m grateful for my practice and for the people in my life who encourage me to slow down. Moving forward, I want to protect this quiet time as sacred.`
  },
  '2': {
    id: 2,
    date: 'Nov 14, 2025',
    title: 'Grateful for Small Moments',
    mood: '☀️',
    color: 'from-[oklch(0.70_0.15_50)]/15 to-[oklch(0.70_0.15_50)]/5',
    content: `Morning coffee, sunshine, and a quiet moment before the day began. These simple things matter more than I realized.

I often chase big moments and achievements, but today reminded me that life\'s richness is found in the everyday. The warmth of the cup, the golden light, the taste of my favorite brew - these are the experiences that truly nourish the soul.`
  }
}

export default async function JournalDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const entry = journalEntries[id] || journalEntries['1']

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-cream-light">

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        {/* Header */}
        <Link href="/user/journal" className="flex items-center gap-2 text-[oklch(0.65_0.15_130)] hover:opacity-75 transition-opacity">
          <ArrowLeft className="w-4 h-4" /> 
          Back to Journal
        </Link>

        {/* Entry card */}
        <div className={`p-12 rounded-[32px] bg-gradient-to-br ${entry.color} border border-[oklch(0.70_0.15_50)]/20 shadow-soft-lg`}>
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">{entry.date}</p>
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-semibold text-foreground">{entry.title}</h1>
                <div className="text-4xl">{entry.mood}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-[16px] bg-white/50 hover:bg-white transition-colors">
                <Share2 className="w-4 h-4 text-foreground" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-foreground leading-relaxed">
            {entry.content.split('\n\n').map((paragraph: string, idx: number) => (
              <p key={idx} className="mb-4 text-muted-foreground whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-12 pt-8 border-t border-white/30">
            <button className="flex-1 px-6 py-3 rounded-[24px] bg-white/50 text-foreground font-medium hover:bg-white transition-colors flex items-center justify-center gap-2">
              <Edit2 className="w-4 h-4" />
              Edit
            </button>
            <button className="px-6 py-3 rounded-[24px] bg-white/50 text-[oklch(0.70_0.15_50)] font-medium hover:bg-white transition-colors flex items-center gap-2">
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}