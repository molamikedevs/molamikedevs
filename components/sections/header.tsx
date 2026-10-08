import Image from 'next/image';

import SectionRow from '@/components/common/section-row';
import ThemeToggle from '@/components/theme/theme-toggle';
import { siteConfig } from '@/config/site';

export default function Header() {
  return (
    <header>
      <SectionRow
        rail={
          <Image
            src="/icon.svg"
            alt=""
            width={56}
            height={56}
            preload
            className="size-12 rounded-xl sm:ml-auto sm:size-14"
          />
        }
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-serif text-4xl leading-none tracking-tight sm:text-5xl">
              {siteConfig.name}
            </h1>

            <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
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

            <p className="mt-2 font-serif text-[17px] leading-6 text-foreground/80 italic">
              {siteConfig.person}
            </p>
          </div>

          <ThemeToggle />
        </div>
      </SectionRow>
    </header>
  );
}
