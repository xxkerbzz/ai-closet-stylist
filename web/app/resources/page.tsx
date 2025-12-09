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
  title: 'Resources - AI Closet Stylist',
  description: 'Explore comprehensive guides on AI-powered wardrobe management, digital closet organization, and sustainable fashion practices. Learn how to maximize your wardrobe\'s value.',
  canonical: 'https://aiclosetstylist.com/resources',
};

export const metadata: Metadata = generateMetadata(seoData);

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'Resources', url: '/resources' },
];

const pillars = [
  {
    title: 'AI-Powered Wardrobe Management',
    url: '/resources/ai-powered-wardrobe-management',
    description: 'Discover how AI-powered wardrobe management uses computer vision and machine learning to digitize closets, suggest outfits, and maximize clothing value.',
  },
  {
    title: 'Digital Closet Organization',
    url: '/resources/digital-closet-organization',
    description: 'Learn how digital closet organization systems help you manage your wardrobe inventory, plan outfits, and gain style insights from your clothing collection.',
  },
  {
    title: 'Sustainable Fashion Practices',
    url: '/resources/sustainable-fashion-practices',
    description: 'Learn sustainable fashion practices including clothing resale strategies, donation decision-making, and wardrobe decluttering methods to reduce fashion waste.',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Navigation items={navItems} />
      
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Resources</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guides on wardrobe management, digital organization, and sustainable fashion practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <Link
                key={pillar.url}
                href={pillar.url}
                className="group block bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all duration-200"
              >
                <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-4">
                  {pillar.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>
                <span className="inline-flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                  Read guide
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer items={footerItems} />
    </>
  );
}
