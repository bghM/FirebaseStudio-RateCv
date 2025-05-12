// /components/ui/cards.tsx

'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

export interface HowItWorksStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: string;
}

export function HowItWorksStep({ icon, title, description, stepNumber }: HowItWorksStepProps) {
  const { direction } = useLanguage();
  return (
    <div className={`flex flex-col p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow ${direction === 'rtl' ? 'items-center text-right' : 'items-center text-left'}`}>
      <div className="relative mb-4">
        {icon}
        <span className={`absolute -top-2 ${direction === 'rtl' ? '-left-2' : '-right-2'} bg-primary text-primary-foreground text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center`}>
          {stepNumber}
        </span>
      </div>
      <h3 className={`text-xl font-semibold mb-2 text-foreground ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>{title}</h3>
      <p className={`text-muted-foreground ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>{description}</p>
    </div>
  );
}

export interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function BenefitCard({ icon, title, description }: BenefitCardProps) {
    const { direction } = useLanguage();
    const isRTL = direction === 'rtl';
  
    return (
      <Card dir={direction} className="p-6 shadow-lg hover:shadow-xl transition-shadow bg-card">
        <CardHeader className={`flex flex-col mb-2 ${isRTL ? 'items-end' : 'items-start'}`}>
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="mb-2">{icon}</div>
            <CardTitle className="text-xl font-semibold text-foreground">
              {title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className={isRTL ? 'text-right' : 'text-left'}>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    );
  }

export interface TestimonialCardProps {
  name: string;
  quote: string;
  avatar: string;
  stars: number;
}

export function TestimonialCard({ name, quote, avatar, stars }: TestimonialCardProps) {
  const { direction, t } = useLanguage();
  return (
    <Card className={`p-6 shadow-lg bg-muted/30 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
      <CardContent className={`relative ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
        <div className="flex items-center mb-4">
          <Image
            src={avatar}
            alt={t('personAvatarAlt') + ' ' + name}
            width={50}
            height={50}
            className={`rounded-full ${direction === 'rtl' ? 'ml-4' : 'mr-4'}`}
            loading="lazy"
          />
          <div>
            <h4 className="font-semibold text-foreground">{name}</h4>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < stars ? 'fill-current' : ''} ${direction === 'rtl' ? 'ml-1' : 'mr-1'}`}
                />
              ))}
            </div>
          </div>
        </div>
        <MessageSquare
          className={`absolute top-0 ${direction === 'rtl' ? 'left-0' : 'right-0'} h-8 w-8 text-primary/20 transform ${direction === 'rtl' ? 'scale-x-[-1]' : ''}`}
        />
        <p className="text-muted-foreground italic">"{quote}"</p>
      </CardContent>
    </Card>
  );
}
