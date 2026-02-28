'use client'

import { useState } from 'react'

export default function Dashboard() {
  const [user] = useState({
    name: 'Arjun Kumar',
    class: 'Class 12',
    email: 'arjun@example.com',
    joinedDate: 'Jan 15, 2026',
  })

  const enrolledCourses = [
    { name: 'Physics - Class 12', progress: 75, chapters: '12/16' },
    { name: 'Chemistry - Class 12', progress: 60, chapters: '10/16' },
    { name: 'Mathematics - Class 12', progress: 85, chapters: '14/16' },
  ]

  const upcomingClasses = [
    { subject: 'Physics', date: 'Mar 5, 2026', time: '7:00 PM', teacher: 'Dr. Sharma' },
    { subject: 'Chemistry', date: 'Mar 6, 2026', time: '7:00 PM', teacher: 'Prof. Gupta' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="glass-effect p-8 rounded-xl mb-8 gradient-text">
          <h1 className="font-display font-bold text-4xl mb-2">
            Welcome back, {user.name}! 👋
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            You're enrolled in 3 courses. Keep learning!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Stats */}
          {[
            { label: 'Courses Enrolled', value: '3', icon: '📚' },
            { label: 'Learning Streak', value: '12 days', icon: '🔥' },
            { label: 'Certificates Earned', value: '2', icon: '🏆' },
          ].map((stat, i) => (
            <div key={i} className="glass-effect p-6 rounded-xl text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">
                {stat.label}
              </p>
              <p className="font-display font-bold text-3xl text-slate-900 dark:text-white">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Enrolled Courses */}
          <div className="md:col-span-2">
            <h2 className="font-display font-bold text-2xl mb-6 text-slate-900 dark:text-white">
              Your Courses
            </h2>
            <div className="space-y-4">
              {enrolledCourses.map((course, i) => (
                <div key={i} className="glass-effect p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
                      {course.name}
                    </h3>
                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-3">
                    <div
                      className="bg-gradient-to-r from-primary-600 to-accent-500 h-2 rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    {course.chapters} chapters completed
                  </p>
                  <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 font-semibold text-sm">
                    Continue Learning →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Classes */}
          <div>
            <h2 className="font-display font-bold text-2xl mb-6 text-slate-900 dark:text-white">
              Upcoming Classes
            </h2>
            <div className="space-y-4">
              {upcomingClasses.map((cls, i) => (
                <div key={i} className="glass-effect p-4 rounded-xl">
                  <p className="font-semibold text-slate-900 dark:text-white mb-2">
                    {cls.subject}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    📅 {cls.date}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    🕖 {cls.time}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    👨‍🏫 {cls.teacher}
                  </p>
                  <button className="btn-primary w-full text-sm">Join Class</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
