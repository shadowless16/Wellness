'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, ChevronRight, Target, Brain } from 'lucide-react'

const interests = [
  { id: 'stress', label: 'Stress Management', icon: '🧘' },
  { id: 'confidence', label: 'Building Confidence', icon: '💪' },
  { id: 'emotional', label: 'Emotional Control', icon: '🎯' },
  { id: 'leadership', label: 'Leadership Skills', icon: '👑' },
  { id: 'anxiety', label: 'Anxiety Relief', icon: '🌸' },
  { id: 'focus', label: 'Focus & Clarity', icon: '🔍' },
  { id: 'relationships', label: 'Better Relationships', icon: '💝' },
  { id: 'sleep', label: 'Better Sleep', icon: '😴' }
]

const experienceLevels = [
  { id: 'beginner', label: 'Beginner', description: 'New to wellness practices' },
  { id: 'intermediate', label: 'Intermediate', description: 'Some experience with mindfulness' },
  { id: 'advanced', label: 'Advanced', description: 'Regular wellness practitioner' }
]

export default function PersonalizationPage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [experienceLevel, setExperienceLevel] = useState('')
  const [currentStep, setCurrentStep] = useState(1)
  const router = useRouter()

  const toggleInterest = (interestId: string) => {
    setSelectedInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    )
  }

  const handleNext = () => {
    if (currentStep === 1 && selectedInterests.length > 0) {
      setCurrentStep(2)
    } else if (currentStep === 2 && experienceLevel) {
      router.push('/recommendations')
    }
  }

  const canProceed = currentStep === 1 ? selectedInterests.length > 0 : experienceLevel !== ''

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige/20 to-[oklch(0.70_0.15_50)]/5 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Step {currentStep} of 2</span>
            <span className="text-sm text-muted-foreground">Personalize Your Experience</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 2) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-[32px] p-8 shadow-lg border border-[oklch(0.70_0.15_50)]/20">
          {currentStep === 1 ? (
            <>
              <div className="text-center mb-8">
                <Target className="w-12 h-12 text-[oklch(0.70_0.15_50)] mx-auto mb-4" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] bg-clip-text text-transparent mb-2">
                  What are your wellness goals?
                </h1>
                <p className="text-muted-foreground">Select all areas you'd like to focus on (choose at least one)</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {interests.map((interest) => (
                  <button
                    key={interest.id}
                    onClick={() => toggleInterest(interest.id)}
                    className={`p-4 rounded-[20px] border-2 transition-all text-left ${
                      selectedInterests.includes(interest.id)
                        ? 'border-[oklch(0.70_0.15_50)] bg-gradient-to-br from-[oklch(0.70_0.15_50)]/10 to-[oklch(0.65_0.15_130)]/5'
                        : 'border-gray-200 hover:border-[oklch(0.70_0.15_50)]/50 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{interest.icon}</span>
                        <span className="font-medium text-foreground">{interest.label}</span>
                      </div>
                      {selectedInterests.includes(interest.id) && (
                        <Check className="w-5 h-5 text-[oklch(0.70_0.15_50)]" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="text-center mb-8">
                <Brain className="w-12 h-12 text-[oklch(0.70_0.15_50)] mx-auto mb-4" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] bg-clip-text text-transparent mb-2">
                  What's your experience level?
                </h1>
                <p className="text-muted-foreground">This helps us recommend the right content for you</p>
              </div>

              <div className="space-y-4 mb-8">
                {experienceLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setExperienceLevel(level.id)}
                    className={`w-full p-4 rounded-[20px] border-2 transition-all text-left ${
                      experienceLevel === level.id
                        ? 'border-[oklch(0.70_0.15_50)] bg-gradient-to-br from-[oklch(0.70_0.15_50)]/10 to-[oklch(0.65_0.15_130)]/5'
                        : 'border-gray-200 hover:border-[oklch(0.70_0.15_50)]/50 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-foreground">{level.label}</h3>
                        <p className="text-sm text-muted-foreground">{level.description}</p>
                      </div>
                      {experienceLevel === level.id && (
                        <Check className="w-5 h-5 text-[oklch(0.70_0.15_50)]" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}

          <div className="flex justify-between items-center">
            <button
              onClick={() => currentStep > 1 ? setCurrentStep(1) : router.push('/onboarding')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={!canProceed}
              className={`flex items-center gap-2 px-6 py-3 rounded-[16px] font-medium transition-all ${
                canProceed
                  ? 'bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] text-white hover:opacity-90'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {currentStep === 2 ? 'Get Recommendations' : 'Continue'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}