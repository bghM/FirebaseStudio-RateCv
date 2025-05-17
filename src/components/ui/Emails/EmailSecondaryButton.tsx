
interface PrimaryButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }
  
  export default function EmailSecondaryButton({ children, onClick, className = '' }: PrimaryButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`bg-[#1F1F1F] text-white w-1/2 py-2 rounded-md mb-[32px] ${className}`}
      >
        {children}
      </button>
    );
  }