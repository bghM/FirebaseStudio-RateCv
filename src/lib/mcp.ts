// MCP generator


// /lib/mcp.ts
import { type Language } from '@/lib/translations';

export interface MCPContext {
  appName: 'Seirah';
  tone: 'professional, supportive, Arabic-first';
  brandPersona: 'empathetic assistant helping users build professional CVs in Arabic or English';
  userLanguage: Language;
  platform: 'web';
  feature: string;
  goal: string;
  event?: string;
  inputs: Record<string, string>;
  metadata?: Record<string, string | number | boolean>;
}

export function generateMCP(params: Omit<MCPContext, 'appName' | 'tone' | 'brandPersona' | 'platform'>): MCPContext {
  return {
    appName: 'Seirah',
    tone: 'professional, supportive, Arabic-first',
    brandPersona: 'empathetic assistant helping users build professional CVs in Arabic or English',
    platform: 'web',
    ...params,
  };
}