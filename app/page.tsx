'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    const user = getCurrentUser()
    
    if (!user) {
      router.push('/auth/login')
      return
    }

    // Redirect to appropriate dashboard based on role
    switch (user.role) {
      case 'user':
        router.push('/user')
        break
      case 'coach':
        router.push('/coach')
        break
      case 'admin':
        router.push('/admin')
        break
      case 'corporate':
        router.push('/corporate')
        break
      default:
        router.push('/user')
    }
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[oklch(0.65_0.15_130)] mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirecting to your dashboard...</p>
      </div>
    </div>
  )
}