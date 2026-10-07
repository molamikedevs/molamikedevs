import RailLabel from '@/components/common/rail-label';
import SectionRow from '@/components/common/section-row';
import { links } from '@/constants/index';
import { ArrowUpRight } from 'lucide-react';

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
          {links.map((link) => {
            // Websites and the CV open in a new tab. The email link does not.
            const opensInNewTab =
              link.href.startsWith('http') || link.href.endsWith('.pdf');

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={opensInNewTab ? '_blank' : undefined}
                  rel={opensInNewTab ? 'noreferrer' : undefined}
                  className="inline-flex h-8 items-center gap-1.5 rounded-md border bg-secondary px-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent"
                >
                  {link.label}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-3.5 text-muted-foreground"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </SectionRow>
    </section>
  );
}
