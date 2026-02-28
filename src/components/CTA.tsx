'use client'

export function CTA() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-accent-500 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
          Ready to Transform Your Grades?
        </h2>
        <p className="text-xl opacity-90 mb-8">
          Join 500+ students who've achieved their dream scores with personalized guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors">
            Start Free Trial (7 Days)
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
            Schedule Demo Class
          </button>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/30">
          <div>
            <div className="text-3xl mb-2">📱</div>
            <div className="text-sm opacity-75">WhatsApp</div>
            <a href="tel:+919876543210" className="font-semibold hover:opacity-75 transition">
              +91 98765 43210
            </a>
          </div>
          <div>
            <div className="text-3xl mb-2">📧</div>
            <div className="text-sm opacity-75">Email</div>
            <a
              href="mailto:hello@nirupams.com"
              className="font-semibold hover:opacity-75 transition break-all"
            >
              hello@nirupams.com
            </a>
          </div>
          <div>
            <div className="text-3xl mb-2">📍</div>
            <div className="text-sm opacity-75">Location</div>
            <p className="font-semibold">Delhi, India</p>
          </div>
        </div>
      </div>
    </section>
  )
}
