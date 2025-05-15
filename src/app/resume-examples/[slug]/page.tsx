// /app/resume-examples/[slug]/page.tsx

'use client';

import { useParams, notFound } from 'next/navigation';
import { useLanguage } from '@/hooks/use-language';
import Link from 'next/link';
import Image from 'next/image';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import workerSrc from 'pdfjs-dist/build/pdf.worker.entry';

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
  const [fileData, setFileData] = useState<Blob | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [error, setError] = useState(false);
  const job = resumeExamples.find((j) => j.slug === slug);
  if (!job) return notFound();

  
  useEffect(() => {
    if (typeof slug !== 'string') return;
  
    const loadPdf = async () => {
      try {
        const res = await fetch(`/cvs/${slug}.pdf`);
        if (!res.ok) throw new Error('PDF not found');
        const blob = await res.blob();
        setFileData(blob);
      } catch (err) {
        console.error('Failed to load PDF:', err);
        setError(true);
      }
    };
  
    loadPdf();
  }, [slug]);

  return (
    <div className={`min-h-screen bg-background ${direction === 'rtl' ? 'rtl text-right font-arabic' : 'ltr text-left'}`} lang={language} dir={direction}>

{/* Header */}
    <Header ctaTitle="Resume Examples" ctaLink="/resume-examples" />

    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{job[`title_${language}`]}</h1>
      <p className="text-gray-600 mb-6">{job[`description_${language}`]}</p>

        <div className="rounded overflow-hidden shadow mb-6">
        {fileData && !error ? (
          <Document
            file={fileData}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            onLoadError={() => setError(true)}
            className="border rounded"
          >
            {Array.from({ length: numPages }, (_, i) => (
              <Page
                key={`page_${i + 1}`}
                pageNumber={i + 1}
                width={900}
                renderAnnotationLayer={false}
              />
            ))}
          </Document>
        )  : error ? (
            <div className="text-red-600 text-center py-8">
              {language === 'ar'
                ? 'فشل تحميل ملف PDF. يمكنك تحميله مباشرة.'
                : 'Failed to load PDF. You can download it below.'}
            </div>
          ) : (
            <div className="text-gray-500 text-center py-8">
              {language === 'ar' ? 'جارٍ تحميل المعاينة...' : 'Loading preview...'}
            </div>
          )}

          <Image
            src={`/cvs/${job.slug}.png`}
            alt={`Resume preview for ${job[`title_${language}`]}`}
            width={900}
            height={1200}
            loading="lazy"
            className="w-full h-auto object-contain mt-6"
          />
        </div>


      <div className="flex flex-wrap gap-4">
        <a
          href={`/cvs/${job.slug}.pdf`}
          download
          className="bg-primary text-white px-4 py-2 rounded"
        >
          {language === 'ar' ? 'تحميل PDF' : 'Download PDF'}
        </a>
        <Link
          href={`/builder?template=${job.template_id}`}
          className="bg-secondary text-white px-4 py-2 rounded"
        >
          {language === 'ar' ? 'خصص هذا النموذج' : 'Customize This CV'}
        </Link>
      </div>


      
    </main>
    
    </div>
    )
}