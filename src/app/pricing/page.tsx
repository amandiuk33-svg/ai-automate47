import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Consulting Pricing | Affordable AI Automation Plans',
  description: 'Transparent AI consulting pricing for US small businesses. Starter $499/mo, Growth $899/mo, Enterprise $1,499/mo. All plans include custom AI dashboard.',
  keywords: ['AI consulting pricing', 'AI automation cost', 'AI dashboard pricing', 'AI consultant rates'],
  openGraph: {
    title: 'AI Consulting Pricing | AiAutomate47',
    description: 'Affordable AI automation plans for US small businesses.',
    type: 'website',
  },
};

const pricingPlans = [
  {
    name: 'Starter',
    price: '$499',
    period: '/month',
    description: 'Perfect for small businesses just starting with AI automation',
    features: [
      'AI Consultation (2 hours/month)',
      'Basic workflow automation (3 workflows)',
      'Social media management (2 platforms)',
      'Email support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$899',
    period: '/month',
    description: 'For growing businesses that need more automation power',
    features: [
      'AI Consultation (5 hours/month)',
      'Advanced workflow automation (10 workflows)',
      'Social media management (4 platforms)',
      'Custom AI dashboard',
      'Priority email support',
    ],
    cta: 'Choose Plan',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$1,499',
    period: '/month',
    description: 'Full AI automation suite for established small businesses',
    features: [
      'AI Consultation (10 hours/month)',
      'Unlimited workflow automation',
      'Social media management (6 platforms)',
      'Custom AI dashboard + API access',
      '24/7 priority support',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="section-container">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">AI Consultant Pricing for Small Business</h1>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-neon-cyan mb-8">Transparent AI Automation Plans & Packages</h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          Choose the plan that fits your small business. All plans include a custom AI dashboard.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`glass-card p-8 rounded-2xl relative ${
              plan.popular ? 'border-neon-cyan/50 scale-105 z-10' : 'border-white/10'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-cyan text-space-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-display font-bold text-white mb-2">{plan.name}</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-white">{plan.price}</span>
              <span className="text-white/60 ml-2">{plan.period}</span>
            </div>
            <p className="text-white/60 mb-8 text-sm line-clamp-2">{plan.description}</p>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start space-x-3 text-sm text-white/70">
                  <span className="w-5 h-5 rounded-full bg-neon-cyan/20 text-neon-cyan flex items-center justify-center text-xs mt-0.5">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <Link href="/contact" className={`w-full py-3 rounded-lg font-bold transition-colors text-center block ${
              plan.popular
                ? 'bg-neon-cyan text-space-900 hover:bg-neon-cyan/90'
                : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
            }`}>
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-space-950/50 rounded-2xl border border-white/10 p-8 text-center">
        <h3 className="text-2xl font-display font-bold text-white mb-4">Need a Custom Plan?</h3>
        <p className="text-white/60 mb-6">
          We offer tailored solutions for businesses with unique requirements. Book a free consultation to discuss your needs.
        </p>
        <Link href="/contact" className="neon-button px-8 py-4">
          Book Free Consultation
        </Link>
      </div>

      {/* Pricing FAQ Section */}
      <section className="mt-24 py-16 bg-white/5 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Frequently Asked Questions About AI Consultant Pricing</h2>
            <p className="text-white/60 max-w-xl mx-auto">Transparent pricing for AI consulting and automation services.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-neon-cyan/30 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                <span className="text-neon-cyan">Q1</span>
                How much does AI consulting cost per hour?
              </h3>
              <p className="text-white/70 leading-relaxed">
                AI consulting rates typically range from $150-$300 per hour depending on the consultant's experience and project complexity.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-neon-cyan/30 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                <span className="text-neon-cyan">Q2</span>
                What is the monthly cost for AI automation services?
              </h3>
              <p className="text-white/70 leading-relaxed">
                Monthly AI automation packages start at $499/month for Starter plans and go up to $1,499/month for Enterprise plans with unlimited automation.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-neon-cyan/30 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                <span className="text-neon-cyan">Q3</span>
                Are there setup fees for AI implementation?
              </h3>
              <p className="text-white/70 leading-relaxed">
                Some custom implementations may have one-time setup fees ranging from $500-$2,000 depending on complexity. All monthly plans include setup at no extra cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQPage Schema for AEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How much does AI consulting cost per hour?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI consulting rates typically range from $150-$300 per hour depending on the consultant\'s experience and project complexity.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the monthly cost for AI automation services?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Monthly AI automation packages start at $499/month for Starter plans and go up to $1,499/month for Enterprise plans with unlimited automation.',
                },
              },
              {
                '@type': 'Question',
                name: 'Are there setup fees for AI implementation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Some custom implementations may have one-time setup fees ranging from $500-$2,000 depending on complexity. All monthly plans include setup at no extra cost.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}