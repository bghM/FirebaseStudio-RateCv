
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';

export function Header() {
  const { t, direction } = useLanguage();

  return (
    <header className={`py-4 px-6 md:px-10 shadow-md bg-card ${direction === 'rtl' ? 'font-arabic' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          <Image 
            src="/logo.svg" // Placeholder - user should provide the actual path to their logo image
            alt={t('appName') + ' Logo'} 
            width={48} 
            height={48}
            className="h-12 w-12" // Retaining class for consistency if needed, though width/height on Image are primary
            data-ai-hint="company logo"
            priority // Assuming logo is LCP or important
          />
          <span className="text-gradient-brand">{t('appName')}</span>
        </Link>
        {/* LanguageToggle removed as per request */}
      </div>
    </header>
  );
}

