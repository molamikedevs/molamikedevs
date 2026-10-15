'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

import { siteConfig } from '@/config/site';

// Keeps the phone's browser bar the same color as the page when the
// visitor switches between light and dark.
export default function ThemeColor() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;

    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;

    meta.setAttribute(
      'content',
      resolvedTheme === 'light'
        ? siteConfig.themeColors.light
        : siteConfig.themeColors.dark,
    );
  }, [resolvedTheme]);

  return null;
}
