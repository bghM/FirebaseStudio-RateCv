
'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';

// Inline SVG for Bow Tie - a simplified version
const BowTieIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-primary"
  >
    <path d="M12 12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11C11 11.5523 11.4477 12 12 12Z" />
    <path d="M7 15C8.10457 15 9 14.1046 9 13H5C5 14.1046 5.89543 15 7 15Z" />
    <path d="M17 15C18.1046 15 19 14.1046 19 13H15C15 14.1046 15.8954 15 17 15Z" />
    <path d="M7 9C8.10457 9 9 9.89543 9 11H5C5 9.89543 5.89543 9 7 9Z" />
    <path d="M17 9C18.1046 9 19 9.89543 19 11H15C15 9.89543 15.8954 9 17 9Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14ZM12 12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11C11 11.5523 11.4477 12 12 12Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 9.34315 3.65685 8 2 8C0.343146 8 0 9.34315 0 11C0 12.6569 0.343146 14 2 14C3.65685 14 5 12.6569 5 11ZM7 11C7 9.89543 7.89543 9 9 9H5C5.00001 9.89543 5.89543 11 7 11Z" transform="matrix(-1 0 0 1 12 0)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M19 11C19 9.34315 20.3431 8 22 8C23.6569 8 24 9.34315 24 11C24 12.6569 23.6569 14 22 14C20.3431 14 19 12.6569 19 11ZM17 11C17 9.89543 16.1046 9 15 9H19C18.9991 9.89543 18.1046 11 17 11Z" />
  </svg>
);


export function Header() {
  const { t, direction } = useLanguage();

  return (
    <header className={`py-4 px-6 md:px-10 shadow-md bg-card ${direction === 'rtl' ? 'font-arabic' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          <BowTieIcon />
          <span className="text-gradient-brand">{t('appName')}</span>
        </Link>
        {/* LanguageToggle removed as per request */}
      </div>
    </header>
  );
}

