import Link from 'next/link';
import { Metadata } from 'next';
import { getContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'AI Consulting Services USA | AI Automation for Small Business',
  description: 'Expert AI consulting and automation services for US small businesses. AI consultancy, workflow automation, AI dashboards, AI asset generation, and social media management AI. Get a quote today.',
  keywords: ['AI consulting services USA', 'AI consultant agency', 'AI automation agency', 'AI dashboard development', 'AI workflow automation', 'AI consultant pricing'],
  openGraph: {
    title: 'AI Consulting Services USA | AiAutomate47',
    description: 'Professional AI consulting and automation services for US small businesses.',
    type: 'website',
  },
};

const config = getContent();
const services = config.services.cards;

export default function Services() {
  return (
    <div className="section-container">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">{config.services.title}</h1>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-neon-cyan mb-8">{config.services.subtitle}</h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">{config.services.description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link
            key={service.id}
            href="/pricing"
            className="glass-card p-8 hover:border-neon-cyan/50 transition-all duration-300 group"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-2xl ${service.color} bg-white/5`}>
              {service.icon}
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">
              {service.title}
            </h3>
            <p className="text-white/60 mb-6 line-clamp-3">{service.description}</p>
            <h4 className="text-sm font-medium text-white mb-4">Key Features</h4>
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2 text-sm text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                  {feature}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-white/70 mb-6">Ready to automate your business?</p>
        <a href="/pricing" className="neon-button">
          Get Started Today
        </a>
      </div>

      {/* Services FAQ Section */}
      <section className="mt-24 py-16 bg-white/5 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Frequently Asked Questions About Our AI Services</h2>
            <p className="text-white/60 max-w-xl mx-auto">Get answers about AI consulting, automation, and pricing for your small business.</p>
          </div>

          <div className="space-y-4">
            {config.services.faqs.map((faq: any, i: number) => (
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
            mainEntity: config.services.faqs.map((faq: any) => ({
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