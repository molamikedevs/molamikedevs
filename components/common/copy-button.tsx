'use client';

import { Check, Copy } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type CopyButtonProps = {
  value: string;
  label: string;
};

type CopyStatus = 'idle' | 'copied' | 'failed';

// Copies `value` to the clipboard and confirms it for two seconds.
export default function CopyButton({ value, label }: CopyButtonProps) {
  const [status, setStatus] = useState<CopyStatus>('idle');
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  async function copyValue() {
    try {
      await navigator.clipboard.writeText(value);
      setStatus('copied');
    } catch {
      setStatus('failed');
    }

    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setStatus('idle'), 2000);
  }

  const text =
    status === 'copied'
      ? 'Copied'
      : status === 'failed'
        ? 'Could not copy'
        : label;
  const Icon = status === 'copied' ? Check : Copy;

  return (
    <button
      type="button"
      onClick={copyValue}
      className="inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-md border bg-secondary px-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent"
    >
      <Icon aria-hidden="true" className="size-3.5 text-muted-foreground" />
      <span aria-live="polite">{text}</span>
    </button>
  );
}
