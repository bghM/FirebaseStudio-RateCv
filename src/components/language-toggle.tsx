
'use client';

import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      aria-label={t('languageToggle')}
      className="flex items-center gap-2"
    >
      <Globe className="h-5 w-5" />
      <span className="hidden sm:inline">{language === 'en' ? t('arabic') : t('english')}</span>
    </Button>
  );
}
