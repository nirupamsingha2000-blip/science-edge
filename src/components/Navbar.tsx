'use client'

import { useState } from 'react'
import Link from 'next/link'
import { EnrollModal } from './EnrollModal'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">NC</span>
            </div>
            <span className="font-display font-bold text-lg gradient-text hidden sm:block">
              Nirupam
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-slate-600 dark:text-slate-300 hover:text-primary-600 transition"
            >
              Features
            </Link>
            <Link
              href="#courses"
              className="text-slate-600 dark:text-slate-300 hover:text-primary-600 transition"
            >
              Courses
            </Link>
            <Link
              href="#pricing"
              className="text-slate-600 dark:text-slate-300 hover:text-primary-600 transition"
            >
              Pricing
            </Link>
            <Link
              href="#schedule"
              className="text-slate-600 dark:text-slate-300 hover:text-primary-600 transition"
            >
              Schedule
            </Link>
            <Link
              href="#testimonials"
              className="text-slate-600 dark:text-slate-300 hover:text-primary-600 transition"
            >
              Stories
            </Link>
          </div>

          {/* CTA & Theme Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Toggle dark mode"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <div className="hidden sm:block">
              <EnrollModal />
            </div>
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-700 py-4 space-y-3 animate-fade-in-up">
            <Link
              href="#features"
              className="block text-slate-600 dark:text-slate-300 hover:text-primary-600"
            >
              Features
            </Link>
            <Link
              href="#courses"
              className="block text-slate-600 dark:text-slate-300 hover:text-primary-600"
            >
              Courses
            </Link>
            <Link
              href="#pricing"
              className="block text-slate-600 dark:text-slate-300 hover:text-primary-600"
            >
              Pricing
            </Link>
            <Link
              href="#schedule"
              className="block text-slate-600 dark:text-slate-300 hover:text-primary-600"
            >
              Schedule
            </Link>
            <div className="pt-2">
              <EnrollModal />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
