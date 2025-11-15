'use client'

import Link from 'next/link'
import { Bookmark, Trash2 } from 'lucide-react'
import Navbar from '@/components/user/wellness/navbar'

const savedItems = [
  {
    id: 1,
    type: 'Meditation',
    title: 'Sleep Story: Forest Dreams',
    category: 'Sleep',
    savedDate: 'Saved 5 days ago',
    bgColor: 'bg-warm-coral/5',
    icon: '🌙'
  },
  {
    id: 2,
    type: 'Meditation',
    title: 'Morning Serenity',
    category: 'Mindfulness',
    savedDate: 'Saved 1 week ago',
    bgColor: 'bg-warm-teal/5',
    icon: '🌅'
  },
  {
    id: 3,
    type: 'Community Post',
    title: 'My Journey with Daily Meditation',
    category: 'Success Stories',
    savedDate: 'Saved 2 weeks ago',
    bgColor: 'bg-warm-yellow/5',
    icon: '📖'
  },
  {
    id: 4,
    type: 'Article',
    title: 'The Science Behind Meditation',
    category: 'Learning',
    savedDate: 'Saved 3 weeks ago',
    bgColor: 'bg-warm-beige/10',
    icon: '📚'
  },
  {
    id: 5,
    type: 'Exercise',
    title: 'Deep Breathing Technique',
    category: 'Breathing',
    savedDate: 'Saved 1 month ago',
    bgColor: 'bg-warm-teal/5',
    icon: '🫁'
  },
  {
    id: 6,
    type: 'Program',
    title: 'Mindfulness Basics',
    category: 'Courses',
    savedDate: 'Saved 1 month ago',
    bgColor: 'bg-warm-coral/5',
    icon: '🎓'
  },
]

export default function SavedPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white/80 to-warm-beige/5">
      <Navbar />
      <div className="pt-8 pb-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-light text-foreground mb-3">Saved Content</h1>
          <p className="text-muted-foreground text-lg">Your personal collection of favorite meditations, articles, and resources</p>
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {['All', 'Meditations', 'Articles', 'Community', 'Exercises', 'Programs'].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'All'
                  ? 'bg-warm-teal/15 text-warm-teal'
                  : 'bg-warm-beige/10 text-muted-foreground hover:bg-warm-beige/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Saved items */}
        <div className="space-y-4">
          {savedItems.map((item) => (
            <Link key={item.id} href={`/${item.type.toLowerCase().replace(' ', '-')}/${item.id}`}>
              <div className={`${item.bgColor} rounded-[24px] p-6 cursor-pointer transition-all hover:shadow-lg hover:scale-102 duration-300 border border-warm-beige/20 flex items-center justify-between group`}>
                <div className="flex items-start gap-4 flex-grow">
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-xs font-semibold text-warm-teal uppercase tracking-wide">{item.type}</p>
                      <span className="text-xs text-muted-foreground">•</span>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{item.category}</p>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.savedDate}</p>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                  className="text-muted-foreground hover:text-warm-coral transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </main>
  )
}
