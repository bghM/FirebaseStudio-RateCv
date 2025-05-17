import CTAButton from './CTAButton';

interface EmailConfirmationBodyProps {
    name: string;
    confirmationUrl: string;
  }
  
  export default function EmailConfirmationBody({ name, confirmationUrl }: EmailConfirmationBodyProps) {
    return (
      <div className="bg-white max-w-xl mx-auto p-8 rounded-md my-6 shadow-sm">
        {/* Welcome */}
        <p className="text-lg font-bold mb-2">مرحباً {name}</p>
  
        <p className="mb-4">
          نشكرك على التسجيل في سيرة! لتأكيد حسابك، يرجى الضغط على الزر أدناه:
        </p>
  
        {/* CTA Button */}
        <CTAButton>  تأكيد الحساب </CTAButton>

  
        {/* Backup link */}
        <p className="mb-2">أو يمكنك الضغط على الرابط لتأكيد حسابك:</p>
        <p className="break-words text-blue-600 text-sm">
          <a href={confirmationUrl} target="_blank" rel="noopener noreferrer">
            {confirmationUrl}
          </a>
        </p>
  
        {/* Final note */}
        <p className="text-sm text-[#1F1F1F] mt-6">
          إذا كنت لم تسجل في موقع اكتب، فقط تجاهل هذه الرسالة.
        </p>
  
        {/* Signature */}
        <div className="mt-8 text-sm text-[#6B7280]">
          <p className="mb-1">بالتوفيق،</p>
          <p className="font-medium text-[#1F1F1F]">فريق سيرة</p>
        </div>
      </div>
    );
  }