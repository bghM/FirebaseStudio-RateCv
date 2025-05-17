import Image from 'next/image';
import Link from "next/link";
// import ChecklistGrid from '@/components/ui/Emails/ChecklistGrid';
// import EmailTestimonialSection from '@/components/ui/Emails/EmailTestimonialSection';
// import EmailPrimaryButton from '@/components/ui/Emails/EmailPrimaryButton';
// import EmailSecondaryButton from '@/components/ui/Emails/EmailSecondaryButton';
// import EmailImageCard from '@/components/ui/Emails/EmailImageCard';
// import EmailOrderDetailsCard from '@/components/ui/Emails/EmailOrderDetailsCard';
// import EmailTemplatePaymentDetails from '@/components/ui/Emails/EmailTemplatePaymentDetails';
// import EmailLineDivider from '@/components/ui/Emails/EmailLineDivider';
// import EmailPaymentCardDetails from '@/components/ui/Emails/EmailPaymentCardDetails';
// import EmailAppStoreCTA_Horizontal from '@/components/ui/Emails/EmailAppStoreCTA_Horizontal';
// import EmailAppStoreCTA_Vertical from '@/components/ui/Emails/EmailAppStoreCTA_Vertical';
// import EmailFooter_Centered from '@/components/ui/Emails/EmailFooter_Centered';
// import EmailFooter_Horizontal from '@/components/ui/Emails/EmailFooter_Horizontal';
// import EmailTopHeaderBar from '@/components/ui/Emails/EmailTopHeaderBar';
// import EmailLogo_Name from '@/components/ui/Emails/EmailLogo_Name';
// import EmailMainTitle from '@/components/ui/Emails/EmailMainTitle';
// import EmailSecondaryTitle from '@/components/ui/Emails/EmailSecondaryTitle';
// import UserInfoCard from '@/components/ui/Emails/UserInfoCard';


import EmailWelcomeBody from '@/components/ui/NewEmails/EmailWelcomeBody';
import EmailConfirmationBody from '@/components/ui/NewEmails/EmailConfirmationBody';
import EmailLogo_Name from '@/components/ui/NewEmails/EmailLogo_Name';
import EmailOtpBody from '@/components/ui/NewEmails/EmailOtpBody';
import EmailHeadName_Logo from '@/components/ui/NewEmails/EmailHeadName_Logo';
import EmailFooter_Centered from '@/components/ui/NewEmails/EmailFooter_Centered';
import EmailResetPasswordBody from '@/components/ui/NewEmails/EmailResetPasswordBody';
import EmailSupportTicketBody from '@/components/ui/NewEmails/EmailSupportTicketBody';
import EmailTicketReplyNotificationBody from '@/components/ui/NewEmails/EmailTicketReplyNotificationBody';
import EmailPurchaseSummaryBody from '@/components/ui/NewEmails/EmailPurchaseSummaryBody';

// ---------------------------------------------
// --------- New Email Designs -----------------
// ---------------------------------------------

// --------- التسجيل الجديد -----------------
// export default function WelcomeNewUserEmail() {
//   return (
//     <div
//       dir="rtl"
//       className="bg-[#F4F4F4] text-gray-900 font-sans text-center"
//     >
//       {/* Top banner */}
//       <EmailHeadName_Logo />

//       {/* Email body */}
//       <EmailWelcomeBody name="عبدالرحمن" ctaLink="https://seirah.com/create" />

//       {/* Footer */}
//       <EmailFooter_Centered />

//     </div>
//   );
// }


// --------- التوثيق للإيميل -----------------
// export default function ConfirmAccountEmail() {
//   return (
//     <div
//       dir="rtl"
//       className="bg-[#F4F4F4] text-gray-900 font-sans text-center min-h-screen"
//     >
//       {/* Header */}
//         <EmailHeadName_Logo />

//       {/* Body */}
//       <main>
//         <EmailConfirmationBody
//           name="عبدالرحمن"
//           confirmationUrl="https://oktob.io/verifyuser/khaled9478?93812kh9023888530-249/klsfj902100214192489785535gdg"
//         />
//       </main>

//       {/* Footer */}
//       <EmailFooter_Centered />
//     </div>
//   );
// }

// export default function ConfirmOtpEmail() {
//   return (
//     <div
//       dir="rtl"
//       className="bg-[#F4F4F4] text-gray-900 font-sans text-center min-h-screen"
//     >
//       {/* Header */}
//       <EmailHeadName_Logo />

//       {/* Body */}
//       <main>
//         <EmailOtpBody
//           name="عبدالرحمن"
//           otp="678400"
//           confirmationUrl="https://oktob.io/verifyuser/khaled9478?93812kh9023888530-249/klsfj902100214192489785535gdg"
//         />
//       </main>

//       {/* Footer */}
//       <EmailFooter_Centered />
//     </div>
//   );
// }


// --------- إعادة كلمة المرور ---------------
// export default function ResetPasswordEmail() {
//   return (
//     <div
//       dir="rtl"
//       className="bg-[#F4F4F4] text-gray-900 font-sans text-center"
//     >
//       {/* Header */}
//       <EmailHeadName_Logo />

//       {/* Body */}
//       <EmailResetPasswordBody
//         name="عبدالرحمن"
//         resetUrl="https://oktob.io/verifyuser/khaled9478?93812kh9023888530-249/klsfj902100214192489785535gdg"
//       />

//       {/* Footer */}
//       <EmailFooter_Centered />
//     </div>
//   );
// }


// --------- تذكرة جديدة ---------------------
// export default function SupportTicketEmail() {
//   return (
//     <div
//       dir="rtl"
//       className="bg-[#F4F4F4] text-gray-900 font-sans text-center"
//     >
//       {/* Header */}
//       <EmailHeadName_Logo />

//       {/* Body */}
//       <EmailSupportTicketBody
//         name="عبدالرحمن"
//         ticketNumber="4525352"
//         ticketType="استفسار"
//         ticketDate="22/05/2025"
//         ticketStatus="مفتوحة"
//         message="مرحباً، حاولت استخدام القالب ولكن القالب صعب الاستخدام والتطبيق ولا استطيع أن اكتب عنواني"
//       />

//       {/* Footer */}
//       <EmailFooter_Centered />
//     </div>
//   );
// }


export default function TicketReplyNotificationEmail() {
  return (
    <div dir="rtl" className="bg-[#F4F4F4] text-gray-900 font-sans text-center">
      {/* Header */}
      <EmailHeadName_Logo />



{/* --------- تذكرة جديدة --------------------- */}
      {/* <EmailSupportTicketBody
        name="عبدالرحمن"
        ticketNumber="4525352"
        ticketType="استفسار"
        ticketDate="22/05/2025"
        ticketStatus="مفتوحة"
        message="مرحباً، حاولت استخدام القالب ولكن القالب صعب الاستخدام والتطبيق ولا استطيع أن اكتب عنواني"
      /> */}


 {/* --------- تم الرد/الاغلاق --------------------- */}
      {/* <EmailTicketReplyNotificationBody
        name="عبدالرحمن"
        ticketNumber="4525352"
        ticketType="استفسار"
        lastUpdated="23/05/2025"
        ticketStatus="مفتوحة"
        ticketStatusColor="green"
        ticketUrl="https://seirah.com/support/tickets/4525352"
        headingText="مرحباً"
        introText="حابين نعلمك إننا أغلقنا تذكرتك، نأمل إن مشكلتك انحلت وكل الأمور تمام."
        buttonIntro="تابع تذكرتك السابقة أو افتح تذكرة جديدة من هنا:"
        buttonText="عرض التذكرة"
        finalNote="إذا احتجت أي مساعدة إضافية أو رجعت لك نفس المشكلة، لا تتردد تفتح تذكرة جديدة في أي وقت."
      /> */}

 {/* --------- تأكيد شراء قالب/اشتراك--------------------- */}
      {/* <EmailPurchaseSummaryBody
        name="عبدالرحمن"
        orderNumber="3230"
        orderStatus="مؤكد"
        orderDate="22/05/2025"
        product={{
          name: 'اشتراك باقة برايم السنوية',
          price: '230 ر.س',
          thumbnail: '/emails/template_thumbnail.png', // optional if you ever want to override default
        }}
        discountAmount="0 ر.س"
        totalAmount="230 ر.س"
        cardDetails="9420"
        cardBrand="mastercard"
        isSubscription={false}
      /> */}




      {/* Footer */}
      <EmailFooter_Centered />
    </div>
  );
}










// ---------------------------------------------
// --------- Old Email Designs -----------------
// ---------------------------------------------


// export default function SampleMail() {
//   return (
//     <div dir="rtl" className="bg-white text-gray-900 font-sans px-4 md:px-8 py-8 max-w-2xl mx-auto text-right">
      

//       {/* Header */}
//       <div className="flex justify-start items-center mb-6">
//         <Link href="https://seirah.com" target="_blank" rel="noopener noreferrer">
//             <Image
//             src="/emails/email-logo.png"
//             alt="seirah email logo"
//             width={100}
//             height={10}
//             className="bg-transparent"
//             loading="lazy"
//             />
//         </Link>
//       </div>

//       {/* Devider Section */}
//       <EmailTopHeaderBar />


//       {/* Main Title Section */}
//      <EmailMainTitle>مثال العنوان الرئيسي </EmailMainTitle>


//         {/* Secondary Title Section */}  
//      <EmailSecondaryTitle>مثال العنوان الفرعي  </EmailSecondaryTitle>


//         {/* Body Section */}
//         <div className="w-full px-4 py-2 text-right font-light text-gray-500"
//         style={{
//             fontFamily: 'Inter, sans-serif',
//             fontSize: 16,
//             lineHeight: '150%',
//             color: '#757575',
//           }}
//           >
//             <h4>لللوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.</h4>
//         </div>


//         {/* OTP Code */}
//         <div className="bg-white px-4 py-2 flex flex-col items-center justify-center rounded-b-md mb-6 mx-[32px]">
//             {/* OTP Boxes */}
//             <div className="flex justify-center gap-[8px] mb-[32px]">
//                 {[3, 8, 0, 0].map((num, i) => (
//                 <span
//                     key={i}
//                     className="w-[59px] h-[72px] text-lg font-bold flex items-center justify-center rounded-md"
//                     style={{
//                     backgroundColor: '#F3F7FF',
//                     border: '0.7px solid #1A56DB',
//                     }}
//                 >
//                     {num}
//                 </span>
//                 ))}
//             </div>

//             {/* Main Button */}
//             <EmailPrimaryButton>مثال الزر الرئيسي</EmailPrimaryButton>


//             {/* Info Text with Link */}
//             <div className="w-full px-4 text-right text-gray-500"
//             style={{
//             fontFamily: 'Inter, sans-serif',
//             fontSize: 16,
//             lineHeight: '150%',
//             color: '#757575',
//             }}
//             >
//             <h4>
//             خمسة نصوص قصيرة لنص مثالي يتم استخدامه في البريد الإلكتروني ومجالات النصوص التسويقية.
//             </h4>
//             </div>

//         </div>


//         {/* LineDivider Code */}
//         <EmailLineDivider />


//         {/* Text with Link */}
//         <div className="flex items-center font-light gap-2">
//         <h2
//             style={{
//             fontFamily: 'Inter, sans-serif',
//             fontWeight: 500,
//             fontSize: '16px',
//             lineHeight: '150%',
//             color: '#384860',
//             paddingInline: '0.2px',
//             }}
//         >
//             مثال
//         </h2>
//         <a
//             href="#"
//             style={{
//             fontFamily: 'Inter, sans-serif',
//             fontWeight: 700,
//             fontSize: '16px',
//             lineHeight: '150%',
//             color: '#1A56DB',
//             paddingInline: '0.2px',
//             }}
//         >
//             للنص المرفق برابط
//         </a>
//         </div>


//       {/* Checklist Section */}
//       <ChecklistGrid />


//       {/* Testimonial */}
//       <EmailTestimonialSection />


//       {/* LineDivider Code */}
//       <EmailLineDivider />


//       {/* Buttons */}
//       <div className="flex justify-center items-center gap-4 w-full">
//         <EmailSecondaryButton>الزر الثانوي</EmailSecondaryButton>
//         <EmailPrimaryButton>الزر الرئيسي</EmailPrimaryButton>
//       </div>


//       {/* LineDivider Code */}
//       <EmailLineDivider />


//       {/* Comment to images */}
//       <EmailImageCard   
//         src="/emails/placeholrder-dark.jpg"
//         alt="صورة"
//         title="مثال على تعليق على الصورة"
//       />


//       {/* LineDivider Code */}
//       <EmailLineDivider />


//       {/* Order Info */}
//       <EmailOrderDetailsCard />
  

//       {/* LineDivider Code */}
//       <EmailLineDivider />


//       {/* Payment Info */}
//       <EmailTemplatePaymentDetails />


//       {/* LineDivider Code */}
//       <EmailLineDivider />


//       <EmailPaymentCardDetails />


//       {/* LineDivider Code */}
//       <EmailLineDivider />
      

//       {/* App Store Buttons */}
//       <EmailAppStoreCTA_Horizontal />

//       {/* LineDivider Code */}
//       <EmailLineDivider />

//       <EmailAppStoreCTA_Vertical />


//       {/* Footer */}
//       <EmailFooter_Centered />
//       <EmailFooter_Horizontal />

//     </div>
//   );
// }






// export default function OtpEmailTemplate() {
//   return (
//     <div className="bg-white p-4">
//       <div dir="rtl" 
//       className="bg-[#FBFAFC] text-gray-900 font-sans px-4 md:px-8 py-8 max-w-2xl mx-auto text-right">     
        
        
//         {/* Top Logo */}
//         <div className="mb-8 flex justify-start">
//           <EmailLogo_Name />
//         </div>

//         {/* Gradient Header */}
//         <EmailTopHeaderBar />

//         {/* Email Content Block */}
//         <div className="bg-white p-6 mt-[-10px] space-y-4 text-right">
//           {/* Title */}
//           <h1 className="font-bold text-xl text-[#1F1F1F]">
//             كلمة المرور المؤقتة الخاصة بك (OTP) لسيرة
//           </h1>

//           {/* Intro Text */}
//           <p>مرحبًا [اسم العميل]،</p>
//           <p>
//             شكرًا لك على التسجيل في سيرة! نحن متحمسون لوجودك معنا.
//           </p>
//           <p>
//             لإتمام عملية التسجيل وضمان أمان حسابك، يُرجى إدخال كلمة المرور المؤقتة (OTP) الموجودة أدناه:
//           </p>
//         </div>


          
//           {/* OTP Code */}
//         <div className="bg-white p-6 mt-[-10px] space-y-4 text-center">

//         <div className="text-2xl font-bold tracking-[4px]">2390</div>

//           {/* Copy Button */}
//           <EmailPrimaryButton className="mx-auto w-fit px-6">انسخ كلمة المرور</EmailPrimaryButton>

//         </div>

//           {/* Validity Notice */}
//         <div className="bg-white rounded-b-xl p-6 mt-[-10px] space-y-4 text-right">

//           <p>كلمة المرور المؤقتة هذه صالحة لمدة <strong>60</strong> دقيقة.</p>

//           {/* Signoff */}
//           <p className="mt-2">مع تحيات،<br />فريق سيرة</p>
//         </div>

//         {/* Footer */}
//         <EmailFooter_Horizontal />
//       </div>
//     </div>
//   )
// }


// export default function EmailNewTemplateNotification() {
//   return (
//     <div
//       dir="rtl"
//       className="bg-[#FBFAFC] text-gray-900 font-sans px-4 md:px-8 py-8 max-w-2xl mx-auto text-right rounded-b-xl"
//     >
//       {/* Header */}
//       <div className="mb-6 flex justify-start">
//         <EmailLogo_Name />
//       </div>

//       <EmailTopHeaderBar />

//       {/* Card preview image */}
//       <div className="bg-white p-6 pt-8 rounded-b-xl">
//       <img
//         src="/emails/new-template-preview.png"
//         alt="معاينة السيرة الذاتية الجديدة"
//         className="w-full h-[220px] object-cover rounded-xl mb-6"
//         style={{
//           transform: 'rotate(+4.35deg)',
//         }}
//       />

//         {/* Title */}
//         <EmailMainTitle>  قوالب سيرة ذاتية جديدة خصيصًا لك! </EmailMainTitle>


//         {/* Intro */}
//         <p className="mb-2">مرحبًا [اسم العميل]،</p>
//         <p className="mb-2">
//           نحن متحمسون لمشاركتك قوالب السيرة الذاتية التي أعدت حديثًا!
//         </p>
//         <p className="mb-4">
//           سواء كنت تطمح إلى التميز في سوق العمل المتنافس أو ترغب فقط في تجديد سيرتك الذاتية، نعتقد أن تصاميمنا الجديدة ستكون الخيار المثالي لك.
//         </p>

//         {/* Divider */}
//         <EmailLineDivider />

//         {/* Section: What’s New */}
//         <h2 className="text-lg font-bold mb-4">✨ ما الجديد؟</h2>
//         <div className="space-y-3 mb-6">
//           {[
//             'تصميمات عصرية وأنيقة',
//             'قراءة أسهل وأوضح',
//             'متوافقة مع مختلف الصناعات',
//           ].map((text, i) => (
//             <div
//               key={i}
//               className="flex items-center gap-2 border border-[#1A56DB] bg-[#F3F7FF] text-[#1F1F1F] py-[14px] px-[21px] rounded-md text-sm"
//             >
//               <span className="text-green-600">✅</span>
//               <span>{text}</span>
//             </div>
//           ))}
//         </div>

//         {/* Highlight Text */}
//         <p className="text-sm mb-6">لا تفوت فرصة إبداء انطباع دائم.</p>

//         {/* CTA Button */}
//         <div className="text-center">
//           <EmailPrimaryButton className="w-fit px-6">
//             استكشف القوالب الجديدة الآن!
//           </EmailPrimaryButton>
//         </div>

//         {/* Sign off */}
//         <p className="mt-6 text-sm">مع تحيات،<br />فريق سيرة</p>
//       </div>

//       {/* Footer */}
//       <EmailFooter_Horizontal />
//     </div>
//   );
// }


// export default function EmailLimitedOffer() {
//   return (
//     <div
//       dir="rtl"
//       className="bg-[#FBFAFC] text-gray-900 font-sans px-4 md:px-8 py-8 max-w-2xl mx-auto text-right rounded-b-xl"
//     >
//       {/* Header */}
//       <div className="mb-6 flex justify-start">
//         <EmailLogo_Name />
//       </div>
//       <EmailTopHeaderBar />

//       {/* Content */}
//       <div className="bg-white rounded-b-xl p-6 space-y-4">
//         {/* Main Title */}
//         <EmailMainTitle>
//           عرض محدود: اكتشف قوالب السيرة الذاتية! 🚀
//         </EmailMainTitle>

//         {/* Subtitle */}
//         <EmailSecondaryTitle> أخبار مثيرة! 15٪ خصم حصري على جميع القوالب </EmailSecondaryTitle>


//         {/* Message */}
//         <p>مرحبًا [اسم العميل]،</p>
//         <p>
//           لفترة محدودة، استمتع بخصم حصري قدره 15٪ على قوالبنا الجديدة. لا تفوت هذه الفرصة لتجديد سيرتك الذاتية بتصميم حديث ومؤثر! 💼
//         </p>

//         {/* CTA Button */}
//         <div className="text-center mt-6">
//           <EmailPrimaryButton className="w-fit px-6">
//             استكشف العرض الآن!
//           </EmailPrimaryButton>
//         </div>

//         {/* Warning Text */}
//         <p className="text-sm mt-4">لا تفوت الفرصة؛ هذا العرض متاح لفترة محدودة فقط.</p>

//         {/* Sign-off */}
//         <p className="text-sm mt-2">مع تحيات،<br />فريق سيرة</p>
//       </div>

//       {/* Footer */}
//       <EmailFooter_Horizontal />
//     </div>
//   );
// }


// export default function AnnualOfferEmail() {
//   return (
//     <div
//       dir="rtl"
//       className="bg-[#FBFAFC] text-gray-900 font-sans px-4 md:px-8 py-8 max-w-2xl mx-auto text-right rounded-b-xl"
//     >
//       {/* Header */}
//       <div className="mb-6 flex justify-start">
//         <EmailLogo_Name />
//       </div>
//       <EmailTopHeaderBar />

//       {/* Content */}
//       <div className="bg-white rounded-b-xl p-6 space-y-4">
//         {/* Main Title */}
//         <EmailMainTitle>
//           عرض محدود على باقة الاشتراك السنوي! 🚀
//         </EmailMainTitle>

//         {/* Secondary Title */}
//         <EmailSecondaryTitle>
//           أخبار مثيرة! 15٪ خصم حصري على جميع القوالب
//         </EmailSecondaryTitle>

//         {/* Paragraphs */}
//         <p>مرحبًا [اسم العميل]،</p>
//         <p>
//           لفترة محدودة فقط، نقدم خصمًا لا يقاوم على باقتنا السنوية. صدقنا؛ سترغب حقًا في الاستفادة من هذا العرض!
//         </p>

//         {/* Features List */}
//         <h2 className="font-bold text-[#121A26] mt-6">إليك ما ستحصل عليه:</h2>

//         <div className="space-y-3 mb-6">
//           {[
//             'يمكنك إنشاء حتى 5 سير ذاتية لحسابك',
//             'استخدام كل القوالب المدفوعة الحالية والمستقبلية مجانًا',
//             'طباعة السيرة PDF حتى لو لم تُكمل سيرتك 60%',
//             'إمكانية تغيير رابط سيرتك لاسم سهل وقصير لسهولة حفظه ومشاركته',
//             'قريبًا: يمكنك إضافة 5 رغبات وظيفية لزيادة فرصك في التوظيف',
//             'قريبًا: إنشاء أقسام مخصصة لسيرتك مثل المؤتمرات والعضويات والأعمال التطوعية وغيرها',
//           ].map((text, i) => (
//             <div
//               key={i}
//               className="flex items-center gap-2 border border-[#1A56DB] bg-[#F3F7FF] text-[#1F1F1F] py-[14px] px-[21px] rounded-md text-sm"
//             >
//               <span className="text-green-600">✅</span>
//               <span>{text}</span>
//             </div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div className="text-center">
//           <EmailPrimaryButton className="w-fit px-6">
//             استكشف العرض الآن!
//           </EmailPrimaryButton>
//         </div>

//         {/* Ending Text */}
//         <p className="text-sm mt-4">لا تفوت الفرصة؛ هذا العرض متاح لفترة محدودة فقط.</p>
//         <p className="text-sm mt-2">مع تحيات،<br />فريق سيرة</p>
//       </div>

//       {/* Footer */}
//       <EmailFooter_Horizontal />
//     </div>
//   );
// }


// export default function ResumeCompletionReminderEmail() {
//   return (
//     <div
//       dir="rtl"
//       className="bg-[#FBFAFC] text-gray-900 font-sans px-4 md:px-8 py-8 max-w-2xl mx-auto text-right rounded-b-xl"
//     >
//       {/* Logo */}
//       <div className="mb-6 flex justify-start">
//         <EmailLogo_Name />
//       </div>

//       {/* Header bar */}
//       <EmailTopHeaderBar />

//       {/* Content */}
//       <div className="bg-white rounded-b-xl p-6 space-y-4">
//         {/* Main Title */}
//         <EmailMainTitle>
//           سيرتك الذاتية على وشك الاكتمال! ✨
//         </EmailMainTitle>

//         {/* Message */}
//         <p>مرحبًا [اسم العميل]،</p>
//         <p>
//           لاحظنا أنك قد أحرزت تقدمًا رائعًا في كتابة سيرتك الذاتية باستخدام قوالبنا، لكنك لم تكملها بالكامل بعد.
//           ندعوك لإنهاء هذه المهمة! 🏁
//         </p>
//         <p>
//           تذكر، كل قسم في سيرتك الذاتية مهم. قم بملء الفراغات وتأكد من تقديم أفضل نسخة عن نفسك للموظفين المحتملين.
//         </p>

//         {/* CTA Button */}
//         <div className="text-center mt-6">
//           <EmailPrimaryButton className="w-fit px-6">
//             أكمل سيرتك
//           </EmailPrimaryButton>
//         </div>

//         {/* Help message */}
//         <p className="text-sm mt-4">
//           إذا كان لديك أي أسئلة أو تحتاج إلى المساعدة، فلا تتردد في الاتصال بنا.
//           نحن هنا من أجلك!
//         </p>

//         {/* Sign-off */}
//         <p className="text-sm mt-2">مع تحيات،<br />فريق سيرة</p>
//       </div>

//       {/* Footer */}
//       <EmailFooter_Horizontal />
//     </div>
//   );
// }


// export default function TemplatePurchaseConfirmationEmail() {
//   return (
//     <div
//       dir="rtl"
//       className="bg-[#FBFAFC] text-gray-900 font-sans px-4 md:px-8 py-8 max-w-2xl mx-auto text-right rounded-b-xl"
//     >
//       {/* Logo */}
//       <div className="mb-6 flex justify-start">
//         <EmailLogo_Name />
//       </div>

//       {/* Header */}
//       <EmailTopHeaderBar />

//       {/* Content */}
//       <div className="bg-white rounded-b-xl p-6 space-y-4">
//         {/* Title */}
//         <EmailMainTitle>شكرًا لاختيارك قوالب السيرة الذاتية لدينا! 🧾</EmailMainTitle>

//         {/* Welcome Message */}
//         <p>مرحبًا [اسم العميل]،</p>
//         <p>أولاً وقبل كل شيء، شكرًا لاختيارك سيرة! نحن متحمسون للغاية لوجودك معنا.</p>
//         <p>إليك تفاصيل الشراء الخاصة بك:</p>

//         {/* Order Details */}
//         <EmailOrderDetailsCard />

//         <EmailLineDivider />

//         {/* Template + Pricing */}
//         <EmailTemplatePaymentDetails />

//         <EmailLineDivider />

//         {/* Payment Method */}
//         <EmailPaymentCardDetails />

//         {/* CTA Button */}
//         <div className="text-center mt-4">
//           <EmailPrimaryButton className="w-fit px-6">أكمل سيرتك</EmailPrimaryButton>
//         </div>

//         {/* Help Message */}
//         <p className="text-sm mt-4">
//           إذا كانت لديك أي أسئلة أو تحتاج إلى أي مساعدة، لا تتردد في التواصل مع فريق الدعم الودود لدينا على
//           <a href="mailto:info@seirah.com" className="text-blue-600 font-medium mx-1">
//             info@seirah.com
//           </a>
//           — نحن هنا من أجلك!
//         </p>

//         {/* Sign off */}
//         <p className="text-sm mt-2">مع تحيات،<br />فريق سيرة</p>
//       </div>

//       {/* Footer */}
//       <EmailFooter_Horizontal />
//     </div>
//   );
// }


// export default function WelcomeEmail() {
//   return (
//     <div
//       dir="rtl"
//       className="bg-[#FBFAFC] text-gray-900 font-sans px-4 md:px-8 py-8 max-w-2xl mx-auto text-right rounded-b-xl"
//     >
//       {/* Logo */}
//       <div className="mb-6 flex justify-start">
//         <EmailLogo_Name />
//       </div>

//       {/* Gradient Header */}
//       <EmailTopHeaderBar />

//       {/* Content Block */}
//       <div className="bg-white rounded-b-xl p-6 space-y-4">
//         {/* Main Title */}
//         <EmailMainTitle>مرحبًا في رحلتك لإنشاء السيرة الذاتية المثلى! ✨</EmailMainTitle>

//         {/* Greeting Message */}
//         <p>مرحبًا [اسم العميل]،</p>
//         <p>
//           نحن متحمسون لانضمامك إلينا! شكرًا لتسجيلك معنا والاقتراب خطوة نحو إنشاء سيرة ذاتية مميزة 🎉
//         </p>

//         {/* Section Title */}
//         <h2 className="text-lg font-bold mt-6 text-[#121A26]">ابدأ مع سيرة</h2>

//         {/* Checklist / Intro steps */}
//         <div className="space-y-3 mb-6">
//           {[
//             '📄 ابدأ الآن وأنشئ سيرتك الذاتية الأولى',
//             '🖥️ قم بتحميل تطبيق "سيرة" لتجربة سلسة',
//             '🤝 شارك سيرتك الذاتية مع الأصدقاء، وأفراد التوظيف، وأصحاب العمل المحتملين!',
//           ].map((text, i) => (
//             <div
//               key={i}
//               className="flex items-center gap-2 border border-[#1A56DB] bg-[#F3F7FF] text-[#1F1F1F] py-[14px] px-[21px] rounded-md text-sm"
//             >
//               <span>{text}</span>
//             </div>
//           ))}
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-center gap-3 flex-wrap mb-6">
//           <EmailPrimaryButton className="w-fit px-6">
//             أنشئ سيرتك الآن!
//           </EmailPrimaryButton>
//           <button
//             className="bg-black text-white rounded-md px-6 py-2 text-sm font-medium"
//           >
//             حمل التطبيق
//           </button>
//         </div>

//         {/* Motivational Note */}
//         <p className="text-sm leading-relaxed text-[#1F1F1F]">
//           تذكر، السيرة الذاتية الرائعة ليست مجرد قائمة بالإنجازات؛ إنها انعكاس لرؤيتك، وطموحاتك، والعلامة الشخصية.
//           لذا أطلق العنان لإبداعك ودع قصتك تتألق ✨
//         </p>
//         <p className="text-sm">نتمنى لك إنشاء ممتعًا!</p>

//         {/* Sign-off */}
//         <p className="text-sm mt-2">مع تحيات،<br />فريق سيرة</p>
//       </div>

//       {/* Footer */}
//       <EmailFooter_Horizontal />
//     </div>
//   );
// }


// export default function CustomerSupportReplyEmail() {
//   return (
//     <div
//       dir="rtl"
//       className="bg-[#FBFAFC] text-gray-900 font-sans px-4 md:px-8 py-8 max-w-2xl mx-auto text-right rounded-b-xl"
//     >
//       {/* Header logo */}
//       <div className="mb-6 flex justify-start">
//         <EmailLogo_Name />
//       </div>

//       {/* Top gradient bar */}
//       <EmailTopHeaderBar />

//       {/* Content */}
//       <div className="bg-white rounded-b-xl p-6 space-y-4">
//         {/* Main title */}
//         <EmailMainTitle>
//           أهلاً [اسم العميل] — حل المشكلة الخاصة بك
//         </EmailMainTitle>

//         {/* Sender Info (name + role + avatar + time) */}
//         <UserInfoCard
//           name="خالد العتيبي"
//           title="رئيس خدمة عملاء سيرة"
//           time="20:00 PM, 2/9/2024"
//           image="/emails/support-avatar.jpg"
//         />

//         {/* Support message body */}
//         <div className="bg-[#FAFAFA] border border-[#E6E6E6] p-4 rounded-md text-sm space-y-3 leading-relaxed">
//           <p><strong>مرحبًا [اسم العميل]،</strong></p>
//           <p>شكرًا لتواصلك معنا!</p>
//           <p>
//             نأسف حقًا لسماع أنك واجهت مشكلة مع قوالب السيرة الذاتية لدينا. نحن ندرك تمامًا مدى أهمية الحصول على تجربة سلسة، خاصة عند العمل على شيء مهم مثل سيرتك الذاتية.
//           </p>
//           <p>
//             لقد راجعت الموضوع، وهما ما وجدت:
//             <br />
//             [تقديم معلومات محددة حول المشكلة وحلها.]
//           </p>
//           <p>
//             إذا كانت لديك أي أسئلة أخرى، أو إذا كنت تحتاج إلى المساعدة في أي شيء آخر، فلا تتردد في إعلامنا. نحن هنا دائمًا لمساعدتك.
//           </p>
//           <p>
//             أطيب التمنيات،<br />
//             خالد العتيبي — رئيس خدمة عملاء سيرة
//           </p>
//         </div>
//       </div>

//       {/* Footer */}
//       <EmailFooter_Horizontal />
//     </div>
//   );
// }


// export default function ResetPasswordEmailRedesign() {
//   return (
//     <div
//       dir="rtl"
//       className="bg-[#FBFAFC] text-gray-900 font-sans px-4 md:px-8 py-8 max-w-2xl mx-auto text-right rounded-b-xl"
//     >
//       {/* Logo */}
//       <div className="mb-6 flex justify-start">
//         <EmailLogo_Name />
//       </div>

//       {/* Header */}
//       <EmailTopHeaderBar />

//       {/* Content Block */}
//       <div className="bg-white rounded-b-xl p-6 space-y-6 text-sm leading-relaxed">
//         {/* Title */}
//         <EmailMainTitle>هل طلبت تغيير كلمة المرور؟ 🔐</EmailMainTitle>

//         {/* Paragraphs */}
//         <p>
//           مرحبًا [اسم العميل]،<br />
//           تلقينا طلبًا لتغيير كلمة المرور لحسابك مع [اسم الشركة]. إذا كنت أنت من طلب ذلك، فقط اضغط على الزر أدناه لتعيين كلمة مرور جديدة.
//         </p>

//         {/* CTA button */}
//         <div className="text-center">
//           <EmailPrimaryButton className="w-fit px-6">
//             إعادة تعيين كلمة المرور
//           </EmailPrimaryButton>
//         </div>

//         {/* Additional note */}
//         <p>
//           إذا لم تكن قد طلبت هذا التغيير، لا داعي للقلق.
//         </p>
//         <p>
//           كلمة المرور الخاصة بك لا تزال آمنة. تجاهل هذا البريد الإلكتروني، ولكن أخبرنا إذا كان هناك شيء غير معتاد.
//         </p>

//         {/* Signature */}
//         <p className="text-sm mt-4">مع تحيات،<br />فريق سيرة</p>
//       </div>

//       {/* Footer */}
//       <EmailFooter_Horizontal />
//     </div>
//   );
// }


// export default function PasswordChangedSuccessEmail() {
//   return (
//     <div
//       dir="rtl"
//       className="bg-[#FBFAFC] text-gray-900 font-sans px-4 md:px-8 py-8 max-w-2xl mx-auto text-right rounded-b-xl"
//     >
//       {/* Header logo */}
//       <div className="mb-6 flex justify-start">
//         <EmailLogo_Name />
//       </div>

//       {/* Gradient header */}
//       <EmailTopHeaderBar />

//       {/* Content */}
//       <div className="bg-white rounded-b-xl p-6 space-y-4 text-sm leading-relaxed">
//         {/* Main Title */}
//         <EmailMainTitle>تم تغيير كلمة المرور بنجاح</EmailMainTitle>

//         {/* Message Body */}
//         <p>مرحبًا [اسم العميل]،</p>
//         <p>
//           تم تغيير كلمة المرور الخاصة بك بنجاح! يمكنك الآن تسجيل الدخول باستخدام بيانات الاعتماد الجديدة الخاصة بك.
//         </p>
//         <p>
//           إذا لم يتم إجراء هذا التغيير من قبلك، يُرجى الاتصال بفريق الدعم لدينا في أسرع وقت ممكن وسنساعدك في ترتيب الأمور.
//         </p>

//         {/* Sign-off */}
//         <p>مع تحيات،<br />فريق سيرة</p>
//       </div>

//       {/* Footer */}
//       <EmailFooter_Horizontal />
//     </div>
//   );
// }


