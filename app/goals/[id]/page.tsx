import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Calendar, Zap, TrendingUp } from 'lucide-react'

const goals: Record<string, any> = {
  '1': {
    title: 'Daily Meditation Streak',
    category: 'Consistency',
    description: 'Meditate for 30 days consecutively',
    progress: 21,
    target: 30,
    bgColor: 'bg-warm-coral/5',
    accentColor: 'text-warm-coral',
    accentBg: 'bg-warm-coral/10',
    startDate: 'Nov 1, 2025',
    dueDate: 'Nov 30, 2025',
    status: 'active',
    milestones: [
      { day: 7, label: 'First Week', completed: true },
      { day: 14, label: 'Two Weeks', completed: true },
      { day: 21, label: 'Three Weeks', completed: true },
      { day: 30, label: 'Goal Achieved', completed: false },
    ],
    benefits: [
      'Improved mental clarity',
      'Better stress management',
      'Enhanced emotional resilience',
      'Stronger meditation habit',
      'Better sleep quality'
    ]
  },
  '2': {
    title: 'Journal Reflection',
    category: 'Self-Awareness',
    description: 'Write 3 reflections per week',
    progress: 7,
    target: 12,
    bgColor: 'bg-warm-teal/5',
    accentColor: 'text-warm-teal',
    accentBg: 'bg-warm-teal/10',
    startDate: 'Nov 1, 2025',
    dueDate: 'Dec 31, 2025',
    status: 'active',
    milestones: [
      { day: 3, label: 'First Entry', completed: true },
      { day: 6, label: 'Habit Forming', completed: true },
      { day: 9, label: 'Consistency Check', completed: false },
      { day: 12, label: 'Goal Complete', completed: false },
    ],
    benefits: [
      'Self-discovery',
      'Emotional processing',
      'Pattern recognition',
      'Personal growth tracking'
    ]
  },
}

export default function GoalDetailPage({ params }: { params: { id: string } }) {
  const goal = goals[params.id] || goals['1']
  const percentage = (goal.progress / goal.target) * 100
  const completedMilestones = goal.milestones.filter((m: any) => m.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-b from-white/80 to-warm-beige/5">
      {/* Header */}
      <div className={`${goal.bgColor} border-b border-warm-beige/20 sticky top-16 z-20`}>
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-4">
          <Link href="/goals">
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors w-fit">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Goals</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        {/* Main content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left: Content */}
          <div className="md:col-span-2">
            {/* Title */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-warm-teal">{goal.category}</span>
                {goal.status === 'completed' && (
                  <CheckCircle2 className="w-4 h-4 text-warm-teal" />
                )}
              </div>
              <h1 className="text-4xl font-light text-foreground mb-3">{goal.title}</h1>
              <p className="text-lg text-muted-foreground">{goal.description}</p>
            </div>

            {/* Timeline info */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="bg-warm-beige/5 rounded-[16px] p-4">
                <p className="text-xs text-muted-foreground mb-1">Start Date</p>
                <p className="font-semibold text-foreground">{goal.startDate}</p>
              </div>
              <div className="bg-warm-beige/5 rounded-[16px] p-4">
                <p className="text-xs text-muted-foreground mb-1">Due Date</p>
                <p className="font-semibold text-foreground">{goal.dueDate}</p>
              </div>
            </div>

            {/* Milestones */}
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-foreground mb-6">Milestones</h2>
              <div className="space-y-3">
                {goal.milestones.map((milestone: any, i: number) => (
                  <div
                    key={i}
                    className={`${milestone.completed ? 'bg-warm-teal/10' : 'bg-warm-beige/5'} rounded-[16px] p-4 flex items-center gap-4 border ${
                      milestone.completed ? 'border-warm-teal/20' : 'border-warm-beige/20'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        milestone.completed ? 'bg-warm-teal text-white' : 'bg-warm-beige/20 text-muted-foreground'
                      }`}
                    >
                      {milestone.completed ? <CheckCircle2 className="w-5 h-5" /> : <span className="text-sm font-semibold">Day {milestone.day}</span>}
                    </div>
                    <span className={`font-medium ${milestone.completed ? 'text-warm-teal' : 'text-foreground'}`}>
                      {milestone.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-6">Expected Benefits</h2>
              <div className="space-y-2">
                {goal.benefits.map((benefit: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-warm-beige/5 rounded-[12px]">
                    <Zap className="w-4 h-4 text-warm-teal flex-shrink-0" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Progress card */}
          <div className={`${goal.bgColor} rounded-[24px] p-8 h-fit sticky top-24`}>
            {/* Progress visualization */}
            <div className="mb-8">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-warm-beige/20"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={goal.accentColor}
                    strokeDasharray={`${(percentage / 100) * 282.7} 282.7`}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-semibold text-foreground">{goal.progress}</span>
                  <span className="text-xs text-muted-foreground">of {goal.target}</span>
                </div>
              </div>

              <div className="bg-warm-beige/20 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${goal.accentColor}`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                ></div>
              </div>
              <p className="text-center text-sm font-semibold text-foreground mt-3">{Math.round(percentage)}% Complete</p>
            </div>

            {/* Stats */}
            <div className="space-y-3 mb-6 pt-6 border-t border-warm-beige/20">
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-warm-teal" />
                <span className="text-muted-foreground">{completedMilestones} milestones completed</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-warm-teal" />
                <span className="text-muted-foreground">Started Nov 1</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              <button className={`w-full ${goal.accentBg} ${goal.accentColor} font-semibold py-3 rounded-[16px] transition-all hover:shadow-md`}>
                Log Progress
              </button>
              <button className="w-full border border-warm-beige/20 bg-white hover:bg-warm-beige/5 font-semibold py-3 rounded-[16px] transition-all text-foreground">
                Edit Goal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}