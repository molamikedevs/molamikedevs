'use client';

import { MessageCircle, X } from 'lucide-react';
import { useRef, useState } from 'react';

import ChatPanel from '@/components/chat/chat-panel';

const PANEL_ID = 'assistant-panel';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const launcher = useRef<HTMLButtonElement>(null);

  function closePanel() {
    setIsOpen(false);
    launcher.current?.focus();
  }

  const Icon = isOpen ? X : MessageCircle;

  return (
    <>
      <ChatPanel id={PANEL_ID} isOpen={isOpen} onClose={closePanel} />

      <button
        ref={launcher}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={PANEL_ID}
        className="fixed right-4 bottom-4 z-50 inline-flex h-10 cursor-pointer items-center gap-2 rounded-full border bg-popover px-4 text-sm font-medium text-popover-foreground shadow-md transition-colors hover:bg-accent"
      >
        <Icon aria-hidden="true" className="size-4 text-brand" />
        {isOpen ? 'Close' : 'Ask AI'}
      </button>
    </>
  );
}
