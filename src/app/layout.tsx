import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import StickyConsultation from '@/components/StickyConsultation';
import LoadingScreen from '@/components/LoadingScreen';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Dizital Vigyapan | Digital Marketing Agency in Bareilly | SEO, Ads & Lead Generation',
  description:
    'Dizital Vigyapan is a results-driven digital marketing agency in Bareilly. We offer Meta Ads, Google Ads, SEO, Social Media Marketing, Website Design, Graphic Designing & Lead Generation to grow your business.',
  keywords: [
    'digital marketing agency bareilly',
    'dizital vigyapan',
    'SEO services bareilly',
    'google ads agency',
    'meta ads facebook instagram',
    'social media marketing',
    'website design bareilly',
    'lead generation india',
    'graphic designing',
    'digital marketing agency india',
  ],
  authors: [{ name: 'Dizital Vigyapan' }],
  openGraph: {
    title: 'Dizital Vigyapan | Digital Marketing Agency in Bareilly',
    description:
      'Transform your business with data-driven digital marketing. Meta Ads, Google Ads, SEO, Social Media Marketing & more.',
    url: 'https://www.dizitalvigyapan.com',
    siteName: 'Dizital Vigyapan',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dizital Vigyapan | Digital Marketing Agency in Bareilly',
    description:
      'Results-driven digital marketing agency offering SEO, Ads, SMM, Website Design & Lead Generation.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.dizitalvigyapan.com',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Dizital Vigyapan',
  description: 'Full-service digital marketing agency in Bareilly offering SEO, Google Ads, Meta Ads, Social Media Marketing, Website Design, and Lead Generation services.',
  url: 'https://www.dizitalvigyapan.com',
  telephone: '+918899316670',
  email: 'dizitalvigyapan@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bisalpur Road Near Green Park',
    addressLocality: 'Bareilly',
    addressRegion: 'Uttar Pradesh',
    postalCode: '243005',
    addressCountry: 'IN',
  },
  founder: {
    '@type': 'Person',
    name: 'Pramod Diwakar',
    jobTitle: 'Founder & Digital Marketing Strategist',
  },
  sameAs: [
    'https://www.facebook.com/Dizitalvigyapan',
    'https://www.instagram.com/dizitalvigyapan',
    'https://www.linkedin.com/company/84350027',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}>
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <StickyConsultation />
      </body>
    </html>
  );
}
