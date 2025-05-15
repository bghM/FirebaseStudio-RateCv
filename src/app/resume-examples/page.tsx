// /app/resume-examples/page.tsx

'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Add PDF + PNG files under /public/cvs/

const BATCH_SIZE = 12;

export default function ResumeExamplesPage() {
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
    
    const { lang, t } = useLanguage();
    const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
    const [hasMore, setHasMore] = useState(true);
    const observerRef = useRef<HTMLDivElement | null>(null);
  

    // const sortedJobs = resumeExamples.sort((a, b) =>
    //     a[`title_${lang}`].localeCompare(b[`title_${lang}`])
    //   );
    
    useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
        if (entries[0].isIntersecting && hasMore) {
            setVisibleCount((prev) => {
            const next = prev + BATCH_SIZE;
            if (next >= resumeExamples.length) setHasMore(false);
            // if (next >= sortedJobs.length) setHasMore(false);
            return next;
            });
        }
        },
        { threshold: 1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
    }, [hasMore]);

    

// ✅ 2. Placeholder PNGs
// Create the following files under /public/cvs/:
// software-engineer.png
// accountant.png
// marketing-specialist.png
// ...
// nurse.png

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
    <h1 className="text-3xl font-bold mb-6">
      {lang === 'ar' ? 'نماذج سيرة ذاتية حسب المسمى الوظيفي' : 'Resume Examples by Job Title'}
    </h1>


      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {resumeExamples.map((job) => (
        // {sortedJobs.slice(0, visibleCount).map((job) => (
          <li key={job.slug}>
            <Link href={`/resume-examples/${job.slug}`}>
              <div className="p-4 border rounded hover:bg-gray-50 text-center text-sm">
                {/* dynamic for language ar/en */}
                {/* {job[`title_${lang}`]} */}
                {job.title_en}
              </div>
              <Image
                src={`/cvs/${job.slug}.png`}
                alt={`Resume preview for ${job[`title_${lang}`]}`}
                width={900}
                height={1200}
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </Link>
          </li>
        ))}
      </ul>

      {hasMore && (
        <div ref={observerRef} className="text-center py-8 text-gray-500">
          {lang === 'ar' ? 'تحميل المزيد...' : 'Loading more...'}
        </div>
      )}


    </main>
  );
} 
