interface CTAButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
  }
  
  export default function CTAButton({ href, children, className = '' }: CTAButtonProps) {
    return (
      <div className={`text-center my-6 ${className}`}>
        <a
          href={href}
          className="inline-block bg-[#FFD814] text-black px-6 py-3 rounded-full font-bold text-sm hover:opacity-90"
        >
          {children}
        </a>
      </div>
    );
  }