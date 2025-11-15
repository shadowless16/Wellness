import Link from 'next/link'
import { Heart, MessageCircle, Share2, Users } from 'lucide-react'
import Navbar from '@/components/wellness/navbar'

const communityPosts = [
  {
    id: 1,
    author: 'Emma Watson',
    avatar: 'EW',
    timeAgo: '2 hours ago',
    title: 'My Journey with Daily Meditation',
    excerpt: 'After starting my meditation practice 6 months ago, I have experienced profound changes in my anxiety levels and overall well-being. Today marks my 180-day streak!',
    likes: 234,
    comments: 45,
    category: 'Success Stories',
    bgColor: 'bg-warm-yellow/5'
  },
  {
    id: 2,
    author: 'James Mitchell',
    avatar: 'JM',
    timeAgo: '5 hours ago',
    title: 'Quick Tips for Building a Consistent Practice',
    excerpt: 'Consistency is key. Here are my top 3 tips: 1) Same time every day, 2) Start with just 5 minutes, 3) Track your progress. What works for you?',
    likes: 156,
    comments: 32,
    category: 'Tips & Advice',
    bgColor: 'bg-warm-teal/5'
  },
  {
    id: 3,
    author: 'Sarah Johnson',
    avatar: 'SJ',
    timeAgo: '1 day ago',
    title: 'Finding Peace During Difficult Times',
    excerpt: 'When work stress peaked last month, meditation became my sanctuary. I learned that inner peace isn\'t about avoiding challenges, but finding calm within them.',
    likes: 512,
    comments: 89,
    category: 'Personal Growth',
    bgColor: 'bg-warm-coral/5'
  },
  {
    id: 4,
    author: 'Marcus Chen',
    avatar: 'MC',
    timeAgo: '1 day ago',
    title: 'Question: Best Practices for Sleep Meditations',
    excerpt: 'I find regular meditations very helpful, but struggle with sleep sessions. Do you use headphones? What position do you meditate in? Any recommendations?',
    likes: 89,
    comments: 23,
    category: 'Questions',
    bgColor: 'bg-warm-beige/10'
  },
  {
    id: 5,
    author: 'Priya Sharma',
    avatar: 'PS',
    timeAgo: '2 days ago',
    title: 'Gratitude Practice Changed My Perspective',
    excerpt: 'Combined my meditation with gratitude journaling. The result? I notice 5 things I\'m grateful for every single day. It\'s shifted my entire mindset!',
    likes: 678,
    comments: 112,
    category: 'Practices',
    bgColor: 'bg-warm-teal/5'
  },
  {
    id: 6,
    author: 'Michael Torres',
    avatar: 'MT',
    timeAgo: '3 days ago',
    title: 'Introducing Our New Buddy System',
    excerpt: 'Want an accountability partner? We\'re launching a buddy matching system so you can support each other on your wellness journeys. Join us!',
    likes: 423,
    comments: 67,
    category: 'Community Updates',
    bgColor: 'bg-warm-coral/5'
  },
]

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white/80 to-warm-beige/5">
      <Navbar />
      <div className="pt-8 pb-16">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-light text-foreground mb-3">Community Wisdom</h1>
          <p className="text-muted-foreground text-lg">Share experiences, find inspiration, and support each other</p>
        </div>

        {/* Create post button */}
        <div className="mb-8">
          <button className="w-full bg-warm-teal/15 hover:bg-warm-teal/25 border border-warm-teal/20 text-foreground font-semibold py-4 rounded-[24px] transition-all">
            Share Your Story
          </button>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {['All', 'Success Stories', 'Tips & Advice', 'Personal Growth', 'Questions', 'Practices'].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                cat === 'All'
                  ? 'bg-warm-teal/15 text-warm-teal'
                  : 'bg-warm-beige/10 text-muted-foreground hover:bg-warm-beige/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {communityPosts.map((post) => (
            <Link key={post.id} href={`/community/${post.id}`}>
              <div className={`${post.bgColor} rounded-[24px] p-6 cursor-pointer transition-all hover:shadow-lg hover:scale-102 duration-300 border border-warm-beige/10`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-3 flex-grow">
                    <div className="w-10 h-10 rounded-full bg-warm-teal/20 flex items-center justify-center text-sm font-semibold text-warm-teal flex-shrink-0">
                      {post.avatar}
                    </div>
                    <div className="flex-grow">
                      <p className="font-semibold text-foreground">{post.author}</p>
                      <p className="text-xs text-muted-foreground">{post.timeAgo}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-warm-teal uppercase tracking-wide">{post.category}</span>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                </div>

                {/* Footer */}
                <div className="flex items-center gap-6 text-muted-foreground text-sm pt-4 border-t border-warm-beige/20">
                  <div className="flex items-center gap-2 hover:text-warm-teal transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-warm-teal transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-warm-teal transition-colors ml-auto">
                    <Share2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </main>
  )
}