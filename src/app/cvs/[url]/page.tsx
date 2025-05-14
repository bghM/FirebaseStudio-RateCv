'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CVPage() {
  const { url } = useParams();
  const [cvData, setCvData] = useState<CvData | null>(null);
  const isRTL = false;
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const primaryColor = '#1e3a8a';
  const fontFamily = "'Tajawal', sans-serif";

  useEffect(() => {
    // setMounted(true);
    window.scrollTo(0, 0);
    // You can replace this logic with a real fetch(`/api/cvs/${url}`)
    const mockCvs: Record<string, any> = {
      'charles-cv': {
        name: 'Charles Bloomberg',
        jobTitle: 'Startup Consultant',
        email: 'charlesbloomberg@gmail.com',
        phone: '+621 799 5548',
        address: 'Seoul, South Korea',
        photo: 'https://i.pravatar.cc/150?img=12',
        summary:
          'Passion for building inspiring companies through industry-leading tech, design, and execution. An experienced early-stage global executive with an economics degree from the University of Wisconsin - Madison.',
        skills: [
          'Leadership',
          'Fundraising',
          'Product Development',
          'Communication',
          'Partnerships',
          'HTML/CSS',
          'Webflow',
          'Growth Strategy',
          'Startup Mentorship',
          'Market Research',
          'Analytics',
          'Public Speaking',
        ],
        experience: [
          {
            title: 'CEO & Founder',
            company: 'Rezi',
            date: 'Aug 2015 — Present',
            details: [
              'Built resume software trusted by over 2.2M users worldwide.',
              'Raised $650,000 in funding and grew the team to 13 people.',
              'Expanded operations into South Korea and led global marketing.',
              'Led the launch of AI resume generation and PDF rendering engine.',
            ],
          },
          {
            title: 'Startup Consultant',
            company: 'Various Early-Stage Startups',
            date: 'Jan 2020 — Present',
            details: [
              'Helped 10+ startup founders build MVPs using no-code tools.',
              'Advised on fundraising, go-to-market strategy, and user growth.',
              'Designed pitch decks that raised a total of $2.3M in pre-seed funding.',
            ],
          },
          {
            title: 'Web Developer',
            company: 'Kaplan',
            date: 'May 2015 — Nov 2015',
            details: [
              'Optimized landing pages and increased traffic by 30% through SEO.',
              'Collaborated with design and product teams on campaign pages.',
            ],
          },
          {
            title: 'Marketing Analyst',
            company: 'Kaplan',
            date: 'Nov 2014 — May 2015',
            details: [
              'Built dashboards in Tableau for campaign performance tracking.',
              'Introduced a retargeting strategy that improved ROAS by 18%.',
            ],
          },
          {
            title: 'Intern, Web Development',
            company: 'Wisconsin Public Television',
            date: 'Jun 2012 — Sep 2012',
            details: [
              'Revamped internal intranet tools and added analytics tracking.',
              'Created donation landing pages that brought $235K+ in revenue.',
            ],
          },
        ],
        education: [
          {
            degree: 'B.Sc. in Economics with Math Emphasis',
            school: 'University of Wisconsin - Madison',
            year: '2014',
          },
          {
            degree: 'Startup School Graduate',
            school: 'Y Combinator Online',
            year: '2020',
          },
        ],
      },
      'sarah-cv': {
        name: 'Sarah Ali',
        jobTitle: 'Marketing Manager',
        summary: 'Marketing leader with 10 years of brand strategy...',
        skills: ['SEO', 'Content', 'Google Ads'],
      },
      'mohammed-cv': {
        name: 'Mohammed Nasser',
        jobTitle: 'Frontend Developer',
        summary: 'Skilled React developer with a UI/UX focus...',
        skills: ['React', 'Tailwind', 'TypeScript'],
      },
    };

    setTimeout(() => {
      const found = mockCvs[url as string];
      setCvData(found || null);
      setLoading(false);
    }, 300);
  }, [url]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        <Zap className="w-6 h-6 animate-spin mr-2" />
        Loading CV...
      </div>
    );
  }

  if (!cvData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Zap className="h-12 w-12 animate-ping text-primary" />
      </div>
    );
  }

return (
      <div
        dir={isRTL ? 'rtl' : 'ltr'}
        className="mx-auto bg-white text-gray-900 text-[0.9rem] leading-relaxed print:bg-white print:text-black"
        style={{ fontFamily }}
      >
        {/* PAGE 1 */}
        <div className="w-[210mm] min-h-[297mm] p-8 print:p-12 break-after-page">
          <div className="flex flex-col md:flex-row gap-6">

            {/* Colored section */}
            <div className="md:w-1/3 w-full bg-gray-100 p-4 rounded-lg space-y-6 print:bg-white">
              {cvData.photo && (
                <div className="w-full flex justify-center">
                  <img
                    src={cvData.photo}
                    alt="profile"
                    className="w-32 h-32 rounded-full object-cover border-4"
                    style={{ borderColor: primaryColor }}
                  />
                </div>
              )}

            {cvData.skills && cvData.skills.length > 0 && (
              <div>
                <h2 className="font-bold mb-1" style={{ color: primaryColor }}>Skills</h2>
                <ul className="list-disc pl-5 space-y-1">
                  {cvData.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}


              <div>
                <h2 className="font-bold mb-1" style={{ color: primaryColor }}>Contact</h2>
                <p>{cvData.email}</p>
                <p>{cvData.phone}</p>
                <p>{cvData.address}</p>
              </div>

            </div>


            <div className="md:w-2/3 w-full space-y-6">
              <div className="border-b pb-2">
                <h1 className="text-3xl font-extrabold">{cvData.name}</h1>
                <h2 className="text-xl text-gray-600">{cvData.jobTitle}</h2>
              </div>

              {cvData.summary && (
                <div>
                  <h2 className="font-bold mb-1" style={{ color: primaryColor }}>Summary</h2>
                  <p>{cvData.summary}</p>
                </div>
              )}

            </div>
          </div>
        </div>
  
        {/* PAGE 2 */}
        <div className="w-[210mm] min-h-[297mm] p-8 print:p-12 break-after-page">
          <h2 className="font-bold mb-4 text-lg" style={{ color: primaryColor }}>Experience</h2>


          {cvData.experience && cvData.experience.length > 0 && (
          <div className="space-y-5">
            {cvData.experience.map((exp, i) => (
              <div key={i} className="break-inside-avoid">
                <div className="flex justify-between text-sm font-semibold">
                  <span>{exp.title}</span>
                  <span>{exp.date}</span>
                </div>
                <p className="text-sm italic text-gray-500">{exp.company}</p>

                {exp.company && exp.company.length > 0 && (
                <ul className="list-disc pl-5 text-sm">
                  {exp.details.map((detail, j) => (
                    <li key={j}>{detail}</li>
                  ))}
                </ul>
                )}

              </div>
            ))}
          </div>
          )}


        </div>
  
        {/* PAGE 3 */}
        <div className="w-[210mm] min-h-[297mm] p-8 print:p-12">
          <h2 className="font-bold mb-4 text-lg" style={{ color: primaryColor }}>Education</h2>


        {cvData.education && cvData.education.length > 0 && (
          <div className="space-y-4">
            {cvData.education.map((edu, i) => (
              <div key={i} className="break-inside-avoid">
                <div className="flex justify-between font-medium text-sm">
                  <span>{edu.degree}</span>
                  <span>{edu.year}</span>
                </div>
                <p className="text-sm italic text-gray-500">{edu.school}</p>
              </div>
            ))}
          </div>
        )}


        </div>
      </div>
    );
  }