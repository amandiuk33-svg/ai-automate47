import { Metadata } from 'next';

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

export default function Contact() {
  return (
    <div className="section-container">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Contact AiAutomate47 - AI Consultation Booking for US Small Business</h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          Have questions about AI automation? Ready to transform your small business? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="glass-card p-8">
          <h3 className="text-2xl font-display font-bold text-white mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 text-neon-cyan flex items-center justify-center">
                📧
              </div>
              <div>
                <h4 className="text-white font-medium">Email</h4>
                <p className="text-white/60">hello@aiautomate47.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 text-neon-cyan flex items-center justify-center">
                📞
              </div>
              <div>
                <h4 className="text-white font-medium">Phone</h4>
                <p className="text-white/60">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 text-neon-cyan flex items-center justify-center">
                📍
              </div>
              <div>
                <h4 className="text-white font-medium">Location</h4>
                <p className="text-white/60">Serving US Small Businesses Nationwide</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8">
          <h3 className="text-2xl font-display font-bold text-white mb-6">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-white/70 text-sm mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                placeholder="john@business.com"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-2">Business Type</label>
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
                placeholder="Tell us about your business and how we can help..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="neon-button w-full py-3"
            >
              Send Message
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
            name: 'AiAutomate47',
            image: 'https://aiautomate47.com/assets/logo.svg',
            telephone: '(555) 123-4567',
            email: 'hello@aiautomate47.com',
            url: 'https://aiautomate47.com/contact',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'United States',
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