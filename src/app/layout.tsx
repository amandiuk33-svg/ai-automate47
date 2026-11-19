import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Consultant for Small Business | AiAutomate47',
      description: 'AI consultancy and automation for US small businesses.',
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
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}