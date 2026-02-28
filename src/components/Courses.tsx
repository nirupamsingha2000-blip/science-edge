'use client'

export function Courses() {
  const classes = [
    {
      level: 'Class 9',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      color: 'from-blue-500 to-blue-600',
      students: '120+',
    },
    {
      level: 'Class 10',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      color: 'from-purple-500 to-purple-600',
      students: '180+',
    },
    {
      level: 'Class 11',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      color: 'from-pink-500 to-pink-600',
      students: '150+',
    },
    {
      level: 'Class 12',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      color: 'from-orange-500 to-orange-600',
      students: '200+',
    },
  ]

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-slate-900 dark:text-white">
            Comprehensive <span className="gradient-text">Course Programs</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Complete coverage for Classes 9-12 with live classes, recorded lectures, and practice assignments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {classes.map((course, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${course.color} rounded-xl p-8 text-white card-hover shadow-lg`}
            >
              <h3 className="font-display font-bold text-2xl mb-4">{course.level}</h3>
              <div className="space-y-3 mb-6">
                {course.subjects.map((subject) => (
                  <div key={subject} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-white/30">
                <div className="text-sm opacity-90">{course.students} Students Enrolled</div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="glass-effect p-12 rounded-2xl">
          <h3 className="font-display font-bold text-2xl mb-8 text-center text-slate-900 dark:text-white">
            What's Included
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: '🎬', title: '48+ Chapter Videos', desc: 'High-quality recorded lectures' },
              { icon: '📝', title: 'Complete Notes', desc: 'Comprehensive study material' },
              { icon: '❓', title: 'Doubt Clearing', desc: 'Direct interaction with teachers' },
              { icon: '📋', title: 'Assignments', desc: '100+ practice problems per chapter' },
              { icon: '🧪', title: 'Mock Tests', desc: 'Regular tests with detailed solutions' },
              { icon: '🎯', title: 'Progress Tracking', desc: 'Real-time performance analytics' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
