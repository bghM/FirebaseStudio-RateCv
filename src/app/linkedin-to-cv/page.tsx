'use client';

import Head from 'next/head';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';
import { Header } from '@/components/layout/header';

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


      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-20 animate-fade-in delay-100">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.linkedinToCV.heroTitle}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">{t.linkedinToCV.heroSubtitle}</p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md text-lg hover:bg-primary/90 transition duration-300">
              {t.linkedinToCV.heroButton}
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image src="/image3.png" alt="LinkedIn Import" width={300} height={300} />
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
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
        </section>

        {/* Why Use */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.linkedinToCV.whyUse}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center p-4 bg-muted rounded-md animate-fade-in delay-[100ms]">
                <div className="w-8 h-8 bg-primary/10 rounded-full mr-4" />
                <span className="text-lg">{t.linkedinToCV[`whyUse${i}`]}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-20 text-center animate-fade-in delay-[250ms]">
          <div className="max-w-2xl mx-auto p-8 bg-muted/30 rounded-lg shadow-inner">
            <p className="text-xl italic mb-4">"{t.linkedinToCV.testimonial}"</p>
            <p className="text-lg font-semibold">{t.linkedinToCV.testimonialAuthor}</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center animate-fade-in delay-[300ms]">
          <h2 className="text-3xl font-bold mb-8">{t.linkedinToCV.callToActionText}</h2>
          <button className="bg-secondary text-secondary-foreground px-10 py-4 rounded-md text-xl hover:bg-secondary/90 transition duration-300">
            {t.linkedinToCV.callToActionButton}
          </button>
        </section>
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