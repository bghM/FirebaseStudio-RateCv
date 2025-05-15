'use client';

import { useLanguage } from '@/hooks/use-language';
import { useState, useEffect, useRef } from 'react';
import ResumeExampleCard from './ResumeExampleCard';

const BATCH_SIZE = 12;

export default function ResumeExampleGrid({ examples }: { examples: any[] }) {
  const { language } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setVisibleCount((prev) => {
          const next = prev + BATCH_SIZE;
          if (next >= examples.length) setHasMore(false);
          return next;
        });
      }
    }, { threshold: 1 });

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {examples.slice(0, visibleCount).map((job) => (
          <ResumeExampleCard key={job.slug} job={job} />
        ))}
      </ul>

      {hasMore && (
        <div ref={observerRef} className="text-center py-8 text-gray-500">
          {language === 'ar' ? 'تحميل المزيد...' : 'Loading more...'}
        </div>
      )}
    </>
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

// ⸻

// 🗂️ ResumeExampleGrid Component

// ✅ Purpose
// 	•	Renders a grid layout of ResumeExampleCard components
// 	•	Implements infinite scrolling using IntersectionObserver

// ⸻

// 🧩 Props
// 	•	examples: ResumeExample[] – full list of resume examples

// ⸻

// 🧠 Internal Features
// 	•	Loads examples in batches (default: 12 at a time)
// 	•	Tracks how many items to show using visibleCount
// 	•	Uses a ref element to trigger loading more when visible
// 	•	Prevents loading beyond the list (hasMore flag)

// ⸻

// 🧭 Behavior
// 	•	Initially loads a limited set of examples
// 	•	Adds more when user scrolls to bottom
// 	•	Fully RTL/LTR responsive with grid layout support

// ⸻

// ✅ Example Usage
// <ResumeExampleGrid examples={resumeExamples} />
