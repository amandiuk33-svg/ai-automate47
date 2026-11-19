import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChatbotWidget } from '@/components/ChatbotWidget';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export function metadata(): Metadata {
  return {
    title: {
      template: '%s | AiAutomate47',
      default: 'AI Consultant for Small Business | AiAutomate47',
    },
    description: 'AI consultancy and automation for US small businesses.',
    keywords: ['AI consultancy', 'AI consultant', 'AI automation small business'],
    authors: [{ name: 'AiAutomate47' }],
    robots: 'index, follow',
    openGraph: {
      title: 'AI Consultant for Small Business | AiAutomate47',
      description: 'AI consultancy and automation for US small businesses.',
      url: 'https://aiautomate47.com',
      siteName: 'AiAutomate47',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/assets/logo.svg',
          width: 64,
          height: 64,
          alt: 'AiAutomate47 Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Consultant for Small Business | AiAutomate47',
      description: 'AI consultancy and automation for US small businesses.',
      images: ['/assets/logo.svg'],
    },
    manifest: '/manifest.json',
    themeColor: '#00FFEF',
    icons: [
      { rel: 'icon', type: 'image/svg+xml', url: '/favicon.svg' },
    ],
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head></head>
      <body className={`bg-space-950 text-white min-h-screen ${inter.variable}`}>
        <div className="relative min-h-screen">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-space-950 via-space-900 to-space-950" />
          {/* Neon Grid Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1000 1000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 40 40 M 0 40 L 40 40"
                    stroke="#00FFEF"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          {/* Floating Elements */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-1/3 right-1/6 w-96 h-96 bg-neon-magenta/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-neon-blue/10 rounded-full blur-[100px]" />
          {/* AI Circuit Lines */}
          <div className="ai-circuit-line" style={{ left: '0%', animationDelay: '0s' }} />
          <div className="ai-circuit-line" style={{ left: '50%', animationDelay: '1s' }} />
          <div className="ai-circuit-line" style={{ right: '0%', animationDelay: '2s' }} />
          {/* Header */}
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </div>
        {/* Chatbot Widget */}
        <ChatbotWidget />
      </body>
    </html>
  );
}