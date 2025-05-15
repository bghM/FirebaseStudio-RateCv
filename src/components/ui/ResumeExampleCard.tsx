'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';

export default function ResumeExampleCard({ job }: { job: any }) {
  const { language } = useLanguage();

  return (
    <li>
      <Link href={`/resume-examples/${job.slug}`}>
        <div className="bg-transparent hover:bg-primary/90 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          {job[`title_${language}`]}
        </div>
        <Image
          src={`/cvs/${job.slug}.png`}
          alt={`Resume preview for ${job[`title_${language}`]}`}
          width={900}
          height={1200}
          loading="lazy"
          className="w-full h-auto object-contain"
        />
      </Link>
    </li>
  );
}


// -------------------------------------------------
// --------------- Component Summary ---------------
// -------------------------------------------------
// ✅ Purpose
// 	•	Renders a single resume example card for use in a grid layout
// 	•	Displays the job title and preview image (PNG)
// 	•	Links to the detailed resume example page

// ⸻

// 🧩 Props
// 	•	job: ResumeExample – contains slug, title_en, title_ar, etc.

// ⸻

// 🧠 Internal Features
// 	•	Uses useLanguage() to display the title in Arabic or English
// 	•	Builds a localized alt attribute for accessibility
// 	•	Navigates to /resume-examples/[slug] when clicked
// 	•	Uses Next.js <Image> for optimized preview loading

// ⸻

// 📍 Where It’s Used
// 	•	Inside <ResumeExampleGrid /> on the /resume-examples page

// ⸻

// ✅ Example Usage
// <ResumeExampleCard job={example} />