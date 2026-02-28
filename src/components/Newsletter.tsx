'use client'

import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitted(true)
    setEmail('')
    setLoading(false)

    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-accent-500 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
          Stay Updated 📧
        </h2>
        <p className="text-lg opacity-90 mb-8">
          Get exclusive tips, free resources, and updates about new courses delivered to your inbox.
        </p>

        {submitted ? (
          <div className="p-4 bg-white/20 rounded-lg">
            <p className="text-white font-semibold">✓ Thanks! Check your email for a surprise offer.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-slate-100 transition disabled:opacity-50"
            >
              {loading ? '...' : 'Subscribe'}
            </button>
          </form>
        )}

        <p className="text-sm opacity-75 mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
