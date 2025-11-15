import { TrendingUp, Calendar, Target, Zap } from 'lucide-react'
import Navbar from '@/components/user/wellness/navbar'

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white/80 to-warm-beige/5">
      <Navbar />
      <div className="pt-8 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-light text-foreground mb-3">Your Wellness Insights</h1>
          <p className="text-muted-foreground text-lg">Track your progress and discover patterns in your wellness journey</p>
        </div>

        {/* Stats overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Meditations', value: '47', subtext: '+3 this week', icon: Zap, color: 'from-warm-teal/20 to-warm-teal/5' },
            { label: 'Streak', value: '21 days', subtext: 'Keep going!', icon: Target, color: 'from-warm-yellow/20 to-warm-yellow/5' },
            { label: 'Avg. Mood', value: '7.2/10', subtext: '+0.5 vs last month', icon: TrendingUp, color: 'from-warm-coral/20 to-warm-coral/5' },
            { label: 'Journal Entries', value: '34', subtext: 'Last: 2 days ago', icon: Calendar, color: 'from-warm-beige/40 to-warm-beige/10' },
          ].map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={i} className={`bg-gradient-to-br ${stat.color} rounded-[24px] p-6 border border-warm-beige/20`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-light text-foreground">{stat.value}</p>
                  </div>
                  <Icon className="w-6 h-6 text-muted-foreground opacity-40" />
                </div>
                <p className="text-xs text-muted-foreground">{stat.subtext}</p>
              </div>
            )
          })}
        </div>

        {/* Charts and graphs */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Mood over time */}
          <div className="bg-warm-beige/5 rounded-[24px] p-8 border border-warm-beige/20">
            <h3 className="text-lg font-semibold text-foreground mb-6">Mood Trends</h3>
            <div className="h-40 bg-gradient-to-b from-warm-teal/10 to-warm-beige/5 rounded-[16px] flex items-end justify-around px-4 gap-2">
              {[4, 6, 5, 7, 6, 8, 7, 8, 7, 8, 9, 8].map((height, i) => (
                <div key={i} className="flex-grow max-w-2 bg-warm-teal rounded-t-[8px]" style={{ height: `${(height / 10) * 100}%` }}></div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">Last 12 days - Overall trend improving</p>
          </div>

          {/* Meditation activity */}
          <div className="bg-warm-beige/5 rounded-[24px] p-8 border border-warm-beige/20">
            <h3 className="text-lg font-semibold text-foreground mb-6">Activity Heatmap</h3>
            <div className="grid grid-cols-7 gap-1">
              {Array(28).fill(0).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-[6px] ${
                    [5, 7, 10, 12, 15, 18, 20, 23].includes(i)
                      ? 'bg-warm-teal'
                      : [2, 8, 14, 19, 25].includes(i)
                      ? 'bg-warm-teal/50'
                      : 'bg-warm-beige/20'
                  }`}
                ></div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">4 weeks of consistency</p>
          </div>
        </div>

        {/* Insights cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: 'Best Practice Time', description: 'You\'re most consistent with morning meditations (8am-9am)', icon: '🌅' },
            { title: 'Favorite Style', description: 'Breathing exercises are your go-to for quick resets', icon: '🫁' },
            { title: 'Progress Pattern', description: 'Mood improved 2.3 points on weeks you journaled daily', icon: '📈' },
            { title: 'Community Active', description: 'You\'ve engaged with 12 community posts this month', icon: '👥' },
          ].map((insight, i) => (
            <div key={i} className="bg-warm-beige/5 rounded-[24px] p-6 border border-warm-beige/20">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{insight.icon}</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{insight.title}</h4>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </main>
  )
}