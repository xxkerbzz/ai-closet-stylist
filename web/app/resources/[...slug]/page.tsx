import { notFound } from 'next/navigation';
import { generateMetadata as generateSEOMetadata } from '@/app/lib/seo-utils';
import { getContentBySlug, getAllContentSlugs, getChildPages } from '@/app/components/templates/content';
import PillarTemplate from '@/app/components/templates/PillarTemplate';
import SubtopicTemplate from '@/app/components/templates/SubtopicTemplate';
import PAATemplate from '@/app/components/templates/PAATemplate';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import StructuredData from '@/app/components/StructuredData';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

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

export async function generateStaticParams() {
  const slugs = await getAllContentSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const content = await getContentBySlug(slug);
  
  if (!content) {
    return {
      title: 'Page Not Found | AI Closet Stylist',
    };
  }

  return generateSEOMetadata({
    title: content.frontmatter.metaTitle,
    description: content.frontmatter.metaDescription,
    canonical: `https://aiclosetstylist.com/resources/${slug.join('/')}`,
  });
}

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params;
  const content = await getContentBySlug(slug);

  if (!content) {
    notFound();
  }

  // Get child pages for pillar and subtopic pages
  const currentUrl = `/resources/${slug.join('/')}`;
  const childPages = await getChildPages(currentUrl);

  // Render the appropriate template with shared components
  if (content.frontmatter.template === 'pillar') {
    return (
      <PillarTemplate 
        content={content} 
        childPages={childPages}
        Navigation={() => <Navigation items={navItems} />}
        Footer={() => <Footer items={footerItems} />}
        Breadcrumbs={Breadcrumbs}
        StructuredData={StructuredData}
      />
    );
  }
  
  if (content.frontmatter.template === 'subtopic') {
    return (
      <SubtopicTemplate 
        content={content} 
        childPages={childPages}
        Navigation={() => <Navigation items={navItems} />}
        Footer={() => <Footer items={footerItems} />}
        Breadcrumbs={Breadcrumbs}
        StructuredData={StructuredData}
      />
    );
  }
  
  if (content.frontmatter.template === 'paa') {
    return (
      <PAATemplate 
        content={content}
        Navigation={() => <Navigation items={navItems} />}
        Footer={() => <Footer items={footerItems} />}
        Breadcrumbs={Breadcrumbs}
        StructuredData={StructuredData}
      />
    );
  }

  // Default to pillar template
  return (
    <PillarTemplate 
      content={content} 
      childPages={childPages}
      Navigation={() => <Navigation items={navItems} />}
      Footer={() => <Footer items={footerItems} />}
      Breadcrumbs={Breadcrumbs}
      StructuredData={StructuredData}
    />
  );
}
