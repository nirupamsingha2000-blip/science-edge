'use client'

import { useState } from 'react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Do you offer free trial classes?',
      answer: 'Yes! We offer a 7-day free trial for all new students. No credit card required. Join any live class during this period.'
    },
    {
      question: 'What is the duration of courses?',
      answer: 'Courses are self-paced with lifetime access. Live classes are held 3-4 times per week depending on your class.'
    },
    {
      question: 'Can I get a refund if not satisfied?',
      answer: '100% money-back guarantee within 14 days if you\'re not satisfied. No questions asked.'
    },
    {
      question: 'Do you provide offline classes?',
      answer: 'Currently we offer online classes only, but we\'re expanding to offline centers in major cities.'
    },
    {
      question: 'How many students can join a live class?',
      answer: 'We keep class sizes small (20-30 students) to ensure personalized attention and doubt clearing.'
    },
    {
      question: 'What if I miss a live class?',
      answer: 'All live classes are recorded and available in your course materials. You can watch anytime within 24 hours.'
    },
    {
      question: 'How are doubt clearing sessions conducted?',
      answer: 'Through live chat, email, and scheduled 1-on-1 sessions. Teachers respond within 4-6 hours.'
    },
    {
      question: 'Is there any age restriction?',
      answer: 'Courses are designed for Classes 9-12 (ages 14-18). We also offer courses for competitive exam prep.'
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-slate-900 dark:text-white">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Can't find your answer? Contact us at hello@nirupams.com
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                <span className="font-semibold text-slate-900 dark:text-white">
                  {faq.question}
                </span>
                <span className={`text-2xl transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 glass-effect p-8 rounded-xl text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Still have questions?
          </p>
          <button className="btn-primary">Chat with our team</button>
        </div>
      </div>
    </section>
  )
}
