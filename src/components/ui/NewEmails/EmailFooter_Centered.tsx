import EmailFooterSocialIcons from './EmailFooterSocialIcons'; 
import EmailLogo_Name from './EmailLogo_Name'; 


export default function EmailFooter_Centered() {
  return (
    <footer
      className="bg-[#FFFFFF] py-8 px-4 text-sm text-center space-y-4"
      dir="rtl"
    >
      {/* Logo + Name */}
      <EmailLogo_Name />

      <p>
        تابعنا على مواقع التواصل الاجتماعي
      </p>

      {/* Social Icons */}
      <EmailFooterSocialIcons />

      <p className="text-[#6B7280] mt-3">
          يمكنك <a href="#" className="underline text-[#1570EF]">إلغاء الاشتراك</a> في أي وقت ترغب
        </p>
        
      {/* Copyright */}
      <div className="text-[#A0A0A0] text-xs">© 2023 سيرة</div>
    </footer>
  );
}