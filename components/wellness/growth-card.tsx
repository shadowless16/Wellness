'use client'

import { Zap } from 'lucide-react'

const insights = [
  {
    title: 'Daily Strength',
    description: 'You\'ve completed 5 reflections this week',
    icon: '💪'
  },
  {
    title: 'Growth Area',
    description: 'Work on communication patterns',
    icon: '🌱'
  },
  {
    title: 'This Week\'s Wins',
    description: '3 mindfulness sessions completed',
    icon: '⭐'
  },
]

export default function GrowthCard() {
  return (
    <div className="group rounded-[28px] bg-gradient-to-br from-warm-teal/20 via-warm-teal/8 to-transparent p-8 border border-warm-teal/20 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:border-warm-teal/30">
      {/* Decorative orb */}
      <div className="absolute inset-0 -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br from-warm-teal/15 to-transparent blur-3xl opacity-40 -z-10 group-hover:opacity-60 transition-opacity duration-300 rounded-[28px]" />
      
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-warm-teal/20 flex items-center justify-center">
          <Zap className="w-5 h-5 text-warm-teal" />
        </div>
        <h3 className="text-lg font-medium text-foreground">Your Growth Insights</h3>
      </div>

      <div className="space-y-3">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-white/40 hover:bg-white/60 transition-colors cursor-pointer group/item"
          >
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0 mt-1">{insight.icon}</span>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground text-sm mb-1">{insight.title}</h4>
                <p className="text-xs text-muted-foreground">{insight.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-3 rounded-full bg-warm-teal/30 text-foreground font-medium text-sm hover:bg-warm-teal/40 transition-colors">
        View Full Profile
      </button>
    </div>
  )
}
