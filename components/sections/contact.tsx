import { ArrowUpRight } from 'lucide-react';

import CopyButton from '@/components/common/copy-button';
import RailLabel from '@/components/common/rail-label';
import SectionRow from '@/components/common/section-row';
import { siteConfig } from '@/config/site';

export default function Contact() {
  return (
    <section aria-labelledby="contact" className="flex flex-1 flex-col">
      <SectionRow
        rail={<RailLabel id="contact">Contact</RailLabel>}
        className="flex-1"
      >
        <p className="max-w-[52ch] text-lg leading-8">
          I am looking for a junior developer role, remote or on-site. Email is
          the fastest way to reach me.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-serif text-2xl tracking-tight break-all underline decoration-brand/60 underline-offset-[6px] sm:text-3xl"
          >
            {siteConfig.email}
          </a>

          <CopyButton value={siteConfig.email} label="Copy address" />
        </div>

        <p className="mt-6 text-sm font-medium">
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 underline underline-offset-4"
          >
            Or message me on LinkedIn
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
        </p>
      </SectionRow>
    </section>
  );
}
