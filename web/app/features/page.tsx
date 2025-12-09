import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';
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
  title: 'Features - AI Closet Stylist App',
  description: 'Discover AI Closet Stylist features including automated wardrobe scanning, AI outfit recommendations, resale price estimation, donation suggestions, and style analytics.',
  canonical: 'https://aiclosetstylist.com/features',
};

export const metadata: Metadata = generateMetadata(seoData);

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'Features', url: '/features' },
];

export default function FeaturesPage() {
  return (
    <>
      <Navigation items={navItems} />
      
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbs} />
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Features</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Wardrobe Scanning</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Computer vision automatically identifies, categorizes, and catalogs clothing items from photos. No manual entry required—just take photos and the app does the rest.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Outfit Recommendations</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Machine learning suggests outfit combinations based on weather, occasion, personal style, and existing wardrobe items. Discover new combinations you never thought of.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Resale Price Estimation</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Integration with resale marketplaces provides real-time price estimates for items based on brand, condition, and market demand. Make informed decisions about what to sell.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Donation Recommendations</h2>
              <p className="text-gray-700 mb-4 text-lg">
                AI identifies items suitable for donation based on condition, style trends, and user's wearing patterns. Support sustainability while decluttering your wardrobe.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Digital Closet Organization</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Searchable, filterable digital inventory with tags, categories, and outfit history. Find exactly what you're looking for in seconds.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Style Analytics</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Insights on most/least worn items, outfit frequency, and wardrobe gaps. Make smarter purchasing decisions based on data.
              </p>
            </section>

            <div className="mt-12">
              <Link
                href="/product"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-block"
              >
                Try All Features Free
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer items={footerItems} />
    </>
  );
}
