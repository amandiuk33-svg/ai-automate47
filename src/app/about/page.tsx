import { Metadata } from 'next';
import { getContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About AiAutomate47 | AI Automation Agency for US Small Business',
  description: 'AiAutomate47 is a one-person AI automation agency helping US small businesses leverage artificial intelligence. Custom AI dashboards, workflow automation, and AI consultancy.',
  keywords: ['AI automation agency', 'AI consultant USA', 'one person AI agency', 'AI consultancy small business'],
  openGraph: {
    title: 'About AiAutomate47 | AI Automation Agency',
    description: 'One-person AI automation agency helping US small businesses grow with AI.',
    type: 'website',
  },
};

export default async function About() {
  const config = await getContent();
  return (
    <div className="section-container">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">About AiAutomate47 - AI Automation Agency for US Small Business</h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">{config.about.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-display font-bold text-white mb-6">Our Mission</h3>
          {config.about.missionParagraphs.map((para: string, i: number) => (
            <p key={i} className="text-white/70 mb-6 leading-relaxed text-lg">{para}</p>
          ))}
          <ul className="space-y-4 text-white/70">
            {config.about.checklist.map((item: string, i: number) => (
              <li key={i} className="flex items-start space-x-3">
                <span className="w-5 h-5 rounded-full bg-neon-cyan/20 text-neon-cyan flex items-center justify-center text-xs mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <div>
              <h4 className="text-xl font-display font-bold text-white">AiAutomate47</h4>
              <p className="text-neon-cyan text-sm font-medium">AI Automation Agency</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-neon-cyan mt-1">
                1
              </div>
              <div>
                <h5 className="text-white font-medium">Founded</h5>
                <p className="text-white/60 text-sm">{config.about.founderYear}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-neon-cyan mt-1">
                2
              </div>
              <div>
                <h5 className="text-white font-medium">Focus</h5>
                <p className="text-white/60 text-sm">{config.about.founderFocus}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-neon-cyan mt-1">
                3
              </div>
              <div>
                <h5 className="text-white font-medium">Specialty</h5>
                <p className="text-white/60 text-sm">{config.about.founderSpecialty}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-24 py-16 bg-white/5 border-t border-white/10">
        <h3 className="text-3xl font-display font-bold text-white mb-12 text-center">Frequently Asked Questions About AiAutomate47</h3>
        <div className="max-w-3xl mx-auto space-y-6">
          {config.about.faqs.map((faq: any, i: number) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}