import Image from 'next/image';

export default function EmailFooterSocialIcons() {
  return (
    <div className="flex justify-center items-center gap-4">

    {/* LinkedIn */}
    <div className="w-5 h-5 flex items-center justify-center">
        <Image
          src="/emails/linkedin-icon.svg" 
          alt="LinkedIn"
          width={20}
          height={20}
          className="object-contain"
        />
      </div>

      {/* Instagram */}
      <div className="w-5 h-5 flex items-center justify-center">
        <Image
          src="/emails/instagram-icon.svg" 
          alt="Instagram"
          width={20}
          height={20}
          className="object-contain"
        />
      </div>

      {/* Twitter */}
      <div className="w-5 h-5 flex items-center justify-center">
        <Image
          src="/emails/twitter-icon.svg" 
          alt="Twitter"
          width={20}
          height={20}
          className="object-contain"
        />
      </div>

    </div>
  );
}