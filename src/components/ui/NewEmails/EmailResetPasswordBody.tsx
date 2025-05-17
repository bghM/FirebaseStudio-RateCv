interface EmailResetPasswordBodyProps {
    name: string;
    resetUrl: string;
  }
  
  export default function EmailResetPasswordBody({ name, resetUrl }: EmailResetPasswordBodyProps) {
    return (
      <div className="bg-white max-w-xl mx-auto p-8 rounded-md my-6 shadow-sm text-sm leading-relaxed text-center">
        {/* Welcome */}
        <p className="text-lg font-bold mb-2">مرحباً {name}</p>
  
        {/* Message */}
        <p className="mb-4">
          طلبت إعادة تعيين كلمة المرور لحسابك في سيرة.<br />
          اضغط على الزر أدناه لإعادة ضبط كلمة المرور الخاصة بك:
        </p>
  
        {/* CTA Button */}
        <div className="text-center my-6">
          <a
            href={resetUrl}
            className="inline-block bg-[#FFD814] text-black px-6 py-3 rounded-full font-bold text-sm hover:opacity-90"
          >
            إعادة كلمة المرور
          </a>
        </div>
  
        {/* Fallback link */}
        <p className="mb-2">أو يمكنك الضغط على الرابط لإعادة كلمة المرور:</p>
        <p className="break-words text-blue-600 text-sm mb-4">
          <a href={resetUrl} target="_blank" rel="noopener noreferrer">
            {resetUrl}
          </a>
        </p>
  
        {/* Note */}
        <p className="text-sm text-[#1F1F1F] mt-6">
          إذا لم تطلب هذا الإجراء، يمكنك تجاهل هذا الإيميل، ولن يتم تغيير أي شيء في حسابك.
        </p>
  
        {/* Signature */}
        <div className="mt-8 text-sm text-[#6B7280]">
          <p className="mb-1">بالتوفيق،</p>
          <p className="font-medium text-[#1F1F1F]">فريق سيرة</p>
        </div>
      </div>
    );
  }

  