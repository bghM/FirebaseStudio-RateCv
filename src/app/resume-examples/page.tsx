'use client';

import { useLanguage } from '@/hooks/use-language';
import { Header } from '@/components/layout/header';
import ResumeExampleGrid from '@/components/ui/ResumeExampleGrid';
import resumeExamples from '@/data/resumeExamples';


export default function ResumeExamplesPage() {
  const { language, direction } = useLanguage();
  // constresumeExamples  = [
  //   {
  //       slug: 'software-engineer',
  //       title_en: 'Software Engineer',
  //       title_ar: 'مهندس برمجيات',
  //       description_en: 'A modern resume example tailored for developers across the stack.',
  //       description_ar: 'نموذج سيرة ذاتية حديثة تناسب جميع تخصصات البرمجة.',
  //       template_id: 'template_1',
  //     },
  //     {
  //       slug: 'accountant',
  //       title_en: 'Accountant',
  //       title_ar: 'محاسب',
  //       description_en: 'Professional layout showing finance and ERP experience.',
  //       description_ar: 'سيرة احترافية توضح خبراتك في المحاسبة والأنظمة.',
  //       template_id: 'template_2',
  //     },
  //     {
  //       slug: 'marketing-specialist',
  //       title_en: 'Marketing Specialist',
  //       title_ar: 'أخصائي تسويق',
  //       description_en: 'Highlights digital campaigns and performance-driven results.',
  //       description_ar: 'يعرض الحملات الرقمية والنتائج القائمة على الأداء.',
  //       template_id: 'template_3',
  //     },
  //     {
  //       slug: 'graphic-designer',
  //       title_en: 'Graphic Designer',
  //       title_ar: 'مصمم جرافيك',
  //       description_en: 'Creative CV layout featuring design tools and portfolio links.',
  //       description_ar: 'تصميم سيرة ذاتية إبداعية بأدوات التصميم وروابط الأعمال.',
  //       template_id: 'template_4',
  //     },
  //     {
  //       slug: 'project-manager',
  //       title_en: 'Project Manager',
  //       title_ar: 'مدير مشروع',
  //       description_en: 'Focus on delivery, leadership, and cross-functional collaboration.',
  //       description_ar: 'يركز على الإنجاز والقيادة والتعاون بين الفرق.',
  //       template_id: 'template_5',
  //     },
  //     {
  //       slug: 'customer-service-rep',
  //       title_en: 'Customer Service Rep',
  //       title_ar: 'موظف خدمة عملاء',
  //       description_en: 'Tailored for support, empathy, and conflict resolution.',
  //       description_ar: 'مصممة للدعم والتعاطف وحل المشكلات.',
  //       template_id: 'template_1',
  //     },
  //     {
  //       slug: 'data-analyst',
  //       title_en: 'Data Analyst',
  //       title_ar: 'محلل بيانات',
  //       description_en: 'Showcases dashboards, Excel, SQL, and insights.',
  //       description_ar: 'يعرض لوحات البيانات وExcel وSQL والتحليلات.',
  //       template_id: 'template_3',
  //     },
  //     {
  //       slug: 'hr-specialist',
  //       title_en: 'HR Specialist',
  //       title_ar: 'أخصائي موارد بشرية',
  //       description_en: 'Ideal for hiring, onboarding, and compliance.',
  //       description_ar: 'مثالي للتوظيف، التهيئة، والامتثال.',
  //       template_id: 'template_2',
  //     },
  //     {
  //       slug: 'teacher',
  //       title_en: 'Teacher',
  //       title_ar: 'معلم',
  //       description_en: 'Covers classroom leadership and curriculum design.',
  //       description_ar: 'يشمل القيادة الصفية وتصميم المناهج.',
  //       template_id: 'template_4',
  //     },
  //     {
  //       slug: 'nurse',
  //       title_en: 'Nurse',
  //       title_ar: 'ممرضة',
  //       description_en: 'Optimized for certifications, clinics, and patient care.',
  //       description_ar: 'مصممة للشهادات والخبرة السريرية ورعاية المرضى.',
  //       template_id: 'template_5',
  //     },
  //   ];

  return (
    <div className={`min-h-screen bg-background ${direction === 'rtl' ? 'rtl text-right font-arabic' : 'ltr text-left'}`} lang={language} dir={direction}>
      <Header ctaTitle="Resume Examples" ctaLink="/resume-examples" />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'ar' ? 'نماذج سيرة ذاتية حسب المسمى الوظيفي' : 'Resume Examples by Job Title'}
        </h1>
        <ResumeExampleGrid examples={resumeExamples} />
      </main>
    </div>
  );
}



// -------------------------------------------------
// --------------- Page Summary --------------------
// -------------------------------------------------
// ✅ Purpose
// 	•	Displays a grid of resume examples categorized by job title
// 	•	Serves as the landing page for browsing available CV templates

// ⸻

// 🧩 Main Features
// 	•	Uses useLanguage() to detect:
// 	•	Active language (ar or en)
// 	•	Text direction (rtl or ltr)
// 	•	Applies responsive layout with RTL/LTR support
// 	•	Renders a translated heading:
// 	•	Arabic: “نماذج سيرة ذاتية حسب المسمى الوظيفي”
// 	•	English: “Resume Examples by Job Title”

// ⸻

// 🧱 Components Used
// 	•	<Header />: shows a top CTA with consistent navigation
// 	•	<ResumeExampleGrid />: displays resume examples in an infinite-scroll grid layout

// ⸻

// 📦 Data Handling
// 	•	Contains a hardcoded resumeExamples array with 10 job roles
// 	•	Each example includes:
// 	•	slug (used for linking)
// 	•	title_ar / title_en
// 	•	description_ar / description_en
// 	•	template_id (used later for customization links)

// ⸻

// 🧠 Behavior
// 	•	Automatically sets the lang and dir attributes for accessibility and proper rendering
// 	•	Passes all examples to <ResumeExampleGrid /> for display
// 	•	Delegates all card rendering and infinite scroll logic to the grid component

// ⸻

// ✅ Example URL Rendered
// 	•	/resume-examples/software-engineer
// 	•	/resume-examples/teacher

