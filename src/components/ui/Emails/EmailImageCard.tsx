interface ImageCardProps {
    src: string;
    alt: string;
    title: string;
  }
  
  export default function EmailImageCard({ src, alt, title }: ImageCardProps) {
    return (
      <div className="w-[228px] h-[270px] rounded-[16px] overflow-hidden flex flex-col">
       
        {/* Image Section */}
        <div className="w-full h-[220px] bg-[#F3F7FF]">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover rounded-t-[16px]"
          />
        </div>
  
        {/* Title Section */}
        <div
          className="w-full h-[50px] bg-[#F3F7FF] text-right px-4 flex items-center rounded-b-[16px]"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '150%',
            color: '#1F1F1F',
            paddingInline: '0.2px',
          }}
        >
          {title}
        </div>
      </div>
    );
  }