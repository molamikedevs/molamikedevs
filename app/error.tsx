'use client';

import { RotateCw } from 'lucide-react';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <h1 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
        Something went wrong.
      </h1>

      <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
        This page did not load. Try again, or email me at{' '}
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-brand underline underline-offset-4"
        >
          {siteConfig.email}
        </a>{' '}
        if it keeps happening.
      </p>

      {error.digest && (
        <p className="mt-3 font-mono text-xs text-muted-foreground">
          Error code: {error.digest}
        </p>
      )}

      <Button onClick={reset} className="mt-8 h-11 rounded-xl px-5 text-[15px]">
        <RotateCw className="size-4" aria-hidden="true" />
        Try again
      </Button>
    </main>
  );
}
