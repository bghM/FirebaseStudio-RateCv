'use client';

import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { Zap, UploadCloud, Brain, Pencil, ArrowRight } from 'lucide-react';
import Head from 'next/head';
import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { TestimonialCard } from '@/components/ui/cards';


export default function AddOldCVLandingPage() {
  const { language, direction } = useLanguage();
  const t = translations[language];
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // the error could be here
    // if (typeof window.gtag === 'undefined') {
    //   console.warn('Google Analytics gtag not found. Tracking will be disabled.');
    // }
  }, []);

  const trackCTAClick = (ctaName: string) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: ctaName,
      });
    } else {
      console.log(`CTA Click: ${ctaName} (gtag not available)`);
    }
  };


  const handleAddOldCVButtonClick = () => {
    trackCTAClick('hero_cta');
    router.push('/add-old-cv/addOldCV');
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Zap className="h-12 w-12 animate-ping text-primary" />
      </div>
    );
  }


  return (
    <div className={`min-h-screen bg-background text-foreground ${direction === 'rtl' ? 'font-arabic' : ''}`} dir={direction} lang={language}>
     
     <Head>
        <title>{t.addOldCV.heroTitle}</title>
        <meta name="description" content={t.addOldCV.heroSubtitle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content={language === 'ar' ? 'Arabic' : 'English'} />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content={t.addOldCV.heroTitle} />
        <meta property="og:description" content={t.addOldCV.heroSubtitle} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === 'ar' ? 'ar_SA' : 'en_US'} />
        <meta property="og:url" content="https://seirah.com/rate-cv" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.addOldCV.heroTitle} />
        <meta name="twitter:description" content={t.addOldCV.heroSubtitle} />
        <meta name="twitter:image" content="/og-image.png" />
        <link rel="canonical" href="https://seirah.com/rate-cv" />
      </Head>

      <Header ctaTitle={t.header.tabAddOldCV} ctaLink="/add-old-cv/addOldCV" />

      <main className="flex-grow"> 

      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-primary/10 to-background">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
         {t.addOldCV.heroTitle}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
        {t.addOldCV.heroSubtitle}
        </p>
        <Button 
          size="lg" 
          className="text-lg px-8 py-4 rounded-xl bg-primary text-primary-foreground"
          onClick={handleAddOldCVButtonClick}>
          {t.addOldCV.heroButton}
        </Button>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-card text-center">
        <h2 className="text-3xl font-bold mb-12 text-primary">
          {t.rateCV.howItWorks}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <HowStep icon={<UploadCloud className="h-10 w-10" />} text={t.addOldCV.step1Title} />
          <HowStep icon={<Brain className="h-10 w-10" />} text={t.addOldCV.step2Title} />
          <HowStep icon={<Pencil className="h-10 w-10" />} text={t.addOldCV.step2Title} />
        </div>
      </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background text-center">
        <h2 className="text-3xl font-bold mb-12 text-primary">
          {t.rateCV.benefits} 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4 text-muted-foreground">
          <WhyPoint icon={<ArrowRight />} text={t.addOldCV.whyUse1} />
          <WhyPoint icon={<ArrowRight />} text={t.addOldCV.whyUse2} />
          <WhyPoint icon={<ArrowRight />} text={t.addOldCV.whyUse3} />
          <WhyPoint icon={<ArrowRight />} text={t.addOldCV.whyUse4} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-primary ${direction === 'rtl' ? 'text-right' : 'text-center'}`}>{t.addOldCV.testimonials}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TestimonialCard
              name={t.addOldCV.testimonial1Name}
              quote={t.addOldCV.testimonial1Quote}
              avatar="https://picsum.photos/seed/avatar1/100/100"
              stars={5}
            />  
          </div>
        </div>
      </section>



      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/80 via-secondary to-primary text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${direction === 'rtl' ? 'text-center' : 'text-center'}`}>{t.addOldCV.callToActionText}</h2>
            <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 ${direction === 'rtl' ? 'text-right' : 'text-center'}`}>
              {/* {t.addOldCV.callToActionText} */}
            </p>
            <Button 
              size="lg"
              variant="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-lg shadow-xl transition-transform transform hover:scale-105"
              onClick={handleAddOldCVButtonClick}
            >
              <Zap className="mr-2 h-5 w-5" /> {t.addOldCV.getStartedNow}
            </Button>
          </div>
        </section>

        <Footer />

      </main>
    </div>
  );
}

function HowStep({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-muted p-4 rounded-full text-primary">{icon}</div>
      <p className="text-lg font-medium">{text}</p>
    </div>
  );
}

function WhyPoint({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 text-lg justify-start">
      <span className="text-primary">{icon}</span>
      <p>{text}</p>
    </div>
  );
}



// 'use client';

// import Head from 'next/head';
// import { useLanguage } from '@/hooks/use-language';
// import { translations } from '@/lib/translations';
// import { Header } from '@/components/layout/header';
// import React, { useState, useCallback, useEffect } from 'react';
// import { Zap } from 'lucide-react';


// export default function LinkedInToCVUploadPage() {
//   const { language, direction } = useLanguage();
//   const t = translations[language];
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-background">
//         <Zap className="h-12 w-12 animate-ping text-primary" />
//       </div>
//     );
//   }

  
//   return (
//     <div className={`${direction === 'rtl' ? 'font-arabic' : ''}`} dir={direction} lang={language}>
//       <Head>
//         <title>{t.homepage?.heroTitle || 'Seirah - Smart Resume Tools'}</title>
//         <meta name="description" content={t.homepage?.heroSubtitle || 'AI-powered tools to help you create a professional resume in seconds.'} />
//         <meta name="robots" content="index, follow" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta property="og:title" content={t.homepage?.heroTitle || 'Seirah'} />
//         <meta property="og:description" content={t.homepage?.heroSubtitle || 'Create ATS-friendly resumes tailored for the Saudi market.'} />
//         <meta property="og:type" content="website" />
//         <meta property="og:image" content="/seo-cover.webp" />
//         <meta property="og:locale" content={language === 'ar' ? 'ar_SA' : 'en_US'} />
//         <meta name="language" content={language === 'ar' ? 'Arabic' : 'English'} />
//         <link rel="canonical" href="https://seirah.com" />
//       </Head>

//       {/* edit this based on preffered user flow */}
//       <Header ctaTitle={t.header.tabRateCV} ctaLink="/rate-cv/rateCV" />

//       <main className="min-h-screen flex items-center justify-center bg-background text-2xl font-semibold text-primary">
//         Hello, add old cv page
//       </main>
//     </div>
//   );
// }