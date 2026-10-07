import Image from 'next/image';

import ThemeToggle from '@/components/theme/theme-toggle';
import { siteConfig } from '@/config/site';

export default function Header() {
  return (
    <header className="flex items-start justify-between gap-4 border-b border-dashed px-5 py-8 sm:px-8 sm:py-10">
      <div className="flex items-center gap-4">
        <Image
          src="/icon.svg"
          alt=""
          width={56}
          height={56}
          priority
          className="size-14 shrink-0 rounded-xl"
        />

        <div>
          <h1 className="font-serif text-3xl leading-none tracking-tight sm:text-4xl">
            {siteConfig.name}
          </h1>

          <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
            <span>{siteConfig.role}</span>

            {siteConfig.availability.open && (
              <span className="inline-flex items-center gap-1.5">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-emerald-500"
                />
                {siteConfig.availability.label}
              </span>
            )}
          </p>
        </div>
      </div>

      <ThemeToggle />
    </header>
  );
}
