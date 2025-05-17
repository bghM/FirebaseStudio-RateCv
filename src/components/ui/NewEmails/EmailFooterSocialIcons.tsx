import Image from 'next/image';

export default function EmailFooterSocialIcons() {
  return (
    <div className="flex justify-center items-center gap-4">

      {/* Twitter */}
      <div className="w-5 h-5 flex items-center justify-center">
        <Image
          src="/emails/x-icon.svg" 
          alt="Twitter"
          width={20}
          height={20}
          className="object-contain"
        />
      </div>


      {/* Instagram */}
      <div className="w-5 h-5 flex items-center justify-center text-[#848A98]">
        <Image
          src="/emails/instagram-icon.svg" 
          alt="Instagram"
          width={20}
          height={20}
          // fill="#848A98"
          className="object-contain text-[#848A98]" 
        />
      </div>


      {/* Youtube */}
      <div className="w-5 h-5 flex items-center justify-center">
        <Image
          src="/emails/youtube-icon.svg" 
          alt="Twitter"
          width={20}
          height={20}
          className="object-contain"
        />
      </div>


    {/* LinkedIn */}
    <div className="w-5 h-5 flex items-center justify-center">
      <Image
        src="/emails/linkedin-icon-2.svg" 
        alt="LinkedIn"
        width={20}
        height={20}
        className="object-contain"
      />
    </div>


   {/* Facebook */}
   <div className="w-5 h-5 flex items-center justify-center">
      <Image
        src="/emails/facebook-icon.svg" 
        alt="Twitter"
        width={20}
        height={20}
        className="object-contain"
      />
    </div>
 
    </div>
  );
}