'use client';

import { MessageCircle, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

import ChatPanel from '@/components/chat/chat-panel';
import { OPEN_ASSISTANT_EVENT } from './ask-ai-button';

const PANEL_ID = 'assistant-panel';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const launcher = useRef<HTMLButtonElement>(null);
  // Whatever opened the panel gets focus back when it closes: the floating
  // launcher on larger screens, the header button on phones.
  const opener = useRef<HTMLElement | null>(null);

  const openPanel = useCallback(() => {
    opener.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : launcher.current;
    setIsOpen(true);
  }, []);

  const closePanel = useCallback(() => {
    setIsOpen(false);
    (opener.current ?? launcher.current)?.focus();
  }, []);

  useEffect(() => {
    window.addEventListener(OPEN_ASSISTANT_EVENT, openPanel);
    return () => window.removeEventListener(OPEN_ASSISTANT_EVENT, openPanel);
  }, [openPanel]);

  const Icon = isOpen ? X : MessageCircle;

  return (
    <>
      <ChatPanel id={PANEL_ID} isOpen={isOpen} onClose={closePanel} />

      {/* Larger screens only. Phones open the assistant from the header. */}
      <button
        ref={launcher}
        type="button"
        onClick={isOpen ? closePanel : openPanel}
        aria-expanded={isOpen}
        aria-controls={PANEL_ID}
        className="fixed right-4 bottom-4 z-50 hidden h-10 cursor-pointer items-center gap-2 rounded-full border bg-popover px-4 text-sm font-medium text-popover-foreground shadow-md transition-colors hover:bg-accent sm:inline-flex"
      >
        <Icon aria-hidden="true" className="size-4 text-brand" />
        {isOpen ? 'Close' : 'Ask AI'}
      </button>
    </>
  );
}
