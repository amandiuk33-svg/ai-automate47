'use client';

export function Hero() {
  const faqs = [
    {
      q: 'What does an AI consultant do for small businesses?',
      a: 'An AI consultant helps small businesses identify AI opportunities, implement automation workflows, and train teams to use AI tools effectively for growth and efficiency.',
    },
    {
      q: 'How much does AI consulting cost for small business?',
      a: 'AI consulting for small businesses typically ranges from $150-$300 per hour or $2,000-$10,000 per month depending on project scope and ongoing support needs.',
    },
    {
      q: 'What AI automation services do you offer?',
      a: 'We offer AI workflow automation, custom AI dashboards, AI asset generation, social media management AI, and end-to-end AI implementation for US small businesses.',
    },
    {
      q: 'How long does AI implementation take?',
      a: 'Most AI implementations for small businesses take 2-8 weeks depending on complexity, with initial automation workflows live within 2-4 weeks.',
    },
    {
      q: 'Do you serve businesses outside the USA?',
      a: 'Our primary focus is US small businesses, but we can work with international clients on a case-by-case basis for AI consulting and automation projects.',
    },
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* AI Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute top-1/3 right-1/6 w-96 h-96 bg-neon-magenta/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-neon-blue/10 rounded-full blur-[100px] -z-10" />

      {/* AI Circuit lines */}
      <div className="ai-circuit-line" style={{ left: '0%', animationDelay: '0s' }} />
      <div className="ai-circuit-line" style={{ left: '50%', animationDelay: '1s' }} />
      <div className="ai-circuit-line" style={{ right: '0%', animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between min-h-[60vh]">
        <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-neon-cyan/20 rounded-full text-neon-cyan text-sm font-medium mb-8 animate-fade-in ai-hologram">
            <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
            Custom AI Dashboards for Small Business
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-8 animate-fade-in delay-100 text-balance ai-glitch" data-text="Automate Your Business with AI">
            Automate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-blue">
              Business with AI
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in delay-200 leading-relaxed">
            AiAutomate47 delivers custom AI-powered dashboards, end-to-end workflow automation, social media management, and AI asset generation for US small businesses. Turn ideas into revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-300">
            <a href="/dashboard-preview" className="border border-neon-cyan/30 text-neon-cyan px-6 py-3 rounded-lg font-medium hover:bg-neon-cyan/10 hover:text-white transition-all duration-300 w-full sm:w-auto text-center group relative overflow-hidden">
              <span className="relative z-10">View AI Dashboard</span>
              <span className="absolute inset-0 bg-neon-cyan/0 group-hover:bg-neon-cyan/20 transition-all duration-300" />
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center animate-fade-in delay-400">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 rounded-2xl blur-xl -z-10" />
            <div className="relative bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl ai-hologram relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-pulse" />
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                {['🤖 AI Consulting', '⚡ Automation', '📱 Social Media', '🎨 Assets', '📊 Dashboard'].map((item, i) => (
                  <div key={i} className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 group relative overflow-hidden ${
                    i % 2 === 0
                      ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 hover:bg-neon-cyan/20'
                      : 'bg-neon-magenta/10 text-neon-magenta border border-neon-magenta/20 hover:bg-neon-magenta/20'
                  }`}>
                    <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  { icon: '🤖', text: 'AI consultancy tailored for small business growth' },
                  { icon: '⚡', text: 'Workflow automation that saves 20+ hours weekly' },
                  { icon: '📱', text: 'Social media management on autopilot' },
                  { icon: '🎨', text: 'AI asset generation — images, text & videos' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 py-2 border-b border-white/5 last:border-0 ai-float">
                    <div className="w-2 h-2 rounded-full bg-neon-cyan/20 text-neon-cyan flex items-center justify-center text-xs animate-pulse">
                      {item.icon}
                    </div>
                    <span className="text-white/80 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* AEO/GEO FAQ Section */}
    <section className="py-16 bg-white/5 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Frequently Asked Questions About AI Consulting</h2>
          <p className="text-white/60 max-w-xl mx-auto">Get answers to common questions about AI consultancy and automation for small businesses.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-neon-cyan/30 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                <span className="text-neon-cyan">Q{i + 1}</span>
                {faq.q}
              </h3>
              <p className="text-white/70 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}