'use client'

import { useRouter } from 'next/navigation'
import { Sparkles, Clock, Users } from 'lucide-react'
import Navbar from '@/components/user/wellness/navbar'

interface Program {
  id: number
  title: string
  description: string
  duration: string
  level: string
  participants: number
  color: string
  icon: React.ReactNode
}

const programs: Program[] = [
  {
    id: 1,
    title: 'Mindfulness for Beginners',
    description: 'Learn foundational meditation techniques to start your wellness journey with gentle, guided sessions.',
    duration: '4 weeks',
    level: 'Beginner',
    participants: 2314,
    color: 'from-warm-teal/30 to-warm-teal/10',
    icon: '🧘'
  },
  {
    id: 2,
    title: 'Stress Relief Intensive',
    description: 'Deep breathing and progressive relaxation designed to melt away tension and restore calm.',
    duration: '8 weeks',
    level: 'Intermediate',
    participants: 1847,
    color: 'from-warm-yellow/30 to-warm-yellow/10',
    icon: '☁️'
  },
  {
    id: 3,
    title: 'Sleep Better Tonight',
    description: 'Explore sleep hygiene and bedtime rituals for deeper, more restorative rest every night.',
    duration: '6 weeks',
    level: 'Beginner',
    participants: 3021,
    color: 'from-warm-emergency/30 to-warm-emergency/10',
    icon: '😴'
  },
  {
    id: 4,
    title: 'Emotional Resilience',
    description: 'Build emotional strength and develop healthy coping strategies for life\'s challenges.',
    duration: '10 weeks',
    level: 'Advanced',
    participants: 1205,
    color: 'from-warm-beige/40 to-warm-beige/10',
    icon: '💪'
  },
]

export default function ProgramsPage() {
  const router = useRouter()

  const handleProgramClick = (id: number) => {
    router.push(`/programs/${id}`)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-cream-light">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold text-foreground">Wellness Programs</h1>
          <p className="text-muted-foreground">Structured journeys to support your mental health and wellbeing</p>
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <div
              key={program.id}
              onClick={() => handleProgramClick(program.id)}
              className={`p-8 rounded-[28px] bg-gradient-to-br ${program.color} border border-warm-beige/20 shadow-soft hover:shadow-soft-lg transition-all cursor-pointer group`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-4xl">{program.icon}</div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/50 text-foreground">
                  {program.level}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-warm-teal transition-colors">
                {program.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">{program.description}</p>

              <div className="flex items-center justify-between pt-4 border-t border-white/30">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {program.participants.toLocaleString()}
                  </div>
                </div>
                <button onClick={(e) => {
                  e.stopPropagation()
                }} className="px-4 py-2 rounded-[16px] bg-white/50 text-foreground text-sm font-medium hover:bg-white transition-colors">
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
