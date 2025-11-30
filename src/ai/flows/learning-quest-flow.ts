
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

// Input and Output Schemas for the main flow
const LearningQuestInputSchema = z.object({
  lessonTitle: z.string().describe('The title of the lesson to generate content for.'),
});
export type LearningQuestInput = z.infer<typeof LearningQuestInputSchema>;

const LearningQuestOutputSchema = z.object({
  advancedTopics: z
    .array(z.string())
    .describe('A list of 3-5 advanced topics that go beyond the standard syllabus for the given lesson.'),
  extraContent: z
    .string()
    .describe('Detailed educational content explaining the advanced topics. This should be comprehensive and well-structured, possibly using markdown for formatting.'),
  quiz: z.array(QuizQuestionSchema).describe('A list of 3-5 quiz questions based on the generated extraContent.'),
});
export type LearningQuestOutput = z.infer<typeof LearningQuestOutputSchema>;


export async function generateLearningQuest(input: LearningQuestInput): Promise<LearningQuestOutput> {
  return learningQuestFlow(input);
}

// Define a tool to get information from an external API
const getTopicInfo = ai.defineTool(
    {
        name: 'getTopicInfo',
        description: 'Get information about a specific educational topic.',
        inputSchema: z.object({ topic: z.string() }),
        outputSchema: z.string(),
    },
    async ({ topic }) => {
        try {
            // Using a simple, public dictionary API for demonstration
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${topic.split(' ').pop()}`);
            if (!response.ok) {
                return `Could not find specific information for "${topic}". Please generate content based on general knowledge.`;
            }
            const data = await response.json();
            // Simplify the data for the LLM
            const definition = data[0]?.meanings[0]?.definitions[0]?.definition;
            return definition ? `Definition for a key term in "${topic}": ${definition}` : `No simple definition found for "${topic}".`;
        } catch (e) {
            console.error(e);
            return `Error fetching information for "${topic}".`;
        }
    }
);


// Define the main prompt for the AI
const learningQuestPrompt = ai.definePrompt({
  name: 'learningQuestPrompt',
  input: { schema: LearningQuestInputSchema },
  output: { schema: LearningQuestOutputSchema },
  tools: [getTopicInfo],
  prompt: `
    You are an expert curriculum designer for university students.
    Your task is to generate advanced learning materials for a given lesson topic.
    The lesson is titled: '{{lessonTitle}}'.

    First, use the getTopicInfo tool to fetch foundational information about the lesson topic.
    Then, based on the lesson title and the information from the tool, do the following:
    1.  Generate a list of 3 to 5 advanced topics that are related to '{{lessonTitle}}' but go beyond the typical introductory syllabus. These topics should be challenging and encourage further exploration.
    2.  Write a detailed, comprehensive educational content (extraContent) that explains these advanced topics. Structure the content logically. You can use markdown for headings and lists.
    3.  Create a multiple-choice quiz with 3 to 5 questions. The quiz MUST be based on the 'extraContent' you just generated. Each question must have exactly 4 options and a clearly identified correct answer.
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
