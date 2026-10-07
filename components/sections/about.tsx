import { ArrowUpRight } from 'lucide-react';

import RailLabel from '@/components/common/rail-label';
import SectionRow from '@/components/common/section-row';
import { links } from '@/constants/index';

export default function About() {
  return (
    <section aria-labelledby="about">
      <SectionRow rail={<RailLabel id="about">About</RailLabel>}>
        <p className="max-w-[62ch] text-lg leading-8">
          I teach English, and I build the software my students learn on. I am a
          self-taught developer working in React and Next.js, with solid
          fundamentals in JavaScript and software architecture.
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex h-8 items-center gap-1.5 rounded-md border bg-secondary px-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent"
              >
                {link.label}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 text-muted-foreground"
                />
              </a>
            </li>
          ))}
        </ul>
      </SectionRow>
    </section>
  );
}
