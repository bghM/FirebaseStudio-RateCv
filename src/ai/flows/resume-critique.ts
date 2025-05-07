// 'use server'
'use server';

/**
 * @fileOverview This file defines a Genkit flow for critiquing resumes based on Saudi job market standards.
 *
 * - resumeCritique - A function that takes resume text and language as input and returns a critique report.
 * - ResumeCritiqueInput - The input type for the resumeCritique function.
 * - ResumeCritiqueOutput - The return type for the resumeCritique function, containing the analysis report.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {analyzeResume, ResumeAnalysisReport} from '@/services/resume-analysis';

const ResumeCritiqueInputSchema = z.object({
  resumeText: z.string().describe('The text content of the resume to analyze.'),
  language: z.string().describe('The language of the resume (e.g., \'en\' for English, \'ar\' for Arabic).'),
});
export type ResumeCritiqueInput = z.infer<typeof ResumeCritiqueInputSchema>;

const ResumeCritiqueOutputSchema = z.object({
  analysisReport: z.any().describe('The analysis report of the resume.'),
});
export type ResumeCritiqueOutput = z.infer<typeof ResumeCritiqueOutputSchema>;

export async function resumeCritique(input: ResumeCritiqueInput): Promise<ResumeCritiqueOutput> {
  return resumeCritiqueFlow(input);
}

const resumeCritiqueFlow = ai.defineFlow(
  {
    name: 'resumeCritiqueFlow',
    inputSchema: ResumeCritiqueInputSchema,
    outputSchema: ResumeCritiqueOutputSchema,
  },
  async input => {
    const analysisReport: ResumeAnalysisReport = await analyzeResume(input.resumeText, input.language);
    return {analysisReport};
  }
);
