
'use client';

import React from 'react';
// React hooks for managing state and memoizing functions.
import { useState, useCallback, useContext, useEffect } from 'react'; // Added useEffect
// Hook for handling drag-and-drop file uploads.
import { useDropzone } from 'react-dropzone';
// Hook for programmatic navigation in Next.js.
import { useRouter} from 'next/navigation';
// Custom hook for accessing language context and translations.
import { LanguageContext } from '@/contexts/language-context';
// Layout component for the header.
 import { Header } from '@/components/layout/header';
// Custom hook for displaying toast notifications.
import { useToast } from '@/hooks/use-toast';
// Import for parsing .docx files
// Loader component from react-loader-spinner (assuming it's installed).
// Used to display a loading indicator while processing the resume.
import { TailSpin } from 'react-loader-spinner';
// Next.js Image component for optimized image rendering.
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Import Button for the main analyze button
import { UploadCloud } from 'lucide-react'; // Import an icon
// Import Card components from shadcn/ui explicitly to avoid using local dummy versions
import { Card as ShadCard, CardContent as ShadCardContent, CardHeader as ShadCardHeader, CardTitle as ShadCardTitle } from '@/components/ui/card';


const UploadCVPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { t, language, direction } = useContext(LanguageContext);
  const { toast } = useToast();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize Gtag if it exists for tracking
    if (typeof window.gtag === 'undefined') {
      console.warn("Google Analytics gtag not found. Tracking will be disabled.");
    }
  }, []);


  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const uploadedFile = acceptedFiles[0];
      const fileExtension = uploadedFile.name.split('.').pop()?.toLowerCase();

      if (fileExtension === 'pdf' || fileExtension === 'docx') {
        setFile(uploadedFile);
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'file_dropped', { event_category: 'upload_cv', event_label: fileExtension });
        }
      } else {
        toast({
          title: t('unsupportedFileFormatError'),
          description: t('unsupportedFileFormatDescription'),
          variant: 'destructive',
        });
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'file_drop_failed', { event_category: 'upload_cv', event_label: 'unsupported_format' });
        }
      }
    }
  }, [t, toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'application/pdf': ['.pdf'], 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'] } });

  const handleAnalyze = async () => {
    if (!file) {
      toast({
        title: t('noFileSelectedError'),
        description: t('noFileSelectedDescription'),
        variant: 'destructive',
      });
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'analyze_click_failed', { event_category: 'upload_cv', event_label: 'no_file_selected' });
      }
      return;
    }

    setLoading(true);
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'analyze_click_started', { event_category: 'upload_cv' });
    }

    let fileContent = '';
    const reader = new FileReader();

    reader.onload = async (e) => {
      try {
        const arrayBuffer = e.target?.result as ArrayBuffer;
        
        if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
          // Dynamically import mammoth for DOCX parsing
          const mammoth = (await import('mammoth')).default;
          const { value } = await mammoth.extractRawText({ arrayBuffer });
          fileContent = value;
        } else if (file.type === 'application/pdf') {
          // Dynamically import pdfjs-dist for PDF parsing
          const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.js');
          // @ts-ignore: Setting workerSrc for pdfjs-dist
          pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
          
          const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
          let textContent = '';
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const text = await page.getTextContent();
            textContent += text.items.map(item => ('str' in item ? item.str : '')).join(' ');
          }
          fileContent = textContent;
        } else {
          toast({
            title: t('unsupportedFileFormatError'),
            description: t('unsupportedFileFormatDescription'),
            variant: 'destructive',
          });
          setLoading(false);
          return;
        }

        if (typeof window.gtag === 'function') {
          window.gtag('event', 'file_parsed', { event_category: 'upload_cv', event_label: file.type });
        }

        // For demo, simulate API call and redirect to a results page (not implemented)
        // In a real app, you would send `fileContent` to your Genkit flow.
        console.log("Extracted text length:", fileContent.length);
        // This part would call the resumeCritique flow
        // const analysisInput: ResumeCritiqueInput = { resumeText: fileContent, language };
        // const analysisOutput: ResumeCritiqueOutput = await resumeCritique(analysisInput);

        // For now, just log and show success
        toast({
          title: "Analysis (Simulated)",
          description: "Resume text extracted. In a real app, this would go to the AI.",
        });
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'analysis_simulated_success', { event_category: 'upload_cv', value: fileContent.length });
        }
        // router.push(`/rate-resume/result?response=${encodeURIComponent(JSON.stringify(analysisOutput))}`);
        
      } catch (error) {
        console.error('Error during analysis:', error);
        toast({ title: t('analysisError'), description: t('analysisErrorDescription'), variant: 'destructive' });
         if (typeof window.gtag === 'function') {
          window.gtag('event', 'analysis_failed', { event_category: 'upload_cv', event_label: String(error) });
        }
      } finally {
        setLoading(false);
      }
    };

    reader.onerror = (error) => {
      console.error('File reading error:', error);
      toast({ title: t('fileReadError'), description: t('fileReadErrorDescription'), variant: 'destructive' });
      setLoading(false);
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'file_read_failed', { event_category: 'upload_cv', event_label: String(error) });
      }
    };
    
    reader.readAsArrayBuffer(file);
  };

  if (!mounted) {
    // Prevents hydration mismatch
    return <div className="min-h-screen flex items-center justify-center bg-background"><UploadCloud className="h-12 w-12 animate-ping text-primary"/></div>;
  }

  return (
    <React.Fragment>
      <Header /> 
      <div className={`flex flex-col min-h-screen bg-background ${direction === 'rtl' ? 'font-arabic' : ''}`} dir={direction}>
        <main className="container mx-auto p-4 md:p-8 flex-grow">
          <h1 className={`text-3xl md:text-4xl font-bold mb-8 text-center text-primary ${direction === 'rtl' ? 'md:text-right' : 'md:text-left'}`}>{t('uploadCVTitle')}</h1>

          <ShadCard className="max-w-2xl mx-auto shadow-xl bg-card border-border rounded-xl overflow-hidden">
            <ShadCardHeader className="bg-muted/30 p-6 border-b border-border">
              <ShadCardTitle className={`text-2xl font-semibold text-foreground ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>{t('uploadAreaTitle')}</ShadCardTitle>
            </ShadCardHeader>
            <ShadCardContent className="p-6 md:p-8">
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 md:p-12 text-center cursor-pointer transition-colors
                  ${isDragActive ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary/70 text-muted-foreground'}
                  ${file ? 'border-green-500 bg-green-500/10 text-green-700' : ''}`}
              >
                <input {...getInputProps()} />
                {loading ? (
                  <div className="flex flex-col items-center justify-center h-32">
                    <TailSpin color="hsl(var(--primary))" height={50} width={50} />
                    <p className="mt-4 text-lg font-semibold text-primary">{t('analyzingResume')}</p>
                  </div>
                ) : file ? (
                  <div className="flex flex-col items-center justify-center h-32">
                    <UploadCloud className="h-12 w-12 text-green-500 mb-3" />
                    <p className="text-lg font-semibold mb-1 text-green-700">{t('fileUploaded')}</p>
                    <p className="text-sm text-muted-foreground">{file.name}</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-32">
                    <UploadCloud className={`h-12 w-12 mb-3 ${isDragActive ? 'text-primary' : 'text-muted-foreground'}`} />
                    <p className="text-lg font-semibold mb-1">{t('dragDropPrompt')}</p>
                    <p className="text-sm">{t('orClickToBrowse')}</p>
                    <p className="text-xs text-muted-foreground mt-2">{t('supportedFormats')}</p>
                  </div>
                )}
              </div>
              {file && !loading && (
                <Button
                  onClick={handleAnalyze}
                  className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg text-lg shadow-md transition-transform transform hover:scale-105"
                  disabled={loading}
                >
                  {t('startNowFreeRating')}
                </Button>
              )}
            </ShadCardContent>
          </ShadCard>

          {/* How It Works Section */}
          <section className="my-12 md:my-16">
            <h2 className={`text-2xl md:text-3xl font-semibold mb-8 text-center text-foreground ${direction === 'rtl' ? 'md:text-right' : 'md:text-left'}`}>{t('howItWorksTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <InfoCardStep imageSrc="/step1.png" dataAiHint="upload resume" alt={t('uploadResumeStep')} title={t('uploadResumeStep')} description={t('uploadResumeDescription')} background={false} />
              <InfoCardStep imageSrc="/step2.png" dataAiHint="AI analysis" alt={t('aiScanStep')} title={t('aiScanStep')} description={t('aiScanDescription')} background={false} />
              <InfoCardStep imageSrc="/step3.png" dataAiHint="view results" alt={t('seeResultsStep')} title={t('seeResultsStep')} description={t('seeResultsDescription')} background={false} />
            </div>
          </section>

          {/* Benefits Section */}
          <section className="my-12 md:my-16 p-6 md:p-8">
             <h2 className={`text-2xl md:text-3xl font-semibold mb-6 text-center text-foreground ${direction === 'rtl' ? 'md:text-right' : 'md:text-left'}`}>{t('benefitsTitle')}</h2>
            <ul className={`list-disc list-inside space-y-2 text-muted-foreground ${direction === 'rtl' ? 'pr-4' : 'pl-4'}`}>
              <li>{t('benefitFreeScore')}</li>
              <li>{t('benefitATSFeedback')}</li>
              <li>{t('benefitInstantSuggestions')}</li>
              <li>{t('benefitLanguageSupport')}</li>
              <li data-ai-hint="optional detailed report">{t('benefitOptionalReport')}</li>
            </ul>
          </section>

          {/* Trust & Social Proof */}
          <section className="my-12 md:my-16">
            <h2 className={`text-2xl md:text-3xl font-semibold mb-8 text-center text-foreground ${direction === 'rtl' ? 'md:text-right' : 'md:text-left'}`}>{t('trustProofTitle')}</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
              <Image src="https://picsum.photos/seed/clogo1/120/60" alt="Company Logo 1" width={120} height={60} className="grayscale hover:grayscale-0 transition-all" data-ai-hint="company logo" loading="lazy" />
              <Image src="https://picsum.photos/seed/clogo2/120/60" alt="Company Logo 2" width={120} height={60} className="grayscale hover:grayscale-0 transition-all" data-ai-hint="company logo" loading="lazy"/>
              <Image src="https://picsum.photos/seed/clogo3/120/60" alt="Company Logo 3" width={120} height={60} className="grayscale hover:grayscale-0 transition-all" data-ai-hint="company logo" loading="lazy"/>
              <Image src="https://picsum.photos/seed/clogo4/120/60" alt="Company Logo 4" width={120} height={60} className="grayscale hover:grayscale-0 transition-all" data-ai-hint="company logo" loading="lazy"/>
            </div>
          </section>
        </main>

        {/* Sticky CTA Footer (Mobile) */}
        {file && !loading && (
          <div className={`fixed bottom-0 left-0 right-0 bg-card p-4 shadow-lg border-t border-border md:hidden ${direction === 'rtl' ? 'font-arabic' : ''}`} dir={direction}>
            <Button
              onClick={handleAnalyze}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg text-lg"
              disabled={loading || !file}
            >
              {loading ? t('analyzingResume') : t('startNowFreeRatingMobile')}
            </Button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};


interface InfoCardStepProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
  dataAiHint: string;
  background?: boolean; // Optional prop to control background
}

function InfoCardStep({ imageSrc, alt, title, description, dataAiHint, background = true }: InfoCardStepProps) {
  const { direction } = useContext(LanguageContext);
  return (
    <ShadCard className={`shadow-none hover:shadow-none transition-shadow overflow-hidden ${background ? 'bg-card' : 'bg-transparent border-none'} flex flex-col items-center pt-5`}>
      <Image 
        src={imageSrc} 
        alt={alt} 
        width={180} 
        height={180} 
        className="object-contain" 
        data-ai-hint={dataAiHint} 
        loading="lazy"
      />
      <ShadCardContent className="p-5 text-center w-full">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-base text-muted-foreground">{description}</p>
      </ShadCardContent>
    </ShadCard>
  );
}

// Dummy Card, CardHeader, CardTitle, CardContent components are removed as we import from shadcn/ui directly now.
// Helper to use cn if not already available
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export default UploadCVPage;

