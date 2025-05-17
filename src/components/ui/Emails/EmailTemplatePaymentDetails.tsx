interface TemplateInfoProps {
  name: string;
  emoji?: string;
  imageSrc: string;
  alt?: string;
}

function TemplateInfo({ name, emoji = '👑', imageSrc, alt = 'template image' }: TemplateInfoProps) {
  return (
    <div className="flex items-center gap-2">
      <img
        src={imageSrc}
        alt={alt}
        className="w-[80px] h-[80px] object-cover rounded-md"
      />

      <div
        className="text-right"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '150%',
          color: '#1F1F1F',
        }}
      >
        {emoji} {name}
      </div>
   
    </div>
  );
}



export default function EmailTemplatePaymentDetails() {
  return (
    <div className="bg-[#F9F9F9] rounded-xl p-6 w-full max-w-[600px] mx-auto text-right" dir="rtl">
      {/* Template Info Row */}
      <div className="flex justify-between items-center mb-6">
        {/* Right: template name + image */}
        <TemplateInfo
          name="تشرين"
          emoji="👑"
          imageSrc="/emails/template-thumbnail.jpg" // replace with actual image
        />

        {/* Left: price */}
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '150%',
            color: '#1F1F1F',
            direction: 'ltr',
          }}
        >
          23 رس
        </p>
      </div>

      {/* Divider */}
      <hr className="border-[#E6E6E6] mb-6" />

      {/* Payment Breakdown */}
      <div className="grid grid-cols-2 gap-y-4 text-sm">
        <p className="text-[#1F1F1F]" style={labelStyle}>إجمالي الطلب</p>
        <p className="text-left font-bold" style={valueStyle}>23 رس</p>

        <p className="text-[#1F1F1F]" style={labelStyle}>مبلغ الخصم</p>
        <p className="text-left font-bold" style={valueStyle}>0 رس</p>

        <p className="text-[#1F1F1F] font-bold" style={labelStyle}>الإجمالي</p>
        <p className="text-left font-bold" style={valueStyle}>23 رس</p>
      </div>
    </div>
  );
}




// Reusable styles
const labelStyle = {
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  lineHeight: '150%',
} as React.CSSProperties;

const valueStyle = {
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  lineHeight: '150%',
  direction: 'ltr',
} as React.CSSProperties;