import { ArrowLeft, Info } from 'lucide-react'
import Link from 'next/link'
import ExercisePlayer from '@/components/user/exercise-player'

const exercisesData: { [key: string]: any } = {
  '1': {
    id: 1,
    title: '5-Minute Breathing',
    duration: 5,
    type: 'Breathing',
    description: 'Quick reset for your nervous system. Perfect for busy days.',
    difficulty: 'Easy',
    color: 'from-[oklch(0.70_0.15_50)]/15 to-[oklch(0.70_0.15_50)]/5',
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
  '2': {
    id: 2,
    title: 'Energy Boost',
    duration: 10,
    type: 'Movement',
    description: 'Quick energizing routine to revitalize your body and mind.',
    difficulty: 'Easy',
    color: 'from-[oklch(0.70_0.15_50)]/15 to-[oklch(0.70_0.15_50)]/5',
    icon: '⚡',
    fullDescription: 'A dynamic 10-minute routine designed to boost your energy levels and improve circulation. Perfect for midday slumps or morning activation.',
    instructions: [
      'Start with gentle neck rolls',
      'Add shoulder shrugs and arm circles',
      'Include light stretching movements',
      'Focus on deep, energizing breaths',
      'End with positive affirmations'
    ],
    benefits: ['Increases energy', 'Improves circulation', 'Enhances mood', 'Boosts alertness']
  },
  '3': {
    id: 3,
    title: 'Deep Meditation',
    duration: 20,
    type: 'Meditation',
    description: 'Guided journey into calm awareness and inner peace.',
    difficulty: 'Intermediate',
    color: 'from-[oklch(0.70_0.15_50)]/15 to-[oklch(0.70_0.15_50)]/5',
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

export default async function ExerciseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const exercise = exercisesData[id] || exercisesData['1']

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-cream-light">

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        {/* Header */}
        <Link href="/user/exercises" className="flex items-center gap-2 text-[oklch(0.70_0.15_50)] hover:opacity-75 transition-opacity">
          <ArrowLeft className="w-4 h-4" />
          Back to Exercises
        </Link>

        {/* Player card */}
        <ExercisePlayer exercise={exercise} />

        {/* Instructions */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">How to Practice</h2>
          <div className="space-y-3">
            {exercise.instructions.map((instruction: string, idx: number) => (
              <div key={idx} className="p-6 rounded-[24px] bg-[oklch(0.70_0.15_50)]/5 border border-[oklch(0.70_0.15_50)]/20 shadow-soft flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[oklch(0.70_0.15_50)]/20 flex items-center justify-center flex-shrink-0">
                  <p className="text-sm font-semibold text-[oklch(0.70_0.15_50)]">{idx + 1}</p>
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
              <div key={idx} className="p-6 rounded-[24px] bg-[oklch(0.70_0.15_50)]/5 border border-[oklch(0.70_0.15_50)]/20 shadow-soft flex items-center gap-3">
                <Info className="w-5 h-5 text-[oklch(0.70_0.15_50)] flex-shrink-0" />
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
