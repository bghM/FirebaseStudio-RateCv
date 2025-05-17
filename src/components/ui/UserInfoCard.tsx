import Image from 'next/image';

export function UserInfoCard() {
  return (
    <div className="flex flex-row-reverse items-center justify-end gap-3 w-full">

      <div className="text-right">
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "150%",
            color: "#1F1F1F",
          }}
        >
          خالد العتيبي
        </p>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "13px",
            lineHeight: "150%",
            color: "#A0A0A0",
          }}
        >
          20:00 PM, 2/9/2024
        </p>
      </div>

      <Image
        src="/emails/profile.jpg" // replace with actual path
        alt="خالد العتيبي"
        width={48}
        height={48}
        className="rounded-full aspect-square object-cover"
      />
    </div>

  );
}
