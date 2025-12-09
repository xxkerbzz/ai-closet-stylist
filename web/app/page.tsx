import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
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
  title: 'AI Closet Stylist - Smart Wardrobe Management App',
  description: 'Your entire wardrobe, digitized in minutes. Get AI-powered outfit suggestions, discover resale values, and identify items to donate—all from photos of your clothes.',
  canonical: 'https://aiclosetstylist.com',
};

export const metadata: Metadata = generateMetadata(seoData);

const organizationSchema = {
  '@type': 'Organization',
  name: 'AI Closet Stylist',
  url: 'https://aiclosetstylist.com',
  description: 'AI-powered wardrobe management app that scans wardrobes and suggests outfits, resale prices, and donation recommendations',
  sameAs: [],
};

const websiteSchema = {
  '@type': 'WebSite',
  name: 'AI Closet Stylist',
  url: 'https://aiclosetstylist.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://aiclosetstylist.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <Navigation items={navItems} />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Your Entire Wardrobe, Digitized in Minutes
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Get AI-powered outfit suggestions, discover resale values, and identify items to donate—all from photos of your clothes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/product"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
                >
                  Download the App
                </Link>
                <Link
                  href="/features"
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors border-2 border-white"
                >
                  View Features
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transform Wardrobe Management Into an Intelligent System
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                No manual entry, instant insights, and actionable recommendations that save time and money.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Automated Scanning</h3>
                <p className="text-gray-600">
                  Computer vision automatically identifies, categorizes, and catalogs your clothing items from photos—zero manual entry required.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Outfit Recommendations</h3>
                <p className="text-gray-600">
                  Machine learning suggests outfit combinations based on weather, occasion, personal style, and your existing wardrobe items.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Value Analysis</h3>
                <p className="text-gray-600">
                  Get real-time resale price estimates and donation recommendations to maximize your clothing's value while supporting sustainability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Manage Your Wardrobe
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wardrobe Scanning</h3>
                <p className="text-gray-600 text-sm">
                  Computer vision automatically identifies, categorizes, and catalogs clothing items from photos.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Outfit Recommendations</h3>
                <p className="text-gray-600 text-sm">
                  Machine learning suggests outfit combinations based on weather, occasion, and personal style.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Resale Price Estimation</h3>
                <p className="text-gray-600 text-sm">
                  Integration with resale marketplaces provides real-time price estimates for items.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Donation Recommendations</h3>
                <p className="text-gray-600 text-sm">
                  AI identifies items suitable for donation based on condition, style trends, and wearing patterns.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Closet Organization</h3>
                <p className="text-gray-600 text-sm">
                  Searchable, filterable digital inventory with tags, categories, and outfit history.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Style Analytics</h3>
                <p className="text-gray-600 text-sm">
                  Insights on most/least worn items, outfit frequency, and wardrobe gaps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Wardrobe?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Download AI Closet Stylist and start digitizing your wardrobe in minutes.
            </p>
            <Link
              href="/product"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-block"
            >
              Download the App
            </Link>
          </div>
        </section>
      </main>

      <Footer items={footerItems} />
    </>
  );
}
