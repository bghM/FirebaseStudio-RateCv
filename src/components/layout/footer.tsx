'use client';

import { useLanguage } from '@/hooks/use-language';

export function Footer() {
  const { t, direction } = useLanguage();

  return (
    <footer
      role="contentinfo"
      aria-label={t('footerRights')}
      className={`py-8 text-center bg-muted text-muted-foreground ${direction === 'rtl' ? 'font-arabic' : ''}`}
      dir={direction}
    >
      <div className="container mx-auto px-4">
        <p className="text-sm leading-relaxed" lang={direction === 'rtl' ? 'ar' : 'en'}>
          {t('footerRights')}
        </p>
      </div>
    </footer>
  );
}
