import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

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
          <article className="grid gap-5 sm:grid-cols-[11rem_1fr]">
            {project.image ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-muted">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.name}`}
                  fill
                  sizes="(min-width: 640px) 11rem, 100vw"
                  className="object-cover object-top"
                />
              </div>
            ) : (
              <div
                aria-hidden="true"
                className="hatch aspect-[4/3] rounded-lg border bg-muted"
              />
            )}

            <div>
              <h3 className="text-lg leading-6 font-semibold">
                {project.name}
              </h3>

              <p className="mt-1.5 text-[15px] leading-7 text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-brand underline underline-offset-4"
                >
                  Open the live app
                  <span className="sr-only"> for {project.name}</span>
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </a>

                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 underline underline-offset-4"
                >
                  Read the code
                  <span className="sr-only"> for {project.name}</span>
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </a>
              </p>
            </div>
          </article>
        </SectionRow>
      ))}
    </section>
  );
}
