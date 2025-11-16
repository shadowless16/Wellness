'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronRight, ChevronLeft, Users, BookOpen, TrendingUp, Heart } from 'lucide-react'

const onboardingSteps = [
  {
    id: 1,
    title: "Welcome to Winbox",
    subtitle: "Your personal wellness companion",
    description: "Discover a platform designed to support your mental health journey with guided exercises, progress tracking, and community support.",
    icon: <Heart className="w-16 h-16 text-[oklch(0.70_0.15_50)]" />,
    bgGradient: "from-[oklch(0.70_0.15_50)]/20 to-[oklch(0.65_0.15_130)]/10"
  },
  {
    id: 2,
    title: "Learn & Grow",
    subtitle: "Courses designed for you",
    description: "Access structured wellness programs, guided meditations, and therapeutic exercises created by mental health professionals.",
    icon: <BookOpen className="w-16 h-16 text-[oklch(0.65_0.15_130)]" />,
    bgGradient: "from-[oklch(0.65_0.15_130)]/20 to-[oklch(0.70_0.15_50)]/10"
  },
  {
    id: 3,
    title: "Connect with Coaches",
    subtitle: "Professional guidance when you need it",
    description: "Get personalized support from certified wellness coaches and therapists who understand your unique journey.",
    icon: <Users className="w-16 h-16 text-[oklch(0.70_0.15_50)]" />,
    bgGradient: "from-[oklch(0.70_0.15_50)]/20 to-[oklch(0.65_0.15_130)]/10"
  },
  {
    id: 4,
    title: "Track Your Progress",
    subtitle: "See how far you've come",
    description: "Monitor your wellness journey with mood tracking, goal setting, and insights that help you understand your patterns.",
    icon: <TrendingUp className="w-16 h-16 text-[oklch(0.65_0.15_130)]" />,
    bgGradient: "from-[oklch(0.65_0.15_130)]/20 to-[oklch(0.70_0.15_50)]/10"
  }
]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const router = useRouter()

  const nextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      router.push('/personalization')
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const skipOnboarding = () => {
    router.push('/user')
  }

  const step = onboardingSteps[currentStep]

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige/20 to-[oklch(0.70_0.15_50)]/5 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Step {currentStep + 1} of {onboardingSteps.length}</span>
            <button 
              onClick={skipOnboarding}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Skip
            </button>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / onboardingSteps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Main content */}
        <div className={`bg-gradient-to-br ${step.bgGradient} rounded-[32px] p-8 text-center border border-[oklch(0.70_0.15_50)]/20 shadow-lg`}>
          <div className="mb-6 flex justify-center">
            {step.icon}
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {step.title}
          </h1>
          
          <h2 className="text-lg text-[oklch(0.70_0.15_50)] font-medium mb-4">
            {step.subtitle}
          </h2>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            {step.description}
          </p>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-[16px] transition-colors ${
                currentStep === 0 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/50'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>

            <button
              onClick={nextStep}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] text-white rounded-[16px] hover:opacity-90 transition-opacity font-medium"
            >
              {currentStep === onboardingSteps.length - 1 ? 'Personalize Experience' : 'Next'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Step indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {onboardingSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentStep 
                  ? 'bg-[oklch(0.70_0.15_50)]' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}