'use client';

import { MessageCircle } from 'lucide-react';

// Fired on window to open the assistant from anywhere on the page.
export const OPEN_ASSISTANT_EVENT = 'assistant:open';

type AskAiButtonProps = {
  className?: string;
};

// The phone entry point for the assistant. It sits in the header, so on
// phones nothing floats over project images or text.
export default function AskAiButton({ className }: AskAiButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_ASSISTANT_EVENT))}
      aria-haspopup="dialog"
      aria-controls="assistant-panel"
      className={`inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors hover:bg-accent ${className ?? ''}`}
    >
      <MessageCircle aria-hidden="true" className="size-4 text-brand" />
      Ask AI
    </button>
  );
}
