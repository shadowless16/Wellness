'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/onboarding')
  }

  const handleSSOLogin = (provider: string) => {
    router.push('/onboarding')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-warm-beige/20 to-[oklch(0.70_0.15_50)]/10">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-[24px] shadow-lg border border-[oklch(0.70_0.15_50)]/20">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] bg-clip-text text-transparent">Join Winbox</h2>
          <p className="mt-2 text-muted-foreground">Choose your role to get started</p>
        </div>
        
        {/* Role Selection */}
        <div className="space-y-4">
          <p className="text-center text-sm font-medium text-foreground">I want to join as:</p>
          
          <div className="grid grid-cols-2 gap-3">
            <Link href="/auth/register" className="flex flex-col items-center p-4 border border-[oklch(0.70_0.15_50)]/30 rounded-[16px] hover:bg-[oklch(0.70_0.15_50)]/5 transition-colors group">
              <div className="w-12 h-12 bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] rounded-full mb-3 flex items-center justify-center">
                <span className="text-white text-lg font-bold">U</span>
              </div>
              <span className="text-sm font-medium text-[oklch(0.70_0.15_50)] group-hover:text-[oklch(0.65_0.15_130)]">User</span>
              <span className="text-xs text-muted-foreground text-center mt-1">Access wellness programs</span>
            </Link>
            
            <Link href="/auth/coach-register" className="flex flex-col items-center p-4 border border-[oklch(0.65_0.15_130)]/30 rounded-[16px] hover:bg-[oklch(0.65_0.15_130)]/5 transition-colors group">
              <div className="w-12 h-12 bg-[oklch(0.65_0.15_130)] rounded-full mb-3 flex items-center justify-center">
                <span className="text-white text-lg font-bold">C</span>
              </div>
              <span className="text-sm font-medium text-[oklch(0.65_0.15_130)] group-hover:text-[oklch(0.70_0.15_50)]">Coach</span>
              <span className="text-xs text-muted-foreground text-center mt-1">Provide wellness coaching</span>
            </Link>
            
            <Link href="/auth/admin-register" className="flex flex-col items-center p-4 border border-red-500/30 rounded-[16px] hover:bg-red-500/5 transition-colors group">
              <div className="w-12 h-12 bg-red-500 rounded-full mb-3 flex items-center justify-center">
                <span className="text-white text-lg font-bold">A</span>
              </div>
              <span className="text-sm font-medium text-red-500 group-hover:text-red-600">Admin</span>
              <span className="text-xs text-muted-foreground text-center mt-1">Platform administration</span>
            </Link>
            
            <Link href="/auth/corporate-register" className="flex flex-col items-center p-4 border border-blue-500/30 rounded-[16px] hover:bg-blue-500/5 transition-colors group">
              <div className="w-12 h-12 bg-blue-500 rounded-full mb-3 flex items-center justify-center">
                <span className="text-white text-lg font-bold">B</span>
              </div>
              <span className="text-sm font-medium text-blue-500 group-hover:text-blue-600">Business</span>
              <span className="text-xs text-muted-foreground text-center mt-1">Corporate wellness</span>
            </Link>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.15_50)]/30 focus:border-[oklch(0.70_0.15_50)]"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.15_50)]/30 focus:border-[oklch(0.70_0.15_50)]"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.15_50)]/30 focus:border-[oklch(0.70_0.15_50)]"
                placeholder="Create a password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] text-white py-3 px-4 rounded-[16px] hover:opacity-90 transition-opacity font-medium"
          >
            Create Account
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleSSOLogin('google')}
            className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-[16px] hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="ml-2 text-sm font-medium">Google</span>
          </button>
          
          <button
            onClick={() => handleSSOLogin('microsoft')}
            className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-[16px] hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#f25022" d="M1 1h10v10H1z"/>
              <path fill="#00a4ef" d="M13 1h10v10H13z"/>
              <path fill="#7fba00" d="M1 13h10v10H1z"/>
              <path fill="#ffb900" d="M13 13h10v10H13z"/>
            </svg>
            <span className="ml-2 text-sm font-medium">Microsoft</span>
          </button>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-[oklch(0.70_0.15_50)] hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}