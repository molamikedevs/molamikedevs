import { ArrowUpRight } from 'lucide-react';

import SectionRow from '@/components/common/section-row';
import { siteConfig } from '@/config/site';

const SOURCE_URL = `${siteConfig.links.github}/molamikedevs`;

export default function Footer() {
  return (
    <footer>
      <SectionRow className="border-b-0">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>

          <a
            href={SOURCE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 underline underline-offset-4 transition-colors hover:text-foreground"
          >
            View source
            <ArrowUpRight aria-hidden="true" className="size-3" />
          </a>
        </div>
      </SectionRow>
    </footer>
  );
}
