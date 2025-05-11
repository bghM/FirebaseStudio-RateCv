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


interface HeaderProps {
  ctaTitle?: string;
  ctaLink?: string;
}

export function Header({ ctaTitle, ctaLink }: HeaderProps) {
  const { t, direction, language, setLanguage } = useLanguage();
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
    } else {
      console.log('CTA Click: header_get_started_now (gtag not available)');
    }

    if (ctaLink) {
      router.push(ctaLink);
    } else if (currentPath === '/') {
      router.push('/upload-cv');
    } else if (currentPath === '/linkedin-to-cv') {
      router.push('/linkedin-upload');
    } else {
      router.push('/upload-cv');
    }
  };

  const getCtaButtonText = () => {
    return ctaTitle || (currentPath === '/linkedin-to-cv' ? t('tabAddLinkedIn') : t('getStartedNow'));
  };

  return (
    <header className={`py-4 px-6 md:px-10 shadow-md bg-card ${direction === 'rtl' ? 'font-arabic' : ''}`}
      role="banner">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link
            href="/"
            passHref
            className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
            aria-label={t('appName') + ' homepage'}
          >
            <Image
              src="/logo.webp"
              alt={t('appName') + ' Logo'}
              width={48}
              height={48}
              className="h-12 w-12"
              priority
              loading="eager"
            />
            <span className="text-gradient-brand">{t('appName')}</span>
          </Link>

          <nav className="ml-8" aria-label={t('appName') + ' main'} role="navigation">
            <ul className="flex gap-4" role="list">
              <li><Link href="/upload-cv" passHref legacyBehavior><a role="link" className="text-muted-foreground hover:text-primary transition-colors">{t('tabUploadCV')}</a></Link></li>
              <li><Link href="/linkedin-to-cv" passHref legacyBehavior><a role="link" className="text-muted-foreground hover:text-primary transition-colors">{t('tabAddLinkedIn')}</a></Link></li>
              <li><Link href="/translate-cv" passHref legacyBehavior><a role="link" className="text-muted-foreground hover:text-primary transition-colors">{t('tabTranslateCV')}</a></Link></li>
              <li><Link href="/add-old-cv" passHref legacyBehavior><a role="link" className="text-muted-foreground hover:text-primary transition-colors">{t('tabAddOldCV')}</a></Link></li>
              <li><Link href="/add-old-cv" passHref legacyBehavior><a role="link" className="text-muted-foreground hover:text-primary transition-colors">{t('tabGenerateDescription')}</a></Link></li>
              <li><Link href="/add-old-cv" passHref legacyBehavior><a role="link" className="text-muted-foreground hover:text-primary transition-colors">{t('tabJobSpecificResume')}</a></Link></li>
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
              <Button variant="ghost" size="icon" aria-label={t('toggleLanguage')}>
                <Globe className="h-6 w-6 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleSetLanguage('en')} className="cursor-pointer">
                🇺🇸 English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSetLanguage('ar')} className="cursor-pointer">
                🇸🇦 العربية
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}