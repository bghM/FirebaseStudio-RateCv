import EmailFooterLinks from './EmailFooterLinks'; 
import EmailFooterSocialIcons from './EmailFooterSocialIcons'; 
import EmailLogo_Name from './EmailLogo_Name'; 

export default function EmailFooter_Horizontal() {
  return (
    <footer
      className="bg-[#FBFAFC] py-6 px-4 text-sm flex flex-col md:flex-row justify-between items-center gap-4"
      dir="rtl"
    >
      {/* Right side: logo above links */}
      <div className="flex flex-col items-start text-sm text-[#1F1F1F] font-medium space-y-2">
        <EmailLogo_Name />
        <EmailFooterLinks />
      </div>

      {/* Left side: social icons + copyright */}
      <div className="flex flex-col gap-2 items-start text-[#A0A0A0]">
        <EmailFooterSocialIcons />
        <div className="text-xs">© 2023 سيرة</div>
      </div>
    </footer>
  );
}
