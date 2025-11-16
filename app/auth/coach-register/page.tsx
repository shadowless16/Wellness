'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Upload, User, Mail, Lock, FileText, Award, Camera } from 'lucide-react'
import Link from 'next/link'

export default function CoachRegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    specialization: '',
    experience: '',
    bio: '',
    credentials: null as File | null,
    photo: null as File | null
  })
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      // Submit for verification
      router.push('/auth/coach-verification-pending')
    }
  }

  const canProceed = () => {
    if (currentStep === 1) {
      return formData.name && formData.email && formData.password && formData.phone
    } else if (currentStep === 2) {
      return formData.specialization && formData.experience && formData.bio
    } else {
      return formData.credentials && formData.photo
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige/20 to-[oklch(0.70_0.15_50)]/5 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Step {currentStep} of 3</span>
            <span className="text-sm text-muted-foreground">Coach Registration</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-[32px] p-8 shadow-lg border border-[oklch(0.70_0.15_50)]/20">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] bg-clip-text text-transparent mb-2">
              {currentStep === 1 && 'Join as a Coach'}
              {currentStep === 2 && 'Professional Details'}
              {currentStep === 3 && 'Verification Documents'}
            </h1>
            <p className="text-muted-foreground">
              {currentStep === 1 && 'Create your coach account'}
              {currentStep === 2 && 'Tell us about your expertise'}
              {currentStep === 3 && 'Upload credentials for verification'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {currentStep === 1 && (
              <>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.15_50)]/30 focus:border-[oklch(0.70_0.15_50)]"
                        placeholder="Dr. Sarah Chen"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.15_50)]/30 focus:border-[oklch(0.70_0.15_50)]"
                      placeholder="+234 801 234 5678"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.15_50)]/30 focus:border-[oklch(0.70_0.15_50)]"
                      placeholder="sarah@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.15_50)]/30 focus:border-[oklch(0.70_0.15_50)]"
                      placeholder="Create a secure password"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-muted-foreground">Or continue with</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <button type="button" className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-[16px] hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-sm font-medium">Google</span>
                  </button>
                  
                  <button type="button" className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-[16px] hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#F25022" d="M1 1h10v10H1z"/>
                      <path fill="#00A4EF" d="M13 1h10v10H13z"/>
                      <path fill="#7FBA00" d="M1 13h10v10H1z"/>
                      <path fill="#FFB900" d="M13 13h10v10H13z"/>
                    </svg>
                    <span className="text-sm font-medium">Microsoft</span>
                  </button>
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Specialization</label>
                    <select
                      value={formData.specialization}
                      onChange={(e) => setFormData({...formData, specialization: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.15_50)]/30 focus:border-[oklch(0.70_0.15_50)]"
                      required
                    >
                      <option value="">Select specialization</option>
                      <option value="cbt">Cognitive Behavioral Therapy</option>
                      <option value="anxiety">Anxiety & Stress Management</option>
                      <option value="trauma">Trauma Recovery</option>
                      <option value="relationships">Relationship Counseling</option>
                      <option value="leadership">Leadership Coaching</option>
                      <option value="mindfulness">Mindfulness & Meditation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Years of Experience</label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.15_50)]/30 focus:border-[oklch(0.70_0.15_50)]"
                      required
                    >
                      <option value="">Select experience</option>
                      <option value="1-3">1-3 years</option>
                      <option value="4-7">4-7 years</option>
                      <option value="8-15">8-15 years</option>
                      <option value="15+">15+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Professional Bio</label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                    className="w-full h-32 p-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[oklch(0.70_0.15_50)]/30 focus:border-[oklch(0.70_0.15_50)] resize-none"
                    placeholder="Tell us about your background, approach, and what makes you passionate about helping others..."
                    required
                  />
                </div>
              </>
            )}

            {currentStep === 3 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Professional Photo</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-[16px] p-6 text-center hover:border-[oklch(0.70_0.15_50)]/50 transition-colors">
                    <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">Upload a professional headshot</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setFormData({...formData, photo: e.target.files?.[0] || null})}
                      className="hidden"
                      id="photo-upload"
                    />
                    <label
                      htmlFor="photo-upload"
                      className="inline-block px-4 py-2 bg-[oklch(0.70_0.15_50)]/10 text-[oklch(0.70_0.15_50)] rounded-[12px] hover:bg-[oklch(0.70_0.15_50)]/20 transition-colors cursor-pointer"
                    >
                      Choose Photo
                    </label>
                    {formData.photo && (
                      <p className="text-sm text-green-600 mt-2">✓ {formData.photo.name}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Credentials & Certificates</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-[16px] p-6 text-center hover:border-[oklch(0.70_0.15_50)]/50 transition-colors">
                    <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">Upload licenses, certifications, degrees (PDF format)</p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setFormData({...formData, credentials: e.target.files?.[0] || null})}
                      className="hidden"
                      id="credentials-upload"
                    />
                    <label
                      htmlFor="credentials-upload"
                      className="inline-block px-4 py-2 bg-[oklch(0.70_0.15_50)]/10 text-[oklch(0.70_0.15_50)] rounded-[12px] hover:bg-[oklch(0.70_0.15_50)]/20 transition-colors cursor-pointer"
                    >
                      Upload Documents
                    </label>
                    {formData.credentials && (
                      <p className="text-sm text-green-600 mt-2">✓ {formData.credentials.name}</p>
                    )}
                  </div>
                </div>
              </>
            )}

            <div className="flex justify-between items-center pt-6">
              <button
                type="button"
                onClick={() => currentStep > 1 ? setCurrentStep(currentStep - 1) : router.push('/auth/login')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {currentStep > 1 ? 'Back' : 'Sign In Instead'}
              </button>

              <button
                type="submit"
                disabled={!canProceed()}
                className={`px-6 py-3 rounded-[16px] font-medium transition-all ${
                  canProceed()
                    ? 'bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] text-white hover:opacity-90'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {currentStep === 3 ? 'Submit for Verification' : 'Continue'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}