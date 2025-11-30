'use server';
/**
 * @fileOverview AI flows for generating advanced learning materials.
 *
 * - generateLearningQuest - A function that generates beyond-syllabus topics and a quiz.
 * - LearningQuestInput - The input type for the learning quest function.
 * - LearningQuestOutput - The return type for the learning quest function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

// Schemas for the quiz
const QuizQuestionSchema = z.object({
  question: z.string().describe('The quiz question.'),
  options: z.array(z.string()).describe('A list of 4 multiple-choice options.'),
  correctAnswer: z.string().describe('The correct answer from the options.'),
});
type QuizQuestion = z.infer<typeof QuizQuestionSchema>;

// Input and Output Schemas for the main flow
export const LearningQuestInputSchema = z.object({
  lessonTitle: z.string().describe('The title of the lesson to generate content for.'),
});
export type LearningQuestInput = z.infer<typeof LearningQuestInputSchema>;

export const LearningQuestOutputSchema = z.object({
  topics: z
    .array(z.string())
    .describe('A list of 3-5 advanced topics that go beyond the standard syllabus for the given lesson.'),
  quiz: z.array(QuizQuestionSchema).describe('A list of 3-5 quiz questions based on the reference content provided.'),
});
export type LearningQuestOutput = z.infer<typeof LearningQuestOutputSchema>;


export async function generateLearningQuest(input: LearningQuestInput): Promise<LearningQuestOutput> {
  return learningQuestFlow(input);
}

// Define the main prompt for the AI
const learningQuestPrompt = ai.definePrompt({
  name: 'learningQuestPrompt',
  input: { schema: LearningQuestInputSchema },
  output: { schema: LearningQuestOutputSchema },
  prompt: `
    You are an expert curriculum designer for university students.
    Your task is to generate advanced learning materials for a given lesson topic.
    The lesson is titled: '{{lessonTitle}}'.

    The reference content for these materials is a video with the title: 'Advanced Topics in {{lessonTitle}}'.

    Based on the lesson title, do the following:
    1.  Generate a list of 3 to 5 advanced topics that are related to '{{lessonTitle}}' but go beyond the typical introductory syllabus. These topics should be challenging and encourage further exploration.
    2.  Create a multiple-choice quiz with 3 to 5 questions. The quiz should be based on concepts you would expect to be covered in a video about advanced '{{lessonTitle}}' topics. Each question must have exactly 4 options and a clearly identified correct answer.
  `,
});

// Define the Genkit flow
const learningQuestFlow = ai.defineFlow(
  {
    name: 'learningQuestFlow',
    inputSchema: LearningQuestInputSchema,
    outputSchema: LearningQuestOutputSchema,
  },
  async (input) => {
    const { output } = await learningQuestPrompt(input);
    if (!output) {
        throw new Error("Failed to generate learning quest content.");
    }
    return output;
  }
);
