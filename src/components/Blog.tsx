'use client'

export function Blog() {
  const posts = [
    {
      title: 'How to Score 95+ in Physics Boards',
      excerpt: 'Learn proven strategies used by top scorers. Focus on these 5 key topics for maximum marks.',
      date: 'Feb 28, 2026',
      author: 'Dr. Sharma',
      category: 'Study Tips',
      readTime: '5 min read',
      image: '📚',
    },
    {
      title: 'JEE Advanced Previous Year Paper Analysis',
      excerpt: 'Understand question patterns and difficulty levels from the last 5 years of JEE exams.',
      date: 'Feb 25, 2026',
      author: 'Prof. Gupta',
      category: 'Exam Prep',
      readTime: '8 min read',
      image: '📝',
    },
    {
      title: 'Time Management Tips for Board Exams',
      excerpt: 'Create an effective study schedule that balances all 3 subjects without burnout.',
      date: 'Feb 22, 2026',
      author: 'Mr. Verma',
      category: 'Exam Strategy',
      readTime: '6 min read',
      image: '⏰',
    },
    {
      title: 'Understanding Organic Chemistry Reactions',
      excerpt: 'Master reaction mechanisms with visual explanations. Organic chemistry made simple.',
      date: 'Feb 20, 2026',
      author: 'Dr. Singh',
      category: 'Chemistry',
      readTime: '10 min read',
      image: '⚗️',
    },
  ]

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-slate-900 dark:text-white">
            Learning <span className="gradient-text">Resources</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Expert tips, study guides, and exam preparation strategies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl overflow-hidden card-hover group cursor-pointer"
            >
              <div className="h-40 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform">
                {post.image}
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 transition">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    <p className="font-medium">{post.author}</p>
                    <p>{post.date}</p>
                  </div>
                  <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 font-semibold text-sm">
                    Read →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="btn-primary">View All Articles</button>
        </div>
      </div>
    </section>
  )
}
