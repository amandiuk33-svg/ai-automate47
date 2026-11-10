import Link from 'next/link';
import { Metadata } from 'next';

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

const services = [
  {
    id: 1,
    title: 'AI Consultancy',
    subtitle: 'Expert guidance for your AI journey',
    description: 'Strategic AI consulting tailored for small businesses. We help you identify opportunities, implement solutions, and train your team.',
    icon: '🤖',
    features: ['Strategy & roadmap', 'AI readiness assessment', 'Team training', 'Implementation planning'],
    color: 'text-neon-cyan border-neon-cyan/20 hover:bg-neon-cyan/10',
  },
  {
    id: 2,
    title: 'Workflow Automation',
    subtitle: 'Automate repetitive tasks',
    description: 'Streamline your business operations with AI-powered workflow automation. Save time and reduce errors.',
    icon: '⚡',
    features: ['Process analysis', 'Custom automation workflows', 'Integration with existing tools', 'Monitoring & optimization'],
    color: 'text-neon-magenta border-neon-magenta/20 hover:bg-neon-magenta/10',
  },
  {
    id: 3,
    title: 'Social Media Management',
    subtitle: 'AI-powered social growth',
    description: 'Automated social media content creation, scheduling, and engagement using advanced AI models.',
    icon: '📱',
    features: ['Content generation', 'Post scheduling', 'Engagement automation', 'Analytics & reporting'],
    color: 'text-neon-blue border-neon-blue/20 hover:bg-neon-blue/10',
  },
  {
    id: 4,
    title: 'Asset Generation',
    subtitle: 'Images, text & videos',
    description: 'Generate professional images, compelling copy, and short-form videos using cutting-edge AI tools.',
    icon: '🎨',
    features: ['AI image generation', 'Copywriting', 'Short-form video creation', 'Brand asset library'],
    color: 'text-neon-cyan border-neon-cyan/20 hover:bg-neon-cyan/10',
  },
  {
    id: 5,
    title: 'Custom AI Dashboard',
    subtitle: 'Your AI command center',
    description: 'A complete, custom AI-powered dashboard built specifically for your business needs.',
    icon: '📊',
    features: ['Real-time analytics', 'Custom widgets', 'AI assistant integration', 'Data visualization'],
    color: 'text-neon-magenta border-neon-magenta/20 hover:bg-neon-magenta/10',
  },
];

export default function Services() {
  return (
    <div className="section-container">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">AI Consulting & Automation Services for US Small Businesses</h1>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-neon-cyan mb-8">Expert AI Consultancy, Workflow Automation & AI Dashboards</h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          Everything your small business needs to automate, grow, and compete with the big players.
        </p>
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
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-neon-cyan/30 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                <span className="text-neon-cyan">Q1</span>
                What AI services do you offer for small businesses?
              </h3>
              <p className="text-white/70 leading-relaxed">
                We offer AI consultancy, workflow automation, custom AI dashboards, AI asset generation, and social media management AI specifically designed for US small businesses.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-neon-cyan/30 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                <span className="text-neon-cyan">Q2</span>
                How much do AI consulting services cost?
              </h3>
              <p className="text-white/70 leading-relaxed">
                AI consulting services typically range from $150-$300 per hour or $2,000-$10,000 per month depending on project scope and ongoing support needs.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-neon-cyan/30 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                <span className="text-neon-cyan">Q3</span>
                How long does AI implementation take?
              </h3>
              <p className="text-white/70 leading-relaxed">
                Most AI implementations for small businesses take 2-8 weeks depending on complexity, with initial automation workflows live within 2-4 weeks.
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
                name: 'What AI services do you offer for small businesses?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We offer AI consultancy, workflow automation, custom AI dashboards, AI asset generation, and social media management AI specifically designed for US small businesses.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much do AI consulting services cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI consulting services typically range from $150-$300 per hour or $2,000-$10,000 per month depending on project scope and ongoing support needs.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does AI implementation take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most AI implementations for small businesses take 2-8 weeks depending on complexity, with initial automation workflows live within 2-4 weeks.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}