
'use client';

import type { ReactNode } from 'react';
import { useLanguage } from '@/hooks/use-language';
// Fonts are now passed as props via fontClassName

export function ClientLayout({ children, fontClassName }: { children: ReactNode, fontClassName: string }) {
  const { language, direction } = useLanguage();

  return (
    <html lang={language} dir={direction} className={fontClassName}>
      <body
        className={`antialiased ${
          language === 'ar' ? 'font-arabic' : ''
        }`}
      >
        {children}
      </body>
    </html>
  );
}
