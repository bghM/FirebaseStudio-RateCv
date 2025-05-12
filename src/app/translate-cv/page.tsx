// "use client";

// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function TranslateCVPage() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-4">Translate Your CV</h1>
//       <p className="text-lg text-gray-700 mb-6">
//         Easily translate your resume between Arabic and English using our AI-powered tool.
//         Upload your existing CV and get a professionally translated version ready for download.
//       </p>
//       <Link href="/translate-cv/translateCV" passHref>
//         <Button size="lg">
//           Start Translating
//         </Button>
//       </Link>
//     </div>
//   );
// }



// File: /src/app/translate-cv/page.tsx

'use client';

import Head from 'next/head';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Zap, UploadCloud, BookText, Download } from 'lucide-react';
import { HowItWorksStep, BenefitCard, TestimonialCard } from '@/components/ui/cards';
import { FinalCTASection } from '@/components/ui/sections';

export default function TranslateCVPage() {
  const { language, direction } = useLanguage();
  const t = translations[language];

  return (
    <div className={`min-h-screen bg-background ${direction === 'rtl' ? 'rtl text-right font-arabic' : 'ltr text-left'}`} lang={language} dir={direction}>
      <Head>
        <title>{t.translateCV.heroTitle}</title>
        <meta name="description" content={t.translateCV.heroSubtitle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content={language === 'ar' ? 'Arabic' : 'English'} />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content={t.translateCV.heroTitle} />
        <meta property="og:description" content={t.translateCV.heroSubtitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seirah.com/translate-cv" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.translateCV.heroTitle} />
        <meta name="twitter:description" content={t.translateCV.heroSubtitle} />
        <meta name="twitter:image" content="/og-image.png" />
        <link rel="canonical" href="https://seirah.com/translate-cv" />
      </Head>

      <Header ctaTitle={t.header.tabTranslateCV} ctaLink="/translate-cv" />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background text-center">
          <div className={`container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t.translateCV.heroTitle}</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 md:max-w-none max-w-2xl mx-auto">{t.translateCV.heroSubtitle}</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <Zap className="mr-2 h-5 w-5" /> {t.translateCV.heroButton}
              </Button>
            </div>
            <div className="mt-12 md:mt-0 flex justify-center">
              <div className="relative w-full max-w-2xl h-[600px] overflow-hidden rounded-lg">
                <Image src="/image4.png" alt={t.shared.resumeTranslationIllustrationAlt} fill className="object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/0 pointer-events-none rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-6 text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-primary ${direction === 'rtl' ? 'text-right' : 'text-center'}`}>{t.translateCV.howItWorks}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <HowItWorksStep icon={<UploadCloud className="h-12 w-12 text-primary mb-4" />} title={t.translateCV.step1Title} description={t.translateCV.step1Description} stepNumber="1" />
              <HowItWorksStep icon={<BookText className="h-12 w-12 text-primary mb-4" />} title={t.translateCV.step2Title} description={t.translateCV.step2Description} stepNumber="2" />
              <HowItWorksStep icon={<Download className="h-12 w-12 text-primary mb-4" />} title={t.translateCV.step3Title} description={t.translateCV.step3Description} stepNumber="3" />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCTASection
          title={t.translateCV.finalCtaTitle}
          subtitle={t.translateCV.finalCtaSubtitle}
          buttonText={t.translateCV.finalCtaButton}
          onClick={() => console.log('Translate Now Clicked')}
        />
      </main>
    </div>
  );
}