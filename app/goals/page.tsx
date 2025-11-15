import Link from 'next/link'
import { ArrowLeft, Users, Flame, Trophy, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/wellness/navbar'

const challenges: Record<string, any> = {
  '1': {
    title: '7-Day Mindfulness Challenge',
    description: 'Join thousands in a guided 7-day journey to mindfulness mastery',
    fullDescription: 'This intensive 7-day challenge is designed to help you build a sustainable meditation practice. Each day features a themed meditation, guided practices, and community discussions.',
    participants: 2847,
    daysLeft: 4,
    joined: true,
    bgColor: 'bg-warm-teal/5',
    accentColor: 'text-warm-teal',
    accentBg: 'bg-warm-teal/10',
    startDate: 'Nov 20, 2025',
    endDate: 'Nov 27, 2025',
    difficulty: 'Beginner',
    instructor: 'Sarah Chen',
    dailyCommitment: '15 min/day',
    days: [
      { day: 1, title: 'Presence', description: 'Learn the foundations of mindfulness', completed: true },
      { day: 2, title: 'Breath Awareness', description: 'Explore breathing as an anchor', completed: true },
      { day: 3, title: 'Body Scan', description: 'Connect with your physical body', completed: false },
      { day: 4, title: 'Thoughts & Emotions', description: 'Observe without judgment', completed: false },
      { day: 5, title: 'Open Awareness', description: 'Expand your focus', completed: false },
      { day: 6, title: 'Loving Kindness', description: 'Cultivate compassion', completed: false },
      { day: 7, title: 'Integration', description: 'Bring mindfulness into daily life', completed: false },
    ]
  },
}

export default function ChallengeDetailPage({ params }: { params: { id: string } }) {
  const challenge = challenges[params.id] || challenges['1']
  const completedDays = challenge.days.filter((d: any) => d.completed).length

  return (
    <main className="min-h-screen bg-gradient-to-b from-white/80 to-warm-beige/5">
      <Navbar />
      <div>
      {/* Header */}
      <div className={`${challenge.bgColor} border-b border-warm-beige/20 sticky top-16 z-20`}>
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
                <span className="text-xs font-semibold uppercase tracking-wide text-warm-teal">{challenge.difficulty} • {challenge.dailyCommitment}</span>
              </div>
              <h1 className="text-4xl font-light text-foreground mb-3">{challenge.title}</h1>
              <p className="text-lg text-muted-foreground">{challenge.fullDescription}</p>
            </div>

            {/* Challenge details */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              <div className="bg-warm-beige/5 rounded-[16px] p-4">
                <p className="text-xs text-muted-foreground mb-1">Instructor</p>
                <p className="font-semibold text-foreground">{challenge.instructor}</p>
              </div>
              <div className="bg-warm-beige/5 rounded-[16px] p-4">
                <p className="text-xs text-muted-foreground mb-1">Start Date</p>
                <p className="font-semibold text-foreground">{challenge.startDate}</p>
              </div>
              <div className="bg-warm-beige/5 rounded-[16px] p-4">
                <p className="text-xs text-muted-foreground mb-1">Duration</p>
                <p className="font-semibold text-foreground">7 Days</p>
              </div>
            </div>

            {/* Daily breakdown */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-6">Daily Sessions</h2>
              <div className="space-y-3">
                {challenge.days.map((dayItem: any, i: number) => (
                  <div
                    key={i}
                    className={`${dayItem.completed ? 'bg-warm-teal/10' : 'bg-warm-beige/5'} rounded-[16px] p-4 flex items-start gap-4 border ${
                      dayItem.completed ? 'border-warm-teal/20' : 'border-warm-beige/20'
                    } cursor-pointer hover:shadow-md transition-all`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                        dayItem.completed ? 'bg-warm-teal text-white' : 'bg-warm-beige/20 text-muted-foreground font-semibold'
                      }`}
                    >
                      {dayItem.completed ? <CheckCircle2 className="w-5 h-5" /> : dayItem.day}
                    </div>
                    <div className="flex-grow">
                      <p className={`font-semibold ${dayItem.completed ? 'text-warm-teal' : 'text-foreground'}`}>
                        Day {dayItem.day}: {dayItem.title}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{dayItem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Progress card */}
          <div className={`${challenge.bgColor} rounded-[24px] p-8 h-fit sticky top-24`}>
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-foreground">Progress</span>
                <span className="text-sm font-bold text-warm-teal">{completedDays}/7</span>
              </div>
              <div className="bg-warm-beige/20 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${challenge.accentColor}`}
                  style={{ width: `${(completedDays / 7) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4 mb-8 pb-8 border-b border-warm-beige/20">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Participants</p>
                  <p className="font-semibold text-foreground">{challenge.participants.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Flame className="w-5 h-5 text-warm-coral" />
                <div>
                  <p className="text-xs text-muted-foreground">Time Left</p>
                  <p className="font-semibold text-foreground">{challenge.daysLeft} days</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-warm-yellow" />
                <div>
                  <p className="text-xs text-muted-foreground">Completion Reward</p>
                  <p className="font-semibold text-foreground">Badge & Certificate</p>
                </div>
              </div>
            </div>

            {/* Action button */}
            <button
              className={`w-full ${challenge.accentBg} ${challenge.accentColor} font-semibold py-3 rounded-[16px] transition-all hover:shadow-md`}
            >
              {challenge.joined ? 'Continue Challenge' : 'Join Challenge'}
            </button>
          </div>
        </div>
      </div>
      </div>
    </main>
  )
}
