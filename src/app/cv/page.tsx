'use client';
import React, { useState, useCallback, useEffect } from 'react';



// ------------------------------------------------
// Example 1
// ------------------------------------------------


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

// const CVTemplate = () => {
//   const [fontSize, setFontSize] = useState<number>(16);
//   const [fontFamily, setFontFamily] = useState<'sans' | 'serif' | 'mono'>('sans');
//   const [color, setColor] = useState<string>('#1e3a8a');

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       {/* Controls */}
//       <div className="mb-6 flex flex-wrap gap-4 items-center">
//         <label className="flex flex-col text-sm">
//           Font Size (px)
//           <input
//             type="number"
//             min="10"
//             max="30"
//             value={fontSize}
//             onChange={(e) => setFontSize(Number(e.target.value))}
//             className="border px-2 py-1 rounded w-20"
//           />
//         </label>

//         <label className="flex flex-col text-sm">
//           Font Family
//           <select
//             className="border px-2 py-1 rounded"
//             value={fontFamily}
//             onChange={(e) => setFontFamily(e.target.value as 'sans' | 'serif' | 'mono')}
//           >
//             <option value="sans">Sans</option>
//             <option value="serif">Serif</option>
//             <option value="mono">Mono</option>
//           </select>
//         </label>

//         <label className="flex flex-col text-sm">
//           Color
//           <input
//             type="color"
//             className="w-10 h-10 p-1 border rounded"
//             value={color}
//             onChange={(e) => setColor(e.target.value)}
//           />
//         </label>
//       </div>

//       {/* Resume Content */}
//       <div
//         className={`bg-white text-gray-800 p-8 max-w-3xl mx-auto print:p-8 print:w-[210mm] print:h-[297mm] print:m-0`}
//         style={{ color, fontSize: `${fontSize}px` }}
//       >
//         <style jsx global>{`
//           @media print {
//             body {
//               width: 210mm;
//               height: 297mm;
//               margin: 0;
//               padding: 2rem;
//               font-size: 12px;
//             }
//             .page-break {
//               page-break-before: always;
//             }
//           }
//         `}</style>

//         <div className={
//           fontFamily === 'serif'
//             ? 'font-serif'
//             : fontFamily === 'mono'
//             ? 'font-mono'
//             : 'font-sans'
//         }>
//           <header className="text-center mb-6">
//             <h1 className="text-3xl font-bold">Charles Bloomberg</h1>
//             <p>
//               Seoul, South Korea • charlesbloomberg@gmail.com • (621) 799-5548 • in/cbloomberg
//             </p>
//           </header>

//           <section className="mb-6">
//             <h2 className="font-bold text-blue-900 border-b-2 border-gray-300 pb-1 mb-2 uppercase text-sm">
//               Professional Summary
//             </h2>
//             <p>
//               Passion for building inspiring companies through industry-leading tech, design, and
//               execution. An experienced early-stage global executive with an economics degree from
//               the University of Wisconsin - Madison. Looking to join as a global startup consultant.
//             </p>
//           </section>

//           <section className="mb-6">
//             <h2 className="font-bold text-blue-900 border-b-2 border-gray-300 pb-1 mb-2 uppercase text-sm">
//               Professional Experience
//             </h2>

//             {[
//               {
//                 title: 'CEO & Founder — Rezi',
//                 date: 'Aug 2015—Present, Seoul, South Korea',
//                 bullets: [
//                   'Built Rezi - the most loved resume software in the world, trusted by over 2,227,254 users.',
//                   'Founded Rezi at 22, expanded to South Korea, raised $650,000+, secured awards.',
//                   'Led development of scalable strategies, redeemed 50k+ users in 1 month with zero ad cost.',
//                   'Developed e-learning, recruiting, and data-vending products.',
//                   '13 FTEs, $40M valuation.',
//                 ],
//               },
//               {
//                 title: 'Web Developer — Kaplan',
//                 date: 'May 2015—Nov 2015, La Crosse, WI',
//                 bullets: [
//                   'SEO strategy, A/B testing, analytics with MOZ and Google tools.',
//                   'Built landing pages using HTML & Expression Engine CMS.',
//                 ],
//               },
//               {
//                 title: 'Marketing Analyst — Kaplan',
//                 date: 'Nov 2014—May 2015, La Crosse, WI',
//                 bullets: [
//                   'Built Tableau dashboards, introduced retargeting strategy.',
//                   'Used SurveyMonkey, AdWords, Marin.',
//                 ],
//               },
//               {
//                 title: 'Web Development Intern — Wisconsin Public Television',
//                 date: 'June 2012—Sept 2012, Madison, WI',
//                 bullets: [
//                   'Integrated analytics, marketing pixels; generated $235K+ in sales.',
//                   'Redesigned intranet for internal processes.',
//                 ],
//               },
//             ].map((job, i) => (
//               <div className="mb-4" key={i}>
//                 <div className="flex justify-between text-sm font-semibold">
//                   <span>{job.title}</span>
//                   <span>{job.date}</span>
//                 </div>
//                 <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
//                   {job.bullets.map((point, j) => (
//                     <li key={j}>{point}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </section>

//           <div className="page-break" />

//           <section className="mb-6">
//             <h2 className="font-bold text-blue-900 border-b-2 border-gray-300 pb-1 mb-2 uppercase text-sm">
//               Consultancy
//             </h2>
//             <p className="text-sm font-semibold">
//               Early-Stage Startup Architect — Independant Startup Consultant • June 2020 - Present
//             </p>
//             <ul className="list-disc pl-5 text-sm mt-1">
//               <li>Worked with 3 global founders to bring MVPs to market using no-code methods.</li>
//             </ul>
//           </section>

//           <section className="mb-6">
//             <h2 className="font-bold text-blue-900 border-b-2 border-gray-300 pb-1 mb-2 uppercase text-sm">
//               Education
//             </h2>
//             <p className="text-sm font-semibold">
//               Bachelor of Science in Economics with a Mathematics Emphasis
//             </p>
//             <p className="text-sm">
//               University of Wisconsin - Madison • Powers-Knapp Scholar • 2014
//             </p>
//           </section>

//           <section>
//             <h2 className="font-bold text-blue-900 border-b-2 border-gray-300 pb-1 mb-2 uppercase text-sm">
//               Expert-Level Skills
//             </h2>
//             <p className="text-sm">
//               <strong>Leadership:</strong> Speaking, Fundraising, Product Development, Communication,
//               Partnerships, International Marketing
//             </p>
//             <p className="text-sm">
//               <strong>Front End:</strong> HTML, CSS, Bootstrap, Webflow
//             </p>
//             <p className="text-sm">
//               <strong>Fields of Interest:</strong> Early-Stage Fundraising, Global Entrepreneurship, Web
//               Design, Growth
//             </p>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CVTemplate;



// ------------------------------------------------
// Example 4 (using 🤖 Agent 2 قالب سيرة ذاتية)
// ------------------------------------------------

// interface CVTemplateProps {
//   data?: {
//     name?: string;
//     jobTitle?: string;
//     email?: string;
//     phone?: string;
//     address?: string;
//     photo?: string;
//     summary?: string;
//     skills?: string[];
//     experience?: {
//       title?: string;
//       company?: string;
//       date?: string;
//       details?: string[];
//     }[];
//     education?: {
//       degree?: string;
//       school?: string;
//       year?: string;
//     }[];
//     achievements?: {
//       name?: string;
//       date?: string;
//       details?: string;
//     }[];
//     references?: {
//       name?: string;
//       email?: string;
//       phone?: string;
//       jobTitle?: string;
//       details?: string;
//     }[];
//     languages?: {
//       code?: string;
//       level?: string;
//     }[];
//     interests?: {
//       icon?: string;
//       interest?: string;
//     }[];
//     certifications?: {
//       name?: string;
//       details?: string;
//     }[];
//   };
//   fontSize?: number;
//   fontFamily?: 'sans' | 'serif' | 'mono';
//   color?: string;
//   language?: 'ar' | 'en';
// }

// export default function TemplateMadison({
//   data = {
//     name: 'JOEL SMITH',
//     jobTitle: 'English Teacher',
//     phone: '+1-885-147-1393',
//     email: 'joelsmith@gmail.com',
//     address: 'Baltimore, MD',
//     summary:
//       "A young yet exceptionally motivated English teacher who has 7 years of experience in various settings. I am passionate about boosting my students' confidence while helping them learn new things every single day.",
//     skills: [
//       'Moodle',
//       'Organization Skills',
//       'Communication',
//       'MS Office',
//       'Curriculum Development',
//       'Conflict Management',
//       'Patience',
//       'Multitasking',
//       'Active Listening',
//     ],
//     experience: [
//       {
//         title: 'English Teacher',
//         company: 'Baltimore Elementary School',
//         date: '2017 - Present',
//         details: [
//           'Managing classes of 12-20 students',
//           'Developing reading, writing, speaking and listening skills in students aged 6-10',
//           'Planning and teaching between 2 and 5 classes daily',
//           'Creating teaching materials for core and extracurricular activities',
//           'Grading homework and assignments',
//           'Planning and leading 1 parent-teacher meeting every 3 months',
//         ],
//       },
//       {
//         title: 'English Language Teacher',
//         company: 'Ledner School',
//         date: '2015 - 2017',
//         details: [
//           'Developed lesson plans that fit with the curriculum of the IB program',
//           'Taught English literature classes to students aged 16-18',
//           'Worked with an average of 20 students',
//           'Contributed to raising grades by at least 12% by running extracurricular sessions',
//           'Scheduled 2 oral and written exams per school year',
//           'Graded homework, assignments, and exams',
//         ],
//       },
//     ],
//     education: [
//       {
//         degree: 'Bachelor of Education in Teaching English',
//         school: 'University of Tennessee',
//         year: '2011 - 2015',
//       },
//     ],
//     achievements: [
//       {
//         name: 'Wrote a Textbook',
//         details:
//           'Wrote my first textbook called "The Ways English Compares to Spanish" in 2016',
//       },
//       {
//         name: '1st Place, English Literature Contest',
//         details:
//           'One of my students won 1st place at the English Literature Contest in Barcelona',
//       },
//     ],
//     certifications: [
//       {
//         name: 'Improving Performance',
//         details: 'Helping students improve their grades by at least 20% every year',
//       },
//       {
//         name: 'Adapting to Change',
//         details:
//           'Not scared of change as I know it brings about new opportunities for growth',
//       },
//       {
//         name: 'Earning Trust of Others',
//         details:
//           'Practicing active listening and treating people with respect at all times',
//       },
//     ],
//     languages: [
//       { code: 'English', level: 'Native' },
//       { code: 'Spanish', level: 'Proficient' },
//     ],
//   },
//   language = 'en',
// }: CVTemplateProps) {
//   const [fontSize, setFontSize] = useState<number>(16);
//   const [fontFamily, setFontFamily] = useState<'sans' | 'serif' | 'mono'>('sans');
//   const [color, setColor] = useState<string>('#1e3a8a');

//   const dir = language === 'ar' ? 'rtl' : 'ltr';
//   const tAlign = dir === 'rtl' ? 'text-right' : 'text-left';
//   const sectionTitle = (label: string) => (
//     <h2 style={{ color, fontSize: fontSize - 2 }} className="font-semibold uppercase tracking-wider border-b border-gray-300 pb-1 mt-6 mb-2">
//       {label}
//     </h2>
//   );

//   return (
//     <div
//       className={`w-full font-${fontFamily}`}
//       dir={dir}
//       style={{ '--template-color': color, '--template-font-size': `${fontSize}px` } as React.CSSProperties}
//     >
//       <div className="mb-6 flex flex-wrap gap-4 items-center">
//         <label className="flex flex-col text-sm">
//           Font Size (px)
//           <input
//             type="number"
//             min="10"
//             max="30"
//             value={fontSize}
//             onChange={(e) => setFontSize(Number(e.target.value))}
//             className="border px-2 py-1 rounded w-20"
//           />
//         </label>

//         <label className="flex flex-col text-sm">
//           Font Family
//           <select
//             className="border px-2 py-1 rounded"
//             value={fontFamily}
//             onChange={(e) => setFontFamily(e.target.value as 'sans' | 'serif' | 'mono')}
//           >
//             <option value="sans">Sans</option>
//             <option value="serif">Serif</option>
//             <option value="mono">Mono</option>
//           </select>
//         </label>

//         <label className="flex flex-col text-sm">
//           Color
//           <input
//             type="color"
//             className="w-10 h-10 p-1 border rounded"
//             value={color}
//             onChange={(e) => setColor(e.target.value)}
//           />
//         </label>
//       </div>

//       <div
//         className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 border print:border-none print:p-0"
//         style={{ color, fontSize }}
//       >
//         <div className="col-span-2 p-6 bg-white">
//           <h1 style={{ fontSize: fontSize + 4, color }} className="font-bold">{data.name}</h1>
//           <h2 style={{ fontSize: fontSize + 1, color }} className="font-semibold mt-1">{data.jobTitle}</h2>
//           <p style={{ fontSize: fontSize - 1 }} className="mt-1">📍 {data.address}</p>

//           {data.summary && (
//             <div className="mt-4">
//               {sectionTitle(language === 'ar' ? 'الملخص' : 'Summary')}
//               <p style={{ fontSize, color }} className="whitespace-pre-line leading-relaxed">{data.summary}</p>
//             </div>
//           )}

//           {data.experience?.length && (
//             <div className="page-break">
//               {sectionTitle(language === 'ar' ? 'الخبرات العملية' : 'Experience')}
//               {data.experience.map((exp, i) => (
//                 <div key={i} className="mb-4">
//                   <p style={{ fontSize, color }}>{exp.title}</p>
//                   <p style={{ color }} className="font-medium">{exp.company}</p>
//                   <p className="text-sm text-gray-600">{exp.date}</p>
//                   <ul className="list-disc list-inside mt-1 space-y-1">
//                     {exp.details?.map((d, j) => <li key={j}>{d}</li>)}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           )}

//           {data.education?.length && (
//             <div>
//               {sectionTitle(language === 'ar' ? 'التعليم' : 'Education')}
//               {data.education.map((edu, i) => (
//                 <div key={i} className="mb-2">
//                   <p className="font-semibold" style={{ fontSize }}>{edu.degree}</p>
//                   <p style={{ color }}>{edu.school}</p>
//                   <p className="text-sm text-gray-600">{edu.year}</p>
//                 </div>
//               ))}
//             </div>
//           )}

//           {data.languages?.length && (
//             <div>
//               {sectionTitle(language === 'ar' ? 'اللغات' : 'Languages')}
//               <ul>
//                 {data.languages.map((lang, i) => (
//                   <li key={i}>{lang.code} – {lang.level}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>

//         <div className="bg-gray-50 p-6 border-l border-gray-200">
//           {data.achievements?.length && (
//             <div>
//               {sectionTitle(language === 'ar' ? 'الإنجازات' : 'Achievements')}
//               <ul className="space-y-2">
//                 {data.achievements.map((a, i) => (
//                   <li key={i}>🔹 <span className="font-semibold" style={{ color }}>{a.name}</span><br /><span className="text-xs">{a.details}</span></li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {data.skills?.length && (
//             <div>
//               {sectionTitle(language === 'ar' ? 'المهارات' : 'Skills')}
//               <div className="flex flex-wrap gap-2">
//                 {data.skills.map((s, i) => (
//                   <span key={i} className="px-2 py-1 rounded-full text-xs" style={{ backgroundColor: color + '20', color }}>{s}</span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {data.certifications?.length && (
//             <div>
//               {sectionTitle(language === 'ar' ? 'الدورات' : 'Certifications')}
//               <ul className="space-y-2">
//                 {data.certifications.map((c, i) => (
//                   <li key={i}>
//                     <span className="font-semibold" style={{ color }}>
//                       "{c.name}"
//                     </span><br />
//                     <span className="text-xs">{c.details}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {data.interests?.length && (
//             <div>
//               {sectionTitle(language === 'ar' ? 'الاهتمامات' : 'Passions')}
//               <ul className="space-y-2">
//                 {data.interests.map((p, i) => (
//                   <li key={i}>💙 {p.interest}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>

//       <style jsx>{`
//         @media print {
//           .page-break {
//             page-break-before: always;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


// ------------------------------------------------
// Example 5 (using 🤖 Agent 2 قالب سيرة ذاتية)
// ------------------------------------------------
import {
  Briefcase,
  BookOpen,
  Award,
  Languages,
  Star,
  User,
  Phone,
  Mail,
  MapPin,
  Globe,
} from 'lucide-react';

interface CVTemplateProps {
  data?: {
    name?: string;
    jobTitle?: string;
    email?: string;
    phone?: string;
    address?: string;
    photo?: string;
    summary?: string;
    skills?: string[];
    experience?: {
      title?: string;
      company?: string;
      date?: string;
      details?: string[];
    }[];
    education?: {
      degree?: string;
      school?: string;
      year?: string;
    }[];
    achievements?: {
      name?: string;
      date?: string;
      details?: string;
    }[];
    references?: {
      name?: string;
      email?: string;
      phone?: string;
      jobTitle?: string;
      details?: string;
    }[];
    languages?: {
      code?: string;
      level?: string;
    }[];
    interests?: {
      icon?: string;
      interest?: string;
    }[];
    certifications?: {
      name?: string;
      details?: string;
    }[];
  };
  fontSize?: number;
  fontFamily?: 'sans' | 'serif' | 'mono';
  color?: string;
  language?: 'ar' | 'en';
}

export default function TemplateClassicModern({
  data = {
    name: 'JOEL SMITH',
    jobTitle: 'English Teacher',
    phone: '+1-885-147-1393',
    email: 'joelsmith@gmail.com',
    address: 'Baltimore, MD',
    summary:
      "A young yet exceptionally motivated English teacher who has 7 years of experience in various settings. I am passionate about boosting my students' confidence while helping them learn new things every single day.",
    skills: [
      'Moodle',
      'Organization Skills',
      'Communication',
      'MS Office',
      'Curriculum Development',
      'Conflict Management',
      'Patience',
      'Multitasking',
      'Active Listening',
    ],
    experience: [
      {
        title: 'English Teacher',
        company: 'Baltimore Elementary School',
        date: '2017 - Present',
        details: [
          'Managing classes of 12-20 students',
          'Developing reading, writing, speaking and listening skills in students aged 6-10',
          'Planning and teaching between 2 and 5 classes daily',
          'Creating teaching materials for core and extracurricular activities',
          'Grading homework and assignments',
          'Planning and leading 1 parent-teacher meeting every 3 months',
        ],
      },
      {
        title: 'English Language Teacher',
        company: 'Ledner School',
        date: '2015 - 2017',
        details: [
          'Developed lesson plans that fit with the curriculum of the IB program',
          'Taught English literature classes to students aged 16-18',
          'Worked with an average of 20 students',
          'Contributed to raising grades by at least 12% by running extracurricular sessions',
          'Scheduled 2 oral and written exams per school year',
          'Graded homework, assignments, and exams',
        ],
      },
    ],
    education: [
      {
        degree: 'Bachelor of Education in Teaching English',
        school: 'University of Tennessee',
        year: '2011 - 2015',
      },
    ],
    achievements: [
      {
        name: 'Wrote a Textbook',
        details:
          'Wrote my first textbook called "The Ways English Compares to Spanish" in 2016',
      },
      {
        name: '1st Place, English Literature Contest',
        details:
          'One of my students won 1st place at the English Literature Contest in Barcelona',
      },
    ],
    certifications: [
      {
        name: 'Improving Performance',
        details: 'Helping students improve their grades by at least 20% every year',
      },
      {
        name: 'Adapting to Change',
        details:
          'Not scared of change as I know it brings about new opportunities for growth',
      },
      {
        name: 'Earning Trust of Others',
        details:
          'Practicing active listening and treating people with respect at all times',
      },
    ],
    languages: [
      { code: 'English', level: 'Native' },
      { code: 'Spanish', level: 'Proficient' },
    ],
  },
  language = 'en',
}: CVTemplateProps) {
  const [fontSize, setFontSize] = useState<number>(16);
  const [fontFamily, setFontFamily] = useState<'sans' | 'serif' | 'mono'>('sans');
  const [color, setColor] = useState<string>('#1e3a8a');

  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const tAlign = dir === 'rtl' ? 'text-right' : 'text-left';

  return (
    <div
      className={`w-[210mm] min-h-[297mm] mx-auto p-10 bg-white font-${fontFamily}`}
      dir={dir}
      style={{ '--template-color': color, '--template-font-size': `${fontSize}px` } as React.CSSProperties}
    >
      
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

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: color }}>{data?.name}</h1>
          <h2 className="text-lg font-semibold" style={{ color: color }}>{data?.jobTitle}</h2>
          <div className="mt-2 space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-600" /> {data?.phone}
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-600" /> {data?.email}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-600" /> {data?.address}
            </div>
          </div>
        </div>
      </div>

      {/* SUMMARY */}
      {data?.summary && (
        <section className="mt-6">
          <h3 className="font-bold border-b border-black pb-1">SUMMARY</h3>
          <p className={`mt-2 ${tAlign}`}>{data.summary}</p>
        </section>
      )}

      {/* EXPERIENCE */}
      {data?.experience?.length > 0 && (
        <section className="mt-6 break-after-page">
          <h3 className="font-bold border-b border-black pb-1">EXPERIENCE</h3>
          <div className="mt-2 space-y-4">
            {data.experience.map((exp, idx) => (
              <div key={idx}>
                <p className="font-semibold">{exp.title}</p>
                <p style={{ color: color }} className="font-medium">{exp.company}</p>
                <p className="text-sm text-gray-600">{exp.date}</p>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  {exp.details?.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* EDUCATION */}
      {data?.education?.length > 0 && (
        <section className="mt-6">
          <h3 className="font-bold border-b border-black pb-1">EDUCATION</h3>
          <div className="mt-2 space-y-2">
            {data.education.map((edu, idx) => (
              <div key={idx}>
                <p className="font-semibold">{edu.degree}</p>
                <p style={{ color: color }} className="font-medium">{edu.school}</p>
                <p className="text-sm text-gray-600">{edu.year}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SKILLS */}
      {data?.skills?.length > 0 && (
        <section className="mt-6">
          <h3 className="font-bold border-b border-black pb-1">SKILLS</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.skills.map((skill, i) => (
              <span
                key={i}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm border border-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* ACHIEVEMENTS */}
      {data?.achievements?.length > 0 && (
        <section className="mt-6">
          <h3 className="font-bold border-b border-black pb-1">ACHIEVEMENTS</h3>
          <div className="mt-2 space-y-2">
            {data.achievements.map((ach, idx) => (
              <div key={idx}>
                <p className="font-semibold">{ach.name}</p>
                <p className="text-sm text-gray-700">{ach.details}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* STRENGTHS */}
      {data?.certifications?.length > 0 && (
        <section className="mt-6">
          <h3 className="font-bold border-b border-black pb-1">STRENGTHS</h3>
          <div className="mt-2 space-y-2">
            {data.certifications.map((s, idx) => (
              <div key={idx}>
                <p className="font-semibold">{s.name}</p>
                <p className="text-sm text-gray-700">{s.details}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* LANGUAGES */}
      {data?.languages?.length > 0 && (
        <section className="mt-6">
          <h3 className="font-bold border-b border-black pb-1">LANGUAGES</h3>
          <ul className="mt-2 space-y-1">
            {data.languages.map((lang, idx) => (
              <li key={idx} className="text-sm">
                {lang.code} — {lang.level}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}



