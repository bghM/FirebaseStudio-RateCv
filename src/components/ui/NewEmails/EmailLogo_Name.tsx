import Image from 'next/image';

export default function EmailLogo_Name() {
    return (
        <div className="text-lg font-bold flex justify-center items-center gap-1">
        <Image
          src="/emails/seirah-icon.svg"
          alt="bow icon"
          width={38.5}
          height={25}
          className="w-10 h-10"
        />
        <span>سيرة</span>
        <span className="text-[#fede00]">•</span>
        
      </div>

    )}