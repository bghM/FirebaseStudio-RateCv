import { UserInfoCard } from './UserInfoCard';

export default function EmailTestimonialSection() {
  return (

  <div className="w-full max-w-[424px] flex flex-col items-end text-right space-y-4">
    {/* User Info */}
    <UserInfoCard />
    
    {/* Testimonial Box */}
    <div className="bg-[#F8F8F8] rounded-xl p-4 space-y-2 w-full">
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "150%",
          paddingInline: "0.2px",
          color: "#1F1F1F",
        }}
      >
        “مثال لنص مقتبس أو عنوان رسالة بريد إلكتروني مخصصة لشخص ما”
      </p>
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "150%",
          paddingInline: "0.2px",
          color: "#1F1F1F",
        }}
      >
        “مثال لنص رسالة بريد إلكتروني مخصصة لشخص ما”
      </p>
    </div>
  </div>
);


}