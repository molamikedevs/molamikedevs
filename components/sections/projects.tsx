import { cn } from 'cn';
import { ArrowUpRight } from 'lucide-react';

import ProjectFrame from '@/components/common/project-frame';
import RailLabel from '@/components/common/rail-label';
import RailNote from '@/components/common/rail-note';
import SectionRow from '@/components/common/section-row';
import { projects } from '@/constants/index';

export default function Projects() {
  return (
    <section aria-labelledby="projects">
      {projects.map((project, index) => (
        <SectionRow
          key={project.name}
          rail={
            <>
              {index === 0 && <RailLabel id="projects">Projects</RailLabel>}
              <RailNote>{project.note}</RailNote>
            </>
          }
        >
          <article className="grid gap-6 sm:grid-cols-[16rem_1fr] sm:gap-7">
            <ProjectFrame
              name={project.name}
              desktop={project.desktop}
              phone={project.phone}
            />

            <div className="min-w-0">
              <h3 className="text-lg leading-6 font-semibold">
                {project.name}
              </h3>

              <p className="mt-1.5 text-[15px] leading-7 text-muted-foreground">
                {project.description}
              </p>

              {project.decision && (
                <p className="mt-3 text-[15px] leading-7">
                  <span className="font-medium">A decision I made: </span>
                  <span className="text-muted-foreground">
                    {project.decision}
                  </span>
                </p>
              )}

              <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {project.demoNote && (
                <p className="mt-4 font-serif text-[15px] leading-6 text-brand italic">
                  {project.demoNote}
                </p>
              )}

              <ul
                className={cn(
                  'flex flex-wrap gap-x-5 text-sm font-medium',
                  project.demoNote ? 'mt-1' : 'mt-3',
                )}
              >
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        'inline-flex min-h-11 items-center gap-1 underline underline-offset-4 sm:min-h-8',
                        link.primary && 'text-brand',
                      )}
                    >
                      {link.label}
                      <span className="sr-only">
                        {' '}
                        for {project.name}, opens in a new tab
                      </span>
                      <ArrowUpRight aria-hidden="true" className="size-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </SectionRow>
      ))}
    </section>
  );
}
