
'use client';

import Link from 'next/link';
import { LanguageToggle } from '@/components/language-toggle';
import { useLanguage } from '@/hooks/use-language';
import { BotMessageSquare } from 'lucide-react';

export function Header() {
  const { t, direction } = useLanguage();

  return (
    <header className={`py-4 px-6 md:px-10 shadow-md bg-card ${direction === 'rtl' ? 'font-arabic' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          <BotMessageSquare className="h-8 w-8 text-primary" />
          <span className="text-gradient-brand">{t('appName')}</span>
        </Link>
        <LanguageToggle />
      </div>
    </header>
  );
}
