'use client';

import Head from 'next/head';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';
import { Header } from '@/components/layout/header';
import React, { useState, useCallback, useEffect } from 'react';
import { Zap } from 'lucide-react';

export default function TranslateCVUploadPage() {
  const { language, direction } = useLanguage();
  const t = translations[language];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Zap className="h-12 w-12 animate-ping text-primary" />
      </div>
    );
  }

  
  return (
    <div className={`${direction === 'rtl' ? 'font-arabic' : ''}`} dir={direction} lang={language}>
      <Head>
        <title>{t.homepage?.heroTitle || 'Seirah - Smart Resume Tools'}</title>
        <meta name="description" content={t.homepage?.heroSubtitle || 'AI-powered tools to help you create a professional resume in seconds.'} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={t.homepage?.heroTitle || 'Seirah'} />
        <meta property="og:description" content={t.homepage?.heroSubtitle || 'Create ATS-friendly resumes tailored for the Saudi market.'} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/seo-cover.webp" />
        <meta property="og:locale" content={language === 'ar' ? 'ar_SA' : 'en_US'} />
        <meta name="language" content={language === 'ar' ? 'Arabic' : 'English'} />
        <link rel="canonical" href="https://seirah.com" />
      </Head>

      {/* edit this based on preffered user flow */}
      <Header ctaTitle={t.header.tabRateCV} ctaLink="/translate-cv/translateCV" />

      <main className="min-h-screen flex items-center justify-center bg-background text-2xl font-semibold text-primary">
        Hello, translate page
      </main>
    </div>
  );
}





// import React, { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';

// const TranslateCVUploadPage: React.FC = () => {
//   const [uploadedFile, setUploadedFile] = useState<File | null>(null);

//   const onDrop = useCallback((acceptedFiles: File[]) => {
//     // Do something with the files
//     if (acceptedFiles && acceptedFiles.length > 0) {
//       setUploadedFile(acceptedFiles[0]);
//       // TODO: Implement file upload logic here
//       console.log('File accepted:', acceptedFiles[0].name);
//     }
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: {
//       'application/pdf': ['.pdf'],
//     },
//     multiple: false,
//   });

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Upload CV for Translation</h1>
//       <p className="mb-4">Upload your CV in PDF format to get a translated version.</p>

//       <div
//         {...getRootProps()}
//         className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer ${
//           isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'
//         }`}
//       >
//         <input {...getInputProps()} />
//         {isDragActive ? (
//           <p>Drop the file here ...</p>
//         ) : (
//           <p>Drag 'n' drop a PDF file here, or click to select a file</p>
//         )}
//         {uploadedFile && (
//           <p className="mt-2">Selected file: {uploadedFile.name}</p>
//         )}
//       </div>

//       {/* TODO: Add progress/loading indicator and download button here */}
//     </div>
//   );
// };

// export default TranslateCVUploadPage;