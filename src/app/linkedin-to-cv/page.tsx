'use client';
// This is a conceptual structure using Next.js and Tailwind CSS.
// Full implementation would require separate components for each section and handling localization.

import Head from 'next/head';
import Image from 'next/image'; // Assuming you have images in the public folder
import { useLanguage } from '@/hooks/use-language'; // Custom hook for language switching

const LinkedInToCVLandingPage = () => {
  const { language, toggleLanguage } = useLanguage(); // Assuming language context and toggle

  const translations = {
    ar: {
      heroTitle: "حوّل ملفك في لينكدإن إلى سيرة ذاتية احترافية خلال ثوانٍ",
      heroSubtitle: "ارفع ملف PDF الخاص بك من لينكدإن، أو انسخ بياناتك، ودع الذكاء الاصطناعي يجهز سيرتك تلقائيًا.",
      heroButton: "جرب الآن",
      howItWorks: "كيف يعمل",
      step1Title: "ارفع ملف لينكدإن PDF أو انسخ المحتوى من ملفك",
      step2Title: "نحوّل الملف تلقائيًا إلى سيرة ذاتية قابلة للتخصيص",
      step3Title: "اختر القالب، عدّل المعلومات، وحمّل سيرتك",
      whyUse: "لماذا تستخدم هذه الميزة",
      whyUse1: "وفّر وقتك",
      whyUse2: "بدون إدخال يدوي",
      whyUse3: "متوافق مع أنظمة ATS",
      whyUse4: "تحسين تلقائي للمحتوى",
      testimonial: "استخدمت الميزة وجهزت سيرتي في أقل من دقيقة!",
      testimonialAuthor: "– سارة",
      callToActionText: "ابدأ الآن وسهّل عملية إنشاء سيرتك الذاتية",
      callToActionButton: "ابدأ الآن",
    },
    en: {
      heroTitle: "Turn your LinkedIn profile into a professional CV in seconds",
      heroSubtitle: "Upload your LinkedIn PDF or paste your content — let AI auto-generate a tailored CV for you.",
      heroButton: "Try it now",
      howItWorks: "How It Works",
      step1Title: "Upload your LinkedIn PDF or paste your content",
      step2Title: "We automatically convert it into a customizable CV",
      step3Title: "Choose a template, make edits, and download your CV",
      whyUse: "Why Use This Feature",
      whyUse1: "Save time",
      whyUse2: "No manual typing",
      whyUse3: "ATS-friendly formatting",
      whyUse4: "Automatic content improvement",
      testimonial: "Used the feature and built my CV in under a minute!",
      testimonialAuthor: "– Sarah",
      callToActionText: "Start now and simplify your CV creation process",
      callToActionButton: "Start Now",
    },
  };

  const t = translations[language];

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'rtl text-right' : 'ltr text-left'}`}>
      <Head>
        <title>{t.heroTitle}</title>
        <meta name="description" content={t.heroSubtitle} />
      </Head>

      {/* Header (assuming a shared header component) */}
      {/* <Header /> */}

      <main className="container mx-auto px-4 py-12">
        {/* Language Toggle (assuming a simple toggle button) */}
        <div className="flex justify-end mb-8">
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 border rounded-md"
          >
            {language === 'ar' ? 'English' : 'العربية'}
          </button>
        </div>

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-20">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.heroTitle}</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">{t.heroSubtitle}</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-700 transition duration-300">
              {t.heroButton}
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in">
            {/* Placeholder for a soft illustration */}
            <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              {/* Illustration or animation here */}
              <span className="text-gray-500">Illustration Placeholder</span>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.howItWorks}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center animate-fade-in delay-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 animate-float">
                {/* PDF or LinkedIn Icon */}
                <Image src="/icons/pdf.svg" alt="Upload Icon" width={40} height={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.step1Title}</h3>
              {/* <p className="text-gray-600">{t.step1Description}</p> */} {/* Assuming description is not needed per instructions */}
            </div>
            <div className="flex flex-col items-center text-center animate-fade-in delay-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-float delay-100">
                {/* AI Icon */}
                <Image src="/icons/ai.svg" alt="AI Icon" width={40} height={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.step2Title}</h3>
              {/* <p className="text-gray-600">{t.step2Description}</p> */}
            </div>
            <div className="flex flex-col items-center text-center animate-fade-in delay-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 animate-float delay-200">
                {/* Speed or Download Icon */}
                <Image src="/icons/speed.svg" alt="Speed Icon" width={40} height={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.step3Title}</h3>
              {/* <p className="text-gray-600">{t.step3Description}</p> */}
            </div>
          </div>
        </section>

        {/* Why Use This Feature Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.whyUse}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center p-4 bg-gray-100 rounded-md animate-fade-in delay-400">
              {/* Icon placeholder */}
              <div className="w-8 h-8 bg-blue-200 rounded-full mr-4 flex items-center justify-center"></div>
              <span className="text-lg">{t.whyUse1}</span>
            </div>
            <div className="flex items-center p-4 bg-gray-100 rounded-md animate-fade-in delay-500">
               {/* Icon placeholder */}
               <div className="w-8 h-8 bg-green-200 rounded-full mr-4 flex items-center justify-center"></div>
              <span className="text-lg">{t.whyUse2}</span>
            </div>
            <div className="flex items-center p-4 bg-gray-100 rounded-md animate-fade-in delay-600">
               {/* Icon placeholder */}
               <div className="w-8 h-8 bg-purple-200 rounded-full mr-4 flex items-center justify-center"></div>
              <span className="text-lg">{t.whyUse3}</span>
            </div>
            <div className="flex items-center p-4 bg-gray-100 rounded-md animate-fade-in delay-700">
               {/* Icon placeholder */}
               <div className="w-8 h-8 bg-orange-200 rounded-full mr-4 flex items-center justify-center"></div>
              <span className="text-lg">{t.whyUse4}</span>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20 text-center animate-fade-in delay-800">
          <div className="max-w-2xl mx-auto p-8 bg-blue-50 rounded-lg shadow-inner">
            <p className="text-xl italic mb-4">"{t.testimonial}"</p>
            <p className="text-lg font-semibold">{t.testimonialAuthor}</p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center animate-fade-in delay-900">
          <h2 className="text-3xl font-bold mb-8">{t.callToActionText}</h2>
          <button className="bg-green-600 text-white px-10 py-4 rounded-md text-xl hover:bg-green-700 transition duration-300">
            {t.callToActionButton}
          </button>
        </section>
      </main>

      {/* Footer (assuming a shared footer component) */}
      {/* <Footer /> */}

      {/* Basic Animations (add to your global CSS or use a library like Framer Motion) */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
         .delay-800 { animation-delay: 0.8s; }
         .delay-900 { animation-delay: 0.9s; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
         .animate-float.delay-100 { animation-delay: 0.1s; }
         .animate-float.delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
  );
};

export default LinkedInToCVLandingPage;