import Link from 'next/link';

interface FooterItem {
  label: string;
  url: string;
}

interface FooterProps {
  items: FooterItem[];
}

export default function Footer({ items }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">AI Closet Stylist</h3>
            <p className="text-gray-200 mb-4">
              Your entire wardrobe, digitized in minutes. Get AI-powered outfit suggestions, 
              discover resale values, and identify items to donate—all from photos of your clothes.
            </p>
            <p className="text-sm text-gray-300">
              Transform wardrobe management from a chore into an intelligent system.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get Started</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/product"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} AI Closet Stylist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
