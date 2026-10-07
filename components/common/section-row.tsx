import { cn } from 'cn';

type SectionRowProps = {
  rail?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export default function SectionRow({
  rail,
  children,
  className,
}: SectionRowProps) {
  return (
    <div className={cn('flex flex-col border-b border-dashed', className)}>
      <div className="mx-auto grid w-full max-w-page flex-1 grid-rows-[auto_1fr] sm:grid-cols-[var(--spacing-rail)_1fr] sm:grid-rows-1">
        <div className="px-5 pt-7 sm:border-r sm:border-brand/60 sm:px-4 sm:py-9 sm:text-right">
          {rail}
        </div>
        <div className="min-w-0 px-5 pt-3 pb-8 sm:px-8 sm:py-9">{children}</div>
      </div>
    </div>
  );
}
