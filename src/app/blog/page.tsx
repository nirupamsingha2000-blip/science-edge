export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: 'How to Score 95+ in Physics Boards',
      excerpt: 'Master these key concepts and you\'ll ace your board exams.',
      content: 'Full article content here...',
      author: 'Dr. Sharma',
      date: 'Feb 28, 2026',
      category: 'Study Tips',
      readTime: '5 min',
    },
    {
      id: 2,
      title: 'JEE Advanced Paper Analysis 2025',
      excerpt: 'Deep dive into question patterns from recent exams.',
      content: 'Full article content here...',
      author: 'Prof. Gupta',
      date: 'Feb 25, 2026',
      category: 'Exam Prep',
      readTime: '8 min',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-5xl mb-4 text-slate-900 dark:text-white">
            Learning <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Expert tips and comprehensive study guides
          </p>
        </div>

        <div className="space-y-8">
          {articles.map((article) => (
            <div key={article.id} className="glass-effect rounded-xl overflow-hidden card-hover cursor-pointer">
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    {article.readTime} read
                  </span>
                </div>
                <h2 className="font-display font-bold text-3xl mb-3 text-slate-900 dark:text-white hover:text-primary-600 transition">
                  {article.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-6">
                  {article.excerpt}
                </p>
                <div className="flex justify-between items-center pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    <p className="font-medium">{article.author}</p>
                    <p>{article.date}</p>
                  </div>
                  <button className="btn-primary">Read Full Article</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
