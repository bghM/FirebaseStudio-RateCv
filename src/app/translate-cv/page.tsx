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


'use client';

import Head from 'next/head';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Zap, UploadCloud, BookText, Download, TimerReset, Brain, LayoutTemplate, ShieldCheck } from 'lucide-react';
import { HowItWorksStep, BenefitCard, TestimonialCard } from '@/components/ui/cards';
import { FinalCTASection } from '@/components/ui/sections';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Footer } from '@/components/layout/footer';



export default function TranslateCVLandingPage() {
  const { language, direction } = useLanguage();
  const t = translations[language];
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTranslateCVButtonClick = () => {
    // trackCTAClick('hero_cta');
    router.push('/translate-cv/translateCV');
  };

 if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Zap className="h-12 w-12 animate-ping text-primary" />
      </div>
    );
  }

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

      <Header ctaTitle={t.header.tabTranslateCV} ctaLink="/translate-cv/translateCV" />

      <main className="flex-grow">

        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background text-center">
          <div className={`container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
            <div className={direction === 'rtl' ? 'text-right' : 'text-left'}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t.translateCV.heroTitle}</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 md:max-w-none max-w-2xl mx-auto">{t.translateCV.heroSubtitle}</p>
              <Button 
              // subtitle={t.translateCV.heroSubtitle}
              onClick={handleTranslateCVButtonClick}
              size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <Zap className="mr-2 h-5 w-5" /> {t.translateCV.heroButton}
              </Button>
            </div>
            <div className="mt-12 md:mt-0 flex justify-center">
              <Image
                src="/image5.png"
                alt={t.shared.resumeTranslationIllustrationAlt}
                width={500}
                height={800}
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-6 text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-primary ${direction === 'rtl' ? 'text-right' : 'text-center'}`}>{t.translateCV.howItWorks}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <HowItWorksStep 
                icon={<UploadCloud className="h-12 w-12 text-primary mb-4" />} 
                title={t.translateCV.step1Title} 
                description={t.translateCV.step1Description} 
                stepNumber="1" 
              />
              <HowItWorksStep 
                icon={<BookText className="h-12 w-12 text-primary mb-4" />} 
                title={t.translateCV.step2Title} 
                description={t.translateCV.step2Description} 
                stepNumber="2" 
              />
              <HowItWorksStep 
                icon={<Download className="h-12 w-12 text-primary mb-4" />} 
                title={t.translateCV.step3Title} 
                description={t.translateCV.step3Description} 
                stepNumber="3"
              />
            </div>
          </div>
        </section>


       {/* Why Use Section */}
       <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">{t.linkedinToCV.whyUse}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <TimerReset className="w-10 h-10 text-primary" />,
                  title: t.translateCV.whyUse1,
                },
                {
                  icon: <Brain className="w-10 h-10 text-primary" />,
                  title: t.translateCV.whyUse2,
                },
                {
                  icon: <LayoutTemplate className="w-10 h-10 text-primary" />,
                  title: t.translateCV.whyUse3,
                },
                {
                  icon: <ShieldCheck className="w-10 h-10 text-primary" />,
                  title: t.translateCV.whyUse4,
                },
              ].map(({ icon, title }, i) => (
                <BenefitCard
                  key={i}
                  icon={icon}
                  title={title}
                  description=""
                />
              ))}
            </div>
          </div>
        </section>


        {/* Testimonial Section */}
        <section className="py-16 md:py-20 bg-card text-center">
          <div className="max-w-2xl mx-auto">
            <TestimonialCard
              name={t.translateCV.testimonialAuthor}
              quote={t.translateCV.testimonial}
              avatar="https://picsum.photos/seed/avatar5/100/100"
              stars={5}
            />
          </div>
        </section>



        {/* Final CTA */}
        <FinalCTASection
          title={t.translateCV.callToActionText}
          subtitle=""
          buttonText={t.translateCV.callToActionButton}
          onClick={handleTranslateCVButtonClick}
        />
      </main>

      <Footer />
      {/* <ResumeAnalysisModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}

    </div>
  );
}

