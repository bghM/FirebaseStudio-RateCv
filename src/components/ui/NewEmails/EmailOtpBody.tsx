interface EmailOtpBodyProps {
    name: string;
    otp: string;
    confirmationUrl: string;
  }
  
  export default function EmailOtpBody({ name, otp, confirmationUrl }: EmailOtpBodyProps) {
    return (
      <div className="bg-white max-w-xl mx-auto p-8 rounded-md my-6 shadow-sm text-sm leading-relaxed">
        {/* Welcome */}
        <p className="text-lg font-bold mb-2">مرحباً {name}</p>
  
        {/* Message */}
        <p className="mb-4">
          نشكرك على التسجيل في موقعنا! هذا رمز التحقق الذي تحتاج لإدخاله في الموقع:
        </p>
  
        {/* OTP Code */}
        <div className="text-center font-bold text-2xl tracking-widest my-4">
          {otp}
        </div>
  
        {/* Alternative method */}
        <p className="mb-2">أو يمكنك الضغط على الرابط لتأكيد حسابك:</p>
        <p className="break-words text-blue-600 text-sm mb-4">
          <a href={confirmationUrl} target="_blank" rel="noopener noreferrer">
            {confirmationUrl}
          </a>
        </p>
  
        {/* Note */}
        <p className="text-sm text-[#1F1F1F]">
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