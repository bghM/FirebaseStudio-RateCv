
export type Language = 'en' | 'ar';

export interface Translations {
  en: {
    [key: string]: string;
    appName: string;
    heroTitle: string;
    heroSubtitle: string;
    analyzeMyResume: string;
    howItWorks: string;
    step1Title: string;
    step1Description: string;
    step2Title: string;
    step2Description: string;
    step3Title: string;
    step3Description: string;
    benefits: string;
    benefitATSTitle: string;
    benefitATSDescription: string;
    benefitAITitle: string;
    benefitAIDescription: string;
    benefitLangTitle: string;
    benefitLangDescription: string;
    testimonials: string;
    testimonial1Name: string;
    testimonial1Quote: string;
    testimonial2Name: string;
    testimonial2Quote: string;
    faq: string;
    faq1Title: string;
    faq1Answer: string;
    faq2Title: string;
    faq2Answer: string;
    faq3Title: string;
    faq3Answer: string;
    finalCtaTitle: string;
    finalCtaSubtitle: string;
    getStartedNow: string;
    footerRights: string;
    uploadYourResume: string;
    pasteResumeText: string;
    analyzing: string;
    analysisFailed: string;
    resumeScore: string;
    overallScore: string;
    tailoringScore: string;
    contentScore: string;
    formatScore: string;
    sectionsScore: string;
    styleScore: string;
    suggestions: string;
    rephraseContent: string;
    rephrasing: string;
    rephrasedContent: string;
    close: string;
    enterResumeText: string;
    errorMinLength: string;
    languageToggle: string;
    english: string;
    arabic: string;
  };
  ar: {
    [key: string]: string;
    appName: string;
    heroTitle: string;
    heroSubtitle: string;
    analyzeMyResume: string;
    howItWorks: string;
    step1Title: string;
    step1Description: string;
    step2Title: string;
    step2Description: string;
    step3Title: string;
    step3Description: string;
    benefits: string;
    benefitATSTitle: string;
    benefitATSDescription: string;
    benefitAITitle: string;
    benefitAIDescription: string;
    benefitLangTitle: string;
    benefitLangDescription: string;
    testimonials: string;
    testimonial1Name: string;
    testimonial1Quote: string;
    testimonial2Name: string;
    testimonial2Quote: string;
    faq: string;
    faq1Title: string;
    faq1Answer: string;
    faq2Title: string;
    faq2Answer: string;
    faq3Title: string;
    faq3Answer: string;
    finalCtaTitle: string;
    finalCtaSubtitle: string;
    getStartedNow: string;
    footerRights: string;
    uploadYourResume: string;
    pasteResumeText: string;
    analyzing: string;
    analysisFailed: string;
    resumeScore: string;
    overallScore: string;
    tailoringScore: string;
    contentScore: string;
    formatScore: string;
    sectionsScore: string;
    styleScore: string;
    suggestions: string;
    rephraseContent: string;
    rephrasing: string;
    rephrasedContent: string;
    close: string;
    enterResumeText: string;
    errorMinLength: string;
    languageToggle: string;
    english: string;
    arabic: string;
  };
}

export const translations: Translations = {
  en: {
    appName: "ResumeAI Rate",
    heroTitle: "Rate Your Resume with AI for the Saudi Market",
    heroSubtitle: "Get instant scores on Tailoring, Content, Format, Sections, & Style. Land your dream job faster!",
    analyzeMyResume: "Analyze My Resume",
    howItWorks: "How It Works",
    step1Title: "Upload Your CV",
    step1Description: "Easily submit your resume in text format.",
    step2Title: "Get Instant Score",
    step2Description: "Our AI analyzes your resume against key hiring pillars.",
    step3Title: "Improve Instantly",
    step3Description: "Receive actionable suggestions and AI rephrasing options.",
    benefits: "Unlock Your Resume's Potential",
    benefitATSTitle: "ATS Compatibility",
    benefitATSDescription: "Ensure your resume passes through Applicant Tracking Systems.",
    benefitAITitle: "AI-Powered Suggestions",
    benefitAIDescription: "Get smart recommendations to enhance your resume's impact.",
    benefitLangTitle: "Dual-Language Support",
    benefitLangDescription: "Perfect for both Arabic and English resumes targeting the Saudi market.",
    testimonials: "Trusted by Job Seekers",
    testimonial1Name: "Ahmed K.",
    testimonial1Quote: "This tool gave me the insights I needed to finally get interview calls!",
    testimonial2Name: "Fatima S.",
    testimonial2Quote: "The AI rephrasing feature is a game-changer. My resume sounds so much more professional now.",
    faq: "Frequently Asked Questions",
    faq1Title: "What does 'Rate Your Resume' check?",
    faq1Answer: "Our AI evaluates your resume based on 5 key pillars: Tailoring to job descriptions, Content quality, Formatting, completeness of Sections, and overall Writing Style. It's designed with the Saudi job market in mind.",
    faq2Title: "Is the basic analysis free?",
    faq2Answer: "Yes, the basic resume analysis providing an overall score and general suggestions is completely free. Advanced features like AI rephrasing may be part of premium offerings.",
    faq3Title: "Can I improve my CV directly using this tool?",
    faq3Answer: "Absolutely! The tool provides instant feedback and suggestions. Plus, with our AI rephrasing feature, you can improve weak sections of your resume on the spot.",
    finalCtaTitle: "Ready to Elevate Your Resume?",
    finalCtaSubtitle: "Stop guessing and start improving. Get your free AI resume analysis today and take the next step in your career.",
    getStartedNow: "Get Started Now",
    footerRights: "© 2024 ResumeAI Rate. All rights reserved.",
    uploadYourResume: "Analyze Your Resume",
    pasteResumeText: "Paste your resume text here...",
    analyzing: "Analyzing...",
    analysisFailed: "Analysis failed. Please try again.",
    resumeScore: "Resume Score",
    overallScore: "Overall Score",
    tailoringScore: "Tailoring",
    contentScore: "Content",
    formatScore: "Format",
    sectionsScore: "Sections",
    styleScore: "Style",
    suggestions: "Suggestions",
    rephraseContent: "Rephrase with AI",
    rephrasing: "Rephrasing...",
    rephrasedContent: "Rephrased Content:",
    close: "Close",
    enterResumeText: "Please enter your resume text.",
    errorMinLength: "Resume text must be at least 50 characters.",
    languageToggle: "Language",
    english: "English",
    arabic: "عربي",
  },
  ar: {
    appName: "تقييم السيرة الذاتية بالذكاء الاصطناعي",
    heroTitle: "قيّم سيرتك الذاتية بالذكاء الاصطناعي للسوق السعودي",
    heroSubtitle: "احصل على تقييم فوري للتخصيص، المحتوى، التنسيق، الأقسام، والأسلوب. احصل على وظيفة أحلامك بشكل أسرع!",
    analyzeMyResume: "حلل سيرتي الذاتية",
    howItWorks: "كيف يعمل",
    step1Title: "ارفع سيرتك الذاتية",
    step1Description: "قم بإرسال سيرتك الذاتية كنص بسهولة.",
    step2Title: "احصل على تقييم فوري",
    step2Description: "يقوم الذكاء الاصطناعي لدينا بتحليل سيرتك الذاتية بناءً على ركائز التوظيف الأساسية.",
    step3Title: "حسّن فورًا",
    step3Description: "احصل على اقتراحات عملية وخيارات إعادة صياغة بالذكاء الاصطناعي.",
    benefits: "أطلق العنان لإمكانيات سيرتك الذاتية",
    benefitATSTitle: "توافق مع أنظمة تتبع المتقدمين (ATS)",
    benefitATSDescription: "تأكد من أن سيرتك الذاتية تجتاز أنظمة تتبع المتقدمين.",
    benefitAITitle: "اقتراحات مدعومة بالذكاء الاصطناعي",
    benefitAIDescription: "احصل على توصيات ذكية لتعزيز تأثير سيرتك الذاتية.",
    benefitLangTitle: "دعم ثنائي اللغة",
    benefitLangDescription: "مثالي للسير الذاتية باللغتين العربية والإنجليزية التي تستهدف السوق السعودي.",
    testimonials: "يثق بنا الباحثون عن عمل",
    testimonial1Name: "أحمد ك.",
    testimonial1Quote: "هذه الأداة أعطتني الأفكار التي احتجتها للحصول أخيرًا على مكالمات المقابلات!",
    testimonial2Name: "فاطمة س.",
    testimonial2Quote: "ميزة إعادة الصياغة بالذكاء الاصطناعي مذهلة. سيرتي الذاتية تبدو الآن أكثر احترافية.",
    faq: "أسئلة مكررة",
    faq1Title: "ما الذي تتحقق منه أداة 'قيّم سيرتك الذاتية'؟",
    faq1Answer: "يقوم الذكاء الاصطناعي لدينا بتقييم سيرتك الذاتية بناءً على 5 ركائز أساسية: التخصيص للوصف الوظيفي، جودة المحتوى، التنسيق، اكتمال الأقسام، وأسلوب الكتابة العام. تم تصميمه مع مراعاة سوق العمل السعودي.",
    faq2Title: "هل التحليل الأساسي مجاني؟",
    faq2Answer: "نعم، التحليل الأساسي للسيرة الذاتية الذي يوفر درجة عامة واقتراحات عامة مجاني تمامًا. الميزات المتقدمة مثل إعادة الصياغة بالذكاء الاصطناعي قد تكون جزءًا من العروض المميزة.",
    faq3Title: "هل يمكنني تحسين سيرتي الذاتية مباشرة باستخدام هذه الأداة؟",
    faq3Answer: "بالتأكيد! توفر الأداة ملاحظات واقتراحات فورية. بالإضافة إلى ذلك، مع ميزة إعادة الصياغة بالذكاء الاصطناعي، يمكنك تحسين الأقسام الضعيفة في سيرتك الذاتية على الفور.",
    finalCtaTitle: "هل أنت مستعد للارتقاء بسيرتك الذاتية؟",
    finalCtaSubtitle: "توقف عن التخمين وابدأ في التحسين. احصل على تحليل مجاني لسيرتك الذاتية بالذكاء الاصطناعي اليوم واتخذ الخطوة التالية في حياتك المهنية.",
    getStartedNow: "ابدأ الآن",
    footerRights: "© 2024 تقييم السيرة الذاتية بالذكاء الاصطناعي. جميع الحقوق محفوظة.",
    uploadYourResume: "حلل سيرتك الذاتية",
    pasteResumeText: "الصق نص سيرتك الذاتية هنا...",
    analyzing: "جاري التحليل...",
    analysisFailed: "فشل التحليل. يرجى المحاولة مرة أخرى.",
    resumeScore: "تقييم السيرة الذاتية",
    overallScore: "التقييم العام",
    tailoringScore: "التخصيص",
    contentScore: "المحتوى",
    formatScore: "التنسيق",
    sectionsScore: "الأقسام",
    styleScore: "الأسلوب",
    suggestions: "الاقتراحات",
    rephraseContent: "إعادة صياغة بالذكاء الاصطناعي",
    rephrasing: "جاري إعادة الصياغة...",
    rephrasedContent: "المحتوى المعاد صياغته:",
    close: "إغلاق",
    enterResumeText: "الرجاء إدخال نص سيرتك الذاتية.",
    errorMinLength: "يجب أن يتكون نص السيرة الذاتية من 50 حرفًا على الأقل.",
    languageToggle: "اللغة",
    english: "English",
    arabic: "عربي",
  },
};
