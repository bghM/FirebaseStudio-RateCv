import EmailUserName from './EmailUserName';
import CTAButton from './CTAButton';


interface EmailWelcomeBodyProps {
  name: string;
  ctaLink: string;
}

export default function EmailWelcomeBody({ name, ctaLink }: EmailWelcomeBodyProps) {
  return (
    <div className="bg-white max-w-xl mx-auto p-8 rounded-md my-6 shadow-sm">
      <EmailUserName name={name} />

      <p className="mb-4">
        يسعدنا انضمامك إلى سيرة – منصتك الذكية لإنشاء سيرة ذاتية احترافية بكل سهولة!
        بخطوات بسيطة تقدر تبرز مهاراتك وتعرض خبراتك بطريقة تليق فيك وتلفت نظر أصحاب العمل.
      </p>

      <p className="mb-4">
        ابدأ الحين واختر قالب يليق فيك ويعبّر عنك:
      </p>

      {/* CTA Button */}
      <CTAButton href="https://seirah.com/create">
        إنشاء سيرة جديدة
      </CTAButton>

      <p className="text-sm text-[#1F1F1F]">
        وإذا احتجت أي مساعدة، حنا دائماً حولك.
      </p>

      {/* Signature */}
      <div className="mt-8 text-sm text-[#6B7280]">
        <p className="mb-1">بالتوفيق،</p>
        <p className="font-medium text-[#1F1F1F]">فريق سيرة</p>
      </div>
    </div>
  );
}