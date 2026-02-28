'use client'

export function Teachers() {
  const teachers = [
    {
      name: 'Dr. Rajesh Sharma',
      subject: 'Physics',
      experience: '15+ years',
      qualification: 'PhD IIT Bombay',
      students: '500+',
      rating: 4.9,
      bio: 'Expert in classical mechanics and modern physics. Specializes in JEE preparation.',
      icon: '👨‍🏫',
    },
    {
      name: 'Prof. Priya Gupta',
      subject: 'Chemistry',
      experience: '12+ years',
      qualification: 'MSc Delhi University',
      students: '450+',
      rating: 4.8,
      bio: 'Organic chemistry expert. Helped 200+ students crack NEET.',
      icon: '👩‍🏫',
    },
    {
      name: 'Mr. Vikram Verma',
      subject: 'Mathematics',
      experience: '10+ years',
      qualification: 'BTech IIT Delhi',
      students: '520+',
      rating: 4.9,
      bio: 'Master problem-solver. Makes calculus easy and fun.',
      icon: '👨‍🏫',
    },
    {
      name: 'Dr. Ananya Singh',
      subject: 'All Subjects',
      experience: '18+ years',
      qualification: 'PhD Physics',
      students: '800+',
      rating: 4.9,
      bio: 'Head of faculty. Mentors new teachers and coordinates curriculum.',
      icon: '👩‍🏫',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-slate-900 dark:text-white">
            Meet Our <span className="gradient-text">Expert Teachers</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Experienced educators with proven track records of student success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-xl card-hover text-center group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                {teacher.icon}
              </div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-1">
                {teacher.name}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-3">
                {teacher.subject}
              </p>
              <div className="text-2xl mb-3">
                {'⭐'.repeat(Math.floor(teacher.rating))}
                <span className="text-sm text-slate-600 dark:text-slate-400 ml-2">
                  {teacher.rating}
                </span>
              </div>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 mb-4">
                <li>📚 {teacher.experience}</li>
                <li>🎓 {teacher.qualification}</li>
                <li>👥 {teacher.students} students taught</li>
              </ul>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                {teacher.bio}
              </p>
              <button className="w-full py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-semibold hover:bg-primary-200 dark:hover:bg-primary-900/50 transition">
                View Profile
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-effect p-12 rounded-2xl text-center">
          <h3 className="font-display font-bold text-2xl mb-4 text-slate-900 dark:text-white">
            Want to teach with us?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate educators. Share your expertise and impact thousands of students.
          </p>
          <button className="btn-primary">Apply as Teacher</button>
        </div>
      </div>
    </section>
  )
}
