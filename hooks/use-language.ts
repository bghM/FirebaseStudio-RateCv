// hooks/use-language.ts
import { useState, useEffect } from 'react';

type Direction = 'rtl' | 'ltr';
type Language = 'ar' | 'en';

export function useLanguage(initialLang?: Language) {
  const [language, setLanguage] = useState<Language>(initialLang || 'en');
  const [direction, setDirection] = useState<Direction>(initialLang === 'ar' ? 'rtl' : 'ltr');

  useEffect(() => {
    if (!initialLang && typeof window !== 'undefined') {
      const lang = window.navigator.language.startsWith('ar') ? 'ar' : 'en';
      setLanguage(lang);
      setDirection(lang === 'ar' ? 'rtl' : 'ltr');
    }
  }, [initialLang]);

  return {
    language,
    direction,
    setLanguage,
  };
}