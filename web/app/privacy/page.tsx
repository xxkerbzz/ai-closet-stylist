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
  title: 'Privacy Policy - AI Closet Stylist',
  description: 'Read AI Closet Stylist\'s privacy policy to understand how we collect, use, and protect your personal information and wardrobe data.',
  canonical: 'https://aiclosetstylist.com/privacy',
};

export const metadata: Metadata = generateMetadata(seoData);

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'Privacy', url: '/privacy' },
];

export default function PrivacyPage() {
  return (
    <>
      <Navigation items={navItems} />
      
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbs} />
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4 text-lg">
                We collect information you provide directly to us, including photos of your clothing items, account information, and usage data. We also collect information automatically when you use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4 text-lg">
                We use your information to provide, maintain, and improve our services, including generating outfit recommendations, resale price estimates, and donation suggestions. We also use your information to communicate with you and personalize your experience.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4 text-lg">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your wardrobe data is stored securely and never shared with third parties without your consent.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4 text-lg">
                You have the right to access, update, or delete your personal information at any time. You can also opt out of certain data collection and processing activities through your account settings.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4 text-lg">
                If you have questions about this Privacy Policy, please contact us through our contact page or email us directly.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer items={footerItems} />
    </>
  );
}
