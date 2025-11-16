'use client'

import { useRouter } from 'next/navigation'
import { Clock, Users, Star, Play } from 'lucide-react'

interface Program {
  id: number
  title: string
  description: string
  duration: string
  level: string
  participants: number
  color: string
  icon: React.ReactNode
  category: string
  rating: number
  price: string
  coach: string
}

const programs: Program[] = [
  {
    id: 1,
    title: 'CBT for Anxiety Management',
    description: 'Evidence-based cognitive behavioral therapy techniques to overcome anxiety and panic disorders.',
    duration: '8 weeks',
    level: 'Beginner',
    participants: 3247,
    color: 'from-[oklch(0.70_0.15_50)]/20 to-[oklch(0.65_0.15_130)]/10',
    icon: '🧠',
    category: 'CBT',
    rating: 4.9,
    price: '₦25,000',
    coach: 'Dr. Sarah Chen'
  },
  {
    id: 2,
    title: 'Building Resilience',
    description: 'Develop mental toughness and bounce back stronger from life\'s challenges and setbacks.',
    duration: '6 weeks',
    level: 'Intermediate',
    participants: 2156,
    color: 'from-[oklch(0.65_0.15_130)]/20 to-[oklch(0.70_0.15_50)]/10',
    icon: '💪',
    category: 'Resilience',
    rating: 4.8,
    price: '₦20,000',
    coach: 'Marcus Johnson'
  },
  {
    id: 3,
    title: 'Trauma Recovery Program',
    description: 'Gentle, trauma-informed approach to healing and reclaiming your sense of safety and control.',
    duration: '12 weeks',
    level: 'Advanced',
    participants: 1834,
    color: 'from-[oklch(0.70_0.15_50)]/20 to-[oklch(0.65_0.15_130)]/10',
    icon: '🌱',
    category: 'Trauma',
    rating: 4.9,
    price: '₦45,000',
    coach: 'Dr. Elena Rodriguez'
  },
  {
    id: 4,
    title: 'Healthy Relationships',
    description: 'Learn communication skills, boundary setting, and emotional intelligence for better connections.',
    duration: '5 weeks',
    level: 'Beginner',
    participants: 2891,
    color: 'from-[oklch(0.65_0.15_130)]/20 to-[oklch(0.70_0.15_50)]/10',
    icon: '💝',
    category: 'Relationships',
    rating: 4.7,
    price: '₦18,000',
    coach: 'Dr. Michael Torres'
  },
]

export default function ProgramsPage() {
  const router = useRouter()

  const handleProgramClick = (id: number) => {
    router.push(`/user/programs/${id}`)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-cream-light">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        {/* Header */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] bg-clip-text text-transparent">Course Library</h1>
            <p className="text-muted-foreground">Explore evidence-based programs designed by mental health professionals</p>
          </div>
          
          {/* Categories */}
          <div className="flex gap-2 flex-wrap">
            {['All', 'CBT', 'Resilience', 'Anxiety', 'Trauma', 'Relationships', 'Leadership'].map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === 'All'
                    ? 'bg-gradient-to-r from-[oklch(0.70_0.15_50)]/30 to-[oklch(0.65_0.15_130)]/20 text-[oklch(0.65_0.15_130)] border border-[oklch(0.70_0.15_50)]/40'
                    : 'bg-warm-beige/10 text-muted-foreground hover:bg-gradient-to-r hover:from-[oklch(0.70_0.15_50)]/20 hover:to-[oklch(0.65_0.15_130)]/10 hover:border hover:border-[oklch(0.70_0.15_50)]/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <div
              key={program.id}
              onClick={() => handleProgramClick(program.id)}
              className={`p-6 rounded-[24px] bg-gradient-to-br ${program.color} border border-[oklch(0.70_0.15_50)]/20 shadow-soft hover:shadow-soft-lg transition-all cursor-pointer group`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{program.icon}</div>
                  <div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-[oklch(0.70_0.15_50)]/20 text-[oklch(0.70_0.15_50)]">
                      {program.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium">{program.rating}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-[oklch(0.70_0.15_50)] transition-colors">
                {program.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
              
              <div className="text-sm text-muted-foreground mb-4">
                <span>by {program.coach}</span>
              </div>

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
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[oklch(0.70_0.15_50)]">{program.price}</span>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                  }} 
                  className="flex-1 px-4 py-2 rounded-[12px] bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Enroll Now
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                  }} 
                  className="px-4 py-2 rounded-[12px] bg-white/50 text-foreground text-sm font-medium hover:bg-white transition-colors flex items-center gap-1"
                >
                  <Play className="w-3 h-3" />
                  Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
