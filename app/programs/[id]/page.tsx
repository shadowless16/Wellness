'use client'

import { ArrowLeft, Clock, Users, CheckCircle2, BookOpen, Award } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/wellness/navbar'
import { useState } from 'react'

const programsData: { [key: string]: any } = {
  '1': {
    id: 1,
    title: 'Mindfulness for Beginners',
    icon: '🧘',
    description: 'Learn foundational meditation techniques to start your wellness journey with gentle, guided sessions.',
    duration: '4 weeks',
    level: 'Beginner',
    participants: 2314,
    enrolled: false,
    lessons: [
      { week: 1, title: 'What is Mindfulness?', duration: '25 min', completed: false },
      { week: 1, title: 'Your First Meditation', duration: '10 min', completed: false },
      { week: 2, title: 'Building a Practice', duration: '20 min', completed: false },
      { week: 2, title: 'Mindful Living', duration: '30 min', completed: false },
    ],
    instructor: 'Dr. Sarah Chen',
    instructorBio: 'Mindfulness expert with 15+ years of teaching experience',
    color: 'from-warm-teal/30 to-warm-teal/10'
  },
  '2': {
    id: 2,
    title: 'Stress Relief Intensive',
    icon: '☁️',
    description: 'Deep breathing and progressive relaxation designed to melt away tension and restore calm.',
    duration: '8 weeks',
    level: 'Intermediate',
    participants: 1847,
    enrolled: false,
    lessons: [
      { week: 1, title: 'Understanding Stress', duration: '25 min', completed: false },
      { week: 1, title: 'Breathing Techniques', duration: '15 min', completed: false },
    ],
    instructor: 'James Mitchell',
    instructorBio: 'Stress management specialist and certified wellness coach',
    color: 'from-warm-yellow/30 to-warm-yellow/10'
  },
}

export default function ProgramDetailPage({ params }: { params: { id: string } }) {
  const program = programsData[params.id] || programsData['1']
  const [enrolled, setEnrolled] = useState(program.enrolled)

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-cream-light">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        {/* Header */}
        <Link href="/programs" className="flex items-center gap-2 text-warm-teal hover:opacity-75 transition-opacity">
          <ArrowLeft className="w-4 h-4" />
          Back to Programs
        </Link>

        {/* Program hero */}
        <div className={`p-12 rounded-[32px] bg-gradient-to-br ${program.color} border border-warm-beige/20 shadow-soft-lg space-y-6`}>
          <div className="flex justify-between items-start">
            <div>
              <div className="text-5xl mb-4">{program.icon}</div>
              <h1 className="text-3xl font-semibold text-foreground mb-2">{program.title}</h1>
              <p className="text-muted-foreground max-w-xl">{program.description}</p>
            </div>
            <span className="px-4 py-2 rounded-full bg-white/50 text-sm font-medium text-foreground">{program.level}</span>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              {program.duration}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              {program.participants.toLocaleString()} enrolled
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award className="w-4 h-4" />
              Certificate included
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => setEnrolled(!enrolled)}
            className={`w-full mt-6 px-6 py-4 rounded-[24px] font-medium transition-all ${
              enrolled
                ? 'bg-warm-teal/20 text-warm-teal'
                : 'bg-warm-teal text-white hover:opacity-90'
            }`}
          >
            {enrolled ? 'Already Enrolled' : 'Enroll Now'}
          </button>
        </div>

        {/* Instructor */}
        <div className="p-8 rounded-[28px] bg-white border border-warm-beige/20 shadow-soft">
          <p className="text-xs text-muted-foreground mb-2">PROGRAM INSTRUCTOR</p>
          <h3 className="text-lg font-semibold text-foreground">{program.instructor}</h3>
          <p className="text-sm text-muted-foreground mt-2">{program.instructorBio}</p>
        </div>

        {/* Lessons */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Curriculum</h2>
          <div className="space-y-3">
            {program.lessons.map((lesson: any, idx: number) => (
              <div key={idx} className="p-6 rounded-[24px] bg-white border border-warm-beige/20 shadow-soft hover:shadow-soft-lg transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">WEEK {lesson.week}</p>
                    <h4 className="text-foreground font-medium mt-1">{lesson.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {lesson.duration}
                    </p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}