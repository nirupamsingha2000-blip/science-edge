'use client'

import { useState } from 'react'

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      name: 'Arjun Kumar',
      class: 'Class 12',
      score: '98%',
      text: 'The teaching methodology is excellent. I scored 98% in physics and got into IIT Bombay!',
      avatar: '👨‍🎓',
    },
    {
      name: 'Priya Sharma',
      class: 'Class 11',
      score: '96%',
      text: 'Interactive classes and doubt clearing made chemistry so easy. Highly recommended!',
      avatar: '👩‍🎓',
    },
    {
      name: 'Rohan Singh',
      class: 'Class 10',
      score: '94%',
      text: 'Got 94% in board exams. The notes and assignments were super helpful.',
      avatar: '👨‍🎓',
    },
  ]

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-slate-900 dark:text-white">
            Success Stories from <span className="gradient-text">Real Students</span>
          </h2>
        </div>

        <div className="relative glass-effect p-8 md:p-12 rounded-2xl max-w-3xl mx-auto">
          <div className="text-5xl mb-6">⭐⭐⭐⭐⭐</div>
          <p className="text-xl text-slate-700 dark:text-slate-200 mb-8 italic">
            "{testimonials[current].text}"
          </p>
          <div className="flex items-center gap-4 mb-8">
            <div className="text-5xl">{testimonials[current].avatar}</div>
            <div>
              <h4 className="font-semibold text-lg text-slate-900 dark:text-white">
                {testimonials[current].name}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {testimonials[current].class} • Scored {testimonials[current].score}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 pt-8 border-t border-slate-200 dark:border-slate-700">
            <button
              onClick={prev}
              className="p-2 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 transition"
              aria-label="Previous testimonial"
            >
              ← Prev
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition ${
                    i === current ? 'bg-primary-600' : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                ></button>
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 transition"
              aria-label="Next testimonial"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
