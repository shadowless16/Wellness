'use client'

interface WelcomeHeaderProps {
  userName: string
}

export default function WelcomeHeader({ userName }: WelcomeHeaderProps) {
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }

  return (
    <div className="space-y-2">
      <h1 className="text-4xl md:text-5xl font-light text-foreground leading-tight">
        {getGreeting()}, <span className="font-normal">{userName}</span>
      </h1>
      <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
        Welcome to your wellness space. Take a moment to check in with yourself today.
      </p>
    </div>
  )
}
