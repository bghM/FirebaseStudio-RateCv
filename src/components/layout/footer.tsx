
'use client';

import { useLanguage } from '@/hooks/use-language';

export function Footer() {
  const { t, direction } = useLanguage();

  return (
    <footer className={`py-8 text-center bg-muted text-muted-foreground ${direction === 'rtl' ? 'font-arabic' : ''}`}>
      <div className="container mx-auto">
        <p className="text-sm">{t('footerRights')}</p>
      </div>
    </footer>
  );
}
