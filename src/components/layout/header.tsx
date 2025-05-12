'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { translations } from '@/lib/translations';

interface HeaderProps {
  ctaTitle?: string;
  ctaLink?: string;
  ctaOnClick?: () => void;
}

export function Header({ ctaTitle, ctaLink, ctaOnClick }: HeaderProps) {
  const { language, direction, setLanguage } = useLanguage();
  const t = translations[language];
  const router = useRouter();
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  const handleSetLanguage = (lang: 'en' | 'ar') => {
    setLanguage(lang);
  };

  const handleRateCVButtonClick = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'header_get_started_now',
      });
    }

    if (ctaOnClick) {
      ctaOnClick(); // Custom action (like handleAnalyze)
    } else if (ctaLink) {
      router.push(ctaLink);
    } else if (currentPath === '/') {
      router.push('/rate-cv');
    } else if (currentPath === '/linkedin-to-cv') {
      router.push('/linkedin-upload');
    } else {
      router.push('/rate-cv');
    }
  };

  const getCtaButtonText = () => {
    return ctaTitle || (currentPath === '/linkedin-to-cv' ? t.header.tabAddLinkedIn : t.header.analyzeMyResume);
  };

  return (
    <header
      className={`py-4 px-6 md:px-10 shadow-md bg-card ${direction === 'rtl' ? 'font-arabic' : ''}`}
      role="banner"
      dir={direction}
      lang={language}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
            aria-label={`${t.appName} homepage`}
          >
            <Image
              src="/logo.webp"
              alt={`${t.appName} Logo`}
              width={48}
              height={48}
              className="h-12 w-12"
              priority
              loading="eager"
            />
            <span className="text-gradient-brand">{t.appName}</span>
          </Link>

          <nav className="ml-8" aria-label={`${t.appName} main navigation`}>
            <ul className="flex gap-4">
              <li><Link href="/rate-cv" className="text-muted-foreground hover:text-primary transition-colors">{t.header.tabRateCV}</Link></li>
              <li><Link href="/linkedin-to-cv" className="text-muted-foreground hover:text-primary transition-colors">{t.header.tabAddLinkedIn}</Link></li>
              <li><Link href="/translate-cv" className="text-muted-foreground hover:text-primary transition-colors">{t.header.tabTranslateCV}</Link></li>
              <li><Link href="/add-old-cv" className="text-muted-foreground hover:text-primary transition-colors">{t.header.tabAddOldCV}</Link></li>
              <li><Link href="/add-old-cv" className="text-muted-foreground hover:text-primary transition-colors">{t.header.tabGenerateDescription}</Link></li>
              <li><Link href="/add-old-cv" className="text-muted-foreground hover:text-primary transition-colors">{t.header.tabJobSpecificResume}</Link></li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button
            size="sm"
            onClick={handleRateCVButtonClick}
            data-ai-hint="Call to action button to analyze resume"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {getCtaButtonText()}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={t.header.toggleLanguage}>
                <Globe className="h-6 w-6 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleSetLanguage('en')} className="cursor-pointer">
                {t.header.english}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSetLanguage('ar')} className="cursor-pointer">
                {t.header.arabic}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}