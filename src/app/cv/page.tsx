'use client';



// ------------------------------------------------
// Example 1
// ------------------------------------------------

// import React from 'react';

// export default function CVTemplate() {
//   return (
//     <div className="bg-white text-gray-800 p-8 max-w-3xl mx-auto font-sans print:p-8 print:w-[210mm] print:h-[297mm] print:m-0 print:text-[12px]">
//       <style jsx global>{`
//         @media print {
//           body {
//             width: 210mm;
//             height: 297mm;
//             margin: 0;
//             padding: 2rem;
//             font-size: 12px;
//           }
//         }
//       `}</style>

//       <header className="text-center mb-6">
//         <h1 className="text-3xl font-bold">Charles Bloomberg</h1>
//         <p>
//           Seoul, South Korea • charlesbloomberg@gmail.com • (621) 799-5548 • in/cbloomberg
//         </p>
//       </header>

//       <section className="mb-6">
//         <h2 className="font-bold text-blue-900 border-b-2 border-gray-300 pb-1 mb-2 uppercase text-sm">
//           Professional Summary
//         </h2>
//         <p>
//           Passion for building inspiring companies through industry-leading tech, design, and
//           execution. An experienced early-stage global executive with an economics degree from the
//           University of Wisconsin - Madison. Looking to join as a global startup consultant.
//         </p>
//       </section>

//       <section className="mb-6">
//         <h2 className="font-bold text-blue-900 border-b-2 border-gray-300 pb-1 mb-2 uppercase text-sm">
//           Professional Experience
//         </h2>

//         {[
//           {
//             title: 'CEO & Founder — Rezi',
//             date: 'Aug 2015—Present, Seoul, South Korea',
//             bullets: [
//               'Built Rezi - the most loved resume software in the world, trusted by over 2,227,254 users.',
//               'Founded Rezi at 22, expanded to South Korea, raised $650,000+, secured awards.',
//               'Led development of scalable strategies, redeemed 50k+ users in 1 month with zero ad cost.',
//               'Developed e-learning, recruiting, and data-vending products.',
//               '13 FTEs, $40M valuation.',
//             ],
//           },
//           {
//             title: 'Web Developer — Kaplan',
//             date: 'May 2015—Nov 2015, La Crosse, WI',
//             bullets: [
//               'SEO strategy, A/B testing, analytics with MOZ and Google tools.',
//               'Built landing pages using HTML & Expression Engine CMS.',
//             ],
//           },
//           {
//             title: 'Marketing Analyst — Kaplan',
//             date: 'Nov 2014—May 2015, La Crosse, WI',
//             bullets: [
//               'Built Tableau dashboards, introduced retargeting strategy.',
//               'Used SurveyMonkey, AdWords, Marin.',
//             ],
//           },
//           {
//             title: 'Web Development Intern — Wisconsin Public Television',
//             date: 'June 2012—Sept 2012, Madison, WI',
//             bullets: [
//               'Integrated analytics, marketing pixels; generated $235K+ in sales.',
//               'Redesigned intranet for internal processes.',
//             ],
//           },
//         ].map((job, i) => (
//           <div className="mb-4" key={i}>
//             <div className="flex justify-between text-sm font-semibold">
//               <span>{job.title}</span>
//               <span>{job.date}</span>
//             </div>
//             <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
//               {job.bullets.map((point, j) => (
//                 <li key={j}>{point}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </section>

//       <section className="mb-6">
//         <h2 className="font-bold text-blue-900 border-b-2 border-gray-300 pb-1 mb-2 uppercase text-sm">
//           Consultancy
//         </h2>
//         <p className="text-sm font-semibold">
//           Early-Stage Startup Architect — Independant Startup Consultant • June 2020 - Present
//         </p>
//         <ul className="list-disc pl-5 text-sm mt-1">
//           <li>Worked with 3 global founders to bring MVPs to market using no-code methods.</li>
//         </ul>
//       </section>

//       <section className="mb-6">
//         <h2 className="font-bold text-blue-900 border-b-2 border-gray-300 pb-1 mb-2 uppercase text-sm">
//           Education
//         </h2>
//         <p className="text-sm font-semibold">
//           Bachelor of Science in Economics with a Mathematics Emphasis
//         </p>
//         <p className="text-sm">
//           University of Wisconsin - Madison • Powers-Knapp Scholar • 2014
//         </p>
//       </section>

//       <section>
//         <h2 className="font-bold text-blue-900 border-b-2 border-gray-300 pb-1 mb-2 uppercase text-sm">
//           Expert-Level Skills
//         </h2>
//         <p className="text-sm">
//           <strong>Leadership:</strong> Speaking, Fundraising, Product Development, Communication,
//           Partnerships, International Marketing
//         </p>
//         <p className="text-sm">
//           <strong>Front End:</strong> HTML, CSS, Bootstrap, Webflow
//         </p>
//         <p className="text-sm">
//           <strong>Fields of Interest:</strong> Early-Stage Fundraising, Global Entrepreneurship, Web
//           Design, Growth
//         </p>
//       </section>
//     </div>
//   );
// }



// ------------------------------------------------
// Example 2
// ------------------------------------------------

// import React, { useState } from 'react';

// const fontSizes = ['sm', 'base', 'lg'];
// const fonts = ['sans', 'serif', 'mono'];

// const dummyData: Record<string, any> = {
//   'charles-cv': {
//     name: 'Charles Bloomberg',
//     jobTitle: 'Startup Consultant',
//     email: 'charlesbloomberg@gmail.com',
//     phone: '+621 799 5548',
//     address: 'Seoul, South Korea',
//     photo: 'https://i.pravatar.cc/150?img=12',
//     summary: 'Passion for building inspiring companies through industry-leading tech, design, and execution. An experienced early-stage global executive with an economics degree from the University of Wisconsin - Madison.',
//     skills: [
//       'Leadership', 'Fundraising', 'Product Development', 'Communication', 'Partnerships', 'HTML/CSS',
//       'Webflow', 'Growth Strategy', 'Startup Mentorship', 'Market Research', 'Analytics', 'Public Speaking'
//     ],
//     experience: [
//       {
//         title: 'CEO & Founder',
//         company: 'Rezi',
//         date: 'Aug 2015 — Present',
//         details: [
//           'Built resume software trusted by over 2.2M users worldwide.',
//           'Raised $650,000 in funding and grew the team to 13 people.',
//           'Expanded operations into South Korea and led global marketing.',
//           'Led the launch of AI resume generation and PDF rendering engine.'
//         ]
//       },
//       {
//         title: 'Startup Consultant',
//         company: 'Various Early-Stage Startups',
//         date: 'Jan 2020 — Present',
//         details: [
//           'Helped 10+ startup founders build MVPs using no-code tools.',
//           'Advised on fundraising, go-to-market strategy, and user growth.',
//           'Designed pitch decks that raised a total of $2.3M in pre-seed funding.'
//         ]
//       },
//       {
//         title: 'CEO & Founder',
//         company: 'Rezi',
//         date: 'Aug 2015 — Present',
//         details: [
//           'Built resume software trusted by over 2.2M users worldwide.',
//           'Raised $650,000 in funding and grew the team to 13 people.',
//           'Expanded operations into South Korea and led global marketing.',
//           'Led the launch of AI resume generation and PDF rendering engine.'
//         ]
//       },
//       {
//         title: 'Startup Consultant',
//         company: 'Various Early-Stage Startups',
//         date: 'Jan 2020 — Present',
//         details: [
//           'Helped 10+ startup founders build MVPs using no-code tools.',
//           'Advised on fundraising, go-to-market strategy, and user growth.',
//           'Designed pitch decks that raised a total of $2.3M in pre-seed funding.'
//         ]
//       },
//       {
//         title: 'CEO & Founder',
//         company: 'Rezi',
//         date: 'Aug 2015 — Present',
//         details: [
//           'Built resume software trusted by over 2.2M users worldwide.',
//           'Raised $650,000 in funding and grew the team to 13 people.',
//           'Expanded operations into South Korea and led global marketing.',
//           'Led the launch of AI resume generation and PDF rendering engine.'
//         ]
//       },
//       {
//         title: 'Startup Consultant',
//         company: 'Various Early-Stage Startups',
//         date: 'Jan 2020 — Present',
//         details: [
//           'Helped 10+ startup founders build MVPs using no-code tools.',
//           'Advised on fundraising, go-to-market strategy, and user growth.',
//           'Designed pitch decks that raised a total of $2.3M in pre-seed funding.'
//         ]
//       },
//       {
//         title: 'CEO & Founder',
//         company: 'Rezi',
//         date: 'Aug 2015 — Present',
//         details: [
//           'Built resume software trusted by over 2.2M users worldwide.',
//           'Raised $650,000 in funding and grew the team to 13 people.',
//           'Expanded operations into South Korea and led global marketing.',
//           'Led the launch of AI resume generation and PDF rendering engine.'
//         ]
//       },
//       {
//         title: 'Startup Consultant',
//         company: 'Various Early-Stage Startups',
//         date: 'Jan 2020 — Present',
//         details: [
//           'Helped 10+ startup founders build MVPs using no-code tools.',
//           'Advised on fundraising, go-to-market strategy, and user growth.',
//           'Designed pitch decks that raised a total of $2.3M in pre-seed funding.'
//         ]
//       },
//       {
//         title: 'CEO & Founder',
//         company: 'Rezi',
//         date: 'Aug 2015 — Present',
//         details: [
//           'Built resume software trusted by over 2.2M users worldwide.',
//           'Raised $650,000 in funding and grew the team to 13 people.',
//           'Expanded operations into South Korea and led global marketing.',
//           'Led the launch of AI resume generation and PDF rendering engine.'
//         ]
//       },
//       {
//         title: 'Startup Consultant',
//         company: 'Various Early-Stage Startups',
//         date: 'Jan 2020 — Present',
//         details: [
//           'Helped 10+ startup founders build MVPs using no-code tools.',
//           'Advised on fundraising, go-to-market strategy, and user growth.',
//           'Designed pitch decks that raised a total of $2.3M in pre-seed funding.'
//         ]
//       },
//       {
//         title: 'CEO & Founder',
//         company: 'Rezi',
//         date: 'Aug 2015 — Present',
//         details: [
//           'Built resume software trusted by over 2.2M users worldwide.',
//           'Raised $650,000 in funding and grew the team to 13 people.',
//           'Expanded operations into South Korea and led global marketing.',
//           'Led the launch of AI resume generation and PDF rendering engine.'
//         ]
//       },
//       {
//         title: 'Startup Consultant',
//         company: 'Various Early-Stage Startups',
//         date: 'Jan 2020 — Present',
//         details: [
//           'Helped 10+ startup founders build MVPs using no-code tools.',
//           'Advised on fundraising, go-to-market strategy, and user growth.',
//           'Designed pitch decks that raised a total of $2.3M in pre-seed funding.'
//         ]
//       }
//     ],
//     education: [
//       {
//         degree: 'B.Sc. in Economics with Math Emphasis',
//         school: 'University of Wisconsin - Madison',
//         year: '2014'
//       },
//       {
//         degree: 'Startup School Graduate',
//         school: 'Y Combinator Online',
//         year: '2020'
//       },
//       {
//         degree: 'B.Sc. in Economics with Math Emphasis',
//         school: 'University of Wisconsin - Madison',
//         year: '2014'
//       },
//       {
//         degree: 'Startup School Graduate',
//         school: 'Y Combinator Online',
//         year: '2020'
//       },
//       {
//         degree: 'B.Sc. in Economics with Math Emphasis',
//         school: 'University of Wisconsin - Madison',
//         year: '2014'
//       },
//       {
//         degree: 'Startup School Graduate',
//         school: 'Y Combinator Online',
//         year: '2020'
//       },
//       {
//         degree: 'B.Sc. in Economics with Math Emphasis',
//         school: 'University of Wisconsin - Madison',
//         year: '2014'
//       },
//       {
//         degree: 'Startup School Graduate',
//         school: 'Y Combinator Online',
//         year: '2020'
//       },
//       {
//         degree: 'B.Sc. in Economics with Math Emphasis',
//         school: 'University of Wisconsin - Madison',
//         year: '2014'
//       },
//       {
//         degree: 'Startup School Graduate',
//         school: 'Y Combinator Online',
//         year: '2020'
//       },
//       {
//         degree: 'B.Sc. in Economics with Math Emphasis',
//         school: 'University of Wisconsin - Madison',
//         year: '2014'
//       },
//       {
//         degree: 'Startup School Graduate',
//         school: 'Y Combinator Online',
//         year: '2020'
//       }
//     ]
//   }
// };

// export default function CVPreviewCustomizer() {
//   const [fontSize, setFontSize] = useState('base');
//   const [fontFamily, setFontFamily] = useState('sans');
//   const [color, setColor] = useState('#1e40af');
//   const [language, setLanguage] = useState<'ar' | 'en'>('en');

//   const data = dummyData['charles-cv'];

//   const direction = language === 'ar' ? 'rtl' : 'ltr';
//   const textAlign = direction === 'rtl' ? 'text-right' : 'text-left';
//   const fontClass = fontFamily === 'sans' ? 'font-sans' : fontFamily === 'serif' ? 'font-serif' : 'font-mono';

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="mb-6 flex flex-wrap items-center gap-4">
//         <div>
//           <label className="block text-sm font-medium mb-1">Font Size</label>
//           <select value={fontSize} onChange={(e) => setFontSize(e.target.value)} className="border rounded p-2">
//             {fontSizes.map((size) => (
//               <option key={size} value={size}>{size}</option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Font Family</label>
//           <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)} className="border rounded p-2">
//             {fonts.map((f) => (
//               <option key={f} value={f}>{f}</option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Theme Color</label>
//           <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-10 h-10 border rounded" />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Language</label>
//           <select value={language} onChange={(e) => setLanguage(e.target.value as 'ar' | 'en')} className="border rounded p-2">
//             <option value="en">English</option>
//             <option value="ar">Arabic</option>
//           </select>
//         </div>
//       </div>

//       <div className={`border rounded shadow bg-white p-8 space-y-6 ${fontClass} text-${fontSize}`} dir={direction}>
//         {/* Page 1 */}
//         <div className="page-break">
//           <div className="flex justify-between items-center mb-2">
//             <h1 className="text-3xl font-bold" style={{ color }}>{data.name}</h1>
//             <img src={data.photo} alt="Profile" className="h-20 w-20 rounded-full" />
//           </div>
//           <h2 className={`text-xl font-semibold ${textAlign}`} style={{ color }}>{data.jobTitle}</h2>
//           <p className="text-sm text-gray-600 mb-2">{data.address} • {data.email} • {data.phone}</p>
//           <h3 className={`text-lg font-bold mt-6 mb-2 border-b pb-1 ${textAlign}`} style={{ color }}>Summary</h3>
//           <p className="text-sm text-gray-700 whitespace-pre-wrap">{data.summary}</p>
//         </div>

//         {/* Page 2 */}
//         <div className="page-break">
//           <h3 className={`text-lg font-bold mt-6 mb-2 border-b pb-1 ${textAlign}`} style={{ color }}>Experience</h3>
//           {data.experience?.map((exp: any, idx: number) => (
//             <div key={idx} className="mb-4">
//               <div className="flex justify-between text-sm font-semibold">
//                 <span>{exp.title} — {exp.company}</span>
//                 <span>{exp.date}</span>
//               </div>
//               <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
//                 {exp.details?.map((d: string, i: number) => <li key={i}>{d}</li>)}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Page 3 */}
//         <div className="page-break">
//           <h3 className={`text-lg font-bold mt-6 mb-2 border-b pb-1 ${textAlign}`} style={{ color }}>Education</h3>
//           <ul className="list-disc pl-5 text-sm space-y-2">
//             {data.education?.map((edu: any, i: number) => (
//               <li key={i}><strong>{edu.degree}</strong> — {edu.school} ({edu.year})</li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <style jsx>{`
//         .page-break {
//           page-break-after: always;
//         }
//       `}</style>
//     </div>
//   );
// }




// ------------------------------------------------
// Example 3
// ------------------------------------------------

import React, { useState } from 'react';

const CVTemplate = () => {
  const [fontSize, setFontSize] = useState<number>(16);
  const [fontFamily, setFontFamily] = useState<'sans' | 'serif' | 'mono'>('sans');
  const [color, setColor] = useState<string>('#1e3a8a');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Controls */}
      <div className="mb-6 flex flex-wrap gap-4 items-center">
        <label className="flex flex-col text-sm">
          Font Size (px)
          <input
            type="number"
            min="10"
            max="30"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="border px-2 py-1 rounded w-20"
          />
        </label>

        <label className="flex flex-col text-sm">
          Font Family
          <select
            className="border px-2 py-1 rounded"
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value as 'sans' | 'serif' | 'mono')}
          >
            <option value="sans">Sans</option>
            <option value="serif">Serif</option>
            <option value="mono">Mono</option>
          </select>
        </label>

        <label className="flex flex-col text-sm">
          Color
          <input
            type="color"
            className="w-10 h-10 p-1 border rounded"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
      </div>

      {/* Resume Content */}
      <div
        className={`bg-white text-gray-800 p-8 max-w-3xl mx-auto print:p-8 print:w-[210mm] print:h-[297mm] print:m-0`}
        style={{ color, fontSize: `${fontSize}px` }}
      >
        <style jsx global>{`
          @media print {
            body {
              width: 210mm;
              height: 297mm;
              margin: 0;
              padding: 2rem;
              font-size: 12px;
            }
            .page-break {
              page-break-before: always;
            }
          }
        `}</style>

        <div className={
          fontFamily === 'serif'
            ? 'font-serif'
            : fontFamily === 'mono'
            ? 'font-mono'
            : 'font-sans'
        }>
          <header className="text-center mb-6">
            <h1 className="text-3xl font-bold">Charles Bloomberg</h1>
            <p>
              Seoul, South Korea • charlesbloomberg@gmail.com • (621) 799-5548 • in/cbloomberg
            </p>
          </header>

          <section className="mb-6">
            <h2 className="font-bold text-blue-900 border-b-2 border-gray-300 pb-1 mb-2 uppercase text-sm">
              Professional Summary
            </h2>
            <p>
              Passion for building inspiring companies through industry-leading tech, design, and
              execution. An experienced early-stage global executive with an economics degree from
              the University of Wisconsin - Madison. Looking to join as a global startup consultant.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="font-bold text-blue-900 border-b-2 border-gray-300 pb-1 mb-2 uppercase text-sm">
              Professional Experience
            </h2>

            {[
              {
                title: 'CEO & Founder — Rezi',
                date: 'Aug 2015—Present, Seoul, South Korea',
                bullets: [
                  'Built Rezi - the most loved resume software in the world, trusted by over 2,227,254 users.',
                  'Founded Rezi at 22, expanded to South Korea, raised $650,000+, secured awards.',
                  'Led development of scalable strategies, redeemed 50k+ users in 1 month with zero ad cost.',
                  'Developed e-learning, recruiting, and data-vending products.',
                  '13 FTEs, $40M valuation.',
                ],
              },
              {
                title: 'Web Developer — Kaplan',
                date: 'May 2015—Nov 2015, La Crosse, WI',
                bullets: [
                  'SEO strategy, A/B testing, analytics with MOZ and Google tools.',
                  'Built landing pages using HTML & Expression Engine CMS.',
                ],
              },
              {
                title: 'Marketing Analyst — Kaplan',
                date: 'Nov 2014—May 2015, La Crosse, WI',
                bullets: [
                  'Built Tableau dashboards, introduced retargeting strategy.',
                  'Used SurveyMonkey, AdWords, Marin.',
                ],
              },
              {
                title: 'Web Development Intern — Wisconsin Public Television',
                date: 'June 2012—Sept 2012, Madison, WI',
                bullets: [
                  'Integrated analytics, marketing pixels; generated $235K+ in sales.',
                  'Redesigned intranet for internal processes.',
                ],
              },
            ].map((job, i) => (
              <div className="mb-4" key={i}>
                <div className="flex justify-between text-sm font-semibold">
                  <span>{job.title}</span>
                  <span>{job.date}</span>
                </div>
                <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                  {job.bullets.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <div className="page-break" />

          <section className="mb-6">
            <h2 className="font-bold text-blue-900 border-b-2 border-gray-300 pb-1 mb-2 uppercase text-sm">
              Consultancy
            </h2>
            <p className="text-sm font-semibold">
              Early-Stage Startup Architect — Independant Startup Consultant • June 2020 - Present
            </p>
            <ul className="list-disc pl-5 text-sm mt-1">
              <li>Worked with 3 global founders to bring MVPs to market using no-code methods.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="font-bold text-blue-900 border-b-2 border-gray-300 pb-1 mb-2 uppercase text-sm">
              Education
            </h2>
            <p className="text-sm font-semibold">
              Bachelor of Science in Economics with a Mathematics Emphasis
            </p>
            <p className="text-sm">
              University of Wisconsin - Madison • Powers-Knapp Scholar • 2014
            </p>
          </section>

          <section>
            <h2 className="font-bold text-blue-900 border-b-2 border-gray-300 pb-1 mb-2 uppercase text-sm">
              Expert-Level Skills
            </h2>
            <p className="text-sm">
              <strong>Leadership:</strong> Speaking, Fundraising, Product Development, Communication,
              Partnerships, International Marketing
            </p>
            <p className="text-sm">
              <strong>Front End:</strong> HTML, CSS, Bootstrap, Webflow
            </p>
            <p className="text-sm">
              <strong>Fields of Interest:</strong> Early-Stage Fundraising, Global Entrepreneurship, Web
              Design, Growth
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CVTemplate;