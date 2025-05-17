import Image from 'next/image';


export default function EmailHeadName_Logo() {
    return (
        <div className="bg-[#4b68ff] py-6 px-4 text-white flex justify-center">
           <div className="flex items-center gap-2 text-xl font-bold">

            {/* <div className="text-lg font-bold flex justify-center items-center gap-1"> */}
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
      </div>

)}

