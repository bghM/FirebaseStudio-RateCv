
'use client';

import type { ReactNode } from 'react';
import React, { createContext, useState, useCallback } from 'react';
import { translations, type Language, type Translations } from '@/lib/translations';

type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations[Language]) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [direction, setDirection] = useState<Direction>('ltr');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    setDirection(lang === 'ar' ? 'rtl' : 'ltr');
  }, []);

  const t = useCallback((key: keyof Translations[Language]): string => {
    return translations[language][key] || translations['en'][key] || String(key);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
