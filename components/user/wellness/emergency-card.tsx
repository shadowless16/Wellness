'use client'

import { AlertCircle } from 'lucide-react'

export default function EmergencyCard() {
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-warm-emergency/20 via-warm-emergency/10 to-transparent p-8 md:p-10 border border-warm-emergency/15 shadow-soft hover:shadow-soft-lg transition-shadow duration-300">
      {/* Decorative gradient orb */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-warm-emergency/20 to-transparent blur-3xl opacity-60" />
      
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex gap-4 items-start md:items-center flex-1">
          <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-warm-emergency/15 flex items-center justify-center">
            <AlertCircle className="w-6 h-6 text-warm-emergency" />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-medium text-foreground mb-1">
              Need immediate support?
            </h2>
            <p className="text-sm text-muted-foreground max-w-md">
              If you're in crisis or need urgent help, we're here for you. Speak with someone right now.
            </p>
          </div>
        </div>
        <button className="flex-shrink-0 px-6 py-3 rounded-full bg-warm-emergency text-white font-medium text-sm hover:bg-warm-emergency/90 transition-colors shadow-md hover:shadow-lg whitespace-nowrap">
          Get Help Now
        </button>
      </div>
    </div>
  )
}
