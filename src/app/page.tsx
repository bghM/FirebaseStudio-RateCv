'use client';

import Head from 'next/head';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';
import { Header } from '@/components/layout/header';

export default function HomePage() {
  const { language, direction } = useLanguage();
  const t = translations[language];

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
      <Header ctaTitle={t.header.tabRateCV} ctaLink="/upload-cv/uploadCV" />

      <main className="min-h-screen flex items-center justify-center bg-background text-2xl font-semibold text-primary">
        Hello, landing page
      </main>
    </div>
  );
}