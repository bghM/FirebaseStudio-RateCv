// File: /components/ui/sections.tsx

'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

interface FaqItemProps {
  value: string;
  title: string;
  answer: string;
}

export function FaqItem({ value, title, answer }: FaqItemProps) {
  const { direction } = useLanguage();
  return (
    <AccordionItem value={value}>
      <AccordionTrigger
        className={`py-6 text-lg font-semibold text-foreground hover:text-primary transition-colors [&[data-state=open]>svg]:text-primary ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
      >
        <div className={`flex items-center ${direction === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
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

interface FinalCTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onClick: () => void;
}

export function FinalCTASection({ title, subtitle, buttonText, onClick }: FinalCTAProps) {
  const { direction } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/80 via-secondary to-primary text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${direction === 'rtl' ? 'text-center' : 'text-center'}`}>{title}</h2>
        <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 ${direction === 'rtl' ? 'text-right' : 'text-center'}`}>{subtitle}</p>
        <button
          onClick={onClick}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-lg shadow-xl transition-transform transform hover:scale-105"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}
