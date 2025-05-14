'use client';

import Head from 'next/head';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';
import { Header } from '@/components/layout/header';
import React, { useState, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/layout/footer';
import { useDropzone } from 'react-dropzone';
import { useRouter } from 'next/navigation';
import { Zap, UploadCloud } from 'lucide-react';


export default function AddOldCVUploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { language, direction } = useLanguage();
  const t = translations[language];
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setFile(acceptedFiles[0]);
      }
    },
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'image/*': ['.jpg', '.jpeg', '.png'],
    },
  });
  
  const handleConvert = () => {
    if (!file) return;
    setLoading(true);
    setTimeout(() => {
      // simulate AI processing
      router.push('/cv-builder?source=upload');
    }, 1500);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Zap className="h-12 w-12 animate-ping text-primary" />
      </div>
    );
  }
  return (
    <div className={`min-h-screen flex flex-col bg-background ${direction === 'rtl' ? 'font-arabic' : ''}`} dir={direction} lang={language}>
      <Head>
        <title>{t.addOldCV.heroTitle}</title>
        <meta name="description" content={t.addOldCV.heroSubtitle} />
      </Head>

      <Header ctaTitle={t.header.tabAddOldCV} />

      <main className="container mx-auto p-6 flex-grow text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">{t.addOldCV.heroTitle}</h1>
        <p className="text-muted-foreground mb-8 text-lg max-w-xl mx-auto">{t.addOldCV.heroSubtitle}</p>

        <div {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-10 md:p-16 cursor-pointer transition-all
          ${isDragActive ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground hover:border-primary/70'}
          ${file ? 'border-green-500 bg-green-100 text-green-700' : ''}`}
        >
          <input {...getInputProps()} />
          {loading ? (
                  <div className="flex flex-col items-center justify-center h-32">
                    <UploadCloud className="h-12 w-12 animate-spin text-primary mb-2" />
                    <p className="mt-4 text-lg font-semibold text-primary">{t.addOldCV.analyzingFile}</p>
                  </div>
            ) :file ? (
            <div className="flex flex-col items-center">
              <UploadCloud className="h-10 w-10 text-green-500 mb-2" />
              <p className="text-lg font-semibold">{file.name}</p>
              <p className="text-sm text-muted-foreground">{t.addOldCV.readyToConvert}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <UploadCloud className="h-12 w-12 mb-4" />
              <p className="text-lg font-semibold">{t.addOldCV.dragDropPrompt}</p>
              <p className="text-sm">{t.addOldCV.orClickToBrowse}</p>
              <p className="text-xs text-muted-foreground mt-2">{t.addOldCV.supportedFormats}</p>
            </div>
          )}
        </div>

        {file && (
          <Button
            size="lg"
            onClick={handleConvert}
            disabled={loading}
            className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 text-lg rounded-lg shadow-lg"
          >
            {loading ? t.addOldCV.analyzingFile : t.addOldCV.readyToConvert}
          </Button>
        )}
      </main>
    </div>
  );

}

