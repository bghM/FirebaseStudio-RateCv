
'use client';

import type { FormEvent } from 'react';
import React, { useState, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useLanguage } from '@/hooks/use-language';
import { resumeCritique, type ResumeCritiqueInput, type ResumeCritiqueOutput } from '@/ai/flows/resume-critique';
import { rephraseResumeContent, type RephraseResumeContentInput, type RephraseResumeContentOutput } from '@/ai/flows/resume-rephrasing';
import { type ResumeAnalysisReport } from '@/services/resume-analysis';
import { Loader2, Sparkles, BarChart3, AlertCircle } from 'lucide-react';

interface ResumeAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeAnalysisModal({ isOpen, onClose }: ResumeAnalysisModalProps) {
  const { language, t } = useLanguage();
  const [resumeText, setResumeText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRephrasing, setIsRephrasing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<ResumeAnalysisReport | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [rephrasedSection, setRephrasedSection] = useState<{ original: string; rephrased: string } | null>(null);

  const handleAnalyze = async (event: FormEvent) => {
    event.preventDefault();
    if (resumeText.trim().length < 50) {
      setError(t('errorMinLength'));
      return;
    }
    setError(null);
    setIsLoading(true);
    setAnalysisResult(null);
    
    // Track 'Analyze My Resume' click
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'analyze_resume_click', {
        event_category: 'engagement',
        event_label: 'modal_analyze_button',
      });
    }

    try {
      const input: ResumeCritiqueInput = { resumeText, language };
      const result: ResumeCritiqueOutput = await resumeCritique(input);
      setAnalysisResult(result.analysisReport as ResumeAnalysisReport);
       // Track upload conversion
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'resume_upload_success', {
          event_category: 'conversion',
          event_label: 'modal_upload',
        });
      }
    } catch (e) {
      console.error(e);
      setError(t('analysisFailed'));
      // Track upload failure
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'resume_upload_failure', {
          event_category: 'conversion',
          event_label: 'modal_upload_error',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRephrase = async (weakContent: string) => {
    setIsRephrasing(true);
    setRephrasedSection(null);
    try {
      const input: RephraseResumeContentInput = { resumeText, weakContent, language };
      const result: RephraseResumeContentOutput = await rephraseResumeContent(input);
      setRephrasedSection({ original: weakContent, rephrased: result.rephrasedContent });
    } catch (e) {
      console.error(e);
      // Potentially show an error toast for rephrasing failure
    } finally {
      setIsRephrasing(false);
    }
  };
  
  const handleClose = useCallback(() => {
    onClose();
    // Reset state when closing
    setResumeText('');
    setAnalysisResult(null);
    setError(null);
    setIsLoading(false);
    setRephrasedSection(null);
  },[onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className={`sm:max-w-[600px] bg-card text-card-foreground shadow-xl rounded-lg ${language === 'ar' ? 'font-arabic' : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">{t('uploadYourResume')}</DialogTitle>
        </DialogHeader>
        {!analysisResult ? (
          <form onSubmit={handleAnalyze} className="space-y-6 p-2">
            <Textarea
              placeholder={t('pasteResumeText')}
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              rows={10}
              className="w-full p-3 border-border rounded-md focus:ring-primary focus:border-primary transition-shadow"
              disabled={isLoading}
              aria-label={t('pasteResumeText')}
            />
            {error && (
              <Alert variant="destructive" className="bg-destructive/10 border-destructive/50 text-destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>{t('analysisFailed')}</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded-md transition-transform transform hover:scale-105" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  {t('analyzing')}
                </>
              ) : (
                <>
                  <BarChart3 className="mr-2 h-5 w-5" />
                  {t('analyzeMyResume')}
                </>
              )}
            </Button>
          </form>
        ) : (
          <div className="space-y-6 p-2 max-h-[70vh] overflow-y-auto">
            <h3 className="text-xl font-semibold text-primary flex items-center"><BarChart3 className="mr-2 h-6 w-6" />{t('resumeScore')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ScoreCard title={t('overallScore')} score={analysisResult.overallScore} />
              <ScoreCard title={t('tailoringScore')} score={analysisResult.tailoringScore} />
              <ScoreCard title={t('contentScore')} score={analysisResult.contentScore} />
              <ScoreCard title={t('formatScore')} score={analysisResult.formatScore} />
              <ScoreCard title={t('sectionsScore')} score={analysisResult.sectionsScore} />
              <ScoreCard title={t('styleScore')} score={analysisResult.styleScore} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-2">{t('suggestions')}</h4>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {analysisResult.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-grow">{suggestion}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleRephrase(suggestion)}
                      disabled={isRephrasing}
                      className="ml-2 text-primary border-primary hover:bg-primary/10"
                    >
                      {isRephrasing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                      <span className="ml-1 hidden sm:inline">{t('rephraseContent')}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            {isRephrasing && (
              <div className="flex items-center justify-center p-4 text-muted-foreground">
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                {t('rephrasing')}
              </div>
            )}
            {rephrasedSection && (
              <Alert className="bg-secondary/10 border-secondary/50 text-secondary-foreground">
                 <Sparkles className="h-4 w-4 text-secondary" />
                <AlertTitle className="font-semibold text-secondary">{t('rephrasedContent')}</AlertTitle>
                <AlertDescription>
                  <p><strong>Original:</strong> {rephrasedSection.original}</p>
                  <p><strong>Rephrased:</strong> {rephrasedSection.rephrased}</p>
                </AlertDescription>
              </Alert>
            )}
             <Button onClick={handleClose} variant="outline" className="w-full mt-4">
              {t('close')}
            </Button>
          </div>
        )}
        <DialogFooter className="sm:justify-start mt-4 p-2">
          <DialogClose asChild>
            <Button type="button" variant="ghost" onClick={handleClose} className="text-muted-foreground hover:bg-muted/50">
              {t('close')}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

interface ScoreCardProps {
  title: string;
  score: number;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ title, score }) => (
  <div className="bg-muted/50 p-4 rounded-lg shadow">
    <div className="flex justify-between items-center mb-1">
      <h5 className="text-sm font-medium text-muted-foreground">{title}</h5>
      <span className={`text-lg font-bold ${score > 75 ? 'text-green-500' : score > 50 ? 'text-yellow-500' : 'text-red-500'}`}>
        {score}%
      </span>
    </div>
    <Progress value={score} className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent" />
  </div>
);
