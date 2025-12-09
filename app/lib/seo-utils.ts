import { Metadata } from 'next';
import { SEOData } from '@/app/types/seo';

export function generateMetadata(seo: SEOData): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: {
      title: seo.ogTitle || seo.title,
      description: seo.ogDescription || seo.description,
      url: seo.ogUrl || seo.canonical,
      images: seo.ogImage ? [{ url: seo.ogImage }] : undefined,
      type: 'website',
      siteName: 'AI Closet Stylist',
    },
    twitter: {
      card: (seo.twitterCard as 'summary' | 'summary_large_image') || 'summary_large_image',
      title: seo.twitterTitle || seo.title,
      description: seo.twitterDescription || seo.description,
      images: seo.twitterImage ? [seo.twitterImage] : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}


