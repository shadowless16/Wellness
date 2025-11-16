'use client'

import { Clock, CheckCircle, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export default function CoachVerificationPendingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige/20 to-[oklch(0.70_0.15_50)]/5 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-[32px] p-8 shadow-lg border border-[oklch(0.70_0.15_50)]/20 text-center">
          <div className="mb-6">
            <Clock className="w-16 h-16 text-[oklch(0.70_0.15_50)] mx-auto mb-4" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] bg-clip-text text-transparent mb-2">
              Verification in Progress
            </h1>
            <p className="text-muted-foreground">Your coach application is being reviewed</p>
          </div>

          <div className="space-y-4 mb-8 text-left">
            <div className="flex items-start gap-3 p-4 bg-[oklch(0.70_0.15_50)]/5 rounded-[16px]">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Application Submitted</p>
                <p className="text-sm text-muted-foreground">Your documents have been received</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-[16px]">
              <div className="w-5 h-5 border-2 border-[oklch(0.70_0.15_50)] rounded-full mt-0.5 flex items-center justify-center">
                <div className="w-2 h-2 bg-[oklch(0.70_0.15_50)] rounded-full animate-pulse"></div>
              </div>
              <div>
                <p className="font-medium text-foreground">Admin Review</p>
                <p className="text-sm text-muted-foreground">Credentials being verified (1-3 business days)</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-[16px] opacity-50">
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full mt-0.5"></div>
              <div>
                <p className="font-medium text-foreground">Account Activation</p>
                <p className="text-sm text-muted-foreground">Access to coach dashboard</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="p-4 bg-blue-50 rounded-[16px] border border-blue-200">
              <h3 className="font-medium text-blue-900 mb-2">What happens next?</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Admin reviews your credentials</li>
                <li>• You'll receive email notification</li>
                <li>• Account activated within 1-3 days</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Questions about your application?
            </p>
            <div className="flex gap-2 justify-center">
              <a 
                href="mailto:support@winbox.com"
                className="flex items-center gap-2 px-4 py-2 bg-[oklch(0.70_0.15_50)]/10 text-[oklch(0.70_0.15_50)] rounded-[12px] hover:bg-[oklch(0.70_0.15_50)]/20 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                Email Support
              </a>
              <a 
                href="tel:+2348012345678"
                className="flex items-center gap-2 px-4 py-2 bg-[oklch(0.65_0.15_130)]/10 text-[oklch(0.65_0.15_130)] rounded-[12px] hover:bg-[oklch(0.65_0.15_130)]/20 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <Link 
              href="/auth/login"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Return to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}