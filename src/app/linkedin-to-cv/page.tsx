'use client';

import Head from 'next/head';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Zap, UploadCloud, Sparkles, Download, Clock, ArrowRightLeft, BadgeCheck } from 'lucide-react';
import { HowItWorksStep, BenefitCard, TestimonialCard } from '@/components/ui/cards';
import { FinalCTASection } from '@/components/ui/sections';


export default function LinkedInToCVLandingPage() {
  const { language, direction } = useLanguage();
  const t = translations[language];

  return (
    <div className={`min-h-screen bg-background ${direction === 'rtl' ? 'rtl text-right font-arabic' : 'ltr text-left'}`} lang={language} dir={direction}>
      <Head>
        <title>{t.linkedinToCV.heroTitle}</title>
        <meta name="description" content={t.linkedinToCV.heroSubtitle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content={language === 'ar' ? 'Arabic' : 'English'} />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content={t.linkedinToCV.heroTitle} />
        <meta property="og:description" content={t.linkedinToCV.heroSubtitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seirah.com/linkedin-to-cv" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:locale" content={language === 'ar' ? 'ar_SA' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.linkedinToCV.heroTitle} />
        <meta name="twitter:description" content={t.linkedinToCV.heroSubtitle} />
        <meta name="twitter:image" content="/og-image.png" />
        <link rel="canonical" href="https://seirah.com/linkedin-to-cv" />
      </Head>

      <Header ctaTitle={t.tabAddLinkedIn} ctaLink="/linkedin-to-cv" />

      <main className="flex-grow">

        {/* Hero section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background text-center">
          <div className={`container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
            <div className={direction === 'rtl' ? 'text-right' : 'text-left'}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t.linkedinToCV.heroTitle}</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 md:max-w-none max-w-2xl mx-auto">{t.linkedinToCV.heroSubtitle}</p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105"
                // onClick={}
              >
                <Zap className="mr-2 h-5 w-5" /> {t.linkedinToCV.heroButton}
              </Button>
            </div>

            {/* Crop the image and add a bottom haze or gradient fade */}
            {/* <div className="mt-12 md:mt-0 flex justify-center">
              <div className="w-full max-w-2xl h-[600px] overflow-hidden relative rounded-lg">
                <Image
                  src="/image3.png"
                  alt={t.shared.resumeAnalysisIllustrationAlt}
                  fill
                  className="object-cover"
                  loading="lazy"
                /> */}
                {/* Add Bottom Haze (Gradient Fade) */}
                {/* <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none" />
              </div>
            </div> */}

            {/* Crop the image and add Full Haze Overlay */}
            <div className="mt-12 md:mt-0 flex justify-center">
              <div className="relative w-full max-w-2xl h-[600px] overflow-hidden rounded-lg">
                <Image
                  src="/image3.png"
                  alt={t.shared.resumeAnalysisIllustrationAlt}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                {/* Haze overlay across full image */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/0 pointer-events-none rounded-lg" />
              </div>
            </div>


          </div>
        </section>



        {/* How It Works Section */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-6 text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-primary ${direction === 'rtl' ? 'text-right' : 'text-center'}`}>
              {t.linkedinToCV.howItWorks}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <HowItWorksStep
                icon={<UploadCloud className="h-12 w-12 text-primary mb-4" />}
                title={t.linkedinToCV.step1Title}
                description=""
                stepNumber="1"
              />
              <HowItWorksStep
                icon={<Sparkles className="h-12 w-12 text-primary mb-4" />}
                title={t.linkedinToCV.step2Title}
                description=""
                stepNumber="2"
              />
              <HowItWorksStep
                icon={<Download className="h-12 w-12 text-primary mb-4" />}
                title={t.linkedinToCV.step3Title}
                description=""
                stepNumber="3"
              />
            </div>
          </div>
        </section>


        {/* How It Works - with animation */}
        {/* <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.linkedinToCV.howItWorks}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center text-center animate-fade-in delay-[150ms]">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4 animate-float">
                  <Image src={`/icons/step${step}.svg`} alt={t.linkedinToCV[`step${step}Title`]} width={32} height={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t.linkedinToCV[`step${step}Title`]}</h3>
              </div>
            ))}
          </div>
        </section> */}


        {/* Why Use Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">{t.linkedinToCV.whyUse}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Clock className="w-10 h-10 text-primary" />,
                  title: t.linkedinToCV.whyUse1,
                },
                {
                  icon: <ArrowRightLeft className="w-10 h-10 text-primary" />,
                  title: t.linkedinToCV.whyUse2,
                },
                {
                  icon: <BadgeCheck className="w-10 h-10 text-primary" />,
                  title: t.linkedinToCV.whyUse3,
                },
                {
                  icon: <Sparkles className="w-10 h-10 text-primary" />,
                  title: t.linkedinToCV.whyUse4,
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
              name={t.linkedinToCV.testimonialAuthor}
              quote={t.linkedinToCV.testimonial}
              avatar="https://picsum.photos/seed/avatar5/100/100"
              stars={5}
            />
          </div>
        </section>

        {/* Final CTA */}
        <FinalCTASection
          title={t.linkedinToCV.callToActionText}
          subtitle=""
          buttonText={t.linkedinToCV.callToActionButton}
          onClick={() => console.log('CTA Clicked')} // Replace with actual handler
        />


      </main>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in {
          animation: fadeIn 0.7s ease-out both;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}