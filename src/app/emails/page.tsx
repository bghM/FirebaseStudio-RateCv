import Image from 'next/image';
import Link from "next/link";
import ChecklistGrid from '@/components/ui/Emails/ChecklistGrid';
import EmailTestimonialSection from '@/components/ui/Emails/EmailTestimonialSection';
import EmailPrimaryButton from '@/components/ui/Emails/EmailPrimaryButton';
import EmailSecondaryButton from '@/components/ui/Emails/EmailSecondaryButton';
import EmailImageCard from '@/components/ui/Emails/EmailImageCard';
import EmailOrderDetailsCard from '@/components/ui/Emails/EmailOrderDetailsCard';
import EmailTemplatePaymentDetails from '@/components/ui/Emails/EmailTemplatePaymentDetails';
import EmailLineDivider from '@/components/ui/Emails/EmailLineDivider';
import EmailPaymentCardDetails from '@/components/ui/Emails/EmailPaymentCardDetails';
import EmailAppStoreCTA_Horizontal from '@/components/ui/Emails/EmailAppStoreCTA_Horizontal';
import EmailAppStoreCTA_Vertical from '@/components/ui/Emails/EmailAppStoreCTA_Vertical';
import EmailFooter_Centered from '@/components/ui/Emails/EmailFooter_Centered';
import EmailFooter_Horizontal from '@/components/ui/Emails/EmailFooter_Horizontal';
import EmailTopHeaderBar from '@/components/ui/Emails/EmailTopHeaderBar';
import EmailLogo_Name from '@/components/ui/Emails/EmailLogo_Name';




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
//       <div
//       className="w-full px-4 py-2 text-right" > 
//       <h1
//         className="py-1 font-bold text-2xl	mb-2"
//         style={{
//           fontFamily: 'Inter, sans-serif',
//           fontSize: 24,
//           lineHeight: '140%',
//           color: '#121A26',
//         }}
//       >
//         مثال العنوان الرئيسي
//       </h1>
//       </div>

//         {/* Secondary Title Section */}  
//       <div className="w-full px-4 py-2 text-right font-light">
//         <h2 className="py-1 font-medium text-lg mb-2"
//         style={{
//             fontFamily: 'Inter, sans-serif',
//             fontSize: 16,
//             lineHeight: '150%',
//             color: '#121A26',
//           }}>مثال العنوان الفرعي</h2>
//       </div>

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


export default function OtpEmailTemplate() {
  return (
    <div className="bg-white p-4">
      <div dir="rtl" 
      className="bg-[#FBFAFC] text-gray-900 font-sans px-4 md:px-8 py-8 max-w-2xl mx-auto text-right">     
        
        
        {/* Top Logo */}
        <div className="mb-8 flex justify-start">
          <EmailLogo_Name />
        </div>

        {/* Gradient Header */}
        <EmailTopHeaderBar />

        {/* Email Content Block */}
        <div className="bg-white p-6 mt-[-10px] space-y-4 text-right">
          {/* Title */}
          <h1 className="font-bold text-xl text-[#1F1F1F]">
            كلمة المرور المؤقتة الخاصة بك (OTP) لسيرة
          </h1>

          {/* Intro Text */}
          <p>مرحبًا [اسم العميل]،</p>
          <p>
            شكرًا لك على التسجيل في سيرة! نحن متحمسون لوجودك معنا.
          </p>
          <p>
            لإتمام عملية التسجيل وضمان أمان حسابك، يُرجى إدخال كلمة المرور المؤقتة (OTP) الموجودة أدناه:
          </p>
        </div>


          
          {/* OTP Code */}
        <div className="bg-white p-6 mt-[-10px] space-y-4 text-center">

        <div className="text-2xl font-bold tracking-[4px]">2390</div>

          {/* Copy Button */}
          <EmailPrimaryButton className="mx-auto w-fit px-6">انسخ كلمة المرور</EmailPrimaryButton>

        </div>

          {/* Validity Notice */}
        <div className="bg-white rounded-b-xl p-6 mt-[-10px] space-y-4 text-right">

          <p>كلمة المرور المؤقتة هذه صالحة لمدة <strong>60</strong> دقيقة.</p>

          {/* Signoff */}
          <p className="mt-2">مع تحيات،<br />فريق سيرة</p>
        </div>

        {/* Footer */}
        <EmailFooter_Horizontal />
      </div>
    </div>
  )
}