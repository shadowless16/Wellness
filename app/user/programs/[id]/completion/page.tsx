'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle, Award, Download, Share2 } from 'lucide-react'

const quizQuestions = [
  {
    id: 1,
    question: "What is the most important technique you learned for managing anxiety?",
    type: "text"
  },
  {
    id: 2,
    question: "How will you apply CBT principles in your daily life?",
    type: "text"
  },
  {
    id: 3,
    question: "Rate your confidence in managing anxiety now (1-10):",
    type: "scale"
  },
  {
    id: 4,
    question: "What was your biggest breakthrough during this course?",
    type: "text"
  }
]

export default async function CourseCompletionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [currentStep, setCurrentStep] = useState(1) // 1: quiz, 2: certificate
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  const handleSubmitQuiz = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setCurrentStep(2)
    setIsSubmitting(false)
  }

  const canSubmit = quizQuestions.every(q => answers[q.id]?.trim())

  if (currentStep === 2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-warm-beige/20 to-[oklch(0.70_0.15_50)]/5 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          {/* Certificate */}
          <div className="bg-white rounded-[32px] p-12 shadow-lg border-4 border-[oklch(0.70_0.15_50)]/20 text-center">
            <div className="mb-8">
              <Award className="w-16 h-16 text-[oklch(0.70_0.15_50)] mx-auto mb-4" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] bg-clip-text text-transparent mb-2">
                Certificate of Completion
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] mx-auto mb-6"></div>
            </div>

            <div className="space-y-6 mb-8">
              <p className="text-lg text-muted-foreground">This certifies that</p>
              <h2 className="text-2xl font-bold text-foreground">Alex Johnson</h2>
              <p className="text-lg text-muted-foreground">has successfully completed</p>
              <h3 className="text-xl font-semibold text-[oklch(0.70_0.15_50)]">CBT for Anxiety Management</h3>
              <p className="text-muted-foreground">8-week comprehensive program</p>
            </div>

            <div className="flex items-center justify-center gap-8 mb-8 text-sm text-muted-foreground">
              <div>
                <p className="font-medium">Completed</p>
                <p>{new Date().toLocaleDateString()}</p>
              </div>
              <div>
                <p className="font-medium">Instructor</p>
                <p>Dr. Sarah Chen</p>
              </div>
              <div>
                <p className="font-medium">Certificate ID</p>
                <p>WB-{id}-{Date.now().toString().slice(-6)}</p>
              </div>
            </div>

            <div className="flex gap-4 justify-center mb-8">
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] text-white rounded-[16px] hover:opacity-90 transition-opacity">
                <Download className="w-4 h-4" />
                Download PDF
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-[oklch(0.70_0.15_50)]/10 text-[oklch(0.70_0.15_50)] rounded-[16px] hover:bg-[oklch(0.70_0.15_50)]/20 transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            <button 
              onClick={() => router.push('/user')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Return to Dashboard
            </button>
          </div>

          {/* Celebration Message */}
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-[oklch(0.70_0.15_50)]/10 to-[oklch(0.65_0.15_130)]/5 rounded-[24px] p-6 border border-[oklch(0.70_0.15_50)]/20">
              <h3 className="text-lg font-semibold text-foreground mb-2">🎉 Congratulations!</h3>
              <p className="text-muted-foreground">Your dashboard has been updated with this new milestone. Keep up the great work on your wellness journey!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige/20 to-[oklch(0.70_0.15_50)]/5 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <CheckCircle className="w-12 h-12 text-[oklch(0.70_0.15_50)] mx-auto mb-4" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] bg-clip-text text-transparent mb-2">
            Course Completion Assessment
          </h1>
          <p className="text-muted-foreground">Reflect on your learning journey to receive your certificate</p>
        </div>

        <div className="bg-white rounded-[24px] p-8 shadow-lg border border-[oklch(0.70_0.15_50)]/20">
          <div className="space-y-6">
            {quizQuestions.map((question, index) => (
              <div key={question.id} className="space-y-3">
                <label className="block text-sm font-medium text-foreground">
                  {index + 1}. {question.question}
                </label>
                
                {question.type === 'text' ? (
                  <textarea
                    value={answers[question.id] || ''}
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                    className="w-full h-24 p-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.15_50)]/30 focus:border-[oklch(0.70_0.15_50)] resize-none"
                    placeholder="Share your thoughts..."
                  />
                ) : (
                  <div className="flex gap-2">
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <button
                        key={num}
                        onClick={() => handleAnswerChange(question.id, num.toString())}
                        className={`w-10 h-10 rounded-full border-2 transition-all ${
                          answers[question.id] === num.toString()
                            ? 'border-[oklch(0.70_0.15_50)] bg-[oklch(0.70_0.15_50)] text-white'
                            : 'border-gray-300 hover:border-[oklch(0.70_0.15_50)]/50'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <button
              onClick={handleSubmitQuiz}
              disabled={!canSubmit || isSubmitting}
              className={`w-full py-3 px-6 rounded-[16px] font-medium transition-all ${
                canSubmit && !isSubmitting
                  ? 'bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] text-white hover:opacity-90'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? 'Generating Certificate...' : 'Complete Course & Get Certificate'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}