export type Language = 'en' | 'ar';

export interface Translations {
  en: PageTranslations;
  ar: PageTranslations;
}

interface PageTranslations {
  appName: string;
  header: {
    tabHome: string;
    // tabUploadCV: string;
    tabTranslateCV: string;
    tabAddLinkedIn: string;
    tabAddOldCV: string;
    tabGenerateDescription: string;
    tabJobSpecificResume: string;
    toggleLanguage: string;
    english: string;
    arabic: string;
  };
  rateCV: {
    heroTitle: string
    heroSubtitle: string,
    analyzeMyResume: string,
    howItWorks: string,
    step1Title: string,
    step1Description: string,
    step2Title: string,
    step2Description: string,
    step3Title: string,
    step3Description: string,
    benefits: string,
    benefitATSTitle: string,
    benefitATSDescription: string,
    benefitAITitle: string,
    benefitAIDescription: string,
    benefitLangTitle: string,
    benefitLangDescription: string,
    testimonials: string,
    testimonial1Name: string,
    testimonial1Quote: string,
    testimonial2Name: string,
    testimonial2Quote: string,
    faq: string,
    faq1Title: string,
    faq1Answer: string,
    faq2Answer: string,
    faq3Title: string,
    faq3Answer: string,
    finalCtaTitle: string,
    finalCtaSubtitle: string,
    getStartedNow: string,
    uploadCVTitle: string,
    uploadAreaTitle: string,
    analyzingResume: string,
    fileUploaded: string,
    dragDropPrompt: string,
    orClickToBrowse: string,
    supportedFormats: string,
    startNowFreeRating: string,
  };
  linkedinToCV: {
    heroTitle: string;
    heroSubtitle: string;
    heroButton: string;
    howItWorks: string;
    step1Title: string;
    step2Title: string;
    step3Title: string;
    whyUse: string;
    whyUse1: string;
    whyUse2: string;
    whyUse3: string;
    whyUse4: string;
    testimonial: string;
    testimonialAuthor: string;
    callToActionText: string;
    callToActionButton: string;
  };
  footer: {
    rights: string;
  };
  shared: {
    resumeAnalysisIllustrationAlt: string;
    personAvatarAlt: string;
    close: string;
    rephrasing: string;
    rephrasedContent: string;
    originalLabel: string;
    rephrasedLabel: string;
  };
}

export const translations: Translations = {
  en: {
    appName: "Seirah",
    header: {
      tabHome: "Home",
      tabRateCV: "Rate My CV",
      // tabUploadCV: "Upload CV",
      tabTranslateCV: "Translate CV",
      tabAddLinkedIn: "Add LinkedIn Info",
      tabAddOldCV: "Add Old CV",
      tabGenerateDescription: "Generate Description",
      tabJobSpecificResume: "Job-Specific Resume",
      toggleLanguage: "Language",
      english: "🇺🇸 English" ,
      arabic: "العربية 🇸🇦"
    },
    homepage: {
      heroTitle: "",
      heroSubtitle: "",
    },
    rateCV: {
      heroTitle: "Get an AI Resume Score Tailored for the Saudi Job Market",
      heroSubtitle: "Evaluate your resume instantly with Seirah’s AI. Get scores on content, format, tailoring, and more – optimized for success in Saudi Arabia.",
      analyzeMyResume: "Get My AI Resume Score",
      howItWorks: "How It Works",
      step1Title: "Upload Your CV",
      step1Description: "Paste your CV text or upload it in seconds – no signup required.",
      step2Title: "Get Instant Score",
      step2Description: "Seirah’s AI engine reviews your resume based on what Saudi employers look for.",
      step3Title: "Improve Instantly",
      step3Description: "Unlock practical tips and instant rephrasing to upgrade your resume in minutes.",
      benefits: "Why Job Seekers in Saudi Arabia Love Seirah",
      benefitATSTitle: "ATS Compatibility",
      benefitATSDescription: "Designed to pass Applicant Tracking Systems used by top companies in KSA.",
      benefitAITitle: "AI-Powered Suggestions",
      benefitAIDescription: "Boost your resume's performance with smart, personalized AI suggestions.",
      benefitLangTitle: "Dual-Language Support",
      benefitLangDescription: "Create Arabic and English resumes tailored for recruiters in Saudi Arabia.",
      testimonials: "Trusted by Job Seekers",
      testimonial1Name: "Ahmed K.",
      testimonial1Quote: "This tool gave me the insights I needed to finally get interview calls!",
      testimonial2Name: "Fatima S.",
      testimonial2Quote: "The AI rephrasing feature is a game-changer. My resume sounds so much more professional now.",
      faq: "Frequently Asked Questions",
      faq1Title: "What does 'Rate Your Resume' check?",
      faq1Answer: "Seirah analyzes your resume based on 5 pillars: job fit, content strength, design quality, section clarity, and professional tone – all aligned with Saudi hiring standards.",
      faq2Title: "Is the basic analysis free?",
      faq2Answer: "Yes! You get a full resume score and smart suggestions for free. Premium features like AI rewriting are optional.",
      faq3Title: "Can I improve my CV directly using this tool?",
      faq3Answer: "Yes! Improve your CV instantly using our built-in feedback and smart AI rewriting tools – no downloads or formatting headaches.",
      finalCtaTitle: "Your Future Job Starts with a Strong Resume",
      finalCtaSubtitle: "No more guessing. Use Seirah to upgrade your CV and get noticed by top employers in Saudi Arabia.",
      getStartedNow: "Analyze My Resume Now",
      uploadCVTitle: "Upload Your Resume – Get Free AI Feedback",
      uploadAreaTitle: "Drop or Upload Your CV Below",
      analyzingResume: "Analyzing your resume with AI... Please wait.",
      fileUploaded: "File uploaded successfully!",
      dragDropPrompt: "Drag and drop your resume here",
      orClickToBrowse: "or click to browse files",
      supportedFormats: "Supported formats: PDF or DOCX",
      startNowFreeRating: "Start Now – Free Resume Rating",
    },
    linkedinToCV: {
      heroTitle: "Convert LinkedIn Profile to CV in Seconds",
      heroSubtitle: "Upload your LinkedIn PDF or paste content – AI will auto-generate your CV.",
      heroButton: "Try it now",
      howItWorks: "How it works",
      step1Title: "Upload LinkedIn PDF or paste info",
      step2Title: "We generate a full CV",
      step3Title: "Choose a design and download",
      whyUse: "Why use this?",
      whyUse1: "Save Time",
      whyUse2: "No Typing Needed",
      whyUse3: "ATS-Ready",
      whyUse4: "Auto-optimized",
      testimonial: "I made my CV in less than a minute!",
      testimonialAuthor: "– Sarah",
      callToActionText: "Start now and simplify the process",
      callToActionButton: "Start Now"
    },
    footer: {
      rights: "© 2024 Seirah. All rights reserved."
    },
    shared: {
      resumeAnalysisIllustrationAlt: "Resume analysis illustration",
      personAvatarAlt: "Avatar image",
      close: "Close",
      rephrasing: "Rephrasing...",
      rephrasedContent: "Rephrased Content:",
      originalLabel: "Original:",
      rephrasedLabel: "Rephrased:"
    }
  },

  ar: {
    appName: "سيرة",
    header: {
      tabHome: "الرئيسية",
      tabRateCV: "قيم سيرتي الذاتية",
      // tabUploadCV: "رفع السيرة",
      tabTranslateCV: "ترجمة السيرة",
      tabAddLinkedIn: "إضافة لينكدإن",
      tabAddOldCV: "سيرتك القديمة",
      tabGenerateDescription: "إنشاء وصف",
      tabJobSpecificResume: "سيرة خاصة بالوظيفة",
      toggleLanguage: "اللغة",
      english: "انجليزي 🇺🇸",
      arabic: "🇸🇦 Arabic"
    },
    rateCV: {
      heroTitle: "قيّم سيرتك الذاتية بالذكاء الاصطناعي لسوق العمل السعودي",
      heroSubtitle: "احصل على تقييم فوري في التخصيص، المحتوى، التنسيق، الأقسام، والأسلوب – لتقترب أكثر من وظيفتك المثالية!",
      analyzeMyResume: "حلل سيرتي الذاتية",
      howItWorks: "كيف يعمل",
      step1Title: "حمّل سيرتك الذاتية",
      step1Description: "قدّم سيرتك النصية بسهولة لتحليلها.",
      step2Title: "احصل على التقييم فورًا",
      step2Description: "يقوم الذكاء الاصطناعي بتحليل السيرة الذاتية بناءً على ركائز التوظيف الأساسية.",
      step3Title: "حسّن سيرتك مباشرة",
      step3Description: "احصل على اقتراحات قابلة للتنفيذ مع ميزة إعادة الصياغة المدعومة بالذكاء الاصطناعي.",
      benefits: "لماذا يثق الباحثون عن عمل في سيرة",
      benefitATSTitle: "متوافقة مع أنظمة ATS",
      benefitATSDescription: "تأكّد أن سيرتك تمر بأنظمة تتبع المتقدمين بسهولة.",
      benefitAITitle: "اقتراحات ذكية بالذكاء الاصطناعي",
      benefitAIDescription: "احصل على توصيات تعزز تأثير سيرتك الذاتية.",
      benefitLangTitle: "دعم ثنائي اللغة",
      benefitLangDescription: "مثالية للسير الذاتية باللغة العربية والإنجليزية الموجهة لسوق العمل السعودي.",
      testimonials: "موثوق من قبل الباحثين عن عمل",
      testimonial1Name: "أحمد ك.",
      testimonial1Quote: "الأداة منحتني رؤى ساعدتني على تلقي دعوات للمقابلات أخيرًا!",
      testimonial2Name: "فاطمة س.",
      testimonial2Quote: "ميزة إعادة الصياغة غيرت قواعد اللعبة، أصبحت سيرتي أكثر احترافية!",
      faq: "الأسئلة الشائعة",
      faq1Title: "ما الذي يتم تقييمه في \"قيّم سيرتك الذاتية\"؟",
      faq1Answer: "يقيم الذكاء الاصطناعي سيرتك بناءً على 5 محاور رئيسية: التخصيص، جودة المحتوى، التنسيق، اكتمال الأقسام، والأسلوب العام – مع مراعاة متطلبات سوق العمل السعودي.",
      faq2Title: "هل التحليل الأساسي مجاني؟",
      faq2Answer: "نعم، التحليل الأساسي مجاني ويقدّم التقييم العام واقتراحات مبدئية. الميزات المتقدمة مثل إعادة الصياغة قد تكون ضمن الاشتراك المميز.",
      faq3Title: "هل يمكنني تحسين سيرتي من خلال الأداة مباشرة؟",
      faq3Answer: "بالتأكيد! الأداة تعطيك ملاحظات فورية مع خيارات إعادة صياغة آلية تساعدك في تحسين الأجزاء الضعيفة مباشرة.",
      finalCtaTitle: "جاهز لرفع مستوى سيرتك؟",
      finalCtaSubtitle: "توقف عن التخمين وابدأ بالتحسين! احصل على تحليل مجاني بالذكاء الاصطناعي الآن واتخذ الخطوة القادمة في مسارك المهني.",
      getStartedNow: "ابدأ الآن",
      uploadCVTitle: "ارفع سيرتك الذاتية – احصل على تحليل مجاني بالذكاء الاصطناعي",
      uploadAreaTitle: "قم بإسقاط أو رفع سيرتك الذاتية هنا",
      analyzingResume: "جارٍ تحليل سيرتك الذاتية بالذكاء الاصطناعي... الرجاء الانتظار.",
      fileUploaded: "تم رفع الملف بنجاح!",
      dragDropPrompt: "اسحب وأسقط سيرتك الذاتية هنا",
      orClickToBrowse: "أو اضغط لتصفح الملفات",
      supportedFormats: "الصيغ المدعومة: PDF أو DOCX",
      startNowFreeRating: "ابدأ الآن – تقييم مجاني لسيرتك الذاتية",
    },
    linkedinToCV: {
      heroTitle: "حوّل لينكدإن إلى سيرة ذاتية خلال ثوانٍ",
      heroSubtitle: "ارفع ملف PDF أو الصق المحتوى وسيقوم الذكاء الاصطناعي بالباقي.",
      heroButton: "جرب الآن",
      howItWorks: "كيف يعمل",
      step1Title: "ارفع ملف لينكدإن",
      step2Title: "نحوّل الملف إلى سيرة كاملة",
      step3Title: "اختر التصميم وحمّل الملف",
      whyUse: "لماذا تستخدم الميزة؟",
      whyUse1: "توفير الوقت",
      whyUse2: "بدون كتابة",
      whyUse3: "متوافقة مع ATS",
      whyUse4: "تحسين تلقائي",
      testimonial: "أنشأت سيرتي في أقل من دقيقة!",
      testimonialAuthor: "– سارة",
      callToActionText: "ابدأ الآن وسهّل المهمة",
      callToActionButton: "ابدأ الآن"
    },
    footer: {
      rights: "© 2024 سيرة. جميع الحقوق محفوظة."
    },
    shared: {
      resumeAnalysisIllustrationAlt: "رسم توضيحي لتحليل السيرة",
      personAvatarAlt: "صورة رمزية",
      close: "إغلاق",
      rephrasing: "جارٍ إعادة الصياغة...",
      rephrasedContent: "النص المعاد:",
      originalLabel: "النص الأصلي:",
      rephrasedLabel: "النص المعاد:"
    }
  }
};