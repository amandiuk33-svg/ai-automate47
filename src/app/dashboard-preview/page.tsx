import { Metadata } from 'next';
import { getContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'AI Dashboard Preview | Custom AI-Powered Dashboard Demo',
  description: 'Preview your custom AI-powered dashboard from AiAutomate47. Real-time metrics, automation controls, and intelligent insights for US small businesses.',
  keywords: ['AI dashboard demo', 'custom AI dashboard', 'AI dashboard preview', 'AI automation dashboard'],
  openGraph: {
    title: 'AI Dashboard Preview | AiAutomate47',
    description: 'See what your custom AI dashboard looks like.',
    type: 'website',
  },
};

const config = getContent();
const dashboard = config.dashboard;

export default function DashboardPreview() {
  return (
    <div className="section-container">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">{dashboard.title}</h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">{dashboard.subtitle}</p>
      </div>

      {/* WebSite Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "AiAutomate47 AI Dashboard Preview",
          "url": "https://aiautomate47.com/dashboard-preview",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://aiautomate47.com/dashboard-preview/search?q={search_term_string}"
          }
        })}
      </script>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {dashboard.widgets.map((widget) => (
          <div key={widget.title} className="glass-card p-6">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-2xl ${
                widget.trend === 'up' ? 'bg-neon-cyan/10 text-neon-cyan' : 'bg-neon-magenta/10 text-neon-magenta'
              }`}>
                {widget.icon}
              </div>
              <span className="text-xs text-white/40">{widget.change}</span>
            </div>
            <div className="text-3xl font-display font-bold text-white mb-1">{widget.value}</div>
            <div className="text-sm text-white/60">{widget.title}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Analytics */}
        <div className="lg:col-span-2 glass-card p-6">
          <h3 className="text-xl font-display font-bold text-white mb-6">Automation Overview</h3>
          <div className="h-64 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
            <p className="text-white/40 text-lg">Interactive charts and analytics would display here<br className="hidden md:block" />in your custom dashboard</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-display font-bold text-white mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {dashboard.recentActivity.map((activity, i) => (
              <div key={i} className="flex items-start space-x-3 py-3 border-b border-white/5 last:border-0">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                  activity.status === 'success' ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-neon-magenta/20 text-neon-magenta'
                }`}>
                  {activity.status === 'success' ? '✓' : '○'}
                </div>
                <div>
                  <div className="text-sm text-white font-medium">{activity.action}</div>
                  <div className="text-xs text-white/60">{activity.detail}</div>
                  <div className="text-xs text-white/40 mt-1">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-white/70 mb-6">{dashboard.ctaText}</p>
        <a href="/pricing" className="neon-button">
          {dashboard.ctaLabel}
        </a>
      </div>
    </div>
  );
}