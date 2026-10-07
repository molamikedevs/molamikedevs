import type { Metadata, Viewport } from 'next';

export const siteConfig = {
  name: 'Molamike Devs',
  shortName: 'molamike',
  role: 'Software Developer',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  description:
    'Software developer building fast, accessible web apps with React, Next.js and TypeScript, backed by PostgreSQL and Supabase.',
  email: 'molamikedevs@gmail.com',
  availability: {
    open: true,
    label: 'Open to junior roles',
  },
  links: {
    github: 'https://github.com/molamikedevs',
    linkedin: 'https://www.linkedin.com/in/molamikedevs',
  },
  cv: {
    path: '/cv.pdf',
    available: false,
  },
} as const;

const title = `${siteConfig.name} | ${siteConfig.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Software Developer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    siteConfig.name,
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
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name}, ${siteConfig.role}`,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title,
    description: siteConfig.description,
    images: ['/og-image.png'],
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
  themeColor: '#0a1220',
  width: 'device-width',
  initialScale: 1,
};
