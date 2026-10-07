import { ArrowUpRight } from 'lucide-react';

import RailLabel from '@/components/common/rail-label';
import RailNote from '@/components/common/rail-note';
import SectionRow from '@/components/common/section-row';
import { getContributions } from '@/lib/github';
import { describeDay, getMonthLabels } from '@/lib/utils';

// Index is the activity level from the API: 0 is none, 4 is the most.
const levelClasses = [
  'bg-chart-1',
  'bg-chart-2',
  'bg-chart-3',
  'bg-chart-4',
  'bg-chart-5',
];

const GITHUB_USERNAME = 'molamikedevs';
const PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;

export default async function Activity() {
  const contributions = await getContributions(GITHUB_USERNAME);

  if (!contributions) {
    return (
      <section aria-labelledby="activity">
        <SectionRow rail={<RailLabel id="activity">Activity</RailLabel>}>
          <p className="text-[15px] leading-7 text-muted-foreground">
            The activity graph could not load.{' '}
            <a
              href={PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-brand underline underline-offset-4"
            >
              See my activity on GitHub
            </a>
            .
          </p>
        </SectionRow>
      </section>
    );
  }

  const { total, days } = contributions;

  // Empty cells before the first day, so every row is one weekday.
  const offset = new Date(days[0].date).getUTCDay();
  const weeks = Math.ceil((offset + days.length) / 7);
  const columns = { gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` };

  return (
    <section aria-labelledby="activity">
      <SectionRow
        rail={
          <>
            <RailLabel id="activity">Activity</RailLabel>
            <RailNote>{total} contributions in the last year.</RailNote>
          </>
        }
      >
        <div
          aria-hidden="true"
          style={columns}
          className="mb-1.5 grid h-4 gap-px font-mono text-[10px] text-muted-foreground sm:gap-0.5"
        >
          {getMonthLabels(days, offset).map((label) => (
            <span
              key={`${label.month}-${label.column}`}
              style={{ gridColumnStart: label.column + 1 }}
              className="row-start-1 whitespace-nowrap max-sm:even:hidden"
            >
              {label.month}
            </span>
          ))}
        </div>

        <div
          role="img"
          aria-label={`${total} contributions on GitHub in the last year`}
          style={columns}
          className="grid grid-flow-col grid-rows-[repeat(7,auto)] gap-px sm:gap-0.5"
        >
          {Array.from({ length: offset }, (_, index) => (
            <span key={`empty-${index}`} />
          ))}

          {days.map((day) => (
            <span
              key={day.date}
              title={describeDay(day)}
              className={`aspect-square rounded-[1px] sm:rounded-[2px] ${levelClasses[day.level]}`}
            />
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4"
          >
            See it on GitHub
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>

          <p
            aria-hidden="true"
            className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground"
          >
            Less
            {levelClasses.map((levelClass) => (
              <span
                key={levelClass}
                className={`size-2.5 rounded-[2px] ${levelClass}`}
              />
            ))}
            More
          </p>
        </div>
      </SectionRow>
    </section>
  );
}
