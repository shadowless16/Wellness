import Link from 'next/link'
import { ArrowLeft, Heart, MessageCircle, Share2, Send } from 'lucide-react'

const communityPosts: Record<string, any> = {
  '1': {
    author: 'Emma Watson',
    avatar: 'EW',
    timeAgo: '2 hours ago',
    title: 'My Journey with Daily Meditation',
    category: 'Success Stories',
    content: 'After starting my meditation practice 6 months ago, I have experienced profound changes in my anxiety levels and overall well-being. Today marks my 180-day streak!\n\nWhat started as skepticism became my daily sanctuary. The first week was challenging - my mind wandered constantly. But I kept showing up, even if just for 5 minutes.\n\nNow, meditation is as natural as brushing my teeth. I notice:\n- Better sleep quality\n- Less reactive responses to stress\n- More patience with loved ones\n- Clarity in decision-making\n- A sense of calm that flows into my day\n\nTo anyone just starting: be gentle with yourself. Progress over perfection. Your mind will wander - that\'s not failure, that\'s the practice.',
    likes: 234,
    comments: 45,
    bgColor: 'bg-warm-yellow/5'
  },
}

export default function CommunityPostPage({ params }: { params: { id: string } }) {
  const post = communityPosts[params.id] || communityPosts['1']

  return (
    <div className="min-h-screen bg-gradient-to-b from-white/80 to-warm-beige/5">
      {/* Header */}
      <div className={`${post.bgColor} border-b border-warm-beige/20 sticky top-16 z-20`}>
        <div className="max-w-2xl mx-auto px-4 md:px-6 py-4">
          <Link href="/user/community">
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors w-fit">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Community</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 md:px-6 py-12">
        {/* Post header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-warm-teal/20 flex items-center justify-center text-sm font-semibold text-warm-teal">
              {post.avatar}
            </div>
            <div>
              <p className="font-semibold text-foreground">{post.author}</p>
              <p className="text-sm text-muted-foreground">{post.timeAgo}</p>
            </div>
          </div>
          <div className="mb-4">
            <span className="text-xs font-semibold text-warm-teal uppercase tracking-wide">{post.category}</span>
          </div>
          <h1 className="text-3xl font-light text-foreground mb-4">{post.title}</h1>
        </div>

        {/* Post content */}
        <div className="bg-warm-beige/5 rounded-[24px] p-8 mb-8">
          <div className="text-foreground whitespace-pre-wrap text-lg leading-relaxed">
            {post.content}
          </div>
        </div>

        {/* Engagement */}
        <div className="flex items-center gap-8 py-6 border-t border-b border-warm-beige/20 mb-8">
          <button className="flex items-center gap-2 text-muted-foreground hover:text-warm-teal transition-colors">
            <Heart className="w-5 h-5" />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center gap-2 text-muted-foreground hover:text-warm-teal transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span>{post.comments}</span>
          </button>
          <button className="flex items-center gap-2 text-muted-foreground hover:text-warm-teal transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Comment section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6">Comments</h2>
          
          {/* Comment input */}
          <div className="bg-warm-beige/5 rounded-[24px] p-6 mb-8">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-warm-teal/20 flex items-center justify-center text-sm font-semibold text-warm-teal flex-shrink-0">
                You
              </div>
              <div className="flex-grow">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Share your thoughts..."
                    className="flex-grow bg-white border border-warm-beige/20 rounded-[16px] px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-warm-teal/50"
                  />
                  <button className="bg-warm-teal/15 hover:bg-warm-teal/25 text-warm-teal p-3 rounded-[16px] transition-all">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sample comments */}
          <div className="space-y-4">
            {[1, 2, 3].map((comment) => (
              <div key={comment} className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-warm-beige/20 flex items-center justify-center text-xs font-semibold flex-shrink-0">
                  C{comment}
                </div>
                <div className="bg-warm-beige/5 rounded-[16px] p-4 flex-grow">
                  <p className="font-semibold text-sm text-foreground">Community Member</p>
                  <p className="text-sm text-muted-foreground mt-1">This is such an inspiring story! Thank you for sharing. I\'m on day 20 of my practice now.</p>
                  <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
                    <button className="hover:text-warm-teal transition-colors">Like</button>
                    <button className="hover:text-warm-teal transition-colors">Reply</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}