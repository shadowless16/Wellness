'use client'

import { useRouter } from 'next/navigation'
import { Zap, Play } from 'lucide-react'
import Navbar from '@/components/wellness/navbar'

interface Exercise {
  id: number
  title: string
  duration: number
  type: string
  description: string
  difficulty: string
  color: string
  icon: string
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: '5-Minute Breathing',
    duration: 5,
    type: 'Breathing',
    description: 'Quick reset for your nervous system. Perfect for busy days.',
    difficulty: 'Easy',
    color: 'from-warm-teal/30 to-warm-teal/10',
    icon: '💨'
  },
  {
    id: 2,
    title: 'Morning Stretch Flow',
    duration: 10,
    type: 'Movement',
    description: 'Gentle stretching to awaken your body and mind.',
    difficulty: 'Easy',
    color: 'from-warm-yellow/30 to-warm-yellow/10',
    icon: '🌅'
  },
  {
    id: 3,
    title: 'Deep Meditation',
    duration: 20,
    type: 'Meditation',
    description: 'Guided journey into calm awareness and inner peace.',
    difficulty: 'Intermediate',
    color: 'from-warm-emergency/30 to-warm-emergency/10',
    icon: '🧘'
  },
  {
    id: 4,
    title: 'Evening Wind Down',
    duration: 15,
    type: 'Relaxation',
    description: 'Progressive relaxation to prepare for restful sleep.',
    difficulty: 'Easy',
    color: 'from-warm-beige/40 to-warm-beige/10',
    icon: '✨'
  },
  {
    id: 5,
    title: 'Body Scan',
    duration: 12,
    type: 'Awareness',
    description: 'Mindful exploration of physical sensations and tension.',
    difficulty: 'Intermediate',
    color: 'from-warm-teal/20 to-warm-teal/5',
    icon: '🔍'
  },
  {
    id: 6,
    title: 'Loving Kindness',
    duration: 18,
    type: 'Meditation',
    description: 'Cultivate compassion for yourself and others.',
    difficulty: 'Intermediate',
    color: 'from-warm-yellow/20 to-warm-yellow/5',
    icon: '💝'
  },
]

export default function ExercisesPage() {
  const router = useRouter()

  const handleExerciseClick = (id: number) => {
    router.push(`/exercises/${id}`)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-cream-light">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold text-foreground">Guided Exercises</h1>
          <p className="text-muted-foreground">Short, therapeutic practices for any moment of your day</p>
        </div>

        {/* Exercises grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <div
              key={exercise.id}
              onClick={() => handleExerciseClick(exercise.id)}
              className={`p-6 rounded-[28px] bg-gradient-to-br ${exercise.color} border border-warm-beige/20 shadow-soft hover:shadow-soft-lg transition-all cursor-pointer group`}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="text-3xl">{exercise.icon}</div>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/50 text-foreground">
                  {exercise.duration}m
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-warm-teal transition-colors">
                {exercise.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">{exercise.type}</p>
              <p className="text-sm text-muted-foreground mb-4">{exercise.description}</p>

              <div className="flex items-center justify-between pt-4 border-t border-white/30">
                <span className="text-xs text-muted-foreground">{exercise.difficulty}</span>
                <button onClick={(e) => {
                  e.stopPropagation()
                }} className="p-2 rounded-full bg-white/50 text-foreground hover:bg-white transition-colors">
                  <Play className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}