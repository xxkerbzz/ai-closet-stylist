import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import StructuredData from '@/app/components/StructuredData';
import { generateMetadata } from '@/app/lib/seo-utils';
import type { Metadata } from 'next';

const navItems = [
  { label: 'Home', url: '/' },
  { label: 'Product', url: '/product' },
  { label: 'Features', url: '/features' },
  {
    label: 'Resources',
    url: '/resources',
    dropdown: [
      { label: 'AI-Powered Wardrobe Management', url: '/resources/ai-powered-wardrobe-management' },
      { label: 'Digital Closet Organization', url: '/resources/digital-closet-organization' },
      { label: 'Sustainable Fashion Practices', url: '/resources/sustainable-fashion-practices' },
    ],
  },
  { label: 'About', url: '/about' },
  { label: 'Contact', url: '/contact' },
];

const footerItems = [
  { label: 'About', url: '/about' },
  { label: 'Contact', url: '/contact' },
  { label: 'FAQ', url: '/faq' },
  { label: 'Privacy', url: '/privacy' },
  { label: 'Terms', url: '/terms' },
];

const seoData = {
  title: 'Contact AI Closet Stylist',
  description: 'Get in touch with AI Closet Stylist. We're here to help you maximize your wardrobe's value through automated organization, personalized styling, and intelligent recommendations.',
  canonical: 'https://aiclosetstylist.com/contact',
};

export const metadata: Metadata = generateMetadata(seoData);

const contactPageSchema = {
  '@type': 'ContactPage',
  name: 'AI Closet Stylist Contact',
  url: 'https://aiclosetstylist.com/contact',
};

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'Contact', url: '/contact' },
];

export default function ContactPage() {
  return (
    <>
      <StructuredData data={contactPageSchema} />
      <Navigation items={navItems} />
      
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbs} />
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Have questions about AI Closet Stylist? We're here to help. Reach out to us through the form below or email us directly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Options</h2>
              <p className="text-gray-700 mb-4 text-lg">
                For technical support, feature requests, or general inquiries, please use the contact form below. We typically respond within 24-48 hours.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Feedback and Suggestions</h2>
              <p className="text-gray-700 mb-4 text-lg">
                We value your feedback! If you have suggestions for improving AI Closet Stylist or ideas for new features, we'd love to hear from you.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Inquiries</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Interested in partnering with AI Closet Stylist? We're always looking for collaborations with fashion brands, resale marketplaces, and sustainable fashion organizations.
              </p>
            </section>

            <div className="bg-gray-50 p-8 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea id="message" name="message" rows={6} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer items={footerItems} />
    </>
  );
}
