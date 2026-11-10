import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot | Ask About AI Automation & Consulting',
  description: 'Chat with the AiAutomate47 AI assistant about AI consultancy, automation services, pricing, and how AI can help your US small business.',
  keywords: ['AI chatbot', 'AI assistant consultation', 'AI automation FAQ', 'AI consulting chatbot'],
  openGraph: {
    title: 'AI Chatbot | AiAutomate47',
    description: 'Ask the AiAutomate47 AI assistant about AI automation.',
    type: 'website',
  },
};

export default function ChatbotPage() {
  return (
    <div className="section-container">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">AI Chatbot - Ask About AI Automation for Small Business</h1>
          <p className="text-xl text-white/60">
            Ask me anything about AiAutomate47, our services, pricing, or how AI can help your small business.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <div className="flex flex-col h-[600px]">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-lg rounded-tr-none text-white/90 max-w-xs">
                  Hello! I'm the AiAutomate47 AI assistant. Ask me about our services, pricing, or how we can help your small business with AI automation.
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-white/10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                />
                <button className="bg-neon-cyan text-space-900 px-6 py-2 rounded-lg font-bold hover:bg-neon-cyan/90">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}