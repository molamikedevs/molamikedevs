import RailLabel from '@/components/common/rail-label';
import SectionRow from '@/components/common/section-row';
import { skillGroups } from '@/constants/index';

export default function Stack() {
  return (
    <section aria-labelledby="stack">
      <SectionRow rail={<RailLabel id="stack">Stack</RailLabel>}>
        <dl className="grid gap-y-6">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="grid gap-x-6 gap-y-2.5 sm:grid-cols-[5.5rem_1fr]"
            >
              <dt className="text-sm leading-7 font-medium">{group.label}</dt>

              <dd>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map(({ name, icon: Icon }) => (
                    <li
                      key={name}
                      className="inline-flex h-7 items-center gap-1.5 rounded-md border px-2.5 text-[13px]"
                    >
                      <Icon
                        aria-hidden="true"
                        className="size-3.5 text-muted-foreground"
                      />
                      {name}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </SectionRow>
    </section>
  );
}
