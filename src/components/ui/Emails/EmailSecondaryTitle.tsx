interface EmailSecondaryTitleProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export default function EmailSecondaryTitle({ children, className = '' }: EmailSecondaryTitleProps) {
    return (
      <div className={`w-full py-2 text-right font-bold ${className}`}>
        <h2
          className="py-1 font-medium text-lg mb-2"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 20,
            lineHeight: '150%',
            color: '#121A26',
          }}
        >
          {children}
        </h2>
      </div>
    );
  }

