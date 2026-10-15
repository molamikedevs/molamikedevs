import Image from 'next/image';

import type { ProjectImage } from '@/constants/index';

type ProjectFrameProps = {
  name: string;
  desktop?: ProjectImage;
  phone?: ProjectImage;
};

export default function ProjectFrame({
  name,
  desktop,
  phone,
}: ProjectFrameProps) {
  if (!desktop) {
    return (
      <div
        aria-hidden="true"
        className="hatch aspect-[16/10] rounded-lg border bg-muted"
      />
    );
  }

  return (
    <figure className="relative" aria-label={`${name} screenshots`}>
      <div className="overflow-hidden rounded-lg border bg-muted shadow-sm">
        <div
          aria-hidden="true"
          className="flex h-4 items-center gap-1 border-b bg-secondary px-2"
        >
          <span className="size-1.5 rounded-full bg-muted-foreground/40" />
          <span className="size-1.5 rounded-full bg-muted-foreground/40" />
          <span className="size-1.5 rounded-full bg-muted-foreground/40" />
        </div>

        <Image
          src={desktop.src}
          alt={desktop.alt}
          width={desktop.width}
          height={desktop.height}
          sizes="(min-width: 640px) 16rem, calc(100vw - 2.5rem)"
          className="block h-auto w-full"
        />
      </div>

      {phone && (
        <div className="absolute -right-2 -bottom-3 w-[30%] overflow-hidden rounded-[0.9rem] border-[3px] border-foreground/85 bg-foreground/85 shadow-lg sm:-right-3">
          <span
            aria-hidden="true"
            className="absolute top-1 left-1/2 z-10 h-1 w-1/3 -translate-x-1/2 rounded-full bg-foreground/85"
          />
          <Image
            src={phone.src}
            alt={phone.alt}
            width={phone.width}
            height={phone.height}
            sizes="(min-width: 640px) 5rem, 30vw"
            className="block h-auto w-full rounded-[0.65rem]"
          />
        </div>
      )}
    </figure>
  );
}
