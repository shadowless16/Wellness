'use client'

import { useRouter } from 'next/navigation'
import { BookOpen, Plus, Search } from 'lucide-react'
import Navbar from '@/components/user/wellness/navbar'
import { useState } from 'react'

interface JournalEntry {
  id: number
  date: string
  title: string
  excerpt: string
  mood: string
  color: string
}

const journalEntries: JournalEntry[] = [
  {
    id: 1,
    date: 'Nov 15, 2025',
    title: 'Finding Peace in Stillness',
    excerpt: 'Today I learned that sometimes the best insights come when we stop trying so hard. I spent 20 minutes just breathing...',
    mood: '🧘',
    color: 'from-warm-teal/30 to-warm-teal/10'
  },
  {
    id: 2,
    date: 'Nov 14, 2025',
    title: 'Grateful for Small Moments',
    excerpt: 'Morning coffee, sunshine, and a quiet moment before the day began. These simple things matter more than I realized...',
    mood: '☀️',
    color: 'from-warm-yellow/30 to-warm-yellow/10'
  },
  {
    id: 3,
    date: 'Nov 13, 2025',
    title: 'Overcoming Self Doubt',
    excerpt: 'Had a challenging day but pushed through. Realized that confidence comes from showing up, not from being perfect...',
    mood: '💪',
    color: 'from-warm-emergency/30 to-warm-emergency/10'
  },
]

export default function JournalPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleEntryClick = (id: number) => {
    router.push(`/journal/${id}`)
  }

  const filteredEntries = journalEntries.filter(entry =>
    entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    entry.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-cream-light">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        {/* Header with CTA */}
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold text-foreground">Journal</h1>
            <p className="text-muted-foreground">Reflect, write, and grow</p>
          </div>
          <button className="px-6 py-3 rounded-[24px] bg-warm-teal text-white font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-soft">
            <Plus className="w-4 h-4" />
            New Entry
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search your thoughts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-[24px] bg-white border border-warm-beige/20 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-warm-teal/30"
          />
        </div>

        {/* Journal entries */}
        <div className="space-y-4">
          {filteredEntries.length > 0 ? (
            filteredEntries.map((entry) => (
              <div
                key={entry.id}
                onClick={() => handleEntryClick(entry.id)}
                className={`p-6 rounded-[28px] bg-gradient-to-br ${entry.color} border border-warm-beige/20 shadow-soft hover:shadow-soft-lg transition-all cursor-pointer group`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">{entry.date}</p>
                    <h3 className="text-lg font-semibold text-foreground mt-2 group-hover:text-warm-teal transition-colors">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-3 line-clamp-2">{entry.excerpt}</p>
                  </div>
                  <div className="text-3xl ml-4">{entry.mood}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 rounded-[28px] bg-white border border-warm-beige/20 text-center">
              <BookOpen className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-muted-foreground">No entries found</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}