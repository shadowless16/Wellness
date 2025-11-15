'use client'

import { ArrowLeft, Play, Pause, Volume2, Info } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/user/wellness/navbar'
import { useState } from 'react'

const exercisesData: { [key: string]: any } = {
  '1': {
    id: 1,
    title: '5-Minute Breathing',
    duration: 5,
    type: 'Breathing',
    description: 'Quick reset for your nervous system. Perfect for busy days.',
    difficulty: 'Easy',
    color: 'from-warm-teal/30 to-warm-teal/10',
    icon: '💨',
    fullDescription: 'This simple yet powerful breathing technique helps calm your nervous system in just 5 minutes. Perfect for moments of stress or when you need a quick mental reset.',
    instructions: [
      'Find a comfortable seated position',
      'Close your eyes if comfortable',
      'Breathe in slowly for 4 counts',
      'Hold for 4 counts',
      'Exhale slowly for 4 counts',
      'Repeat 10 times'
    ],
    benefits: ['Reduces stress', 'Improves focus', 'Lowers heart rate', 'Enhances clarity']
  },
  '3': {
    id: 3,
    title: 'Deep Meditation',
    duration: 20,
    type: 'Meditation',
    description: 'Guided journey into calm awareness and inner peace.',
    difficulty: 'Intermediate',
    color: 'from-warm-emergency/30 to-warm-emergency/10',
    icon: '🧘',
    fullDescription: 'A deeper meditation experience that guides you through progressive relaxation and mindfulness. Ideal for establishing a regular practice.',
    instructions: [
      'Find a quiet, comfortable space',
      'Sit upright with good posture',
      'Let thoughts pass without judgment',
      'Focus on your breath naturally',
      'Allow 20 minutes of uninterrupted time'
    ],
    benefits: ['Deep relaxation', 'Mental clarity', 'Emotional balance', 'Inner peace']
  }
}

export default function ExerciseDetailPage({ params }: { params: { id: string } }) {
  const exercise = exercisesData[params.id] || exercisesData['1']
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-cream-light">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        {/* Header */}
        <Link href="/exercises" className="flex items-center gap-2 text-warm-teal hover:opacity-75 transition-opacity">
          <ArrowLeft className="w-4 h-4" />
          Back to Exercises
        </Link>

        {/* Player card */}
        <div className={`p-12 rounded-[32px] bg-gradient-to-br ${exercise.color} border border-warm-beige/20 shadow-soft-lg`}>
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="text-5xl">{exercise.icon}</div>
              <h1 className="text-3xl font-semibold text-foreground">{exercise.title}</h1>
              <p className="text-muted-foreground max-w-md mx-auto">{exercise.fullDescription}</p>
            </div>

            {/* Player */}
            <div className="flex justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-24 h-24 rounded-full bg-white/60 hover:bg-white transition-colors flex items-center justify-center shadow-soft"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-warm-teal" />
                ) : (
                  <Play className="w-8 h-8 text-warm-teal ml-1" />
                )}
              </button>
            </div>

            {/* Progress */}
            <div className="space-y-2">
              <div className="w-full h-2 rounded-full bg-white/50 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-warm-teal to-warm-yellow"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0:00</span>
                <span>{exercise.duration}:00</span>
              </div>
            </div>

            {/* Info */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 rounded-[16px] bg-white/30">
                <p className="text-xs text-muted-foreground">Duration</p>
                <p className="font-semibold text-foreground mt-1">{exercise.duration}m</p>
              </div>
              <div className="p-3 rounded-[16px] bg-white/30">
                <p className="text-xs text-muted-foreground">Type</p>
                <p className="font-semibold text-foreground mt-1">{exercise.type}</p>
              </div>
              <div className="p-3 rounded-[16px] bg-white/30">
                <p className="text-xs text-muted-foreground">Level</p>
                <p className="font-semibold text-foreground mt-1">{exercise.difficulty}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">How to Practice</h2>
          <div className="space-y-3">
            {exercise.instructions.map((instruction: string, idx: number) => (
              <div key={idx} className="p-6 rounded-[24px] bg-white border border-warm-beige/20 shadow-soft flex gap-4">
                <div className="w-8 h-8 rounded-full bg-warm-teal/20 flex items-center justify-center flex-shrink-0">
                  <p className="text-sm font-semibold text-warm-teal">{idx + 1}</p>
                </div>
                <p className="text-foreground pt-1">{instruction}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Benefits</h2>
          <div className="grid grid-cols-2 gap-4">
            {exercise.benefits.map((benefit: string, idx: number) => (
              <div key={idx} className="p-6 rounded-[24px] bg-white border border-warm-beige/20 shadow-soft flex items-center gap-3">
                <Info className="w-5 h-5 text-warm-teal flex-shrink-0" />
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
