import { Hero } from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Consultant for Small Business | AiAutomate47 - US AI Automation Agency',
  description: 'AiAutomate47 delivers AI consultancy, workflow automation, social media management, and AI asset generation for US small businesses. Book your free AI consultation today.',
  keywords: ['AI consultant for small business', 'AI consultancy USA', 'AI automation small business', 'workflow automation AI', 'custom AI dashboard', 'AI consultant pricing'],
  openGraph: {
    title: 'AI Consultant for Small Business | AiAutomate47',
    description: 'AI consultancy, workflow automation, and custom AI dashboards for US small businesses.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      {/* FAQPage Schema for AEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What does an AI consultant do for small businesses?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'An AI consultant helps small businesses identify AI opportunities, implement automation workflows, and train teams to use AI tools effectively for growth and efficiency.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much does AI consulting cost for small business?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI consulting for small businesses typically ranges from $150-$300 per hour or $2,000-$10,000 per month depending on project scope and ongoing support needs.',
                },
              },
              {
                '@type': 'Question',
                name: 'What AI automation services do you offer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We offer AI workflow automation, custom AI dashboards, AI asset generation, social media management AI, and end-to-end AI implementation for US small businesses.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does AI implementation take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most AI implementations for small businesses take 2-8 weeks depending on complexity, with initial automation workflows live within 2-4 weeks.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you serve businesses outside the USA?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our primary focus is US small businesses, but we can work with international clients on a case-by-case basis for AI consulting and automation projects.',
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}