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
  title: 'Frequently Asked Questions - AI Closet Stylist',
  description: 'Find answers to common questions about AI Closet Stylist, including how it works, features, pricing, and privacy. Get instant insights about your wardrobe management app.',
  canonical: 'https://aiclosetstylist.com/faq',
};

export const metadata: Metadata = generateMetadata(seoData);

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does AI Closet Stylist work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI Closet Stylist uses computer vision to scan and digitize your wardrobe from photos. The app automatically identifies, categorizes, and catalogs clothing items, then provides AI-powered outfit recommendations, resale price estimates, and donation suggestions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to manually enter my clothing items?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No! AI Closet Stylist uses computer vision to automatically scan and identify your clothing items from photos. Zero manual data entry is required—just take photos of your clothes and the app does the rest.',
      },
    },
    {
      '@type': 'Question',
      name: 'How accurate are the resale price estimates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Resale price estimates are based on real-time data from resale marketplaces and consider factors like brand, condition, and market demand. While estimates are helpful guides, actual resale prices may vary based on marketplace conditions.',
      },
    },
  ],
};

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'FAQ', url: '/faq' },
];

export default function FAQPage() {
  return (
    <>
      <StructuredData data={faqSchema} />
      <Navigation items={navItems} />
      
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbs} />
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">How does AI Closet Stylist work?</h3>
                  <p className="text-gray-700">
                    AI Closet Stylist uses computer vision to scan and digitize your wardrobe from photos. The app automatically identifies, categorizes, and catalogs clothing items, then provides AI-powered outfit recommendations, resale price estimates, and donation suggestions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Do I need to manually enter my clothing items?</h3>
                  <p className="text-gray-700">
                    No! AI Closet Stylist uses computer vision to automatically scan and identify your clothing items from photos. Zero manual data entry is required—just take photos of your clothes and the app does the rest.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Features and Functionality</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">What features does AI Closet Stylist offer?</h3>
                  <p className="text-gray-700">
                    AI Closet Stylist offers automated wardrobe scanning, AI-powered outfit recommendations, resale price estimation, donation recommendations, digital closet organization, and style analytics.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">How accurate are the outfit recommendations?</h3>
                  <p className="text-gray-700">
                    Outfit recommendations improve with usage as the AI learns your style preferences. Recommendations are based on weather, occasion, personal style, and your existing wardrobe items.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing and Availability</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Is AI Closet Stylist free?</h3>
                  <p className="text-gray-700">
                    AI Closet Stylist offers a free tier with basic features. Premium features are available through subscription plans. Download the app to see current pricing.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Where can I download the app?</h3>
                  <p className="text-gray-700">
                    AI Closet Stylist is available on iOS and Android. Visit the product page for download links and more information.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Privacy and Data</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">How is my data protected?</h3>
                  <p className="text-gray-700">
                    We take privacy seriously. Your wardrobe data is stored securely and never shared with third parties without your consent. See our Privacy Policy for more details.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">How accurate are the resale price estimates?</h3>
                  <p className="text-gray-700">
                    Resale price estimates are based on real-time data from resale marketplaces and consider factors like brand, condition, and market demand. While estimates are helpful guides, actual resale prices may vary based on marketplace conditions.
                  </p>
                </div>
              </div>
            </section>

            <div className="mt-12">
              <p className="text-gray-700 text-lg mb-4">
                Still have questions? <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">Contact us</a> and we'll be happy to help.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer items={footerItems} />
    </>
  );
}


