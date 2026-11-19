import siteConfig from '@/content/site-config.json';

export interface SiteConfig {
  site: {
    name: string;
    tagline: string;
    email: string;
    phone: string;
    location: string;
    founded: string;
    twitterUrl: string;
    linkedinUrl: string;
    twitterHandle: string;
  };
  home: {
    badge: string;
    title: string;
    subtitle: string;
    aiCards: string[];
    features: { icon: string; text: string }[];
    faqs: { question: string; answer: string }[];
  };
  about: {
    subtitle: string;
    missionParagraphs: string[];
    checklist: string[];
    founderYear: string;
    founderFocus: string;
    founderSpecialty: string;
    faqs: { question: string; answer: string }[];
  };
  services: {
    title: string;
    subtitle: string;
    description: string;
    cards: Array<{
      id: number;
      title: string;
      subtitle: string;
      description: string;
      icon: string;
      features: string[];
      color: string;
    }>;
    faqs: { question: string; answer: string }[];
  };
  pricing: {
    title: string;
    subtitle: string;
    description: string;
    plans: Array<{
      name: string;
      price: string;
      period: string;
      description: string;
      features: string[];
      cta: string;
      popular: boolean;
    }>;
    faqs: { question: string; answer: string }[];
  };
  caseStudies: {
    title: string;
    subtitle: string;
    description: string;
    faqs: { question: string; answer: string }[];
    studies: Array<{
      id: number;
      title: string;
      clientName: string;
      industry: string;
      challenge: string;
      solution: string;
      results: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    heading: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    formHeading: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    businessTypeLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
  };
  chatbot: {
    title: string;
    subtitle: string;
    greeting: string;
    defaultResponse: string;
    faqs: Record<string, string>;
  };
  dashboard: {
    title: string;
    subtitle: string;
    widgets: Array<{
      title: string;
      value: string;
      change: string;
      trend: 'up' | 'down';
      icon: string;
    }>;
    recentActivity: Array<{
      time: string;
      action: string;
      detail: string;
      status: 'success' | 'pending' | 'error';
    }>;
    ctaText: string;
    ctaLabel: string;
  };
  valueProp: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLabel: string;
    benefits: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  meta: Record<string, { title: string; description: string; keywords: string[] }>;
}

export function getContent(): SiteConfig {
  return siteConfig as SiteConfig;
}