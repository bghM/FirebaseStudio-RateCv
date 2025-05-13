// MCP hook for client


// Build a Secure Client-side useMCP Hook
// Safe by design: Doesn’t expose server secrets
// Prevents abuse: You control what inputs and metadata go into the protocol

import { useLanguage } from './use-language';
import { generateMCP } from '@/lib/mcp';
import { useMemo } from 'react';

export function useMCP(feature: string, goal: string, inputs: Record<string, string>, event?: string) {
  let language = 'en';
  try {
    language = useLanguage().language;
  } catch (e) {
    console.warn('[useMCP] used outside of LanguageProvider, falling back to "en"');
  }

  const mcp = useMemo(() => {
    return generateMCP({
      userLanguage: language,
      feature,
      goal,
      inputs,
      event,
    });
  }, [language, feature, goal, inputs, event]);

  return mcp;
}

