export default function EmailAppStoreCTA_Vertical() {
    return (
      <div
        className="bg-white rounded-xl p-6 w-full max-w-[600px] mx-auto flex flex-col items-center text-center gap-4"
        dir="rtl"
      >
        {/* Text */}
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '150%',
            color: '#1F1F1F',
          }}
        >
          حمل سيرة الآن على App Store!
        </p>
  
        {/* App Store Badge */}
        <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/emails/appstore-badge.svg" // Replace with actual image path
            alt="App Store"
            className="w-[120px] h-auto"
          />
        </a>
      </div>
    );
  }