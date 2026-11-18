import Link from 'next/link';
import { Metadata } from 'next';
import { getContent } from '@/lib/content';

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

export default async function Pricing() {
  const config = await getContent();
  const pricing = config.pricing;
  return (
    <div className="section-container">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">{pricing.title}</h1>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-neon-cyan mb-8">{pricing.subtitle}</h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">{pricing.description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricing.plans.map((plan) => (
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
            {pricing.faqs.map((faq: any, i: number) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-neon-cyan/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                  <span className="text-neon-cyan">Q{i + 1}</span>
                  {faq.question}
                </h3>
                <p className="text-white/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
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
            mainEntity: pricing.faqs.map((faq: any) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}