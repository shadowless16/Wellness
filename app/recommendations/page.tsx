'use client'

import { useRouter } from 'next/navigation'
import { Star, Clock, Users, ArrowRight, BookOpen, User } from 'lucide-react'

const recommendedCourses = [
  {
    id: 1,
    title: 'Stress-Free Living',
    description: 'Learn practical techniques to manage daily stress and build resilience.',
    instructor: 'Dr. Sarah Chen',
    duration: '4 weeks',
    rating: 4.8,
    students: 2847,
    level: 'Beginner',
    tags: ['Stress Management', 'Mindfulness'],
    color: 'from-[oklch(0.70_0.15_50)]/20 to-[oklch(0.65_0.15_130)]/10'
  },
  {
    id: 2,
    title: 'Confidence Building Masterclass',
    description: 'Transform self-doubt into unshakeable confidence through proven methods.',
    instructor: 'Marcus Johnson',
    duration: '6 weeks',
    rating: 4.9,
    students: 1923,
    level: 'Intermediate',
    tags: ['Confidence', 'Leadership'],
    color: 'from-[oklch(0.65_0.15_130)]/20 to-[oklch(0.70_0.15_50)]/10'
  },
  {
    id: 3,
    title: 'Emotional Intelligence Foundations',
    description: 'Master your emotions and improve relationships through EQ development.',
    instructor: 'Dr. Elena Rodriguez',
    duration: '5 weeks',
    rating: 4.7,
    students: 3156,
    level: 'Beginner',
    tags: ['Emotional Control', 'Relationships'],
    color: 'from-[oklch(0.70_0.15_50)]/20 to-[oklch(0.65_0.15_130)]/10'
  }
]

const recommendedCoaches = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    specialty: 'Stress & Anxiety Management',
    experience: '8 years',
    rating: 4.9,
    sessions: 1200,
    price: '₦15,000/session',
    avatar: '👩‍⚕️',
    tags: ['Stress', 'Anxiety', 'Mindfulness']
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    specialty: 'Leadership & Confidence',
    experience: '12 years',
    rating: 4.8,
    sessions: 890,
    price: '₦18,000/session',
    avatar: '👨‍💼',
    tags: ['Leadership', 'Confidence', 'Career']
  },
  {
    id: 3,
    name: 'Dr. Elena Rodriguez',
    specialty: 'Emotional Intelligence',
    experience: '10 years',
    rating: 4.9,
    sessions: 1450,
    price: '₦16,500/session',
    avatar: '👩‍🎓',
    tags: ['Emotional Control', 'Relationships']
  }
]

export default function RecommendationsPage() {
  const router = useRouter()

  const handleStartJourney = () => {
    router.push('/user')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige/20 to-[oklch(0.70_0.15_50)]/5 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] bg-clip-text text-transparent mb-4">
            Your Personalized Recommendations
          </h1>
          <p className="text-muted-foreground text-lg">Based on your goals and experience level, here's what we recommend for you</p>
        </div>

        {/* Recommended Courses */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-[oklch(0.70_0.15_50)]" />
            <h2 className="text-2xl font-bold text-foreground">Recommended Courses</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedCourses.map((course) => (
              <div key={course.id} className={`bg-gradient-to-br ${course.color} rounded-[24px] p-6 border border-[oklch(0.70_0.15_50)]/20 hover:shadow-lg transition-all cursor-pointer group`}>
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-white/50 text-foreground`}>
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[oklch(0.70_0.15_50)] transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-[oklch(0.70_0.15_50)]/20 text-[oklch(0.70_0.15_50)] text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students.toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">by {course.instructor}</span>
                  <button className="text-[oklch(0.70_0.15_50)] hover:text-[oklch(0.65_0.15_130)] transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Coaches */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-6 h-6 text-[oklch(0.70_0.15_50)]" />
            <h2 className="text-2xl font-bold text-foreground">Recommended Coaches</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedCoaches.map((coach) => (
              <div key={coach.id} className="bg-white rounded-[24px] p-6 border border-[oklch(0.70_0.15_50)]/20 hover:shadow-lg transition-all cursor-pointer group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[oklch(0.70_0.15_50)]/20 to-[oklch(0.65_0.15_130)]/10 flex items-center justify-center text-2xl">
                    {coach.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground group-hover:text-[oklch(0.70_0.15_50)] transition-colors">
                      {coach.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{coach.specialty}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {coach.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-[oklch(0.70_0.15_50)]/10 text-[oklch(0.70_0.15_50)] text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex justify-between">
                    <span>Experience:</span>
                    <span className="font-medium">{coach.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rating:</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{coach.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>Sessions:</span>
                    <span className="font-medium">{coach.sessions}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="font-bold text-[oklch(0.70_0.15_50)]">{coach.price}</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-[oklch(0.70_0.15_50)]/10 to-[oklch(0.65_0.15_130)]/5 text-[oklch(0.70_0.15_50)] rounded-[12px] hover:from-[oklch(0.70_0.15_50)]/20 hover:to-[oklch(0.65_0.15_130)]/10 transition-all text-sm font-medium">
                    Book Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={handleStartJourney}
            className="px-8 py-4 bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] text-white rounded-[20px] hover:opacity-90 transition-opacity font-medium text-lg"
          >
            Start Your Wellness Journey
          </button>
          <p className="text-sm text-muted-foreground mt-3">You can always explore more courses and coaches later</p>
        </div>
      </div>
    </div>
  )
}