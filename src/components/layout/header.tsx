
'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';

// Inline SVG for Bow Tie - updated to resemble the provided image
const BowTieIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 64 64" // Adjusted viewBox for better fit of the new design
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12"
  >
    {/* Main bow tie shape - Yellow */}
    <path
      d="M32 16C12.1178 16 4 24.8822 4 32C4 39.1178 12.1178 48 32 48C51.8822 48 60 39.1178 60 32C60 24.8822 51.8822 16 32 16Z"
      fill="#FFD700" // Yellow
      stroke="black"
      strokeWidth="3"
    />
    {/* Knot - Darker Yellow / Same Yellow */}
    <rect
      x="26"
      y="24"
      width="12"
      height="16"
      fill="#FDB813" // Darker Yellow for knot
      stroke="black"
      strokeWidth="3"
      rx="2"
    />

    {/* Left Side Dots - Black */}
    <circle cx="18" cy="26" r="2" fill="black" />
    <circle cx="14" cy="32" r="2" fill="black" />
    <circle cx="18" cy="38" r="2" fill="black" />
    <circle cx="24" cy="30" r="2" fill="black" />
    <circle cx="24" cy="34" r="2" fill="black" />


    {/* Right Side Dots - Black */}
    <circle cx="46" cy="26" r="2" fill="black" />
    <circle cx="50" cy="32" r="2" fill="black" />
    <circle cx="46" cy="38" r="2" fill="black" />
    <circle cx="40" cy="30" r="2" fill="black" />
    <circle cx="40" cy="34" r="2" fill="black" />


    {/* Lines on knot sides - Black */}
    {/* Left lines */}
    <path d="M26 28L19 24" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M26 32L17 32" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M26 36L19 40" stroke="black" strokeWidth="2.5" strokeLinecap="round" />

    {/* Right lines */}
    <path d="M38 28L45 24" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M38 32L47 32" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M38 36L45 40" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
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
