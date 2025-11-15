import Link from 'next/link'
import { Play, Clock, Volume2, Users } from 'lucide-react'
import Navbar from '@/components/user/wellness/navbar'

const meditations = [
  {
    id: 1,
    title: 'Morning Serenity',
    duration: '10 min',
    category: 'Mindfulness',
    instructor: 'Sarah Chen',
    description: 'Start your day with calm focus and intention',
    color: 'from-warm-teal/20 to-warm-teal/5',
    bgColor: 'bg-warm-teal/5'
  },
  {
    id: 2,
    title: 'Deep Breathing',
    duration: '8 min',
    category: 'Breathing',
    instructor: 'Marcus Johnson',
    description: 'Calm your nervous system with guided breathing',
    color: 'from-warm-yellow/20 to-warm-yellow/5',
    bgColor: 'bg-warm-yellow/5'
  },
  {
    id: 3,
    title: 'Sleep Story: Forest Dreams',
    duration: '25 min',
    category: 'Sleep',
    instructor: 'Elena Rodriguez',
    description: 'Drift into peaceful sleep with this calming story',
    color: 'from-warm-coral/20 to-warm-coral/5',
    bgColor: 'bg-warm-coral/5'
  },
  {
    id: 4,
    title: 'Body Scan Meditation',
    duration: '15 min',
    category: 'Relaxation',
    instructor: 'Dr. James Park',
    description: 'Release tension with a guided body awareness session',
    color: 'from-warm-beige/40 to-warm-beige/10',
    bgColor: 'bg-warm-beige/10'
  },
  {
    id: 5,
    title: 'Loving Kindness',
    duration: '12 min',
    category: 'Compassion',
    instructor: 'Priya Sharma',
    description: 'Cultivate inner compassion and positive emotions',
    color: 'from-warm-coral/20 to-warm-coral/5',
    bgColor: 'bg-warm-coral/5'
  },
  {
    id: 6,
    title: 'Work Stress Release',
    duration: '7 min',
    category: 'Quick Resets',
    instructor: 'Michael Torres',
    description: 'Quick reset between meetings and tasks',
    color: 'from-warm-teal/20 to-warm-teal/5',
    bgColor: 'bg-warm-teal/5'
  },
]

export default function MeditationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white/80 to-warm-beige/5">
      <Navbar />
      <div className="pt-8 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-light mb-3 bg-gradient-to-r from-[oklch(0.65_0.15_130)] to-[oklch(0.70_0.15_50)] bg-clip-text text-transparent">Guided Meditation</h1>
          <p className="text-muted-foreground text-lg">Find peace with our collection of guided sessions</p>
        </div>

        {/* Filter chips */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {['All', 'Mindfulness', 'Sleep', 'Breathing', 'Quick Resets'].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'All'
                  ? 'bg-gradient-to-r from-[oklch(0.65_0.15_130)]/15 to-[oklch(0.70_0.15_50)]/10 text-[oklch(0.65_0.15_130)]'
                  : 'bg-warm-beige/10 text-muted-foreground hover:bg-gradient-to-r hover:from-[oklch(0.65_0.15_130)]/5 hover:to-[oklch(0.70_0.15_50)]/5'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Meditation grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meditations.map((meditation) => (
            <Link key={meditation.id} href={`/meditation/${meditation.id}`}>
              <div className={`${meditation.bgColor} rounded-[28px] p-6 cursor-pointer transition-all hover:shadow-lg hover:scale-105 duration-300 h-full flex flex-col`}>
                {/* Gradient accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${meditation.color} rounded-[28px] -z-10`}></div>
                
                {/* Category badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-[oklch(0.70_0.15_50)] uppercase tracking-wide">{meditation.category}</span>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    {meditation.duration}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-2">{meditation.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{meditation.description}</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-warm-beige/20">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{meditation.instructor}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[oklch(0.70_0.15_50)]/40 to-[oklch(0.65_0.15_130)]/25 flex items-center justify-center hover:from-[oklch(0.70_0.15_50)]/60 hover:to-[oklch(0.65_0.15_130)]/40 transition-colors border border-[oklch(0.70_0.15_50)]/30">
                    <Play className="w-5 h-5 text-[oklch(0.65_0.15_130)] fill-[oklch(0.65_0.15_130)]" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </main>
  )
}
