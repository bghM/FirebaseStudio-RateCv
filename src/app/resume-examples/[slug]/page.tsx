// /app/resume-examples/[slug]/page.tsx

'use client';

import { useParams, notFound } from 'next/navigation';
import { useLanguage } from '@/hooks/use-language';
import Link from 'next/link';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css'; // 	With it, pdf file text is selectable, searchable, and copyable 
import { Header } from '@/components/layout/header';
import workerSrc from 'pdfjs-dist/build/pdf.worker.entry';
import PDFPreview from '@/components/ui/PDFPreview';
import resumeExamples from '@/data/resumeExamples';


pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function ResumeExamplePage() {

  const { language, direction } = useLanguage();
  const { slug } = useParams();
  const job = resumeExamples.find((j) => j.slug === slug);
  if (!job) return notFound();

  return (
    <div className={`min-h-screen bg-background ${direction === 'rtl' ? 'rtl text-right font-arabic' : 'ltr text-left'}`} lang={language} dir={direction}>

    {/* Header */}
    <Header ctaTitle="Resume Examples" ctaLink="/resume-examples" />

    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{job[`title_${language}`]}</h1>
      <p className="text-gray-600 mb-6">{job[`description_${language}`]}</p>


      {/* PDF Preview Component */}
      <PDFPreview slug={job.slug} templateId={job.template_id}/> 

      
    </main>
    
    </div>
  )
}


// -------------------------------------------------
// --------------- Page Summary --------------------
// -------------------------------------------------
// 🧠 Page Purpose
// 	•	Displays a full resume example page based on a dynamic slug (e.g., /resume-examples/software-engineer)
// 	•	Supports both Arabic and English with proper RTL/LTR layout switching

// ⸻

// 📦 Core Features
// 	•	Dynamic route handling using useParams() from Next.js App Router
// 	•	Multilingual resume data (title + description) via resumeExamples[]
// 	•	Language and direction (LTR/RTL) switching via useLanguage()

// ⸻

// 📄 PDF Preview (Using PDFPreview Component)
// 	•	Fetches the matching PDF file from /public/cvs/[slug].pdf
// 	•	Converts it to a Blob object URL using URL.createObjectURL(blob)
// 	•	Displays the PDF using <Document /> and <Page /> from react-pdf
// 	•	Shows all pages in a vertical stack
// 	•	Adds TextLayer.css to make the PDF content selectable/searchable

// ⸻

// 🛑 Error Handling (Using PDFPreview Component)
// 	•	Shows a red error message if PDF load fails
// 	•	Shows a loading message until PDF is ready
// 	•	Cleans up object URL when component unmounts (memory-safe)

// ⸻

// 🖼️ Fallback & UX
// 	•	Displays a PNG preview below the PDF as a fallback image (/cvs/[slug].png)
// 	•	Provides two action buttons:
// 	•	Download PDF
// 	•	Customize This CV (links to /builder?template=...)

// ⸻

// 🧩 Tech Stack Used
// 	•	Next.js App Router (useParams, notFound)
// 	•	React state/hooks (useState, useEffect)
// 	•	react-pdf viewer with pdfjs-dist worker
// 	•	Tailwind CSS classes
// 	•	RTL language support

// ⸻

// 📦 Modular Components Created
// 	1.	<ResumeExample />
// 	•	Accepts all resume data (slug, title_en, title_ar, etc.)
// 	•	Handles layout, multilingual text, and buttons
// 	•	Uses <PDFPreview /> internally
// 	•	Includes PNG fallback preview and RTL support
// 	2.	<PDFPreview />
// 	•	Accepts a slug and loads the PDF from /cvs/[slug].pdf
// 	•	Shows all pages using react-pdf
// 	•	Handles loading, errors, and cleanup of object URLs
// 	•	Fully supports searchable/selectable text via TextLayer.css




