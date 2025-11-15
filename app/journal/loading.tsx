'use client'

import Navbar from '@/components/wellness/navbar'

export default function JournalLoading() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-cream-light">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        {/* Header skeleton */}
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <div className="h-10 w-32 bg-warm-beige/20 rounded-[24px] animate-pulse" />
            <div className="h-4 w-48 bg-warm-beige/10 rounded-[12px] animate-pulse" />
          </div>
          <div className="px-6 py-3 rounded-[24px] bg-warm-beige/10 w-32 h-11 animate-pulse" />
        </div>

        {/* Search skeleton */}
        <div className="h-11 rounded-[24px] bg-warm-beige/10 animate-pulse" />

        {/* Journal entries skeleton */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-6 rounded-[28px] bg-white border border-warm-beige/20 shadow-soft space-y-3"
            >
              <div className="h-3 w-24 bg-warm-beige/10 rounded-full animate-pulse" />
              <div className="h-5 w-2/3 bg-warm-beige/20 rounded-[12px] animate-pulse" />
              <div className="h-4 w-full bg-warm-beige/10 rounded-[8px] animate-pulse" />
              <div className="h-4 w-5/6 bg-warm-beige/10 rounded-[8px] animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}