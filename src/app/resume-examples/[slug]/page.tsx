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

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function ResumeExamplePage() {
  const resumeExamples = [
        {
            slug: 'software-engineer',
            title_en: 'Software Engineer',
            title_ar: 'مهندس برمجيات',
            description_en: 'A modern resume example tailored for developers across the stack.',
            description_ar: 'نموذج سيرة ذاتية حديثة تناسب جميع تخصصات البرمجة.',
            template_id: 'template_1',
          },
          {
            slug: 'accountant',
            title_en: 'Accountant',
            title_ar: 'محاسب',
            description_en: 'Professional layout showing finance and ERP experience.',
            description_ar: 'سيرة احترافية توضح خبراتك في المحاسبة والأنظمة.',
            template_id: 'template_2',
          },
          {
            slug: 'marketing-specialist',
            title_en: 'Marketing Specialist',
            title_ar: 'أخصائي تسويق',
            description_en: 'Highlights digital campaigns and performance-driven results.',
            description_ar: 'يعرض الحملات الرقمية والنتائج القائمة على الأداء.',
            template_id: 'template_3',
          },
          {
            slug: 'graphic-designer',
            title_en: 'Graphic Designer',
            title_ar: 'مصمم جرافيك',
            description_en: 'Creative CV layout featuring design tools and portfolio links.',
            description_ar: 'تصميم سيرة ذاتية إبداعية بأدوات التصميم وروابط الأعمال.',
            template_id: 'template_4',
          },
          {
            slug: 'project-manager',
            title_en: 'Project Manager',
            title_ar: 'مدير مشروع',
            description_en: 'Focus on delivery, leadership, and cross-functional collaboration.',
            description_ar: 'يركز على الإنجاز والقيادة والتعاون بين الفرق.',
            template_id: 'template_5',
          },
          {
            slug: 'customer-service-rep',
            title_en: 'Customer Service Rep',
            title_ar: 'موظف خدمة عملاء',
            description_en: 'Tailored for support, empathy, and conflict resolution.',
            description_ar: 'مصممة للدعم والتعاطف وحل المشكلات.',
            template_id: 'template_1',
          },
          {
            slug: 'data-analyst',
            title_en: 'Data Analyst',
            title_ar: 'محلل بيانات',
            description_en: 'Showcases dashboards, Excel, SQL, and insights.',
            description_ar: 'يعرض لوحات البيانات وExcel وSQL والتحليلات.',
            template_id: 'template_3',
          },
          {
            slug: 'hr-specialist',
            title_en: 'HR Specialist',
            title_ar: 'أخصائي موارد بشرية',
            description_en: 'Ideal for hiring, onboarding, and compliance.',
            description_ar: 'مثالي للتوظيف، التهيئة، والامتثال.',
            template_id: 'template_2',
          },
          {
            slug: 'teacher',
            title_en: 'Teacher',
            title_ar: 'معلم',
            description_en: 'Covers classroom leadership and curriculum design.',
            description_ar: 'يشمل القيادة الصفية وتصميم المناهج.',
            template_id: 'template_4',
          },
          {
            slug: 'nurse',
            title_en: 'Nurse',
            title_ar: 'ممرضة',
            description_en: 'Optimized for certifications, clinics, and patient care.',
            description_ar: 'مصممة للشهادات والخبرة السريرية ورعاية المرضى.',
            template_id: 'template_5',
          },
  ];
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




