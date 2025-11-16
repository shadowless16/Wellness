'use client'

import { useState } from 'react'
import { CheckCircle, XCircle, Eye, Download, Clock, User } from 'lucide-react'

interface PendingCoach {
  id: number
  name: string
  email: string
  phone: string
  specialization: string
  experience: string
  bio: string
  submittedAt: string
  status: 'pending' | 'approved' | 'rejected'
  credentials: string
  photo: string
}

const pendingCoaches: PendingCoach[] = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    email: 'sarah.chen@email.com',
    phone: '+234 801 234 5678',
    specialization: 'Cognitive Behavioral Therapy',
    experience: '8-15 years',
    bio: 'Licensed clinical psychologist specializing in CBT for anxiety and depression. PhD from University of Lagos, with extensive experience in both individual and group therapy settings.',
    submittedAt: '2 hours ago',
    status: 'pending',
    credentials: 'credentials_sarah_chen.pdf',
    photo: 'photo_sarah_chen.jpg'
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    email: 'marcus.j@email.com',
    phone: '+234 802 345 6789',
    specialization: 'Leadership Coaching',
    experience: '4-7 years',
    bio: 'Certified executive coach with MBA and coaching certification. Specializes in leadership development and career transitions for professionals.',
    submittedAt: '1 day ago',
    status: 'pending',
    credentials: 'credentials_marcus_johnson.pdf',
    photo: 'photo_marcus_johnson.jpg'
  }
]

export default function AdminCoachesPage() {
  const [coaches, setCoaches] = useState(pendingCoaches)
  const [selectedCoach, setSelectedCoach] = useState<PendingCoach | null>(null)

  const handleApprove = (coachId: number) => {
    setCoaches(prev => prev.map(coach => 
      coach.id === coachId ? { ...coach, status: 'approved' } : coach
    ))
    setSelectedCoach(null)
  }

  const handleReject = (coachId: number) => {
    setCoaches(prev => prev.map(coach => 
      coach.id === coachId ? { ...coach, status: 'rejected' } : coach
    ))
    setSelectedCoach(null)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] bg-clip-text text-transparent mb-2">
          Coach Verification
        </h1>
        <p className="text-muted-foreground">Review and approve coach applications</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-[24px] shadow-lg border border-[oklch(0.70_0.15_50)]/20">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-foreground">Pending Applications</h2>
              <p className="text-sm text-muted-foreground">{coaches.filter(c => c.status === 'pending').length} applications awaiting review</p>
            </div>

            <div className="divide-y divide-gray-100">
              {coaches.map((coach) => (
                <div 
                  key={coach.id}
                  className={`p-6 cursor-pointer transition-colors ${
                    selectedCoach?.id === coach.id ? 'bg-[oklch(0.70_0.15_50)]/5' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedCoach(coach)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[oklch(0.70_0.15_50)]/20 to-[oklch(0.65_0.15_130)]/10 flex items-center justify-center">
                        <User className="w-6 h-6 text-[oklch(0.70_0.15_50)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{coach.name}</h3>
                        <p className="text-sm text-muted-foreground">{coach.specialization}</p>
                        <p className="text-sm text-muted-foreground">{coach.experience} experience</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        coach.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        coach.status === 'approved' ? 'bg-green-100 text-green-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {coach.status === 'pending' && <Clock className="w-3 h-3" />}
                        {coach.status === 'approved' && <CheckCircle className="w-3 h-3" />}
                        {coach.status === 'rejected' && <XCircle className="w-3 h-3" />}
                        {coach.status.charAt(0).toUpperCase() + coach.status.slice(1)}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{coach.submittedAt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          {selectedCoach ? (
            <div className="bg-white rounded-[24px] shadow-lg border border-[oklch(0.70_0.15_50)]/20 p-6 sticky top-8">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{selectedCoach.name}</h3>
                <p className="text-sm text-muted-foreground">{selectedCoach.email}</p>
                <p className="text-sm text-muted-foreground">{selectedCoach.phone}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-medium text-foreground mb-1">Specialization</h4>
                  <p className="text-sm text-muted-foreground">{selectedCoach.specialization}</p>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-1">Experience</h4>
                  <p className="text-sm text-muted-foreground">{selectedCoach.experience}</p>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-1">Bio</h4>
                  <p className="text-sm text-muted-foreground">{selectedCoach.bio}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <button className="w-full flex items-center gap-2 p-3 bg-[oklch(0.70_0.15_50)]/10 text-[oklch(0.70_0.15_50)] rounded-[12px] hover:bg-[oklch(0.70_0.15_50)]/20 transition-colors">
                  <Eye className="w-4 h-4" />
                  View Photo
                </button>
                
                <button className="w-full flex items-center gap-2 p-3 bg-[oklch(0.65_0.15_130)]/10 text-[oklch(0.65_0.15_130)] rounded-[12px] hover:bg-[oklch(0.65_0.15_130)]/20 transition-colors">
                  <Download className="w-4 h-4" />
                  Download Credentials
                </button>
              </div>

              {selectedCoach.status === 'pending' && (
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleReject(selectedCoach.id)}
                    className="flex-1 px-4 py-2 bg-red-100 text-red-700 rounded-[12px] hover:bg-red-200 transition-colors font-medium"
                  >
                    Reject
                  </button>
                  <button 
                    onClick={() => handleApprove(selectedCoach.id)}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-[oklch(0.70_0.15_50)] to-[oklch(0.65_0.15_130)] text-white rounded-[12px] hover:opacity-90 transition-opacity font-medium"
                  >
                    Approve
                  </button>
                </div>
              )}

              {selectedCoach.status === 'approved' && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-[12px] text-center">
                  <p className="text-sm text-green-700 font-medium">✓ Coach Approved</p>
                  <p className="text-xs text-green-600">Account activated and coach notified</p>
                </div>
              )}

              {selectedCoach.status === 'rejected' && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-[12px] text-center">
                  <p className="text-sm text-red-700 font-medium">✗ Application Rejected</p>
                  <p className="text-xs text-red-600">Coach has been notified</p>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-[24px] shadow-lg border border-[oklch(0.70_0.15_50)]/20 p-8 text-center">
              <User className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Select a coach to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}