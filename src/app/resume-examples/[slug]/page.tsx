// /app/resume-examples/[slug]/page.tsx

'use client';

// import { notFound } from 'next/navigation';
// import { useLanguage } from '@/hooks/use-language';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function ResumeExamplePage({ params }: { params: { slug: string } }) {

//     const resumeExamples = [
//         {
//             slug: 'software-engineer',
//             title_en: 'Software Engineer',
//             title_ar: 'مهندس برمجيات',
//             description_en: 'A modern resume example tailored for developers across the stack.',
//             description_ar: 'نموذج سيرة ذاتية حديثة تناسب جميع تخصصات البرمجة.',
//             template_id: 'template_1',
//           },
//           {
//             slug: 'accountant',
//             title_en: 'Accountant',
//             title_ar: 'محاسب',
//             description_en: 'Professional layout showing finance and ERP experience.',
//             description_ar: 'سيرة احترافية توضح خبراتك في المحاسبة والأنظمة.',
//             template_id: 'template_2',
//           },
//           {
//             slug: 'marketing-specialist',
//             title_en: 'Marketing Specialist',
//             title_ar: 'أخصائي تسويق',
//             description_en: 'Highlights digital campaigns and performance-driven results.',
//             description_ar: 'يعرض الحملات الرقمية والنتائج القائمة على الأداء.',
//             template_id: 'template_3',
//           },
//           {
//             slug: 'graphic-designer',
//             title_en: 'Graphic Designer',
//             title_ar: 'مصمم جرافيك',
//             description_en: 'Creative CV layout featuring design tools and portfolio links.',
//             description_ar: 'تصميم سيرة ذاتية إبداعية بأدوات التصميم وروابط الأعمال.',
//             template_id: 'template_4',
//           },
//           {
//             slug: 'project-manager',
//             title_en: 'Project Manager',
//             title_ar: 'مدير مشروع',
//             description_en: 'Focus on delivery, leadership, and cross-functional collaboration.',
//             description_ar: 'يركز على الإنجاز والقيادة والتعاون بين الفرق.',
//             template_id: 'template_5',
//           },
//           {
//             slug: 'customer-service-rep',
//             title_en: 'Customer Service Rep',
//             title_ar: 'موظف خدمة عملاء',
//             description_en: 'Tailored for support, empathy, and conflict resolution.',
//             description_ar: 'مصممة للدعم والتعاطف وحل المشكلات.',
//             template_id: 'template_1',
//           },
//           {
//             slug: 'data-analyst',
//             title_en: 'Data Analyst',
//             title_ar: 'محلل بيانات',
//             description_en: 'Showcases dashboards, Excel, SQL, and insights.',
//             description_ar: 'يعرض لوحات البيانات وExcel وSQL والتحليلات.',
//             template_id: 'template_3',
//           },
//           {
//             slug: 'hr-specialist',
//             title_en: 'HR Specialist',
//             title_ar: 'أخصائي موارد بشرية',
//             description_en: 'Ideal for hiring, onboarding, and compliance.',
//             description_ar: 'مثالي للتوظيف، التهيئة، والامتثال.',
//             template_id: 'template_2',
//           },
//           {
//             slug: 'teacher',
//             title_en: 'Teacher',
//             title_ar: 'معلم',
//             description_en: 'Covers classroom leadership and curriculum design.',
//             description_ar: 'يشمل القيادة الصفية وتصميم المناهج.',
//             template_id: 'template_4',
//           },
//           {
//             slug: 'nurse',
//             title_en: 'Nurse',
//             title_ar: 'ممرضة',
//             description_en: 'Optimized for certifications, clinics, and patient care.',
//             description_ar: 'مصممة للشهادات والخبرة السريرية ورعاية المرضى.',
//             template_id: 'template_5',
//           },
//         ];
    
//   const { lang, t } = useLanguage();
//   const job = resumeExamples.find((j) => j.slug === params.slug);
//   if (!job) return notFound();

//   return (
//     <main className="max-w-3xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold mb-4">{job[`title_${lang}`]}</h1>
//       <p className="mb-6 text-gray-700">{job[`description_${lang}`]}</p>

//       <div className="mb-6">
//         <Image
//           src={`/cvs/${job.slug}.png`} // Or embed PDF preview
//           alt={`Resume example for ${job[`title_${lang}`]}`}
//           width={800}
//           height={1100}
//           className="rounded shadow"
//         />
//       </div>

//       <div className="flex gap-4">
//         <a href={`/cvs/${job.slug}.pdf`} download className="btn btn-primary">
//           {lang === 'ar' ? 'تحميل PDF' : 'Download PDF'}
//         </a>
//         <Link href={`/builder?template=${job.template_id}`}>
//           <span className="btn btn-secondary">
//             {lang === 'ar' ? 'خصص هذا النموذج' : 'Customize This CV'}
//           </span>
//         </Link>
//       </div>
//     </main>
//   );
// }


// /app/resume-examples/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { useLanguage } from '@/hooks/use-language';
import Link from 'next/link';
import Image from 'next/image';

export default function ResumeExamplePage({ params }: { params: { slug: string } }) {
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
 
  const { lang } = useLanguage();
  const job = resumeExamples.find((j) => j.slug === params.slug);
  if (!job) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{job[`title_${lang}`]}</h1>
      <p className="text-gray-600 mb-6">{job[`description_${lang}`]}</p>

      <div className="rounded overflow-hidden shadow mb-6">
        <Image
        //   src={`/cvs/${job.slug}.png`}
          src='data:image/jpeg;base64,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'
          alt={`Resume preview for ${job[`title_${lang}`]}`}
          width={900}
          height={1200}
          loading="lazy"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href={`/cvs/${job.slug}.pdf`}
          download
          className="bg-primary text-white px-4 py-2 rounded"
        >
          {lang === 'ar' ? 'تحميل PDF' : 'Download PDF'}
        </a>
        <Link
          href={`/builder?template=${job.template_id}`}
          className="bg-secondary text-white px-4 py-2 rounded"
        >
          {lang === 'ar' ? 'خصص هذا النموذج' : 'Customize This CV'}
        </Link>
      </div>
    </main>
  );
}