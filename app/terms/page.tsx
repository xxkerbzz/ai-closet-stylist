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
  title: 'Terms of Service - AI Closet Stylist',
  description: 'Read AI Closet Stylist\'s terms of service to understand the rules and guidelines for using our wardrobe management app and services.',
  canonical: 'https://aiclosetstylist.com/terms',
};

export const metadata: Metadata = generateMetadata(seoData);

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'Terms', url: '/terms' },
];

export default function TermsPage() {
  return (
    <>
      <Navigation items={navItems} />
      
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbs} />
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4 text-lg">
                By accessing or using AI Closet Stylist, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Use of the Service</h2>
              <p className="text-gray-700 mb-4 text-lg">
                You may use AI Closet Stylist for personal, non-commercial purposes only. You agree not to use the service in any way that violates any applicable laws or regulations, or infringes on the rights of others.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">User Content</h2>
              <p className="text-gray-700 mb-4 text-lg">
                You retain ownership of any content you upload to AI Closet Stylist, including photos of your clothing items. By uploading content, you grant us a license to use, store, and process that content to provide our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-4 text-lg">
                All content, features, and functionality of AI Closet Stylist are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4 text-lg">
                AI Closet Stylist is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the service, including but not limited to resale price estimates or donation recommendations.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer items={footerItems} />
    </>
  );
}


