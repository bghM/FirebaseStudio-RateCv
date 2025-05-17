interface EmailMainTitleProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export default function EmailMainTitle({ children, className = '' }: EmailMainTitleProps) {
    return (
      <div className={`w-full py-3 text-right ${className}`}>
        <h1
          className="py-1 font-bold text-2xl mb-2"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 24,
            lineHeight: '140%',
            color: '#121A26',
          }}
        >
          {children}
        </h1>
      </div>
    );
  }
