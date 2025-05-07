
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ResumeAnalysisModal } from '@/components/resume-analysis-modal';
import { useLanguage } from '@/hooks/use-language';
import { CheckCircle, Zap, Languages, UploadCloud, BarChartBig, Edit3, Star, MessageSquare, HelpCircle, SparklesIcon } from 'lucide-react';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, direction, language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
     // Initialize Gtag if it exists for tracking
    if (typeof window.gtag === 'undefined') {
      console.warn("Google Analytics gtag not found. Tracking will be disabled.");
    }
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

  const handleAnalyzeButtonClick = () => {
    trackCTAClick('hero_analyze_my_resume');
    setIsModalOpen(true);
  };
  
  const handleFinalCtaClick = () => {
    trackCTAClick('final_cta_get_started');
    setIsModalOpen(true);
  }

  if (!mounted) {
    // Prevents hydration mismatch by not rendering anything on the server for this component
    // or rendering a loading state if preferred.
    return <div className="min-h-screen flex items-center justify-center bg-background"><Zap className="h-12 w-12 animate-ping text-primary"/></div>;
  }
  
  return (
    <div className={`flex flex-col min-h-screen bg-background ${direction === 'rtl' ? 'font-arabic' : ''}`} dir={direction}>
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('heroTitle')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('heroSubtitle')}
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105" 
              onClick={handleAnalyzeButtonClick}
            >
              <Zap className="mr-2 h-5 w-5" /> {t('analyzeMyResume')}
            </Button>
            <div className="mt-12">
              <Image
                src="https://picsum.photos/seed/resumehero/800/400"
                alt="Resume Analysis Illustration"
                width={800}
                height={400}
                className="rounded-lg shadow-xl mx-auto"
                data-ai-hint="resume analysis interface"
                priority
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">{t('howItWorks')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <HowItWorksStep icon={<UploadCloud className="h-12 w-12 text-primary mb-4" />} title={t('step1Title')} description={t('step1Description')} stepNumber="1" />
              <HowItWorksStep icon={<BarChartBig className="h-12 w-12 text-primary mb-4" />} title={t('step2Title')} description={t('step2Description')} stepNumber="2" />
              <HowItWorksStep icon={<Edit3 className="h-12 w-12 text-primary mb-4" />} title={t('step3Title')} description={t('step3Description')} stepNumber="3" />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">{t('benefits')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <BenefitCard icon={<CheckCircle className="h-10 w-10 text-primary" />} title={t('benefitATSTitle')} description={t('benefitATSDescription')} />
              <BenefitCard icon={<SparklesIcon className="h-10 w-10 text-primary" />} title={t('benefitAITitle')} description={t('benefitAIDescription')} />
              <BenefitCard icon={<Languages className="h-10 w-10 text-primary" />} title={t('benefitLangTitle')} description={t('benefitLangDescription')} />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">{t('testimonials')}</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <TestimonialCard
                name={t('testimonial1Name')}
                quote={t('testimonial1Quote')}
                avatar="https://picsum.photos/seed/avatar1/100/100"
                stars={5}
              />
              <TestimonialCard
                name={t('testimonial2Name')}
                quote={t('testimonial2Quote')}
                avatar="https://picsum.photos/seed/avatar2/100/100"
                stars={4}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">{t('faq')}</h2>
            <Accordion type="single" collapsible className="w-full">
              <FaqItem
                value="item-1"
                title={t('faq1Title')}
                answer={t('faq1Answer')}
              />
              <FaqItem
                value="item-2"
                title={t('faq2Title')}
                answer={t('faq2Answer')}
              />
              <FaqItem
                value="item-3"
                title={t('faq3Title')}
                answer={t('faq3Answer')}
              />
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/80 via-secondary to-primary text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('finalCtaTitle')}</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t('finalCtaSubtitle')}
            </p>
            <Button 
              size="lg" 
              variant="default" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-lg shadow-xl transition-transform transform hover:scale-105"
              onClick={handleFinalCtaClick}
            >
               <Zap className="mr-2 h-5 w-5" /> {t('getStartedNow')}
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      <ResumeAnalysisModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

interface HowItWorksStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: string;
}

function HowItWorksStep({ icon, title, description, stepNumber }: HowItWorksStepProps) {
  const { direction } = useLanguage();
  return (
    <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative mb-4">
        {icon}
        <span className={`absolute -top-2 ${direction === 'rtl' ? '-left-2' : '-right-2'} bg-primary text-primary-foreground text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center`}>
          {stepNumber}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow bg-card">
      <CardHeader className="flex flex-col items-center mb-2">
        {icon}
        <CardTitle className="mt-4 text-xl font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

interface TestimonialCardProps {
  name: string;
  quote: string;
  avatar: string;
  stars: number;
}

function TestimonialCard({ name, quote, avatar, stars }: TestimonialCardProps) {
  const { direction } = useLanguage();
  return (
    <Card className="p-6 text-left shadow-lg bg-muted/30 border-border">
      <CardContent className="relative">
        <div className="flex items-center mb-4">
          <Image src={avatar} alt={name} width={50} height={50} className="rounded-full mr-4" data-ai-hint="person avatar"/>
          <div>
            <h4 className="font-semibold text-foreground">{name}</h4>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < stars ? 'fill-current' : ''}`} />
              ))}
            </div>
          </div>
        </div>
        <MessageSquare className={`absolute top-0 ${direction === 'rtl' ? 'left-0' : 'right-0'} h-8 w-8 text-primary/20 transform ${direction === 'rtl' ? 'scale-x-[-1]' : ''}`} />
        <p className="text-muted-foreground italic">"{quote}"</p>
      </CardContent>
    </Card>
  );
}

interface FaqItemProps {
  value: string;
  title: string;
  answer: string;
}

function FaqItem({ value, title, answer }: FaqItemProps) {
  return (
    <AccordionItem value={value} className="border-b border-border">
      <AccordionTrigger className="py-6 text-lg font-semibold text-foreground hover:text-primary transition-colors [&[data-state=open]>svg]:text-primary">
        <div className="flex items-center">
          <HelpCircle className="mr-3 h-6 w-6 text-primary/70" />
          {title}
        </div>
      </AccordionTrigger>
      <AccordionContent className="pb-6 text-muted-foreground text-base leading-relaxed">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}

