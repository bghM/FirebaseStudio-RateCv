
'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';

// Inline SVG for Bow Tie - updated to resemble the provided image
const BowTieIcon = () => (
  <svg
    width="48" // Changed from 32 to 48
    height="48" // Changed from 32 to 48
    viewBox="0 0 64 64" 
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12" // Changed from h-8 w-8 to h-12 w-12
  >
    {/* Main bow tie shape - Yellow */}
    <path
      d="M32 24C19.8497 24 10 28.4772 10 32C10 35.5228 19.8497 40 32 40C44.1503 40 54 35.5228 54 32C54 28.4772 44.1503 24 32 24Z"
      fill="#FFD700" // Yellow color
    />
    {/* Knot - Slightly darker yellow or same yellow */}
    <rect x="28" y="26" width="8" height="12" fill="#FFC700" rx="1" />

    {/* Left side details / accents (simplified white highlight) */}
    <path d="M10 32C10 29.7909 11.7909 28 14 28C14.5523 28 15 28.4477 15 29C15 29.5523 14.5523 30 14 30C13.4477 30 13 30.4477 13 31C13 31.5523 13.4477 32 14 32C13 32 10 32 10 32Z" fill="#FFFFFF" opacity="0.7"/>


    {/* Dots - Black */}
    {/* Left Side Dots */}
    <circle cx="18" cy="30" r="1.5" fill="black" />
    <circle cx="22" cy="33" r="1.5" fill="black" />
    <circle cx="16" cy="34" r="1.5" fill="black" />
    <circle cx="25" cy="29" r="1.5" fill="black" />
    <circle cx="20" cy="27" r="1.5" fill="black" />

    {/* Right Side Dots */}
    <circle cx="46" cy="30" r="1.5" fill="black" />
    <circle cx="42" cy="33" r="1.5" fill="black" />
    <circle cx="48" cy="34" r="1.5" fill="black" />
    <circle cx="39" cy="29" r="1.5" fill="black" />
    <circle cx="44" cy="27" r="1.5" fill="black" />

    {/* Lines on knot sides - Black */}
    {/* Left lines */}
    <path d="M28 28L24 26" stroke="black" strokeWidth="1.5" />
    <path d="M28 32L22 32" stroke="black" strokeWidth="1.5" />
    <path d="M28 36L24 38" stroke="black" strokeWidth="1.5" />

    {/* Right lines */}
    <path d="M36 28L40 26" stroke="black" strokeWidth="1.5" />
    <path d="M36 32L42 32" stroke="black" strokeWidth="1.5" />
    <path d="M36 36L40 38" stroke="black" strokeWidth="1.5" />
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

