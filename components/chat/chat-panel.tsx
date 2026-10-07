'use client';

import { cn } from 'cn';
import { ArrowUp, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { useAssistantChat } from '@/components/chat/use-assistant-chat';

type ChatPanelProps = {
  id: string;
  isOpen: boolean;
  onClose: () => void;
};

const MAX_QUESTION_LENGTH = 500;

const suggestions = [
  'What has Lamin built?',
  'Which technologies does he use?',
  'Is he open to work?',
];

export default function ChatPanel({ id, isOpen, onClose }: ChatPanelProps) {
  const { messages, status, error, sendMessage } = useAssistantChat();
  const [draft, setDraft] = useState('');
  const input = useRef<HTMLInputElement>(null);
  const log = useRef<HTMLDivElement>(null);

  const isBusy = status !== 'idle';

  useEffect(() => {
    if (isOpen) input.current?.focus();
  }, [isOpen]);

  // Keep the newest text in view while the answer streams in.
  useEffect(() => {
    if (log.current) log.current.scrollTop = log.current.scrollHeight;
  }, [messages, error]);

  function submitQuestion(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(draft);
    setDraft('');
  }

  function closeOnEscape(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') onClose();
  }

  return (
    <div
      id={id}
      role="dialog"
      aria-label="Ask about my work"
      onKeyDown={closeOnEscape}
      className={cn(
        'fixed right-4 bottom-18 z-50 h-[min(30rem,calc(100dvh-6rem))] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-xl border bg-popover text-popover-foreground shadow-lg',
        isOpen ? 'flex' : 'hidden',
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-dashed py-2.5 pr-2 pl-4">
        <h2 className="font-serif text-[17px] leading-6 italic">
          Ask about my work
        </h2>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close the assistant"
          className="grid size-8 cursor-pointer place-items-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <X aria-hidden="true" className="size-4" />
        </button>
      </div>

      <div
        ref={log}
        role="log"
        aria-live="polite"
        className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-4"
      >
        {messages.length === 0 && (
          <>
            <p className="text-sm leading-6 text-muted-foreground">
              An AI assistant that answers from my CV and this page. Ask it
              anything about my projects, skills or background.
            </p>

            <ul className="flex flex-col items-start gap-2">
              {suggestions.map((suggestion) => (
                <li key={suggestion}>
                  <button
                    type="button"
                    onClick={() => sendMessage(suggestion)}
                    className="cursor-pointer rounded-md border px-2.5 py-1.5 text-left text-[13px] transition-colors hover:bg-accent"
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
              className="ml-8 self-end rounded-lg bg-secondary px-3 py-2 text-sm leading-6 text-secondary-foreground"
            >
              {message.content}
            </p>
          ) : (
            <p
              key={message.id}
              className="border-l border-brand/60 pl-3 text-sm leading-6 whitespace-pre-wrap"
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
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          maxLength={MAX_QUESTION_LENGTH}
          aria-label="Your question"
          placeholder="Type a question"
          autoComplete="off"
          className="h-9 min-w-0 flex-1 rounded-md border bg-background px-3 text-sm placeholder:text-muted-foreground"
        />

        <button
          type="submit"
          disabled={isBusy || draft.trim() === ''}
          aria-label="Send question"
          className="grid size-9 shrink-0 cursor-pointer place-items-center rounded-md bg-primary text-primary-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowUp aria-hidden="true" className="size-4" />
        </button>
      </form>

      <p className="px-4 pb-2.5 font-mono text-[10px] leading-4 text-muted-foreground">
        AI answers can be wrong. My CV is the reference.
      </p>
    </div>
  );
}
