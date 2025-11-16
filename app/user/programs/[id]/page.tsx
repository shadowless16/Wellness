'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Play, Pause, Volume2, MessageCircle, Calendar, CheckCircle, Lock, ArrowLeft } from 'lucide-react'

interface Module {
  id: number
  title: string
  type: 'video' | 'audio' | 'microlearning'
  duration: string
  completed: boolean
  locked: boolean
}

let courseModules: Module[] = [
  { id: 1, title: 'Understanding Anxiety', type: 'video', duration: '12 min', completed: true, locked: false },
  { id: 2, title: 'Breathing Techniques', type: 'audio', duration: '8 min', completed: true, locked: false },
  { id: 3, title: 'Quick CBT Check-in', type: 'microlearning', duration: '3 min', completed: false, locked: false },
  { id: 4, title: 'Thought Challenging', type: 'video', duration: '15 min', completed: false, locked: false },
  { id: 5, title: 'Daily Practice Guide', type: 'microlearning', duration: '5 min', completed: false, locked: false }
]

export default function CoursePage({ params }: { params: { id: string } }) {
  const [currentModule, setCurrentModule] = useState(3)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showReflection, setShowReflection] = useState(false)
  const [reflection, setReflection] = useState('')
  const router = useRouter()

  const module = courseModules.find(m => m.id === currentModule)

  const handleModuleComplete = () => {
    setShowReflection(true)
  }

  const handleNextModule = () => {
    if (currentModule < courseModules.length) {
      setCurrentModule(currentModule + 1)
    }
  }

  const handleReflectionSubmit = () => {
    setShowReflection(false)
    // Mark current module as complete
    courseModules[currentModule - 1].completed = true
    // Unlock next module if exists
    if (currentModule < courseModules.length) {
      courseModules[currentModule].locked = false
      handleNextModule()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige/20 to-[oklch(0.70_0.15_50)]/5">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => router.push('/user/programs')}
            className="p-2 rounded-[12px] hover:bg-white/50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] bg-clip-text text-transparent">
              CBT for Anxiety Management
            </h1>
            <p className="text-muted-foreground">Module {currentModule} of {courseModules.length}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video/Audio Player */}
            <div className="bg-white rounded-[24px] p-6 shadow-lg border border-[oklch(0.70_0.15_50)]/20">
              <div className="aspect-video bg-gradient-to-br from-[oklch(0.70_0.15_50)]/10 to-[oklch(0.65_0.15_130)]/5 rounded-[16px] flex items-center justify-center mb-4">
                {module?.type === 'video' && (
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] flex items-center justify-center mb-4 mx-auto">
                      {isPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white ml-1" />}
                    </div>
                    <p className="text-muted-foreground">Video: {module.title}</p>
                  </div>
                )}
                {module?.type === 'audio' && (
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] flex items-center justify-center mb-4 mx-auto">
                      <Volume2 className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-muted-foreground">Audio: {module.title}</p>
                  </div>
                )}
                {module?.type === 'microlearning' && (
                  <div className="text-center p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">{module.title}</h3>
                    <div className="space-y-4 text-left max-w-md">
                      <p className="text-muted-foreground">Take a moment to check in with yourself:</p>
                      <div className="space-y-2">
                        <p className="text-sm">• How is your anxiety level right now (1-10)?</p>
                        <p className="text-sm">• What thoughts are going through your mind?</p>
                        <p className="text-sm">• Where do you feel tension in your body?</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] text-white rounded-[12px] hover:opacity-90 transition-opacity"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                
                <span className="text-sm text-muted-foreground">{module?.duration}</span>
                
                <div className="flex gap-2">
                  {currentModule === courseModules.length ? (
                    <button 
                      onClick={() => router.push(`/user/programs/${params.id}/completion`)}
                      className="px-4 py-2 bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] text-white rounded-[12px] hover:opacity-90 transition-opacity"
                    >
                      Complete Course
                    </button>
                  ) : (
                    <button 
                      onClick={handleModuleComplete}
                      className="px-4 py-2 bg-[oklch(0.70_0.15_50)]/10 text-[oklch(0.70_0.15_50)] rounded-[12px] hover:bg-[oklch(0.70_0.15_50)]/20 transition-colors"
                    >
                      Mark Complete
                    </button>
                  )}
                  
                  {currentModule < courseModules.length && (
                    <button 
                      onClick={handleNextModule}
                      className="px-4 py-2 bg-gray-100 text-gray-600 rounded-[12px] hover:bg-gray-200 transition-colors"
                    >
                      Next Module
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Reflection Prompt */}
            {showReflection && (
              <div className="bg-white rounded-[24px] p-6 shadow-lg border border-[oklch(0.70_0.15_50)]/20">
                <h3 className="text-lg font-semibold text-foreground mb-4">Reflection Time</h3>
                <p className="text-muted-foreground mb-4">How does this apply to your life? What insights did you gain?</p>
                <textarea
                  value={reflection}
                  onChange={(e) => setReflection(e.target.value)}
                  className="w-full h-32 p-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.15_50)]/30 focus:border-[oklch(0.70_0.15_50)] resize-none"
                  placeholder="Share your thoughts and reflections..."
                />
                <div className="flex gap-2 mt-4">
                  <button 
                    onClick={handleReflectionSubmit}
                    className="px-4 py-2 bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] text-white rounded-[12px] hover:opacity-90 transition-opacity"
                  >
                    Save Reflection
                  </button>
                  <button 
                    onClick={() => setShowReflection(false)}
                    className="px-4 py-2 bg-gray-100 text-gray-600 rounded-[12px] hover:bg-gray-200 transition-colors"
                  >
                    Skip
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Progress */}
            <div className="bg-white rounded-[24px] p-6 shadow-lg border border-[oklch(0.70_0.15_50)]/20">
              <h3 className="font-semibold text-foreground mb-4">Course Progress</h3>
              <div className="space-y-3">
                {courseModules.map((mod) => (
                  <button
                    key={mod.id}
                    onClick={() => !mod.locked && setCurrentModule(mod.id)}
                    className={`w-full p-3 rounded-[12px] text-left transition-all ${
                      mod.id === currentModule
                        ? 'bg-gradient-to-r from-[oklch(0.70_0.15_50)]/10 to-[oklch(0.65_0.15_130)]/5 border border-[oklch(0.70_0.15_50)]/30'
                        : mod.locked
                        ? 'bg-gray-50 cursor-not-allowed'
                        : 'hover:bg-gray-50'
                    }`}
                    disabled={mod.locked}
                  >
                    <div className="flex items-center gap-3">
                      {mod.completed ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : mod.locked ? (
                        <Lock className="w-5 h-5 text-gray-400" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                      )}
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${mod.locked ? 'text-gray-400' : 'text-foreground'}`}>
                          {mod.title}
                        </p>
                        <p className={`text-xs ${mod.locked ? 'text-gray-300' : 'text-muted-foreground'}`}>
                          {mod.type} • {mod.duration}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Coach Support */}
            <div className="bg-white rounded-[24px] p-6 shadow-lg border border-[oklch(0.70_0.15_50)]/20">
              <h3 className="font-semibold text-foreground mb-4">Need Support?</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 rounded-[12px] bg-[oklch(0.70_0.15_50)]/10 hover:bg-[oklch(0.70_0.15_50)]/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-[oklch(0.70_0.15_50)]" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">Message Coach</p>
                    <p className="text-xs text-muted-foreground">Get personalized guidance</p>
                  </div>
                </button>
                
                <button className="w-full flex items-center gap-3 p-3 rounded-[12px] bg-[oklch(0.65_0.15_130)]/10 hover:bg-[oklch(0.65_0.15_130)]/20 transition-colors">
                  <Calendar className="w-5 h-5 text-[oklch(0.65_0.15_130)]" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">Schedule Session</p>
                    <p className="text-xs text-muted-foreground">Book live coaching</p>
                  </div>
                </button>
              </div>
              
              <div className="mt-4 p-3 bg-[oklch(0.70_0.15_50)]/5 rounded-[12px]">
                <p className="text-xs text-muted-foreground">
                  <strong>Dr. Sarah Chen</strong> is your course instructor. She typically responds within 2-4 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}