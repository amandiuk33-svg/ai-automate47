import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChatbotWidget } from '@/components/ChatbotWidget';
import { getContent } from '@/lib/content';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

let config: any;
try {
  config = getContent();
} catch {
  config = {
    site: {
      name: 'AiAutomate47',
      tagline: 'Empowering small businesses with AI-powered automation.',
      email: 'hello@aiautomate47.com',
      phone: '(555) 123-4567',
      location: 'US',
      twitterUrl: 'https://twitter.com/aiautomate47',
      linkedinUrl: 'https://linkedin.com/company/aiautomate47',
      twitterHandle: '@aiautomate47',
    },
    meta: {
      layout: {
        title: 'AI Consultant for Small Business | AiAutomate47',
        description: 'AI consultancy and automation for US small businesses.',
        keywords: ['AI consultancy', 'AI consultant', 'AI automation small business'],
      },
    },
  };
}

export const metadata: Metadata = {
  title: {
    template: '%s | AiAutomate47',
    default: config.meta.layout.title,
  },
  description: config.meta.layout.description,
  keywords: config.meta.layout.keywords,
  authors: [{ name: config.site.name }],
  creator: config.site.name,
  publisher: config.site.name,
  robots: 'index, follow',
  openGraph: {
    title: config.meta.layout.title,
    description: config.meta.layout.description,
    url: 'https://aiautomate47.com',
    siteName: config.site.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/logo.svg',
        width: 64,
        height: 64,
        alt: `${config.site.name} Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: config.meta.layout.title,
    description: config.meta.layout.description,
    images: ['/assets/logo.svg'],
    creator: config.site.twitterHandle,
  },
  manifest: '/manifest.json',
  themeColor: '#00FFEF',
  icons: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/favicon.svg',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/svg+xml',
      url: '/assets/logo.svg',
    },
  ],
  other: {
    'google-site-verification': '_dQtoQYCuFZ1EzWe7a5-dNfkzNgLMYOaSH5EL4HZKsg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans relative overflow-x-hidden`}>
        {/* SEO/AEO/GEO Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              '@id': 'https://aiautomate47.com#organization',
              name: config.site.name,
              alternateName: `${config.site.name} AI Consultancy`,
              description: config.meta.layout.description,
              url: 'https://aiautomate47.com',
              telephone: config.site.phone,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'United States',
                addressCountry: 'US',
              },
              areaServed: {
                '@type': 'Country',
                name: 'United States',
              },
              availableChannel: {
                '@type': 'ServiceChannel',
                serviceLocation: {
                  '@type': 'Place',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'United States',
                    addressCountry: 'US',
                  },
                },
              },
              serviceType: [
                'AI Consulting',
                'AI Consultancy',
                'Workflow Automation',
                'AI Dashboard Development',
                'AI Asset Generation',
                'Social Media Management AI',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'AI Services',
                itemOffered: [
                  {
                    '@type': 'Service',
                    name: 'AI Consultancy for Small Business',
                    description: 'Strategic AI consulting tailored for small businesses',
                  },
                  {
                    '@type': 'Service',
                    name: 'AI Workflow Automation',
                    description: 'AI-powered workflow automation for business efficiency',
                  },
                  {
                    '@type': 'Service',
                    name: 'Custom AI Dashboard Development',
                    description: 'Custom AI-powered dashboards for small business',
                  },
                  {
                    '@type': 'Service',
                    name: 'AI Asset Generation',
                    description: 'AI image, text, and video generation for business',
                  },
                  {
                    '@type': 'Service',
                    name: 'Social Media Management AI',
                    description: 'AI-powered social media management and automation',
                  },
                ],
              },
              logo: {
                '@type': 'ImageObject',
                url: 'https://aiautomate47.com/assets/logo.svg',
              },
              image: {
                '@type': 'ImageObject',
                url: 'https://aiautomate47.com/assets/logo.svg',
              },
              sameAs: [
                'https://twitter.com/aiautomate47',
                'https://linkedin.com/company/aiautomate47',
              ],
              founder: {
                '@type': 'Person',
                name: 'AiAutomate47 Founder',
              },
              foundingDate: '2024',
              brand: {
                '@type': 'Brand',
                name: 'AiAutomate47',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://aiautomate47.com#website',
              url: 'https://aiautomate47.com/',
              name: 'AiAutomate47',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://aiautomate47.com/search?q={search_term}',
                'query-input': 'required name=search_term',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://aiautomate47.com',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Services',
                  item: 'https://aiautomate47.com/services',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Pricing',
                  item: 'https://aiautomate47.com/pricing',
                },
                {
                  '@type': 'ListItem',
                  position: 4,
                  name: 'Contact',
                  item: 'https://aiautomate47.com/contact',
                },
              ],
            }),
          }}
        />
        {/* AI Neural Network Background */}
        <div className="fixed inset-0 z-0 ai-bg-grid overflow-hidden pointer-events-none">
          <div className="ai-grid-glow" />

          {/* Neural Network SVG */}
          <svg className="w-full h-full absolute inset-0" style={{ overflow: 'visible' }}>
            <defs>
              <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Layer 1: Input Layer */}
            <g className="neural-layer-1">
              <circle cx="10%" cy="15%" r="3" fill="#00FFEF" filter="url(#neonGlow)" className="ai-neural-node-interactive" />
              <circle cx="10%" cy="35%" r="3" fill="#00FFEF" filter="url(#neonGlow)" className="ai-neural-node-interactive" />
              <circle cx="10%" cy="55%" r="3" fill="#00FFEF" filter="url(#neonGlow)" className="ai-neural-node-interactive" />
              <circle cx="10%" cy="75%" r="3" fill="#00FFEF" filter="url(#neonGlow)" className="ai-neural-node-interactive" />
              <circle cx="10%" cy="90%" r="2.5" fill="#00FFEF" filter="url(#neonGlow)" className="ai-neural-node-interactive" />
            </g>

            {/* Layer 2: Hidden Layer 1 */}
            <g className="neural-layer-2">
              <circle cx="35%" cy="10%" r="3.5" fill="#00FFEF" filter="url(#neonGlow)" className="ai-neural-node-interactive" />
              <circle cx="35%" cy="30%" r="3.5" fill="#00FFEF" filter="url(#neonGlow)" className="ai-neural-node-interactive" />
              <circle cx="35%" cy="50%" r="3.5" fill="#00FFEF" filter="url(#neonGlow)" className="ai-neural-node-interactive" />
              <circle cx="35%" cy="70%" r="3.5" fill="#00FFEF" filter="url(#neonGlow)" className="ai-neural-node-interactive" />
              <circle cx="35%" cy="90%" r="3" fill="#00FFEF" filter="url(#neonGlow)" className="ai-neural-node-interactive" />
            </g>

            {/* Layer 3: Hidden Layer 2 */}
            <g className="neural-layer-3">
              <circle cx="65%" cy="15%" r="3" fill="#00FFEF" filter="url(#neonGlow)" className="ai-neural-node-interactive" />
              <circle cx="65%" cy="35%" r="3" fill="#00FFEF" filter="url(#neonGlow)" className="ai-neural-node-interactive" />
              <circle cx="65%" cy="55%" r="3" fill="#00FFEF" filter="url(#neonGlow)" className="ai-neural-node-interactive" />
              <circle cx="65%" cy="75%" r="3" fill="#00FFEF" filter="url(#neonGlow)" className="ai-neural-node-interactive" />
              <circle cx="65%" cy="90%" r="2.5" fill="#00FFEF" filter="url(#neonGlow)" className="ai-neural-node-interactive" />
            </g>

            {/* Layer 4: Output Layer */}
            <g className="neural-layer-4">
              <circle cx="90%" cy="20%" r="3.5" fill="#FF00FF" filter="url(#neonGlow)" className="ai-neural-node-interactive" />
              <circle cx="90%" cy="50%" r="3.5" fill="#FF00FF" filter="url(#neonGlow)" className="ai-neural-node-interactive" />
              <circle cx="90%" cy="80%" r="3" fill="#FF00FF" filter="url(#neonGlow)" className="ai-neural-node-interactive" />
            </g>

            {/* Connections Layer 1 -> Layer 2 */}
            <line x1="10%" y1="15%" x2="35%" y2="10%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="10%" y1="15%" x2="35%" y2="30%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="10%" y1="35%" x2="35%" y2="10%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="10%" y1="35%" x2="35%" y2="50%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="10%" y1="35%" x2="35%" y2="70%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="10%" y1="55%" x2="35%" y2="30%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="10%" y1="55%" x2="35%" y2="50%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="10%" y1="55%" x2="35%" y2="90%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="10%" y1="75%" x2="35%" y2="50%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="10%" y1="75%" x2="35%" y2="70%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="10%" y1="75%" x2="35%" y2="90%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="10%" y1="90%" x2="35%" y2="70%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="10%" y1="90%" x2="35%" y2="90%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />

            {/* Connections Layer 2 -> Layer 3 */}
            <line x1="35%" y1="10%" x2="65%" y2="15%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="35%" y1="10%" x2="65%" y2="35%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="35%" y1="30%" x2="65%" y2="15%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="35%" y1="30%" x2="65%" y2="35%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="35%" y1="30%" x2="65%" y2="55%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="35%" y1="50%" x2="65%" y2="35%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="35%" y1="50%" x2="65%" y2="55%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="35%" y1="50%" x2="65%" y2="75%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="35%" y1="70%" x2="65%" y2="55%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="35%" y1="70%" x2="65%" y2="75%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="35%" y1="70%" x2="65%" y2="90%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="35%" y1="90%" x2="65%" y2="75%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="35%" y1="90%" x2="65%" y2="90%" stroke="#00FFEF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />

            {/* Connections Layer 3 -> Layer 4 */}
            <line x1="65%" y1="15%" x2="90%" y2="20%" stroke="#FF00FF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="65%" y1="15%" x2="90%" y2="50%" stroke="#FF00FF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="65%" y1="35%" x2="90%" y2="20%" stroke="#FF00FF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="65%" y1="35%" x2="90%" y2="50%" stroke="#FF00FF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="65%" y1="35%" x2="90%" y2="80%" stroke="#FF00FF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="65%" y1="55%" x2="90%" y2="50%" stroke="#FF00FF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="65%" y1="55%" x2="90%" y2="80%" stroke="#FF00FF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="65%" y1="75%" x2="90%" y2="50%" stroke="#FF00FF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="65%" y1="75%" x2="90%" y2="80%" stroke="#FF00FF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />
            <line x1="65%" y1="90%" x2="90%" y2="80%" stroke="#FF00FF" strokeWidth="1" strokeOpacity="0.3" className="ai-neural-connection-svg" />

            {/* Signal Pulses */}
            <circle cx="10%" cy="15%" r="2" fill="#00FFEF" filter="url(#neonGlow)">
              <animate attributeName="cx" values="10%;35%;65%;90%" dur="4s" repeatCount="indefinite" />
              <animate attributeName="cy" values="15%;10%;15%;20%" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0;1;0;1" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="10%" cy="35%" r="2" fill="#00FFEF" filter="url(#neonGlow)">
              <animate attributeName="cx" values="10%;35%;65%;90%" dur="5s" repeatCount="indefinite" />
              <animate attributeName="cy" values="35%;50%;55%;50%" dur="5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0;1;0;1" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle cx="10%" cy="55%" r="2" fill="#00FFEF" filter="url(#neonGlow)">
              <animate attributeName="cx" values="10%;35%;65%;90%" dur="4.5s" repeatCount="indefinite" />
              <animate attributeName="cy" values="55%;70%;75%;80%" dur="4.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0;1;0;1" dur="4.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="10%" cy="75%" r="2" fill="#00FFEF" filter="url(#neonGlow)">
              <animate attributeName="cx" values="10%;35%;65%;90%" dur="6s" repeatCount="indefinite" />
              <animate attributeName="cy" values="75%;50%;35%;20%" dur="6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0;1;0;1" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="10%" cy="90%" r="2" fill="#00FFEF" filter="url(#neonGlow)">
              <animate attributeName="cx" values="10%;35%;65%;90%" dur="5.5s" repeatCount="indefinite" />
              <animate attributeName="cy" values="90%;90%;75%;80%" dur="5.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0;1;0;1" dur="5.5s" repeatCount="indefinite" />
            </circle>
          </svg>

          {/* Data Streams */}
          <div className="ai-data-stream" style={{ left: '5%', animationDelay: '0s', height: '100px' }} />
          <div className="ai-data-stream" style={{ left: '25%', animationDelay: '1s', height: '140px' }} />
          <div className="ai-data-stream" style={{ left: '45%', animationDelay: '2s', height: '120px' }} />
          <div className="ai-data-stream" style={{ left: '65%', animationDelay: '0.5s', height: '110px' }} />
          <div className="ai-data-stream" style={{ left: '85%', animationDelay: '1.5s', height: '130px' }} />
        </div>

        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}