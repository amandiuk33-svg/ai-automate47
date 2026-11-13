import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why US Small Businesses Choose AiAutomate47 | AI Automation Value',
  description: 'AiAutomate47 value proposition for US small businesses: Complete AI dashboards, no technical expertise needed, affordable pricing, and ongoing AI support.',
  keywords: ['AI value proposition small business', 'AI dashboard benefits', 'AI automation ROI', 'AI consultant value'],
  openGraph: {
    title: 'Why US Small Businesses Choose AiAutomate47',
    description: 'AiAutomate47 value proposition for US small businesses.',
    type: 'website',
  },
};

export default function ValueProposition() {
  const benefits = [
    {
      title: 'Built for US Small Business',
      description: 'We understand the unique challenges American small businesses face. Our solutions are affordable, scalable, and designed for teams of 1-50 employees.',
      icon: '🇺🇸',
    },
    {
      title: 'Complete AI Dashboard',
      description: 'Get your own custom AI-powered dashboard that centralizes all your automation, analytics, and AI tools in one place.',
      icon: '📊',
    },
    {
      title: 'No Technical Expertise Needed',
      description: 'We handle the setup, training, and ongoing support. You focus on running your business while we handle the AI.',
      icon: '🤝',
    },
    {
      title: 'Faster Than Traditional Agencies',
      description: 'AI-powered development means we build and deploy solutions in days, not months. Start seeing ROI immediately.',
      icon: '⚡',
    },
    {
      title: 'Affordable Monthly Pricing',
      description: 'No massive upfront costs. Our subscription model makes AI automation accessible for any small business budget.',
      icon: '💰',
    },
    {
      title: 'Ongoing Support & Updates',
      description: 'Your AI dashboard evolves with your business. We continuously update and optimize your automations.',
      icon: '🔄',
    },
  ];

  return (
    <div className="section-container bg-space-950/50 rounded-2xl border border-white/10">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Why US Small Businesses Choose AiAutomate47</h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          AiAutomate47 is built specifically for US small businesses who want to leverage AI without the enterprise price tag.
        </p>
      </div>

      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AiAutomate47",
          "description": "AI consultancy for US small businesses specializing in custom AI dashboards, workflow automation, and social media management AI.",
          "url": "https://aiautomate47.com",
          "areaServed": "United States"
        })}
      </script>

      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, i) => (
          <div key={i} className="glass-card p-8 text-center hover:border-neon-cyan/50 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 bg-white/5 border border-white/10 group-hover:bg-neon-cyan/20 transition-colors">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-4">{benefit.title}</h3>
            <p className="text-white/60 leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-white/70 text-lg mb-8">Join hundreds of small businesses automating with AI.</p>
        <a href="/pricing" className="neon-button px-8 py-4 text-lg">
          Start Your Free Consultation
        </a>
      </div>
    </div>
  );
}