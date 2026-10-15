'use client';

import { cn } from 'cn';
import { ArrowUp, X } from 'lucide-react';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

import { useAssistantChat } from '@/components/chat/use-assistant-chat';

type ChatPanelProps = {
  id: string;
  isOpen: boolean;
  onClose: () => void;
};

const MAX_QUESTION_LENGTH = 500;
const TITLE_ID = 'assistant-title';

const PHONE_QUERY = '(max-width: 639.98px)';
const KEYBOARD_THRESHOLD = 120;

const FOCUSABLE =
  'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';

const suggestions = [
  'What has Lamin built?',
  'Which technologies does he use?',
  'Is he open to work?',
];

function subscribeToPhone(onChange: () => void) {
  const query = window.matchMedia(PHONE_QUERY);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}

function useIsPhone() {
  return useSyncExternalStore(
    subscribeToPhone,
    () => window.matchMedia(PHONE_QUERY).matches,
    () => false,
  );
}

export default function ChatPanel({ id, isOpen, onClose }: ChatPanelProps) {
  const { messages, status, error, sendMessage } = useAssistantChat();
  const [draft, setDraft] = useState('');
  const panel = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const log = useRef<HTMLDivElement>(null);
  const isPhone = useIsPhone();

  const isBusy = status !== 'idle';

  // Move focus into the panel. On phones the sheet itself takes focus, so
  // the keyboard does not jump up before the visitor has read anything.
  useEffect(() => {
    if (!isOpen) return;
    if (isPhone) panel.current?.focus();
    else input.current?.focus();
  }, [isOpen, isPhone]);

  // Escape closes the panel from anywhere on the page.
  useEffect(() => {
    if (!isOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isOpen, onClose]);

  // Keep the newest text in view while the answer streams in.
  useEffect(() => {
    if (log.current) log.current.scrollTop = log.current.scrollHeight;
  }, [messages, error]);

  // Phones: size the sheet to the part of the screen the keyboard leaves
  // visible, so the input always sits just above the keyboard.
  useEffect(() => {
    const sheet = panel.current;
    const viewport = window.visualViewport;
    if (!isOpen || !isPhone || !sheet || !viewport) return;

    const fitToViewport = () => {
      const keyboardOpen =
        window.innerHeight - viewport.height > KEYBOARD_THRESHOLD;

      sheet.style.setProperty('--sheet-height', `${viewport.height}px`);
      sheet.style.setProperty('--sheet-top', `${viewport.offsetTop}px`);
      sheet.dataset.keyboard = keyboardOpen ? 'open' : 'closed';

      if (log.current) log.current.scrollTop = log.current.scrollHeight;
    };

    fitToViewport();
    viewport.addEventListener('resize', fitToViewport);
    viewport.addEventListener('scroll', fitToViewport);

    return () => {
      viewport.removeEventListener('resize', fitToViewport);
      viewport.removeEventListener('scroll', fitToViewport);
    };
  }, [isOpen, isPhone]);

  // Phones: freeze the page behind the sheet and restore the scroll
  // position on close. Plain overflow: hidden is not enough on iOS.
  useEffect(() => {
    if (!isOpen || !isPhone) return;

    const { body } = document;
    const scrollY = window.scrollY;
    const previousStyle = body.getAttribute('style') ?? '';

    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.overflow = 'hidden';

    return () => {
      body.setAttribute('style', previousStyle);
      window.scrollTo(0, scrollY);
    };
  }, [isOpen, isPhone]);

  function submitQuestion(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isBusy || draft.trim() === '') return;
    sendMessage(draft);
    setDraft('');
  }

  // Phones: the sheet covers the page, so Tab stays inside it.
  function trapFocus(event: React.KeyboardEvent<HTMLDivElement>) {
    if (!isPhone || event.key !== 'Tab' || !panel.current) return;

    const items = panel.current.querySelectorAll<HTMLElement>(FOCUSABLE);
    if (items.length === 0) return;

    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && (active === first || active === panel.current)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div
      ref={panel}
      id={id}
      role="dialog"
      aria-modal={isPhone ? true : undefined}
      aria-labelledby={TITLE_ID}
      tabIndex={-1}
      onKeyDown={trapFocus}
      className={cn(
        'group/sheet fixed z-50 flex-col overflow-hidden bg-popover text-popover-foreground outline-none',
        // Phones: a full-screen sheet sized to the area above the keyboard.
        'inset-x-0 top-0 h-[var(--sheet-height,100dvh)] translate-y-[var(--sheet-top,0px)] pt-[var(--safe-top)]',
        // Larger screens: a floating panel above the launcher.
        'sm:inset-x-auto sm:top-auto sm:right-4 sm:bottom-18 sm:h-[min(30rem,calc(100dvh-6rem))] sm:w-sm sm:translate-y-0 sm:rounded-xl sm:border sm:pt-0 sm:shadow-lg',
        // Slides up like a native sheet. Skipped for reduced motion.
        'motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-6 motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.32,0.72,0,1)] sm:motion-safe:slide-in-from-bottom-2 sm:motion-safe:duration-200',
        isOpen ? 'flex' : 'hidden',
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-dashed py-1.5 pr-1.5 pl-4 sm:py-2.5 sm:pr-2">
        <h2 id={TITLE_ID} className="font-serif text-[17px] leading-6 italic">
          Ask about my work
        </h2>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close the assistant"
          className="grid size-11 cursor-pointer place-items-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground sm:size-8"
        >
          <X aria-hidden="true" className="size-5 sm:size-4" />
        </button>
      </div>

      <div
        ref={log}
        role="log"
        aria-live="polite"
        className="flex flex-1 flex-col gap-4 overflow-y-auto overscroll-contain px-4 py-4"
      >
        {messages.length === 0 && (
          <>
            <p className="text-[15px] leading-6 text-muted-foreground sm:text-sm">
              An AI assistant that answers from my CV and this page. Ask it
              anything about my projects, skills or background.
            </p>

            <ul className="flex flex-col items-start gap-2">
              {suggestions.map((suggestion) => (
                <li key={suggestion}>
                  <button
                    type="button"
                    onClick={() => sendMessage(suggestion)}
                    disabled={isBusy}
                    className="min-h-11 cursor-pointer rounded-md border px-3 py-2 text-left text-sm transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50 sm:min-h-0 sm:px-2.5 sm:py-1.5 sm:text-[13px]"
                  >
                    {suggestion}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}

        {messages.map((message) =>
          message.role === 'user' ? (
            <p
              key={message.id}
              className="ml-8 self-end rounded-lg bg-secondary px-3 py-2 text-[15px] leading-6 break-words text-secondary-foreground sm:text-sm"
            >
              {message.content}
            </p>
          ) : (
            <p
              key={message.id}
              className="border-l border-brand/60 pl-3 text-[15px] leading-6 break-words whitespace-pre-wrap sm:text-sm"
            >
              {message.content || (
                <span className="font-serif text-muted-foreground italic">
                  Thinking...
                </span>
              )}
            </p>
          ),
        )}

        {error && (
          <p role="alert" className="text-sm leading-6 text-destructive">
            {error}
          </p>
        )}
      </div>

      <form
        onSubmit={submitQuestion}
        className="flex items-center gap-2 border-t border-dashed p-2"
      >
        <input
          ref={input}
          type="text"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          maxLength={MAX_QUESTION_LENGTH}
          aria-label="Your question"
          placeholder="Type a question"
          autoComplete="off"
          enterKeyHint="send"
          className="h-11 min-w-0 flex-1 rounded-md border bg-background px-3 text-base placeholder:text-muted-foreground sm:h-9 sm:text-sm"
        />

        <button
          type="submit"
          disabled={isBusy || draft.trim() === ''}
          aria-label="Send question"
          className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-md bg-primary text-primary-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-40 sm:size-9"
        >
          <ArrowUp aria-hidden="true" className="size-4" />
        </button>
      </form>

      {/* The home indicator gap only matters while the keyboard is down. */}
      <p className="px-4 pb-[calc(0.625rem+var(--safe-bottom))] font-mono text-[10px] leading-4 text-muted-foreground group-data-[keyboard=open]/sheet:pb-2.5 sm:pb-2.5">
        AI answers can be wrong. My CV is the reference.
      </p>
    </div>
  );
}
