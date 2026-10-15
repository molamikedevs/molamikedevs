import type { Metadata, Viewport } from 'next';

export const siteConfig = {
  name: 'Molamike Devs',
  person: 'Lamin Foday',
  shortName: 'molamike',
  role: 'Software Developer',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://molamikedevs.com',
  description:
    'Lamin Foday, software developer in Baku relocating to Dubai. I build fast, accessible web apps with React, Next.js and TypeScript, backed by PostgreSQL and Supabase.',
  email: 'molamikedevs@gmail.com',
  location: {
    label: 'Baku, relocating to Dubai, January 2027',
    city: 'Baku',
    countryCode: 'AZ',
  },
  availability: {
    open: true,
    label: 'Open to junior roles',
  },
  location: {
    label: 'Baku, relocating to Dubai, January 2027',
    city: 'Baku',
    countryCode: 'AZ',
  },
  links: {
    github: 'https://github.com/molamikedevs',
    linkedin: 'https://www.linkedin.com/in/molamikedevs',
  },
  cv: {
    path: '/cv.pdf',
    available: true,
  },
  // Browser bar colors. Must match --background in globals.css for each theme.
  themeColors: {
    light: '#f5f2ec',
    dark: '#0a1220',
  },
} as const;

const title = `${siteConfig.name} | ${siteConfig.person}, ${siteConfig.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.person, url: siteConfig.url }],
  creator: siteConfig.person,
  publisher: siteConfig.name,
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Software Developer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Junior Developer Dubai',
    'Baku',
    siteConfig.name,
    siteConfig.person,
  ],

  alternates: {
    canonical: '/',
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: '/',
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
    firstName: 'Lamin',
    lastName: 'Foday',
    username: siteConfig.shortName,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name}, ${siteConfig.person}, ${siteConfig.role}`,
      },
    ],
  },

  // Uses the same image as Open Graph.
  twitter: {
    card: 'summary_large_image',
    title,
    description: siteConfig.description,
    images: [
      {
        url: '/og-image.png',
        alt: `${siteConfig.name}, ${siteConfig.person}, ${siteConfig.role}`,
      },
    ],
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  // Dark is the default theme. components/theme-color.tsx updates this
  // when the visitor switches theme.
  themeColor: siteConfig.themeColors.dark,
  width: 'device-width',
  initialScale: 1,
  // Lets content use the full screen on notched iPhones. Safe-area padding
  // keeps fixed elements clear of the notch and home indicator.
  viewportFit: 'cover',
};

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.person,
  alternateName: siteConfig.name,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  url: siteConfig.url,
  email: `mailto:${siteConfig.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.location.city,
    addressCountry: siteConfig.location.countryCode,
  },
  sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'PostgreSQL',
    'Supabase',
  ],
};
