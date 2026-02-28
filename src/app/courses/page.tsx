export default function CoursesPage() {
  const classes = [
    { level: 'Class 9', icon: '🔬' },
    { level: 'Class 10', icon: '⚗️' },
    { level: 'Class 11', icon: '🧪' },
    { level: 'Class 12', icon: '🔭' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-5xl mb-4 text-slate-900 dark:text-white">
            Explore All <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Choose your class and start learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {classes.map((course) => (
            <div
              key={course.level}
              className="glass-effect p-8 rounded-xl card-hover cursor-pointer text-center"
            >
              <div className="text-6xl mb-4">{course.icon}</div>
              <h2 className="font-display font-bold text-2xl mb-4 text-slate-900 dark:text-white">
                {course.level}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                3 Subjects • 48+ Videos • Complete Coverage
              </p>
              <button className="btn-primary w-full">Explore Courses</button>
            </div>
          ))}
        </div>

        {/* Featured Courses */}
        <div className="mt-16">
          <h2 className="font-display font-bold text-3xl mb-8 text-slate-900 dark:text-white">
            Popular This Week
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Kinematics (Class 11)', students: '250+', rating: 4.9 },
              { name: 'Organic Chemistry (Class 12)', students: '320+', rating: 4.8 },
              { name: 'Integrals (Class 12)', students: '280+', rating: 4.9 },
            ].map((course) => (
              <div
                key={course.name}
                className="glass-effect rounded-xl overflow-hidden card-hover"
              >
                <div className="h-40 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30"></div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                    {course.name}
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {course.students} students
                    </span>
                    <span className="text-yellow-500">★ {course.rating}</span>
                  </div>
                  <button className="btn-primary w-full text-sm">Enroll Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
