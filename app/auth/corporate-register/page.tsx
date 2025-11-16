'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Building, User, Mail, Lock, Users, FileText, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function CorporateRegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    password: '',
    phone: '',
    industry: '',
    employeeCount: '',
    address: '',
    businessLicense: null as File | null
  })
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      router.push('/corporate')
    }
  }

  const canProceed = () => {
    if (currentStep === 1) {
      return formData.companyName && formData.contactPerson && formData.email && formData.password
    } else if (currentStep === 2) {
      return formData.phone && formData.industry && formData.employeeCount && formData.address
    } else {
      return formData.businessLicense
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige/20 to-blue-500/10 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Step {currentStep} of 3</span>
            <span className="text-sm text-muted-foreground">Corporate Registration</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-[32px] p-8 shadow-lg border border-blue-500/20">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-blue-500 mb-2">
              {currentStep === 1 && 'Company Information'}
              {currentStep === 2 && 'Business Details'}
              {currentStep === 3 && 'Business Verification'}
            </h1>
            <p className="text-muted-foreground">
              {currentStep === 1 && 'Register your organization'}
              {currentStep === 2 && 'Tell us about your business'}
              {currentStep === 3 && 'Upload business verification documents'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {currentStep === 1 && (
              <>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                        placeholder="Acme Corporation"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Contact Person</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                        placeholder="Jane Doe"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Business Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                      placeholder="contact@company.com"
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
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
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
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                      placeholder="+234 801 234 5678"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Industry</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                      required
                    >
                      <option value="">Select industry</option>
                      <option value="technology">Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="education">Education</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="retail">Retail</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Employee Count</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <select
                      value={formData.employeeCount}
                      onChange={(e) => setFormData({...formData, employeeCount: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                      required
                    >
                      <option value="">Select employee count</option>
                      <option value="1-50">1-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Business Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <textarea
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 resize-none h-24"
                      placeholder="Enter your business address"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            {currentStep === 3 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Business License & Documents</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-[16px] p-6 text-center hover:border-blue-500/50 transition-colors">
                    <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">Upload business license, registration certificate, or tax documents</p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                      onChange={(e) => setFormData({...formData, businessLicense: e.target.files?.[0] || null})}
                      className="hidden"
                      id="license-upload"
                    />
                    <label
                      htmlFor="license-upload"
                      className="inline-block px-4 py-2 bg-blue-500/10 text-blue-500 rounded-[12px] hover:bg-blue-500/20 transition-colors cursor-pointer"
                    >
                      Upload Documents
                    </label>
                    {formData.businessLicense && (
                      <p className="text-sm text-green-600 mt-2">✓ {formData.businessLicense.name}</p>
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
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {currentStep === 3 ? 'Register Organization' : 'Continue'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}