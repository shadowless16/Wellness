import Link from 'next/link'
import { BookOpen, Headphones, LinkIcon, Award } from 'lucide-react'
import Navbar from '@/components/user/wellness/navbar'

const resources = [
  {
    id: 1,
    type: 'Article',
    icon: BookOpen,
    title: 'The Science Behind Meditation',
    description: 'Discover how meditation changes your brain and why consistency matters.',
    author: 'Dr. Sarah Chen',
    readTime: '8 min read',
    category: 'Science',
    bgColor: 'bg-warm-teal/5'
  },
  {
    id: 2,
    type: 'Podcast',
    icon: Headphones,
    title: 'Mindfulness in Modern Life',
    description: 'A conversation with leading researchers about practical wellness in today\'s world.',
    author: 'The Wellness Podcast',
    readTime: '32 min listen',
    category: 'Conversations',
    bgColor: 'bg-warm-yellow/5'
  },
  {
    id: 3,
    type: 'Article',
    icon: BookOpen,
    title: 'Beginner\'s Guide to Journaling',
    description: 'Learn techniques to unlock self-discovery through reflective writing.',
    author: 'Emma Rodriguez',
    readTime: '6 min read',
    category: 'Practices',
    bgColor: 'bg-warm-coral/5'
  },
  {
    id: 4,
    type: 'Resource',
    icon: LinkIcon,
    title: 'Recommended Reading List',
    description: 'Curated books on meditation, psychology, and personal growth.',
    author: 'Wellness Editorial',
    readTime: '15 books',
    category: 'Learning',
    bgColor: 'bg-warm-beige/10'
  },
  {
    id: 5,
    type: 'Article',
    icon: BookOpen,
    title: 'Sleep Better: A Practical Guide',
    description: 'Evidence-based strategies to improve sleep quality and sleep hygiene.',
    author: 'Dr. James Park',
    readTime: '10 min read',
    category: 'Sleep',
    bgColor: 'bg-warm-teal/5'
  },
  {
    id: 6,
    type: 'Certification',
    icon: Award,
    title: 'Mindfulness Teacher Training',
    description: 'Join our program to become a certified meditation instructor.',
    author: 'Wellness Academy',
    readTime: '200 hours',
    category: 'Training',
    bgColor: 'bg-warm-coral/5'
  },
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white/80 to-warm-beige/5">
      <Navbar />
      <div className="pt-8 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-light mb-3 bg-gradient-to-r from-[oklch(0.65_0.15_130)] to-[oklch(0.70_0.15_50)] bg-clip-text text-transparent">Learning Resources</h1>
          <p className="text-muted-foreground text-lg">Deepen your knowledge with articles, podcasts, and educational materials</p>
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {['All', 'Articles', 'Podcasts', 'Science', 'Practices', 'Learning'].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'All'
                  ? 'bg-gradient-to-r from-[oklch(0.65_0.15_130)]/15 to-[oklch(0.70_0.15_50)]/10 text-[oklch(0.65_0.15_130)]'
                  : 'bg-warm-beige/10 text-muted-foreground hover:bg-gradient-to-r hover:from-[oklch(0.65_0.15_130)]/5 hover:to-[oklch(0.70_0.15_50)]/5'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Resources grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => {
            const Icon = resource.icon
            return (
              <Link key={resource.id} href={`/resources/${resource.id}`}>
                <div className={`${resource.bgColor} rounded-[24px] p-6 cursor-pointer transition-all hover:shadow-lg hover:scale-105 duration-300 border border-warm-beige/20 h-full flex flex-col`}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-semibold text-[oklch(0.70_0.15_50)] uppercase tracking-wide">{resource.type}</span>
                    <Icon className="w-5 h-5 text-muted-foreground opacity-50" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{resource.description}</p>

                  <div className="pt-4 border-t border-warm-beige/20">
                    <p className="text-xs text-muted-foreground mb-1">{resource.author}</p>
                    <p className="text-xs font-medium text-[oklch(0.65_0.15_130)]">{resource.readTime}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      </div>
    </main>
  )
}