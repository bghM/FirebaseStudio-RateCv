export default function EmailPaymentCardDetails() {
    return (
      <div
        className="bg-[#F9F9F9] rounded-xl p-6 w-full max-w-[600px] mx-auto text-right space-y-4"
        dir="rtl"
      >
        {/* Title */}
        <h2
          className="text-right"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '150%',
            color: '#1F1F1F',
          }}
        >
          مثال على عنوان متفرع
        </h2>
  
        {/* Card Info Row */}
        <div className="flex flex-row-reverse items-center justify-end">
        
          {/* Text */}
          <p
            className="pr-4"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '150%',
              color: '#1F1F1F',
            }}
          >
            البطاقة الإئتمانية المنتهية بـ0000
          </p>

          {/* Card Logo */}
          <img
            src="/emails/mastercard-logo.svg"
            alt="Mastercard"
            className="w-[40px] h-[24px] rounded-md"
          />
        </div>
      </div>
    );
  }