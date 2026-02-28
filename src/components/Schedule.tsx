'use client'

export function Schedule() {
  const schedule = [
    { day: 'Monday', class: '7:00 PM - Physics', teacher: 'Dr. Sharma', students: '45' },
    { day: 'Tuesday', class: '7:00 PM - Chemistry', teacher: 'Prof. Gupta', students: '38' },
    { day: 'Wednesday', class: '7:00 PM - Mathematics', teacher: 'Mr. Verma', students: '52' },
    { day: 'Thursday', class: '7:00 PM - Physics', teacher: 'Dr. Sharma', students: '48' },
    { day: 'Friday', class: '7:00 PM - Chemistry Lab', teacher: 'Prof. Gupta', students: '30' },
    { day: 'Saturday', class: '10:00 AM - Mock Test', teacher: 'All Teachers', students: '100+' },
  ]

  return (
    <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-slate-900 dark:text-white">
            Live Class <span className="gradient-text">Schedule</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Join interactive live classes every week. Doubt clearing included!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedule.map((session, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-xl card-hover group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
                    {session.day}
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mt-1">
                    🔴 {session.class}
                  </p>
                </div>
                <div className="text-2xl group-hover:scale-125 transition-transform">📺</div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-slate-600 dark:text-slate-400">
                  👨‍🏫 {session.teacher}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  👥 {session.students} students
                </p>
              </div>
              <button className="w-full mt-4 py-2 bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-lg text-sm font-semibold hover:bg-primary-200 dark:hover:bg-primary-900/50 transition">
                Join Live
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-effect p-8 rounded-xl text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            ⏰ Add all classes to your calendar automatically
          </p>
          <button className="btn-primary">Download iCal Calendar</button>
        </div>
      </div>
    </section>
  )
}
