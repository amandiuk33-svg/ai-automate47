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
      const res = await fetch('/api/admin/content', {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_PASSWORD}`,
        },
      });
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
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_PASSWORD}`,
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
    <div className="min-h-screen bg-space-950">
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

function SiteTab({ content, setContent }: { content: any; setContent: any }) { return null; }
function HomeTab({ content, setContent }: { content: any; setContent: any }) { return null; }
function AboutTab({ content, setContent }: { content: any; setContent: any }) { return null; }
function ServicesTab({ content, setContent }: { content: any; setContent: any }) { return null; }
function PricingTab({ content, setContent }: { content: any; setContent: any }) { return null; }
function CaseStudiesTab({ content, setContent }: { content: any; setContent: any }) { return null; }
function ContactTab({ content, setContent }: { content: any; setContent: any }) { return null; }
function ChatbotTab({ content, setContent }: { content: any; setContent: any }) { return null; }
function DashboardTab({ content, setContent }: { content: any; setContent: any }) { return null; }
function ValuePropTab({ content, setContent }: { content: any; setContent: any }) { return null; }
function MetaTab({ content, setContent }: { content: any; setContent: any }) { return null; }

