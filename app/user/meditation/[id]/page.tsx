import Link from 'next/link'
import { ArrowLeft, Play, Download, Share2, Heart, Volume2, Zap } from 'lucide-react'

const meditations: Record<string, any> = {
  '1': {
    title: 'Morning Serenity',
    instructor: 'Sarah Chen',
    category: 'Mindfulness',
    duration: '10 min',
    description: 'Start your day with calm focus and intention',
    fullDescription: 'This guided meditation helps you cultivate clarity, focus, and positive intention for your day. Perfect for morning routines, this session combines gentle breathing techniques with mindfulness principles.',
    bgColor: 'bg-[oklch(0.65_0.15_130)]/5',
    accentColor: 'text-[oklch(0.65_0.15_130)]',
    accentBg: 'bg-[oklch(0.65_0.15_130)]/15',
    benefits: ['Mental clarity', 'Positive mindset', 'Focus enhancement', 'Stress reduction'],
    difficulty: 'Beginner'
  },
  '2': {
    title: 'Deep Breathing',
    instructor: 'Marcus Johnson',
    category: 'Breathing',
    duration: '8 min',
    description: 'Calm your nervous system with guided breathing',
    fullDescription: 'Learn powerful breathing techniques that activate your parasympathetic nervous system. This quick session is ideal for anxiety relief, stress management, or whenever you need an instant reset.',
    bgColor: 'bg-[oklch(0.70_0.15_50)]/5',
    accentColor: 'text-[oklch(0.70_0.15_50)]',
    accentBg: 'bg-[oklch(0.70_0.15_50)]/15',
    benefits: ['Anxiety relief', 'Nervous system calm', 'Instant reset', 'Better sleep'],
    difficulty: 'Beginner'
  },
  '3': {
    title: 'Sleep Story: Forest Dreams',
    instructor: 'Elena Rodriguez',
    category: 'Sleep',
    duration: '25 min',
    description: 'Drift into peaceful sleep with this calming story',
    fullDescription: 'A soothing bedtime story set in an ancient forest. This session combines storytelling with guided relaxation to help you drift into deep, restorative sleep.',
    bgColor: 'bg-[oklch(0.70_0.15_50)]/5',
    accentColor: 'text-[oklch(0.70_0.15_50)]',
    accentBg: 'bg-[oklch(0.70_0.15_50)]/15',
    benefits: ['Better sleep', 'Relaxation', 'Dream support', 'Rest recovery'],
    difficulty: 'Beginner'
  },
  '4': {
    title: 'Body Scan Meditation',
    instructor: 'Dr. James Park',
    category: 'Relaxation',
    duration: '15 min',
    description: 'Release tension with a guided body awareness session',
    fullDescription: 'Systematically scan through your entire body, releasing tension and building body awareness. This technique is beneficial for pain management and deep relaxation.',
    bgColor: 'bg-[oklch(0.65_0.15_130)]/5',
    accentColor: 'text-[oklch(0.65_0.15_130)]',
    accentBg: 'bg-[oklch(0.65_0.15_130)]/15',
    benefits: ['Tension release', 'Body awareness', 'Pain management', 'Deep relaxation'],
    difficulty: 'Intermediate'
  },
  '5': {
    title: 'Loving Kindness',
    instructor: 'Priya Sharma',
    category: 'Compassion',
    duration: '12 min',
    description: 'Cultivate inner compassion and positive emotions',
    fullDescription: 'A powerful practice to cultivate self-compassion and extend kindness to others. This meditation builds emotional resilience and strengthens social connection.',
    bgColor: 'bg-[oklch(0.70_0.15_50)]/5',
    accentColor: 'text-[oklch(0.70_0.15_50)]',
    accentBg: 'bg-[oklch(0.70_0.15_50)]/15',
    benefits: ['Self-compassion', 'Emotional resilience', 'Reduced judgment', 'Connection'],
    difficulty: 'Intermediate'
  },
  '6': {
    title: 'Work Stress Release',
    instructor: 'Michael Torres',
    category: 'Quick Resets',
    duration: '7 min',
    description: 'Quick reset between meetings and tasks',
    fullDescription: 'A brief but powerful session designed for busy professionals. Perfect for desk breaks or between meetings to reset your focus and calm your mind.',
    bgColor: 'bg-[oklch(0.65_0.15_130)]/5',
    accentColor: 'text-[oklch(0.65_0.15_130)]',
    accentBg: 'bg-[oklch(0.65_0.15_130)]/15',
    benefits: ['Quick reset', 'Focus return', 'Stress relief', 'Productivity boost'],
    difficulty: 'Beginner'
  }
}

export default async function MeditationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const meditation = meditations[id] || meditations['1']

  return (
    <div className="min-h-screen bg-gradient-to-b from-white/80 to-warm-beige/5">
      {/* Header with back button */}
      <div className={`${meditation.bgColor} border-b border-[oklch(0.70_0.15_50)]/20 sticky top-16 z-20`}>
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-4">
          <Link href="/user/meditation">
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors w-fit">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Meditation</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        {/* Main content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left: Content */}
          <div className="md:col-span-2">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-[oklch(0.70_0.15_50)]">{meditation.category}</span>
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">•</span>
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{meditation.difficulty}</span>
              </div>
              <h1 className="text-4xl font-light text-foreground mb-4">{meditation.title}</h1>
              <p className="text-lg text-muted-foreground">{meditation.fullDescription}</p>
            </div>

            {/* Benefits section */}
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-foreground mb-4">Benefits</h2>
              <div className="grid grid-cols-2 gap-3">
                {meditation.benefits.map((benefit: string) => (
                  <div key={benefit} className="flex items-center gap-3 p-3 bg-[oklch(0.70_0.15_50)]/10 rounded-[16px]">
                    <Zap className="w-5 h-5 text-[oklch(0.70_0.15_50)] flex-shrink-0" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor bio */}
            <div className="bg-[oklch(0.70_0.15_50)]/5 rounded-[24px] p-6">
              <h3 className="font-semibold text-foreground mb-2">Instructor</h3>
              <p className="text-muted-foreground text-sm mb-3">{meditation.instructor}</p>
              <p className="text-sm text-muted-foreground">Experienced meditation guide with 10+ years of teaching. Specialized in mindfulness-based stress reduction and wellness coaching.</p>
            </div>
          </div>

          {/* Right: Player card */}
          <div className={`${meditation.bgColor} rounded-[28px] p-8 h-fit sticky top-24`}>
            {/* Player visualization */}
            <div className={`w-full aspect-square ${meditation.accentBg} rounded-[24px] flex items-center justify-center mb-6 cursor-pointer hover:shadow-lg transition-all`}>
              <Play className={`w-12 h-12 ${meditation.accentColor} fill-current`} />
            </div>

            {/* Info */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Volume2 className="w-4 h-4" />
                <span className="text-sm">{meditation.duration}</span>
              </div>
              <div className="text-sm text-muted-foreground">{meditation.instructor}</div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              <button className={`w-full ${meditation.accentBg} ${meditation.accentColor} font-semibold py-3 rounded-[16px] transition-all hover:shadow-md flex items-center justify-center gap-2`}>
                <Play className="w-5 h-5 fill-current" />
                Start Meditation
              </button>
              <button className="w-full border border-[oklch(0.70_0.15_50)]/20 bg-white hover:bg-[oklch(0.70_0.15_50)]/5 font-semibold py-3 rounded-[16px] transition-all flex items-center justify-center gap-2 text-foreground">
                <Heart className="w-5 h-5" />
                Save
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button className="border border-[oklch(0.70_0.15_50)]/20 bg-white hover:bg-[oklch(0.70_0.15_50)]/5 py-3 rounded-[16px] transition-all flex items-center justify-center gap-2 text-muted-foreground">
                  <Download className="w-4 h-4" />
                </button>
                <button className="border border-[oklch(0.70_0.15_50)]/20 bg-white hover:bg-[oklch(0.70_0.15_50)]/5 py-3 rounded-[16px] transition-all flex items-center justify-center gap-2 text-muted-foreground">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}