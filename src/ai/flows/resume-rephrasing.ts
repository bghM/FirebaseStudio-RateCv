'use server';

/**
 * @fileOverview This file defines a Genkit flow for rephrasing weak content in a resume using AI.
 *
 * - rephraseResumeContent - A function that rephrases weak content in a resume.
 * - RephraseResumeContentInput - The input type for the rephraseResumeContent function.
 * - RephraseResumeContentOutput - The output type for the rephraseResumeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RephraseResumeContentInputSchema = z.object({
  resumeText: z.string().describe('The complete text of the resume to be rephrased.'),
  weakContent: z.string().describe('Specific content within the resume identified as weak.'),
  language: z
    .string()
    .describe(
      'The language of the resume (e.g., \'en\' for English, \'ar\' for Arabic). Influences the tone and vocabulary used in rephrasing. Should be set according to the Saudi job market.'
    ),
});
export type RephraseResumeContentInput = z.infer<typeof RephraseResumeContentInputSchema>;

const RephraseResumeContentOutputSchema = z.object({
  rephrasedContent: z
    .string()
    .describe('The rephrased version of the weak content, improved for clarity and impact.'),
});
export type RephraseResumeContentOutput = z.infer<typeof RephraseResumeContentOutputSchema>;

export async function rephraseResumeContent(input: RephraseResumeContentInput): Promise<RephraseResumeContentOutput> {
  return rephraseResumeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'rephraseResumeContentPrompt',
  input: {schema: RephraseResumeContentInputSchema},
  output: {schema: RephraseResumeContentOutputSchema},
  prompt: `You are an expert resume writer specializing in improving resumes for the Saudi job market. Your goal is to rephrase weak content to make it more impactful and effective.

  Original Content: {{{weakContent}}}

  Resume Text: {{{resumeText}}}

  Language: {{{language}}}

  Rephrased Content:`, // The LLM will complete this to create the rephrased content.
});

const rephraseResumeContentFlow = ai.defineFlow(
  {
    name: 'rephraseResumeContentFlow',
    inputSchema: RephraseResumeContentInputSchema,
    outputSchema: RephraseResumeContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
