import type { Metadata } from 'next';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { cn } from 'cn';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <p className="font-serif text-8xl leading-none font-medium tracking-tight text-brand sm:text-9xl">
        404
      </p>

      <h1 className="mt-6 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
        Page not found.
      </h1>

      <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
        This page does not exist. Everything I have built is on the home page.
      </p>

      <Link
        href="/"
        className={cn(
          buttonVariants(),
          'mt-8 h-12 rounded-xl px-6 text-[15px] font-semibold',
        )}
      >
        Back to the portfolio
      </Link>
    </main>
  );
}
