'use client';

import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/translations';

export function Footer() {
  const { language, direction } = useLanguage();
  const t = translations[language];

  return (
    <footer
      role="contentinfo"
      aria-label={t.footer.rights}
      className={`py-8 text-center bg-muted text-muted-foreground ${direction === 'rtl' ? 'font-arabic' : ''}`}
      dir={direction}
      lang={language}
    >
      <div className="container mx-auto px-4">
        <p className="text-sm leading-relaxed">
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}