'use client'

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg"></div>
              <span className="font-bold text-white">Nirupam's Coaching</span>
            </div>
            <p className="text-sm">Next-generation PCM coaching for Classes 9-12.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Courses</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Class 9</a></li>
              <li><a href="#" className="hover:text-white transition">Class 10</a></li>
              <li><a href="#" className="hover:text-white transition">Class 11</a></li>
              <li><a href="#" className="hover:text-white transition">Class 12</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Notes</a></li>
              <li><a href="#" className="hover:text-white transition">Mock Tests</a></li>
              <li><a href="#" className="hover:text-white transition">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:scale-125 transition">👍</a>
              <a href="#" className="text-2xl hover:scale-125 transition">🐦</a>
              <a href="#" className="text-2xl hover:scale-125 transition">📷</a>
              <a href="#" className="text-2xl hover:scale-125 transition">▶️</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2026 Nirupam's Coaching. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
