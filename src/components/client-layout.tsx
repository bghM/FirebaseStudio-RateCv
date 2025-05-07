
'use client';

import type { ReactNode } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export function ClientLayout({ children }: { children: ReactNode }) {
  const { language, direction } = useLanguage();

  return (
    <html lang={language} dir={direction}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${
          language === 'ar' ? 'font-arabic' : ''
        }`}
      >
        {children}
      </body>
    </html>
  );
}
