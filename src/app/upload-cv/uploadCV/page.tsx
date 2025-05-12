'use client';

import Head from 'next/head';
import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { UploadCloud } from 'lucide-react';
import { Card as ShadCard, CardContent as ShadCardContent, CardHeader as ShadCardHeader, CardTitle as ShadCardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';
import { Header } from '@/components/layout/header';

const UploadCVPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { language, direction } = useLanguage();
  const t = translations[language];
  const { toast } = useToast();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
        toast({ title: t.rateCV.unsupportedFileFormatError, description: t.rateCV.unsupportedFileFormatDescription, variant: 'destructive' });
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'file_drop_failed', { event_category: 'upload_cv', event_label: 'unsupported_format' });
        }
      }
    }
  }, [t, toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'application/pdf': ['.pdf'], 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'] } });

  const handleAnalyze = async () => {
    if (!file) {
      toast({ title: t.rateCV.noFileSelectedError, description: t.rateCV.noFileSelectedDescription, variant: 'destructive' });
      return;
    }
    setLoading(true);
    toast({ title: 'Demo only', description: 'Analysis will be added later.' });
    setTimeout(() => setLoading(false), 1000);
  };

  if (!mounted) {
    return <div className="min-h-screen flex items-center justify-center bg-background"><UploadCloud className="h-12 w-12 animate-ping text-primary"/></div>;
  }

  return (
    <>
      <Head>
        <title>{t.rateCV.heroTitle}</title>
        <meta name="description" content={t.rateCV.heroSubtitle} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t.rateCV.heroTitle} />
        <meta property="og:description" content={t.rateCV.heroSubtitle} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === 'ar' ? 'ar_SA' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.rateCV.heroTitle} />
        <meta name="twitter:description" content={t.rateCV.heroSubtitle} />
        <meta name="language" content={language === 'ar' ? 'Arabic' : 'English'} />
      </Head>

      <Header ctaTitle={t.header.tabRateCV} ctaLink="/upload-cv/uploadCV" />

      
      <div className={`flex flex-col min-h-screen bg-background ${direction === 'rtl' ? 'font-arabic' : ''}`} dir={direction} lang={language}>
        <main className="container mx-auto p-4 md:p-8 flex-grow">
          <h1 className={`text-3xl md:text-4xl font-bold mb-8 text-center text-primary ${direction === 'rtl' ? 'md:text-right' : 'md:text-left'}`}>{t.rateCV.uploadCVTitle}</h1>

          <ShadCard className="max-w-2xl mx-auto shadow-xl bg-card border-border rounded-xl overflow-hidden">
            <ShadCardHeader className="bg-muted/30 p-6 border-b border-border">
              <ShadCardTitle className={`text-2xl font-semibold text-foreground ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>{t.rateCV.uploadAreaTitle}</ShadCardTitle>
            </ShadCardHeader>
            <ShadCardContent className="p-6 md:p-8">
              <div {...getRootProps()} className={`border-2 border-dashed rounded-lg p-8 md:p-12 text-center cursor-pointer ${isDragActive ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary/70 text-muted-foreground'} ${file ? 'border-green-500 bg-green-500/10 text-green-700' : ''}`}>
                <input {...getInputProps()} />
                {loading ? (
                  <div className="flex flex-col items-center justify-center h-32">
                    <UploadCloud className="h-12 w-12 animate-spin text-primary mb-2" />
                    <p className="mt-4 text-lg font-semibold text-primary">{t.rateCV.analyzingResume}</p>
                  </div>
                ) : file ? (
                  <div className="flex flex-col items-center justify-center h-32">
                    <UploadCloud className="h-12 w-12 text-green-500 mb-3" />
                    <p className="text-lg font-semibold mb-1 text-green-700">{t.rateCV.fileUploaded}</p>
                    <p className="text-sm text-muted-foreground">{file.name}</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-32">
                    <UploadCloud className={`h-12 w-12 mb-3 ${isDragActive ? 'text-primary' : 'text-muted-foreground'}`} />
                    <p className="text-lg font-semibold mb-1">{t.rateCV.dragDropPrompt}</p>
                    <p className="text-sm">{t.rateCV.orClickToBrowse}</p>
                    <p className="text-xs text-muted-foreground mt-2">{t.rateCV.supportedFormats}</p>
                  </div>
                )}
              </div>
              {file && !loading && (
                <Button onClick={handleAnalyze} className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg text-lg shadow-md transition-transform transform hover:scale-105">
                  {t.rateCV.startNowFreeRating}
                </Button>
              )}
            </ShadCardContent>
          </ShadCard>
        </main>
      </div>
    </>
  );
};

export default UploadCVPage;
