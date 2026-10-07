import { siteConfig } from '@/config/site';

export const links = [
  { label: 'GitHub', href: siteConfig.links.github },
  { label: 'LinkedIn', href: siteConfig.links.linkedin },
  { label: 'Email', href: `mailto:${siteConfig.email}` },
  ...(siteConfig.cv.available
    ? [{ label: 'CV', href: siteConfig.cv.path }]
    : []),
];
