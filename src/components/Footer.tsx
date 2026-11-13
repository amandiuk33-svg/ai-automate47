export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-space-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-lg flex items-center justify-center font-display font-bold text-space-900 text-lg">
                AI
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">AiAutomate47</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Empowering small businesses with AI-powered automation and custom dashboards.
            </p>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="/about" className="hover:text-neon-cyan transition-colors">About</a></li>
              <li><a href="/services" className="hover:text-neon-cyan transition-colors">Services</a></li>
              <li><a href="/case-studies" className="hover:text-neon-cyan transition-colors">Case Studies</a></li>
              <li><a href="/blog" className="hover:text-neon-cyan transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="/chatbot" className="hover:text-neon-cyan transition-colors">AI Chatbot</a></li>
              <li><a href="/dashboard-preview" className="hover:text-neon-cyan transition-colors">Dashboard Preview</a></li>
              <li><a href="/pricing" className="hover:text-neon-cyan transition-colors">Pricing</a></li>
              <li><a href="/contact" className="hover:text-neon-cyan transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6">Connect</h4>
            <div className="space-y-4 text-sm text-white/60">
              <p className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@aiautomate47.com
              </p>
              <p className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                (555) 123-4567
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white/40 hover:text-neon-cyan transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.204 0 5.785 1.802 7.317 4.354.279.384.416.882.416 1.426 0 1.2-.866 2.24-2.027 3.227-.467.396-.802 1.09-.802 1.833v.144c0 .743.335 1.437.802 1.832 1.162.987 2.028 2.027 2.028 3.227 0 .544.137 1.042.416 1.427 1.532 2.552 4.114 4.354 7.317 4.354 1.301 0 2.594-.395 3.67-1.14.567-.392.913-.967.913-1.61 0-.644-.346-1.219-.913-1.61C18.98 18.292 16.078 19 12 19s-6.98-.708-9.066-1.79c-.567-.392-.913-.967-.913-1.61 0-.644.346-1.218.913-1.61 1.076-.745 2.369-1.14 3.67-1.14 3.203 0 5.785-1.802 7.317-4.353.278-.384.416-.883.416-1.427 0-1.2-.866-2.24-2.028-3.227-.467-.396-.802-1.09-.802-1.833v-.144c0-.743-.335-1.438-.802-1.833-1.162-.987-2.028-2.027-2.028-3.227 0-.544.137-1.042.416-1.426C6.215 3.962 8.796 2.16 12 2.16z" /></svg>
              </a>
              <a href="#" className="text-white/40 hover:text-neon-cyan transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
            <p>© {currentYear} AiAutomate47. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}