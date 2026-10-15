import Image from 'next/image';

import { siteConfig } from '@/config/site';

export default function Loading() {
  return (
    <div
      aria-busy="true"
      className="flex min-h-svh flex-col items-center justify-center gap-4"
    >
      <Image
        src="/icon.svg"
        alt=""
        width={48}
        height={48}
        preload
        unoptimized
        className="size-12 motion-safe:animate-pulse"
      />

      <span role="status" className="text-sm font-medium text-muted-foreground">
        Loading {siteConfig.name}
      </span>
    </div>
  );
}
