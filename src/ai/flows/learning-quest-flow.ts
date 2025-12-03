
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
        description: 'Get information about a specific educational topic from sources like GeeksforGeeks.',
        inputSchema: z.object({ topic: z.string() }),
        outputSchema: z.string(),
    },
    async ({ topic }) => {
        // This is a mock implementation.
        // In a real application, you would use a search API or web scraping to get this data.
        console.log(`Simulating search for topic: ${topic} on GeeksforGeeks`);
        return `
            Topic: ${topic}.
            Summary from GeeksforGeeks: ${topic} is a fundamental concept in computer science. Key aspects include syntax, memory management, and common use cases in algorithms. Advanced applications often involve performance optimization and integration with larger systems. It is crucial for building efficient and scalable software.
        `;
    }
);


// Define the main prompt for the AI
const learningQuestPrompt = ai.definePrompt({
  name: 'learningQuestPrompt',
  input: { schema: z.object({
    lessonTitle: z.string(),
    topicInfo: z.string(),
  }) },
  output: { schema: LearningQuestOutputSchema },
  prompt: `
    You are an expert curriculum designer for university students, creating content similar to what's found on GeeksforGeeks.
    Your task is to generate advanced learning materials for a given lesson topic.
    The lesson is titled: '{{lessonTitle}}'.

    Use the following foundational information, summarized from web sources, to guide your content creation:
    {{topicInfo}}

    Based on the lesson title and the provided info, do the following:
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
    // Call the tool once at the beginning of the flow
    const topicInfo = await getTopicInfo({ topic: input.lessonTitle });

    // Pass the result to the prompt
    const { output } = await learningQuestPrompt({ ...input, topicInfo });
    
    if (!output) {
        throw new Error("Failed to generate learning quest content.");
    }
    return output;
  }
);
