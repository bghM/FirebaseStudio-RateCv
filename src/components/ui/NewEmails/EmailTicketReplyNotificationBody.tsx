import CTAButton from './CTAButton';

interface EmailTicketReplyNotificationBodyProps {
  name: string;
  ticketNumber: string;
  ticketType: string;
  lastUpdated: string;
  ticketStatus: string;
  ticketStatusColor?: 'orange' | 'green';
  ticketUrl: string;
  headingText: string;
  introText: string;
  buttonIntro: string;
  buttonText: string;
  finalNote: string;
}

export default function EmailTicketReplyNotificationBody({
  name,
  ticketNumber,
  ticketType,
  lastUpdated,
  ticketStatus,
  ticketStatusColor = 'orange', // default to orange if not provided
  ticketUrl,
  headingText,
  introText,
  buttonIntro,
  buttonText,
  finalNote,
}: EmailTicketReplyNotificationBodyProps) {
  return (
    <div className="bg-white max-w-xl mx-auto p-8 my-6 shadow-sm text-sm leading-relaxed text-center">
      {/* Greeting */}
      <p className="text-lg font-bold mb-2">{headingText || `مرحباً ${name}`}</p>

      <p className="mb-4">{introText}</p>

      {/* Ticket Box */}
      <div className="flex flex-col gap-2 text-right bg-[#FAFAFA] border border-[#E6E6E6] rounded-md p-14 mt-8">
        <div className="flex items-start gap-2">
          <span className="text-[#6B7280] w-[110px]">رقم التذكرة :</span>
          <span className="font-bold text-[#121A26]">#{ticketNumber}</span>
        </div>

        <div className="flex items-start gap-2">
          <span className="text-[#6B7280] w-[110px]">نوع التذكرة :</span>
          <span className="font-bold text-[#121A26]">{ticketType}</span>
        </div>

        <div className="flex items-start gap-2">
          <span className="text-[#6B7280] w-[110px]">تاريخ آخر تحديث :</span>
          <span className="font-bold text-[#121A26]">{lastUpdated}</span>
        </div>

        <div className="flex items-start gap-2">
          <span className="text-[#6B7280] w-[110px]">الحالة :</span>
          <span
            className={`font-bold text-sm py-1 px-3 rounded-lg inline-block ${
              ticketStatusColor === 'green'
                ? 'bg-[rgba(99,223,104,0.2)] text-[#63DF68]'
                : 'bg-[#FFECD6] text-[#F79009]'
            }`}
          >
            {ticketStatus}
          </span>
        </div>
      </div>

      {/* CTA Section */}
      <p className="mt-8 mb-3">{buttonIntro}</p>
      <div className="my-4">
        <CTAButton href={ticketUrl}>{buttonText}</CTAButton>
      </div>

      {/* Final Note */}
      <p className="mb-6">{finalNote}</p>

      {/* Signature */}
      <div className="text-sm text-[#6B7280]">
        <p className="mb-1">شكراً لاختيارك سيرة</p>
        <p className="font-medium text-[#1F1F1F]">فريق الدعم الفني سيرة</p>
      </div>
    </div>
  );
}