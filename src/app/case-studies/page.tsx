import { Metadata } from 'next';
import { getContent } from '@/lib/content-read';

export const metadata: Metadata = {
  title: 'AI Automation Case Studies | Small Business Success Stories',
  description: 'Real AI automation case studies for US small businesses. See how AiAutomate47 helped clients increase revenue, save time, and automate workflows with custom AI dashboards.',
  keywords: ['AI automation case studies', 'AI small business success', 'AI consultancy results', 'AI dashboard case study'],
  openGraph: {
    title: 'AI Automation Case Studies | AiAutomate47',
    description: 'Real results from US small businesses using AiAutomate47 AI automation.',
    type: 'website',
  },
};

export default async function CaseStudies() {
  const config = await getContent();
  const caseStudies = config.caseStudies;
  return (
    <div className="section-container">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">{caseStudies.title}</h1>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-neon-cyan mb-8">{caseStudies.subtitle}</h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">{caseStudies.description}</p>
      </div>

      {/* FAQ Section */}
      <section className="mt-24 py-16 bg-white/5 border-t border-white/10">
        <h3 className="text-3xl font-display font-bold text-white mb-12 text-center">Frequently Asked Questions About Case Studies</h3>
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-3">Which industries have benefited most from AI automation?</h4>
            <p>Our case studies show strong results across multiple sectors: restaurants increased orders 300%, law firms cut document review time 90%, and e-commerce stores reduced support tickets 70%.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-3">What AI services were implemented in these case studies?</h4>
            <p>Services included AI workflow automation, custom AI dashboards, AI-powered social media management, and AI chatbot implementation tailored to each industry's needs.</p>
          </div>
        </div>
      </section>

      {/* FAQPage Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Which industries have benefited most from AI automation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our case studies show strong results across multiple sectors: restaurants increased orders 300%, law firms cut document review time 90%, and e-commerce stores reduced support tickets 70%."
              }
            },
            {
              "@type": "Question",
              "name": "What AI services were implemented in these case studies?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Services included AI workflow automation, custom AI dashboards, AI-powered social media management, and AI chatbot implementation tailored to each industry's needs."
              }
            }
          ]
        })}
      </script>

      <div className="grid md:grid-cols-3 gap-8">
        {caseStudies.studies.map((study) => (
          <div key={study.id} className="glass-card p-8 hover:border-neon-cyan/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-neon-cyan/10 text-neon-cyan mb-6">
              📈
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-4">{study.title}</h3>
            <p className="text-xs text-neon-cyan font-medium mb-2 uppercase tracking-wider">{study.clientName}</p>
            <p className="text-xs text-white/40 mb-6">{study.industry}</p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-1" />
                <span className="text-sm text-white/70">{study.challenge}</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/5 mt-1" />
                <span className="text-sm text-white/70">{study.solution}</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-magenta mt-1" />
                <span className="text-sm text-white/70">{study.results}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-white/70 mb-6">Ready to be our next success story?</p>
        <a href="/pricing" className="neon-button">
          Book Your Consultation
        </a>
      </div>
    </div>
  );
}


