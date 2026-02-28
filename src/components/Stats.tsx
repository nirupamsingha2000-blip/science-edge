'use client'

import { useState, useEffect } from 'react'

function CountUp({ target }: { target: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const increment = target / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 30)

    return () => clearInterval(timer)
  }, [target])

  return <>{count.toLocaleString()}</>
}

export function Stats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-accent-500 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold mb-2">
              <CountUp target={500} />+
            </div>
            <p className="text-lg opacity-90">Active Students</p>
            <p className="text-sm opacity-75 mt-2">Across all classes</p>
          </div>

          <div>
            <div className="text-5xl font-bold mb-2">
              <CountUp target={98} />%
            </div>
            <p className="text-lg opacity-90">Success Rate</p>
            <p className="text-sm opacity-75 mt-2">Board & competitive exams</p>
          </div>

          <div>
            <div className="text-5xl font-bold mb-2">
              <CountUp target={48} />+
            </div>
            <p className="text-lg opacity-90">Video Lectures</p>
            <p className="text-sm opacity-75 mt-2">High-quality content</p>
          </div>

          <div>
            <div className="text-5xl font-bold mb-2">
              <CountUp target={10} />+
            </div>
            <p className="text-lg opacity-90">Expert Teachers</p>
            <p className="text-sm opacity-75 mt-2">IIT & Medical graduates</p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 pt-16 border-t border-white/30">
          <div className="text-center">
            <div className="text-4xl mb-3">🏆</div>
            <h4 className="font-semibold text-lg mb-2">Top Ranks</h4>
            <p className="text-sm opacity-75">
              50+ students in top 100 in competitive exams
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎓</div>
            <h4 className="font-semibold text-lg mb-2">IIT & NEET Qualified</h4>
            <p className="text-sm opacity-75">
              100+ students qualified for premium colleges
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">⭐</div>
            <h4 className="font-semibold text-lg mb-2">4.9/5 Rating</h4>
            <p className="text-sm opacity-75">
              Based on 1000+ verified student reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
