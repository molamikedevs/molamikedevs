import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { z } from 'zod';

import { assistantInstructions } from '@/lib/assistant';
import { isRateLimited } from '@/lib/utils';

export const maxDuration = 30;

const MAX_MESSAGES = 12;
const MAX_QUESTION_LENGTH = 500;
const MAX_ANSWER_LENGTH = 4000;

const requestSchema = z.object({
  messages: z
    .array(
      z.discriminatedUnion('role', [
        z.object({
          role: z.literal('user'),
          content: z.string().trim().min(1).max(MAX_QUESTION_LENGTH),
        }),
        z.object({
          role: z.literal('assistant'),
          content: z.string().trim().min(1).max(MAX_ANSWER_LENGTH),
        }),
      ]),
    )
    .min(1)
    .max(MAX_MESSAGES)
    .refine((messages) => messages.at(-1)?.role === 'user'),
});

function errorResponse(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

export async function POST(request: Request) {
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    console.error('Chat route: GOOGLE_GENERATIVE_AI_API_KEY is not set');
    return errorResponse('The assistant is not available right now.', 503);
  }

  const visitor =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

  if (isRateLimited(visitor)) {
    return errorResponse(
      'That is a lot of questions. Try again in a few minutes.',
      429,
    );
  }

  const body: unknown = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);

  if (!parsed.success) {
    return errorResponse(
      `Your question could not be sent. Keep it under ${MAX_QUESTION_LENGTH} characters.`,
      400,
    );
  }

  const result = streamText({
    model: google('gemini-2.5-flash'),
    instructions: assistantInstructions,
    messages: parsed.data.messages,
    maxOutputTokens: 400,
    temperature: 0.3,
    abortSignal: request.signal,
    // Answers are short lookups, so skip the model's thinking step for speed.
    providerOptions: { google: { thinkingConfig: { thinkingBudget: 0 } } },
    onError: ({ error }) => console.error('Chat route: model error', error),
  });

  return result.toTextStreamResponse();
}
