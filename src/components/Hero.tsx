'use client'

import { EnrollModal } from './EnrollModal'

export function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-primary-50 to-white dark:from-slate-900 dark:to-slate-950 flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white">
              Next Generation{' '}
              <span className="gradient-text">PCM Coaching</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Master Physics, Chemistry & Mathematics with interactive lessons, live classes, and personalized mentoring. Designed for CBSE boards and competitive exams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <EnrollModal />
              <button className="btn-secondary">Watch Demo</button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Active Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Expert Teachers</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-[500px] animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 dark:from-primary-900/30 dark:to-accent-900/30 rounded-2xl blur-3xl"></div>
            <div className="relative h-full bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/50 dark:to-accent-900/50 rounded-2xl flex items-center justify-center border border-primary-200 dark:border-primary-800">
              <div className="text-8xl">📚</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
