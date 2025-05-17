import Image from 'next/image';
import EmailFooterLinks from './EmailFooterLinks'; 
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

      {/* Links */}
      <EmailFooterLinks />

      {/* Social Icons */}
      <EmailFooterSocialIcons />

      {/* Copyright */}
      <div className="text-[#A0A0A0] text-xs">© 2023 سيرة</div>
    </footer>
  );
}