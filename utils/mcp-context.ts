// // utils/mcp-context.ts

// import { getUserSession } from '@/lib/auth';
// import { getActiveCV, getCVCompletionRate } from '@/lib/cv';
// import { getCurrentRoute } from '@/lib/router';

// // We can now pass this structured context into any chatbot or AI model call (e.g., OpenAI’s function calling)
// export async function getMCPContext(userId: string) {
//   const session = await getUserSession(userId);
//   const activeCV = await getActiveCV(userId);
//   const completion = activeCV ? await getCVCompletionRate(activeCV.id) : 0;

//   return {
// //     app: 'Seirah Resume Builder',
// //     environment: process.env.NODE_ENV,
// //     user: {
// //       id: userId,
// //       language: session.language, // user’s preferred language (ar, en)
// //       subscription: session.plan, // Whether they’re a free or paid user
// //     },
// //     currentRoute: getCurrentRoute(),
// //     activeCV: activeCV
// //       ? {
// //           id: activeCV.id,
// //           title: activeCV.title,
// //           template: activeCV.templateName, // type of template or feature they’re using
// //           completion: `${completion}%`, // CV progress or stage
// //         }
// //       : null,
// //     plan: 'Improve AI-powered CV suggestions and SEO content generation',
// //   };

//     "platform": "seirah.com",
//     "product": "CV Builder",
//     "feature": "rephrase" | "translate" | "rate" | "generate_description",
//     "user": {
//       "id": "USER_ID",
//       "role": "guest" | "authenticated",
//       "language": "en" | "ar",
//       "direction": "ltr" | "rtl",
//       "subscription": "free" | "paid"
//     },
//     "document": {
//       "input": "Original text from user",
//       "type": "resume" | "cover_letter",
//       "language": "en" | "ar",
//       "sections": ["summary", "skills", "experience"]
//     },
//     "tone": "formal" | "friendly" | "corporate",
//     "intent": "summarize" | "translate" | "improve" | "rate",
//     "events": ["cta_click", "rephrase_btn_clicked"],
//     "source": "web-ui",
//     "timestamp": 1680000000000
//   }
  
// }






// // 1- ✅ Updated MCP Context Structure for Seirah
// interface SeirahMCP {
//     userId?: string; // Optional: from session
//     country: 'SA' | string;
//     userLanguage: 'ar' | 'en';
//     cvLanguage: 'ar' | 'en' | 'mixed';
//     currentPage: 'home' | 'upload-cv' | 'upload-tool' | 'translate-cv' | 'rephrase' | 'rate-cv' | 'linkedin-to-cv' | 'create-from-scratch' | string;
//     currentAction: 'translate' | 'rephrase' | 'rate' | 'create' | 'upload' | 'explore' | 'unknown';
//     targetLanguage?: 'ar' | 'en'; // If translation is happening
//     focusedField?: string; // e.g., 'summary', 'skills', 'job_title'
//     inputText?: string; // current text in the field
//     uploadedFileType?: 'pdf' | 'docx' | 'image';
//     completionPercent?: number; // optional, from tracking
//     aiFeatureUsed?: 'none' | 'rephrasing' | 'translation' | 'scoring' | 'generation';
//     platform: 'web' | 'mobile' | 'admin' | 'test';
//     plan: 'free' | 'paid';
//     userSegment?: 'guest' | 'registered' | 'paid';
//     templateType: 'ats' | 'modern' | 'creative';
//     userInput?: string;
//     cvMetadata?: {
//       jobTitle?: string;
//       industry?: string;
//       experienceLevel?: 'junior' | 'mid' | 'senior';
//     };
//     timestamp: string;
//   }

// // 2- ⚙️ How to Construct It (Example in Code)
// const seirahMCP: SeirahMCP = {
//     userId: session?.user?.id,
//     currentPage: 'translate-cv',
//     currentAction: 'translate',
//     cvLanguage: 'ar',
//     targetLanguage: 'en',
//     focusedField: 'summary',
//     inputText: 'مهندس برمجيات ذو خبرة واسعة في تطوير التطبيقات.',
//     uploadedFileType: 'pdf',
//     completionPercent: 65,
//     aiFeatureUsed: 'translation',
//     platform: 'web',
//     userSegment: 'registered',
//     userLanguage: 'ar',
//     timestamp: new Date().toISOString()
//   };

// // 3- 🧠 How to Pass MCP to an AI Function
// // All AI utility functions (e.g., translateText(), rephraseField(), scoreResume()) should accept an MCP object:
// const result = await translateText({
//     text: seirahMCP.inputText,
//     from: seirahMCP.cvLanguage,
//     to: seirahMCP.targetLanguage,
//     context: seirahMCP
//   });

//   // Or more generally:
//   async function aiHandler(input: string, mcp: SeirahMCP) {
//     if (mcp.currentAction === 'translate') {
//       return await translateText({ text: input, from: mcp.cvLanguage, to: mcp.targetLanguage!, context: mcp });
//     } else if (mcp.currentAction === 'rephrase') {
//       return await rephraseText({ text: input, tone: 'professional', context: mcp });
//     }
//   }

// // 4- Optional: Use Context Provider in React
// // Wrap your app with a MCPProvider to update context live from field focus, user events, and route changes. useMCP() hook implemented for your frontend?
// // 4.1 Creating a React MCPProvider and Hook. This will keep SeirahMCP context available across your app.
// 'use client';

// import { createContext, useContext, useState } from 'react';

// export interface SeirahMCP {
//   userId?: string;
//   currentPage: string;
//   currentAction: 'translate' | 'rephrase' | 'rate' | 'create' | 'upload' | 'explore' | 'unknown';
//   cvLanguage: 'ar' | 'en' | 'mixed';
//   targetLanguage?: 'ar' | 'en';
//   focusedField?: string;
//   inputText?: string;
//   uploadedFileType?: 'pdf' | 'docx' | 'image';
//   completionPercent?: number;
//   aiFeatureUsed?: 'none' | 'rephrasing' | 'translation' | 'scoring' | 'generation';
//   platform: 'web' | 'mobile' | 'admin' | 'test';
//   userSegment?: 'guest' | 'registered' | 'paid';
//   userLanguage: 'ar' | 'en';
//   timestamp: string;
// }

// // example
// const defaultMCP: SeirahMCP = {
//   currentPage: 'home',
//   currentAction: 'unknown',
//   cvLanguage: 'en',
//   platform: 'web',
//   userLanguage: 'en',
//   timestamp: new Date().toISOString(),
// };

// const MCPContext = createContext<{
//   mcp: SeirahMCP;
//   updateMCP: (update: Partial<SeirahMCP>) => void;
// }>({
//   mcp: defaultMCP,
//   updateMCP: () => {},
// });

// export function MCPProvider({ children }: { children: React.ReactNode }) {
//   const [mcp, setMCP] = useState<SeirahMCP>(defaultMCP);

//   const updateMCP = (update: Partial<SeirahMCP>) => {
//     setMCP(prev => ({
//       ...prev,
//       ...update,
//       timestamp: new Date().toISOString(),
//     }));
//   };

//   return (
//     <MCPContext.Provider value={{ mcp, updateMCP }}>
//       {children}
//     </MCPContext.Provider>
//   );
// }

// export const useMCP = () => useContext(MCPContext);

// // Wrap your app In app/layout.tsx or app/providers.tsx:
// import { MCPProvider } from '@/contexts/MCPContext';

// export function Providers({ children }: { children: React.ReactNode }) {
//   return <MCPProvider>{children}</MCPProvider>;
// }

// // 4.2 Passing MCP to OpenAI Function
// // Let’s say you’re calling OpenAI via openai.chat.completions.create().
// import OpenAI from 'openai';
// import { SeirahMCP } from '@/contexts/MCPContext';

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// export async function callOpenAI({
//   input,
//   mcp,
// }: {
//   input: string;
//   mcp: SeirahMCP;
// }) {
//   const systemPrompt = `
// You are an AI assistant inside a resume-building platform called Seirah.
// Here is the user’s current context:
// - Page: ${mcp.currentPage}
// - Action: ${mcp.currentAction}
// - CV Language: ${mcp.cvLanguage}
// - Target Language: ${mcp.targetLanguage ?? 'N/A'}
// - Field Focused: ${mcp.focusedField ?? 'N/A'}
// - Feature: ${mcp.aiFeatureUsed}
// - Platform: ${mcp.platform}
// - User Segment: ${mcp.userSegment ?? 'guest'}
// - Timestamp: ${mcp.timestamp}

// Please reply in a tone suitable for this action.
// `;

//   const res = await openai.chat.completions.create({
//     model: 'gpt-4',
//     messages: [
//       { role: 'system', content: systemPrompt },
//       { role: 'user', content: input },
//     ],
//   });

//   return res.choices[0].message.content;
// }

// // 4.3 Bonus: Use it inside your frontend
// const { mcp } = useMCP();

// const handleAI = async () => {
//   const output = await callOpenAI({
//     input: 'Please rephrase: “Software Engineer with 5+ years of experience”',
//     mcp,
//   });

//   console.log(output);
// };












//   // middleware that auto-generates this MCP per page
//   // /middleware/mcpContext.ts
// import { NextRequest, NextResponse } from 'next/server';
// import { getUserSession } from '@/lib/auth';

// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next();
//   const url = req.nextUrl.pathname;

//   const session = await getUserSession(); // Optional, if user is logged in

//   const mcpContext = {
//     userId: session?.user?.id || 'guest',
//     language: req.cookies.get('lang')?.value || 'ar',
//     country: req.geo?.country || 'SA',
//     plan: req.cookies.get('plan')?.value || 'free',
//     templateType: req.cookies.get('templateType')?.value || 'ats',
   
//     currentPage: url,
//     currentAction: detectActionFromUrl(url),

//     currentPage: string; // e.g., 'translate-cv', 'rephrase', 'rate-cv'
//     currentAction: 'translate' | 'rephrase' | 'rate' | 'unknown'; // AI can infer the user’s likely intent from their current page in Seirah, even before they interact
    
//     // real-time user intent detection based on page, field focus, and user actions
//     focusedField?: string;  // focus field in the cv e.g., 'job_title', 'summary', 'skills'
//     uploadedFileType?: 'pdf' | 'docx' | 'image';
//     lastUserMessage?: string; // optional, for AI context in chat
//     cvLanguage?: 'ar' | 'en' | 'mixed';
//     };

//   res.headers.set('x-mcp-context', JSON.stringify(mcpContext));
//   return res;
// }

// function detectActionFromUrl(url: string): string {
//   if (url.includes('/upload-cv')) return 'upload';
//   if (url.includes('/linkedin-to-cv')) return 'generate_summary';
//   if (url.includes('/translate-cv')) return 'translate';
//   if (url.includes('/rephrase')) return 'rephrase';
//   if (url.includes('/generate-description')) return 'generate_description';
//   if (url.includes('/rate-resume')) return 'rate';
//   return 'browse';
// }

// export const config = {
//   matcher: [
//     '/((?!api|_next|favicon.ico).*)',
//   ],
// };


// // Update dynamically from frontend events (like focusedField for cv fields or uploadedFileType for file uploads)
// // Example: update focusedField using a global event or React context:
// document.querySelectorAll('[data-field-id]').forEach((el) => {
//     el.addEventListener('focus', (e) => {
//       window.mcpContext.focusedField = (e.target as HTMLElement).dataset.fieldId;
//     });
//   });
// // Or from React:
// onFocus={() => setMcpContext({ ...mcpContext, focusedField: 'job_title' })}

// // Same for uploaded file:
// onFileUpload((file) => {
//     const fileType = file.name.endsWith('.pdf') ? 'pdf' : 'docx';
//     setMcpContext({ ...mcpContext, uploadedFileType: fileType });
//   });

