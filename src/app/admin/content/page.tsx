'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Tab {
  id: string;
  label: string;
}

const TABS: Tab[] = [
  { id: 'site', label: 'Site Info' },
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'caseStudies', label: 'Case Studies' },
  { id: 'contact', label: 'Contact' },
  { id: 'chatbot', label: 'Chatbot' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'valueProp', label: 'Value Prop' },
  { id: 'meta', label: 'SEO / Meta' },
];

export default function AdminContent() {
  const [content, setContent] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<string>('site');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    const storedPassword = localStorage.getItem('admin_password');
    if (storedPassword && storedPassword === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthenticated(true);
      fetchContent();
    } else {
      setLoading(false);
    }
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (loginPassword === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      localStorage.setItem('admin_password', loginPassword);
      setAuthenticated(true);
      setLoginError('');
      fetchContent();
    } else {
      setLoginError('Invalid password. Please try again.');
    }
  }

  function handleLogout() {
    localStorage.removeItem('admin_password');
    setAuthenticated(false);
    setContent(null);
    setActiveTab('site');
    setError(null);
  }

  async function fetchContent() {
    try {
      const res = await fetch('/api/admin/content');
      if (!res.ok) throw new Error('Failed to fetch content');
      const data = await res.json();
      setContent(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function saveContent() {
    if (!content) return;
    setSaving(true);
    setSaveMessage(null);
    try {
      const res = await fetch('/api/admin/content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
      });
      if (!res.ok) throw new Error('Failed to save content');
      setSaveMessage('Content saved successfully!');
      setTimeout(() => setSaveMessage(null), 3000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-space-950">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-cyan mb-4"></div>
          <p className="text-white">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-space-950">
        <div className="glass-card p-8 rounded-2xl w-full max-w-md">
          <h1 className="text-2xl font-display font-bold text-white mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-white/70 text-sm mb-2">Admin Password</label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                required
              />
            </div>
            {loginError && (
              <p className="text-sm text-red-400 text-center">{loginError}</p>
            )}
            <button
              type="submit"
              className="neon-button w-full py-3"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-space-950 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-white mb-2">Content Manager</h1>
            <p className="text-white/60">Edit all website content from one place.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/admin/blog" className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors text-sm">
              ? Blog Posts
            </Link>
            <button
              onClick={saveContent}
              disabled={saving}
              className="neon-button px-6 py-2 text-sm"
            >
              {saving ? 'Saving...' : 'Save All Changes'}
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors text-sm"
            >
              Logout
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}

        {saveMessage && (
          <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg text-green-400 text-sm">
            {saveMessage}
          </div>
        )}

        {!content && (
          <div className="text-center py-20 text-white/60">
            <p>No content loaded. Please refresh and try again.</p>
          </div>
        )}

        {content && (
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/6 flex-shrink-0">
              <div className="glass-card p-4 rounded-xl sticky top-6">
                <nav className="space-y-1">
                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50'
                          : 'text-white/60 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            <div className="lg:w-5/6 flex-1">
              <div className="glass-card p-8 rounded-xl min-h-[600px]">
                {activeTab === 'site' && <SiteTab content={content} setContent={setContent} />}
                {activeTab === 'home' && <HomeTab content={content} setContent={setContent} />}
                {activeTab === 'about' && <AboutTab content={content} setContent={setContent} />}
                {activeTab === 'services' && <ServicesTab content={content} setContent={setContent} />}
                {activeTab === 'pricing' && <PricingTab content={content} setContent={setContent} />}
                {activeTab === 'caseStudies' && <CaseStudiesTab content={content} setContent={setContent} />}
                {activeTab === 'contact' && <ContactTab content={content} setContent={setContent} />}
                {activeTab === 'chatbot' && <ChatbotTab content={content} setContent={setContent} />}
                {activeTab === 'dashboard' && <DashboardTab content={content} setContent={setContent} />}
                {activeTab === 'valueProp' && <ValuePropTab content={content} setContent={setContent} />}
                {activeTab === 'meta' && <MetaTab content={content} setContent={setContent} />}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SiteTab({ content, setContent }: { content: any; setContent: any }) {
  const s = content.site || {};
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white/60 text-sm mb-1">Site Name</label>
          <input
            value={s.name || ''}
            onChange={(e) => setContent({ ...content, site: { ...s, name: e.target.value } })}
            className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          />
        </div>
        <div>
          <label className="block text-white/60 text-sm mb-1">Tagline</label>
          <input
            value={s.tagline || ''}
            onChange={(e) => setContent({ ...content, site: { ...s, tagline: e.target.value } })}
            className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          />
        </div>
        <div>
          <label className="block text-white/60 text-sm mb-1">Email</label>
          <input
            value={s.email || ''}
            onChange={(e) => setContent({ ...content, site: { ...s, email: e.target.value } })}
            className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          />
        </div>
        <div>
          <label className="block text-white/60 text-sm mb-1">Phone</label>
          <input
            value={s.phone || ''}
            onChange={(e) => setContent({ ...content, site: { ...s, phone: e.target.value } })}
            className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          />
        </div>
        <div>
          <label className="block text-white/60 text-sm mb-1">Location</label>
          <input
            value={s.location || ''}
            onChange={(e) => setContent({ ...content, site: { ...s, location: e.target.value } })}
            className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          />
        </div>
        <div>
          <label className="block text-white/60 text-sm mb-1">Twitter Handle</label>
          <input
            value={s.twitterHandle || ''}
            onChange={(e) => setContent({ ...content, site: { ...s, twitterHandle: e.target.value } })}
            className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          />
        </div>
        <div>
          <label className="block text-white/60 text-sm mb-1">Twitter URL</label>
          <input
            value={s.twitterUrl || ''}
            onChange={(e) => setContent({ ...content, site: { ...s, twitterUrl: e.target.value } })}
            className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          />
        </div>
        <div>
          <label className="block text-white/60 text-sm mb-1">LinkedIn URL</label>
          <input
            value={s.linkedinUrl || ''}
            onChange={(e) => setContent({ ...content, site: { ...s, linkedinUrl: e.target.value } })}
            className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          />
        </div>
      </div>
    </div>
  );
}
function HomeTab({ content, setContent }: { content: any; setContent: any }) {
  const h = content.home || {};
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-white/60 text-sm mb-1">Badge</label>
        <input
          value={h.badge || ''}
          onChange={(e) => setContent({ ...content, home: { ...h, badge: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">Title</label>
        <input
          value={h.title || ''}
          onChange={(e) => setContent({ ...content, home: { ...h, title: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">Subtitle</label>
        <textarea
          value={h.subtitle || ''}
          onChange={(e) => setContent({ ...content, home: { ...h, subtitle: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          rows={3}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {h.aiCards?.map((card: string, i: number) => (
          <div key={i}>
            <label className="block text-white/60 text-sm mb-1">AI Card {i + 1}</label>
            <input
              value={card}
              onChange={(e) => {
                const newCards = [...h.aiCards];
                newCards[i] = e.target.value;
                setContent({ ...content, home: { ...h, aiCards: newCards } });
              }}
              className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
function AboutTab({ content, setContent }: { content: any; setContent: any }) {
  const a = content.about || {};
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-white/60 text-sm mb-1">Subtitle</label>
        <textarea
          value={a.subtitle || ''}
          onChange={(e) => setContent({ ...content, about: { ...a, subtitle: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          rows={3}
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">Mission Paragraph 1</label>
        <textarea
          value={a.missionParagraphs?.[0] || ''}
          onChange={(e) => {
            const pars = [...(a.missionParagraphs || [])];
            pars[0] = e.target.value;
            setContent({ ...content, about: { ...a, missionParagraphs: pars } });
          }}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          rows={3}
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">Mission Paragraph 2</label>
        <textarea
          value={a.missionParagraphs?.[1] || ''}
          onChange={(e) => {
            const pars = [...(a.missionParagraphs || [])];
            pars[1] = e.target.value;
            setContent({ ...content, about: { ...a, missionParagraphs: pars } });
          }}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          rows={3}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {a.checklist?.map((item: string, i: number) => (
          <div key={i}>
            <label className="block text-white/60 text-sm mb-1">Checklist Item {i + 1}</label>
            <input
              value={item}
              onChange={(e) => {
                const newList = [...a.checklist];
                newList[i] = e.target.value;
                setContent({ ...content, about: { ...a, checklist: newList } });
              }}
              className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
function ServicesTab({ content, setContent }: { content: any; setContent: any }) {
  const svc = content.services || {};
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-white/60 text-sm mb-1">Title</label>
        <input
          value={svc.title || ''}
          onChange={(e) => setContent({ ...content, services: { ...svc, title: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">Subtitle</label>
        <textarea
          value={svc.subtitle || ''}
          onChange={(e) => setContent({ ...content, services: { ...svc, subtitle: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          rows={3}
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">Description</label>
        <textarea
          value={svc.description || ''}
          onChange={(e) => setContent({ ...content, services: { ...svc, description: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          rows={3}
        />
      </div>
    </div>
  );
}
function PricingTab({ content, setContent }: { content: any; setContent: any }) {
  const p = content.pricing || {};
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-white/60 text-sm mb-1">Title</label>
        <input
          value={p.title || ''}
          onChange={(e) => setContent({ ...content, pricing: { ...p, title: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">Subtitle</label>
        <textarea
          value={p.subtitle || ''}
          onChange={(e) => setContent({ ...content, pricing: { ...p, subtitle: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          rows={3}
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">Description</label>
        <textarea
          value={p.description || ''}
          onChange={(e) => setContent({ ...content, pricing: { ...p, description: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          rows={3}
        />
      </div>
    </div>
  );
}
function CaseStudiesTab({ content, setContent }: { content: any; setContent: any }) {
  const cs = content.caseStudies || {};
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-white/60 text-sm mb-1">Title</label>
        <input
          value={cs.title || ''}
          onChange={(e) => setContent({ ...content, caseStudies: { ...cs, title: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">Subtitle</label>
        <textarea
          value={cs.subtitle || ''}
          onChange={(e) => setContent({ ...content, caseStudies: { ...cs, subtitle: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          rows={3}
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">Description</label>
        <textarea
          value={cs.description || ''}
          onChange={(e) => setContent({ ...content, caseStudies: { ...cs, description: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          rows={3}
        />
      </div>
    </div>
  );
}
function ContactTab({ content, setContent }: { content: any; setContent: any }) {
  const c = content.contact || {};
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-white/60 text-sm mb-1">Title</label>
        <input
          value={c.title || ''}
          onChange={(e) => setContent({ ...content, contact: { ...c, title: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">Subtitle</label>
        <textarea
          value={c.subtitle || ''}
          onChange={(e) => setContent({ ...content, contact: { ...c, subtitle: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          rows={3}
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">Heading</label>
        <input
          value={c.heading || ''}
          onChange={(e) => setContent({ ...content, contact: { ...c, heading: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">Form Heading</label>
        <input
          value={c.formHeading || ''}
          onChange={(e) => setContent({ ...content, contact: { ...c, formHeading: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
        />
      </div>
    </div>
  );
}
function ChatbotTab({ content, setContent }: { content: any; setContent: any }) {
  const cb = content.chatbot || {};
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-white/60 text-sm mb-1">Title</label>
        <input
          value={cb.title || ''}
          onChange={(e) => setContent({ ...content, chatbot: { ...cb, title: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">Subtitle</label>
        <textarea
          value={cb.subtitle || ''}
          onChange={(e) => setContent({ ...content, chatbot: { ...cb, subtitle: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          rows={3}
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">Greeting</label>
        <input
          value={cb.greeting || ''}
          onChange={(e) => setContent({ ...content, chatbot: { ...cb, greeting: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">Default Response</label>
        <textarea
          value={cb.defaultResponse || ''}
          onChange={(e) => setContent({ ...content, chatbot: { ...cb, defaultResponse: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          rows={3}
        />
      </div>
    </div>
  );
}
function DashboardTab({ content, setContent }: { content: any; setContent: any }) {
  const d = content.dashboard || {};
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-white/60 text-sm mb-1">Title</label>
        <input
          value={d.title || ''}
          onChange={(e) => setContent({ ...content, dashboard: { ...d, title: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">Subtitle</label>
        <textarea
          value={d.subtitle || ''}
          onChange={(e) => setContent({ ...content, dashboard: { ...d, subtitle: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          rows={3}
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">CTA Text</label>
        <input
          value={d.ctaText || ''}
          onChange={(e) => setContent({ ...content, dashboard: { ...d, ctaText: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">CTA Label</label>
        <input
          value={d.ctaLabel || ''}
          onChange={(e) => setContent({ ...content, dashboard: { ...d, ctaLabel: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
        />
      </div>
    </div>
  );
}
function ValuePropTab({ content, setContent }: { content: any; setContent: any }) {
  const vp = content.valueProp || {};
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-white/60 text-sm mb-1">Title</label>
        <input
          value={vp.title || ''}
          onChange={(e) => setContent({ ...content, valueProp: { ...vp, title: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">Subtitle</label>
        <textarea
          value={vp.subtitle || ''}
          onChange={(e) => setContent({ ...content, valueProp: { ...vp, subtitle: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
          rows={3}
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">CTA Text</label>
        <input
          value={vp.ctaText || ''}
          onChange={(e) => setContent({ ...content, valueProp: { ...vp, ctaText: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
        />
      </div>
      <div>
        <label className="block text-white/60 text-sm mb-1">CTA Label</label>
        <input
          value={vp.ctaLabel || ''}
          onChange={(e) => setContent({ ...content, valueProp: { ...vp, ctaLabel: e.target.value } })}
          className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
        />
      </div>
    </div>
  );
}
function MetaTab({ content, setContent }: { content: any; setContent: any }) {
  const m = content.meta || {};
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(m).map(([key, page]) => (
          <div key={key}>
            <h4 className="text-white font-medium mb-3">{key}</h4>
            <div>
              <label className="block text-white/60 text-sm mb-1">Title</label>
              <input
                value={(page as any).title || ''}
                onChange={(e) => {
                  const newMeta = { ...m };
                  newMeta[key] = { ...(page as any), title: e.target.value };
                  setContent({ ...content, meta: newMeta });
                }}
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
              />
            </div>
            <div>
              <label className="block text-white/60 text-sm mb-1">Description</label>
              <textarea
                value={(page as any).description || ''}
                onChange={(e) => {
                  const newMeta = { ...m };
                  newMeta[key] = { ...(page as any), description: e.target.value };
                  setContent({ ...content, meta: newMeta });
                }}
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-neon-cyan"
                rows={2}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

