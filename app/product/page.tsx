import Link from 'next/link';
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
  title: 'AI Closet Stylist - Smart Wardrobe Management App',
  description: 'AI Closet Stylist digitizes your wardrobe in minutes. Get AI-powered outfit suggestions, discover resale values, and identify items to donate—all from photos of your clothes.',
  canonical: 'https://aiclosetstylist.com/product',
};

export const metadata: Metadata = generateMetadata(seoData);

const softwareSchema = {
  '@type': 'SoftwareApplication',
  name: 'AI Closet Stylist',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'Product', url: '/product' },
];

export default function ProductPage() {
  return (
    <>
      <StructuredData data={softwareSchema} />
      <Navigation items={navItems} />
      
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbs} />
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AI Closet Stylist</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Entire Wardrobe, Digitized in Minutes</h2>
              <p className="text-gray-700 mb-4 text-lg">
                AI Closet Stylist uses computer vision to automatically scan and digitize your wardrobe from photos. No manual entry required—just take photos of your clothes and the app does the rest.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Outfit Recommendations</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Get personalized outfit suggestions based on weather, occasion, personal style, and your existing wardrobe items. Discover new combinations you never thought of.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Resale Price Estimates</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Discover the resale value of your clothing items with real-time price estimates from resale marketplaces. Make informed decisions about what to keep, sell, or donate.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Donation Recommendations</h2>
              <p className="text-gray-700 mb-4 text-lg">
                AI identifies items suitable for donation based on condition, style trends, and your wearing patterns. Support sustainability while decluttering your wardrobe.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Style Analytics</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Gain insights into your wardrobe with analytics on most/least worn items, outfit frequency, and wardrobe gaps. Make smarter purchasing decisions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
                <li>Take photos of your clothing items</li>
                <li>AI automatically identifies and categorizes each item</li>
                <li>Get outfit recommendations, resale prices, and donation suggestions</li>
                <li>Manage your digital closet with searchable, filterable inventory</li>
              </ol>
            </section>

            <div className="mt-12">
              <Link
                href="/features"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-block mr-4"
              >
                View Features
              </Link>
              <Link
                href="/contact"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-block"
              >
                Download the App
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer items={footerItems} />
    </>
  );
}


