import { Metadata } from 'next';
import { getContent } from '@/lib/content-read';

export const metadata: Metadata = {
  title: 'Contact AiAutomate47 | AI Consultation Booking',
  description: 'Contact AiAutomate47 for AI consultancy and automation services. Book a free consultation for your US small business. Custom AI dashboards and workflow automation.',
  keywords: ['AI consultant contact', 'AI automation consultation', 'book AI consultation', 'AI consulting services USA'],
  openGraph: {
    title: 'Contact AiAutomate47 | AI Consultation',
    description: 'Book a free AI consultation for your US small business.',
    type: 'website',
  },
};

export default async function Contact() {
  const config = await getContent();

  return (
    <div className="section-container">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">{config.contact.title}</h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">{config.contact.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="glass-card p-8">
          <h3 className="text-2xl font-display font-bold text-white mb-6">{config.contact.heading}</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 text-neon-cyan flex items-center justify-center">
                📧
              </div>
              <div>
                <h4 className="text-white font-medium">{config.contact.emailLabel}</h4>
                <p className="text-white/60">{config.site.email}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 text-neon-cyan flex items-center justify-center">
                📞
              </div>
              <div>
                <h4 className="text-white font-medium">{config.contact.phoneLabel}</h4>
                <p className="text-white/60">{config.site.phone}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 text-neon-cyan flex items-center justify-center">
                📍
              </div>
              <div>
                <h4 className="text-white font-medium">{config.contact.locationLabel}</h4>
                <p className="text-white/60">{config.site.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8">
          <h3 className="text-2xl font-display font-bold text-white mb-6">{config.contact.formHeading}</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-white/70 text-sm mb-2">{config.contact.namePlaceholder}</label>
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                placeholder={config.contact.namePlaceholder}
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-2">{config.contact.emailLabel}</label>
              <input
                type="email"
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                placeholder={config.contact.emailPlaceholder}
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-2">{config.contact.businessTypeLabel}</label>
              <select className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan">
                <option>Retail</option>
                <option>Restaurant</option>
                <option>Professional Services</option>
                <option>E-commerce</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                placeholder={config.contact.messagePlaceholder}
              ></textarea>
            </div>
            <button
              type="submit"
              className="neon-button w-full py-3"
            >
              {config.contact.submitLabel}
            </button>
          </form>
        </div>
      </div>
      {/* LocalBusiness Schema for AEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://aiautomate47.com/contact#business',
            name: config.site.name,
            image: 'https://aiautomate47.com/assets/logo.svg',
            telephone: config.site.phone,
            email: config.site.email,
            url: 'https://aiautomate47.com/contact',
            address: {
              '@type': 'PostalAddress',
              addressLocality: config.site.location,
              addressCountry: 'US',
            },
            areaServed: {
              '@type': 'Country',
              name: 'United States',
            },
            priceRange: '$$',
            servesCustomerType: 'small business',
            serviceType: 'AI Consulting',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'AI Services',
            },
          }),
        }}
      />
    </div>
  );
}