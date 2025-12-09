import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Closet Stylist - Smart Wardrobe Management App',
  description: 'Your entire wardrobe, digitized in minutes. Get AI-powered outfit suggestions, discover resale values, and identify items to donate—all from photos of your clothes.',
  verification: {
    google: '0O86oBiQ5gnKWqCTxq2wa8kkeByLwtXaBmTmB96oLgU',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}


