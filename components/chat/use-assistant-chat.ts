import { useRef, useState } from 'react';

export type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export type ChatStatus = 'idle' | 'waiting' | 'streaming';

// How many past messages are sent with each question.
const HISTORY_LIMIT = 10;
const FALLBACK_ERROR =
  'The assistant could not answer. Try again, or email me instead.';

export function useAssistantChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [status, setStatus] = useState<ChatStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const idCounter = useRef(0);

  function nextId() {
    idCounter.current += 1;
    return `message-${idCounter.current}`;
  }

  async function sendMessage(text: string) {
    const question = text.trim();
    if (!question || status !== 'idle') return;

    const answerId = nextId();
    const history: ChatMessage[] = [
      ...messages,
      { id: nextId(), role: 'user', content: question },
    ];

    setMessages([...history, { id: answerId, role: 'assistant', content: '' }]);
    setStatus('waiting');
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: history
            .slice(-HISTORY_LIMIT)
            .map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!response.ok || !response.body) {
        const data: { error?: string } | null = await response
          .json()
          .catch(() => null);
        throw new Error(data?.error ?? FALLBACK_ERROR);
      }

      setStatus('streaming');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let answer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        answer += decoder.decode(value, { stream: true });
        const partialAnswer = answer;

        setMessages((current) =>
          current.map((message) =>
            message.id === answerId
              ? { ...message, content: partialAnswer }
              : message,
          ),
        );
      }

      if (!answer.trim()) throw new Error(FALLBACK_ERROR);
    } catch (caught) {
      // Drop the empty answer bubble and show what went wrong instead.
      setMessages((current) =>
        current.filter(
          (message) => message.id !== answerId || message.content.trim() !== '',
        ),
      );
      setError(caught instanceof Error ? caught.message : FALLBACK_ERROR);
    } finally {
      setStatus('idle');
    }
  }

  return { messages, status, error, sendMessage };
}
