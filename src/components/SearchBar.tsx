'use client'

import { useState } from 'react'

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])

  const courses = [
    { class: '9', subject: 'Physics', topic: 'Motion in Straight Line', rating: 4.8 },
    { class: '9', subject: 'Chemistry', topic: 'Atoms and Molecules', rating: 4.7 },
    { class: '10', subject: 'Mathematics', topic: 'Real Numbers', rating: 4.9 },
    { class: '11', subject: 'Physics', topic: 'Kinematics', rating: 4.8 },
    { class: '12', subject: 'Chemistry', topic: 'Organic Chemistry', rating: 4.9 },
    { class: '12', subject: 'Mathematics', topic: 'Integrals', rating: 4.8 },
  ]

  const handleSearch = (value: string) => {
    setQuery(value)
    if (value.trim()) {
      const filtered = courses.filter(course =>
        course.topic.toLowerCase().includes(value.toLowerCase()) ||
        course.subject.toLowerCase().includes(value.toLowerCase()) ||
        course.class.includes(value)
      )
      setResults(filtered)
    } else {
      setResults([])
    }
  }

  return (
    <div className="relative">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search courses, topics, class..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-800 focus:outline-none focus:border-primary-500"
        />
        <button className="px-6 py-3 btn-primary">🔍</button>
      </div>

      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 glass-effect rounded-lg p-4 max-h-96 overflow-y-auto z-10">
          {results.map((course, index) => (
            <div
              key={index}
              className="p-3 hover:bg-slate-100 dark:hover:bg-slate-700 rounded cursor-pointer transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {course.topic}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Class {course.class} • {course.subject}
                  </p>
                </div>
                <span className="text-yellow-500">★ {course.rating}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
