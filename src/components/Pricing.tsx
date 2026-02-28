'use client'

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '₹999',
      period: '/month',
      description: 'Perfect for getting started',
      features: [
        '✓ All recorded lectures',
        '✓ Study notes & PDFs',
        '✓ Monthly 2 live sessions',
        '✓ Mobile app access',
        '✗ Doubt clearing',
        '✗ Mock tests',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '₹2,999',
      period: '/month',
      description: 'Most popular for serious students',
      features: [
        '✓ All recorded lectures',
        '✓ Study notes & PDFs',
        '✓ Unlimited live sessions',
        '✓ Mobile app access',
        '✓ Daily doubt clearing',
        '✓ Weekly mock tests',
        '✓ Personalized feedback',
      ],
      cta: 'Get Started',
      highlighted: true,
    },
    {
      name: 'Premium',
      price: '₹4,999',
      period: '/month',
      description: 'For competitive exam prep',
      features: [
        '✓ Everything in Pro',
        '✓ 1-on-1 mentoring (4hrs/month)',
        '✓ Advanced problem solving',
        '✓ Priority support 24/7',
        '✓ Performance analytics',
        '✓ Exam strategy sessions',
        '✓ Certificate of completion',
      ],
      cta: 'Unlock Premium',
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-slate-900 dark:text-white">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Choose the plan that fits your learning needs. All plans include a 7-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'glass-effect border-2 border-primary-500 shadow-2xl transform md:scale-105'
                  : 'glass-effect border border-slate-200 dark:border-slate-700 hover:shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="font-display font-bold text-2xl mb-2 text-slate-900 dark:text-white">
                {plan.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="font-display font-bold text-4xl text-slate-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="text-slate-600 dark:text-slate-400">{plan.period}</span>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all mb-8 ${
                  plan.highlighted
                    ? 'btn-primary'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700'
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-3"
                  >
                    <span className="text-lg">{feature.includes('✓') ? '✅' : '❌'}</span>
                    {feature.replace('✓ ', '').replace('✗ ', '')}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            📍 Still unsure? Schedule a free demo call with our counselor
          </p>
          <button className="btn-secondary">Book Free Consultation</button>
        </div>
      </div>
    </section>
  )
}
