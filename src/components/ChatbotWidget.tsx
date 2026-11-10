'use client';

import { useState } from 'react';

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    {
      role: 'bot',
      text: 'Hello! I\'m the AiAutomate47 AI assistant. Ask me about our services, pricing, or how we can help your small business with AI automation.',
    },
  ]);

  const faq: Record<string, string> = {
    'services': 'We offer AI consultancy, workflow automation, social media management, asset generation (images, text, videos), and custom AI-powered dashboards for small businesses.',
    'pricing': 'Our pricing starts at $499/month for small businesses. We offer custom packages based on your specific needs.',
    'small business': 'Yes! AiAutomate47 specializes in helping US small businesses leverage AI to grow and automate their operations.',
    'book': 'You can book a free consultation through our pricing page or contact us directly. We typically respond within 24 hours.',
    'claude': 'Claude is an AI assistant from Anthropic that excels at reasoning, writing, and analysis. We help integrate Claude into your business workflows.',
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userText = input;
    setInput('');
    setMessages([...messages, { role: 'user', text: userText }]);

    // Simple keyword matching for bot response
    const lower = userText.toLowerCase();
    let response = "I'd be happy to help! Could you rephrase your question? You can also visit our contact page for direct assistance.";

    for (const [key, answer] of Object.entries(faq)) {
      if (lower.includes(key)) {
        response = answer;
        break;
      }
    }

    // Simulate typing delay
    setTimeout(() => {
      setMessages([...messages, { role: 'user', text: userText }, { role: 'bot', text: response }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="neon-button p-4 rounded-full shadow-[0_0_20px_rgba(0,255,239,0.6)] hover:shadow-[0_0_30px_rgba(0,255,239,0.8)] transition-all"
          aria-label="Open chatbot"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="flex flex-col h-[500px] w-[380px] bg-space-950 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl">
          <div className="p-4 bg-white/5 border-b border-white/10 rounded-t-2xl flex items-center justify-between">
            <h3 className="font-display font-bold text-white flex items-center space-x-2">
              <svg className="w-5 h-5 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              AI Assistant
            </h3>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-neon-cyan/20 text-white border border-neon-cyan/30 rounded-tl-none rounded-br-none'
                    : 'bg-white/5 text-white/90 border border-white/10 rounded-tr-none rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-white/10 bg-space-950 rounded-b-2xl">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about AI automation..."
                className="flex-1 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-neon-cyan text-space-900 px-4 py-2 rounded-lg font-bold hover:bg-neon-cyan/90 disabled:opacity-50 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}