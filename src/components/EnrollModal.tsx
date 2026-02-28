'use client'

import { useState } from 'react'

export function EnrollModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: 'Class 9',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    alert(`🎉 Welcome ${formData.name}! Check your email for next steps.`)
    setFormData({ name: '', email: '', phone: '', class: 'Class 9' })
    setIsOpen(false)
    setIsSubmitting(false)
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="btn-primary">
        Enroll Now
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="glass-effect rounded-2xl p-8 max-w-md w-full animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                Start Your Journey
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl hover:text-primary-600 transition"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-800 focus:outline-none focus:border-primary-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-800 focus:outline-none focus:border-primary-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-800 focus:outline-none focus:border-primary-500"
              />

              <select
                value={formData.class}
                onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-800 focus:outline-none focus:border-primary-500"
              >
                <option>Class 9</option>
                <option>Class 10</option>
                <option>Class 11</option>
                <option>Class 12</option>
              </select>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '⏳ Processing...' : '🚀 Start Free Trial'}
              </button>
            </form>

            <p className="text-center text-xs text-slate-600 dark:text-slate-400 mt-4">
              ✓ 7-day free trial. No credit card needed.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
