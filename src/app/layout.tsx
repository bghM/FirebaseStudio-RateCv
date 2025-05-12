
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // Assuming these are intended Google Fonts as per original setup
import './globals.css';
import { LanguageProvider } from '@/contexts/language-context';
import { Toaster } from '@/components/ui/toaster';
import { ClientLayout } from '@/components/client-layout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// change this later
export const metadata: Metadata = {
  title: 'ResumeAI Rate',
  description: 'AI-powered resume analysis tool for the Saudi job market.',
  keywords: 'تحسين السيرة الذاتية, Resume checker, تقييم السيرة الذاتية, resume analysis, CV rating, Saudi job market, ATS optimization',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <ClientLayout fontClassName={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Toaster />
      </ClientLayout>
    </LanguageProvider>
  );
}
