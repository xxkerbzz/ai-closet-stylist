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
  title: 'About AI Closet Stylist - Smart Wardrobe Management',
  description: 'Learn about AI Closet Stylist, the app that transforms wardrobe management through automated scanning, AI-powered outfit recommendations, and intelligent resale and donation suggestions.',
  canonical: 'https://aiclosetstylist.com/about',
};

export const metadata: Metadata = generateMetadata(seoData);

const organizationSchema = {
  '@type': 'Organization',
  name: 'AI Closet Stylist',
  url: 'https://aiclosetstylist.com',
  description: 'AI-powered wardrobe management app that scans wardrobes and suggests outfits, resale prices, and donation recommendations',
  sameAs: [],
};

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
];

export default function AboutPage() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <Navigation items={navItems} />
      
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbs} />
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About AI Closet Stylist</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4 text-lg">
                AI Closet Stylist exists to transform wardrobe management from a manual, time-consuming process into an automated, intelligent system. We believe everyone should have complete visibility into their wardrobe with zero manual data entry, receive personalized outfit suggestions, and make informed decisions about resale and donation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why We Built This</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Traditional wardrobe management requires countless hours of manual work. Users forget what's in their closet, struggle to create new outfit combinations, and lack information about resale value and donation suitability when decluttering. We built AI Closet Stylist to solve these problems through automation and intelligence.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Problem We're Solving</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Users face three main pain points: they forget what's in their closet leading to duplicate purchases, they struggle to create new outfit combinations defaulting to the same few looks, and they lack information about resale value and donation suitability when decluttering.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision for Sustainable Fashion</h2>
              <p className="text-gray-700 mb-4 text-lg">
                We envision a future where fashion-conscious consumers maximize their clothing's value through intelligent systems that help them make informed decisions about resale and donation, reducing fashion waste while supporting sustainability.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Team</h2>
              <p className="text-gray-700 mb-4 text-lg">
                We're a team of fashion enthusiasts, technologists, and sustainability advocates working to make wardrobe management effortless and intelligent.
              </p>
            </section>

            <div className="mt-12">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-block"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer items={footerItems} />
    </>
  );
}
