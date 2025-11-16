'use client'

import { User, Bell, Lock, LogOut, Edit2 } from 'lucide-react'

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-cream-light">

      <div className="max-w-2xl mx-auto px-6 py-12 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold bg-gradient-to-r from-[oklch(0.65_0.15_130)] to-[oklch(0.70_0.15_50)] bg-clip-text text-transparent">Profile Settings</h1>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </div>

        {/* Profile section */}
        <div className="p-8 rounded-[28px] bg-white border border-warm-beige/20 shadow-soft space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[oklch(0.65_0.15_130)]/30 to-[oklch(0.70_0.15_50)]/10 flex items-center justify-center">
              <User className="w-8 h-8 text-[oklch(0.65_0.15_130)]" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-foreground">Alex Johnson</h2>
              <p className="text-sm text-muted-foreground">alex@wellness.app</p>
            </div>
            <button className="p-2 rounded-[16px] hover:bg-warm-beige/20 transition-colors">
              <Edit2 className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Settings sections */}
        <div className="space-y-4">
          {/* Notifications */}
          <div className="p-6 rounded-[24px] bg-white border border-warm-beige/20 shadow-soft hover:shadow-soft-lg transition-shadow cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-warm-teal/15 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-warm-teal" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Notifications</p>
                  <p className="text-sm text-muted-foreground">Manage alerts and reminders</p>
                </div>
              </div>
              <div className="text-muted-foreground text-lg">›</div>
            </div>
          </div>

          {/* Privacy & Security */}
          <div className="p-6 rounded-[24px] bg-white border border-warm-beige/20 shadow-soft hover:shadow-soft-lg transition-shadow cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-warm-yellow/15 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-warm-yellow" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Privacy & Security</p>
                  <p className="text-sm text-muted-foreground">Control your data and password</p>
                </div>
              </div>
              <div className="text-muted-foreground text-lg">›</div>
            </div>
          </div>

          {/* Logout */}
          <button className="w-full p-6 rounded-[24px] bg-gradient-to-br from-warm-emergency/20 to-warm-emergency/5 border border-warm-emergency/20 shadow-soft hover:shadow-soft-lg transition-shadow flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-warm-emergency/20 flex items-center justify-center">
                <LogOut className="w-5 h-5 text-warm-emergency" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground group-hover:text-warm-emergency transition-colors">
                  Logout
                </p>
                <p className="text-sm text-muted-foreground">Sign out of your account</p>
              </div>
            </div>
            <div className="text-muted-foreground text-lg">›</div>
          </button>
        </div>

        {/* Account deletion */}
        <div className="p-4 rounded-[20px] bg-warm-emergency/5 border border-warm-emergency/20">
          <p className="text-xs text-muted-foreground text-center">
            Want to delete your account? <span className="text-warm-emergency font-medium cursor-pointer hover:underline">Contact support</span>
          </p>
        </div>
      </div>
    </main>
  )
}
