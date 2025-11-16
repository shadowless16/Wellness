'use client'

import { Play, Pause } from 'lucide-react'
import { useState } from 'react'

interface ExercisePlayerProps {
  exercise: {
    icon: string
    title: string
    fullDescription: string
    duration: number
    type: string
    difficulty: string
    color: string
  }
}

export default function ExercisePlayer({ exercise }: ExercisePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  return (
    <div className="p-12 rounded-[32px] bg-gradient-to-br from-[oklch(0.70_0.15_50)]/15 to-[oklch(0.70_0.15_50)]/5 border border-[oklch(0.70_0.15_50)]/20 shadow-soft-lg">
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
              <Pause className="w-8 h-8 text-[oklch(0.65_0.15_130)]" />
            ) : (
              <Play className="w-8 h-8 text-[oklch(0.65_0.15_130)] ml-1" />
            )}
          </button>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="w-full h-2 rounded-full bg-white/50 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[oklch(0.65_0.15_130)] to-[oklch(0.70_0.15_50)]"
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
  )
}