
'use server';
/**
 * @fileOverview A simple AI chatbot flow.
 *
 * - chat - A function that handles the chat conversation.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {Message} from 'genkit/experimental/ai';

const ChatInputSchema = z.object({
  history: z.array(z.custom<Message>()),
  message: z.string(),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

export type ChatOutput = string;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: z.string(),
  },
  async ({history, message}) => {
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      prompt: {
        messages: [...history, {role: 'user', content: [{text: message}]}],
      },
    });

    return response.text;
  }
);
