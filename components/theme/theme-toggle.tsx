'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Switch between dark and light theme"
      className="grid size-9 shrink-0 cursor-pointer place-items-center rounded-full border border-dashed text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      <Sun aria-hidden="true" className="hidden size-4 dark:block" />
      <Moon aria-hidden="true" className="size-4 dark:hidden" />
    </button>
  );
}
