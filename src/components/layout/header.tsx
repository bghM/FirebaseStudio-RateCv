
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

// HeaderProps is no longer needed as handleAnalyze is removed.
// interface HeaderProps {
//  handleAnalyze?: () => void; // Was made optional
// }

export function Header(/*{ handleAnalyze }: HeaderProps*/) {
  const { t, direction, language, setLanguage } = useLanguage();
  const router = useRouter();

  const handleSetLanguage = (lang: 'en' | 'ar') => {
    setLanguage(lang);
  };

  const handleRateCVButtonClick = () => {
    // Track CTA click
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'header_get_started_now', // Specific label for this CTA
      });
    } else {
      console.log('CTA Click: header_get_started_now (gtag not available)');
    }
    router.push('/upload-cv');
  };

  return (
    <header className={`py-4 px-6 md:px-10 shadow-md bg-card ${direction === 'rtl' ? 'font-arabic' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Left section: Logo and Home Link */}
        <div className="flex items-center">
          <Link href="/www.seirah.com" className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
            <Image
              src="/logo.webp"
              alt={t('appName') + ' Logo'}
              width={48}
              height={48}
              className="h-12 w-12"
              data-ai-hint="company logo"
              priority
              loading="eager" // Main logo, eager load
            />
 <span className="text-gradient-brand">{t('appName')}</span>
          </Link>
          <nav>
            <ul className="flex space-x-4"> {/* Using flex and space-x for horizontal layout and spacing */}
 <li>
 <Link href="/www.seirah.com" className={`text-muted-foreground hover:text-primary transition-colors ${direction === 'rtl' ? 'mr-8 ml-0' : 'ml-8'}`}>
            {t('tabHome')}
          </Link>
 </li>
 <li>
 <Link href="/translate-cv" className="text-muted-foreground hover:text-primary transition-colors">
                {t('tabTranslateCV')}
 </Link>
 </li>
 <li>
 <Link href="/add-linkedin" className="text-muted-foreground hover:text-primary transition-colors">
                {t('tabAddLinkedIn')}
 </Link>
 </li>
 <li>
 <Link href="/add-old-cv" className="text-muted-foreground hover:text-primary transition-colors">
                {t('tabAddOldCV')}
 </Link>
 </li>
 </ul>
 </nav>
        </div>

        {/* Right section: CTA Button */}
        <div className="flex items-center gap-4">
          <Button
            size="sm"
            onClick={handleRateCVButtonClick}
            data-ai-hint="Call to action button to analyze resume"
            className="bg-primary hover:bg-primary/90 text-primary-foreground" // Ensure primary color
          >
            {t('getStartedNow')}
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
