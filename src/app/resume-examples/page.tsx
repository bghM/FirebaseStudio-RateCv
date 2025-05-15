'use client';

import { useLanguage } from '@/hooks/use-language';
import { Header } from '@/components/layout/header';
import ResumeExampleGrid from '@/components/ui/ResumeExampleGrid';
import resumeExamples from '@/data/resumeExamples';


export default function ResumeExamplesPage() {
  const { language, direction } = useLanguage();
  
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

