import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import { site, images } from '@/lib/content';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description:
    "SEO, Google Ads, websites, and growth consulting for Palm Beach businesses. 3x your leads in 90 days — guaranteed. Free strategy call + $500 ad credit.",
  keywords: [
    'Palm Beach SEO',
    'Palm Beach marketing agency',
    'Google Ads Palm Beach',
    'West Palm Beach marketing',
    'local SEO Palm Beach',
    'Shopify development Palm Beach',
  ],
  authors: [{ name: 'Matthew Durn' }],
  creator: 'Grow Palm Beach',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description:
      "SEO, Google Ads, websites, and growth consulting for Palm Beach businesses. 3x your leads in 90 days — guaranteed.",
    images: images.ogImage
      ? [{ url: images.ogImage, width: 1200, height: 630, alt: site.name }]
      : [],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: '3x your leads in 90 days — guaranteed. Palm Beach growth marketing.',
    images: images.ogImage ? [images.ogImage] : [],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: site.url },
};

// Structured data for local SEO (Google rich results)
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  description: 'Palm Beach growth marketing agency. SEO, paid ads, websites, and consulting.',
  url: site.url,
  telephone: site.phoneRaw,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '700 S Rosemary Ave Ste 204',
    addressLocality: 'West Palm Beach',
    addressRegion: 'FL',
    postalCode: '33401',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.7056,
    longitude: -80.0571,
  },
  priceRange: '$$',
  areaServed: 'Palm Beach County, Florida',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
