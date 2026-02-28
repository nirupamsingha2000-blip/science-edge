'use client'

export function Features() {
  const features = [
    {
      icon: '🎓',
      title: 'Expert Teachers',
      description: 'Learn from India\'s top educators with 10+ years of experience in competitive exam preparation.',
    },
    {
      icon: '📺',
      title: 'Live Interactive Classes',
      description: 'Real-time classes with instant doubt clearing and interactive problem-solving sessions.',
    },
    {
      icon: '📱',
      title: 'Learn Anywhere',
      description: 'Access lectures, notes, and assignments on mobile, tablet, or desktop anytime.',
    },
    {
      icon: '🎯',
      title: 'Personalized Learning',
      description: 'Customized learning paths based on your level and goals - CBSE or competitive exams.',
    },
    {
      icon: '📊',
      title: 'Progress Analytics',
      description: 'Real-time performance tracking with detailed analytics to identify improvement areas.',
    },
    {
      icon: '🏆',
      title: 'Success Stories',
      description: '500+ students achieving top ranks in NEET, JEE, and board exams every year.',
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-slate-900 dark:text-white">
            Why Choose <span className="gradient-text">Nirupam's Coaching?</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We combine expert teaching, modern technology, and proven strategies to deliver results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-xl card-hover group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl mb-3 text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
