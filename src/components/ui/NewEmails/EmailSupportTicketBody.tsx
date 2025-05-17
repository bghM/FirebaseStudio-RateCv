interface EmailSupportTicketBodyProps {
    name: string;
    ticketNumber: string;
    ticketType: string;
    ticketDate: string;
    ticketStatus: string;
    message: string;
  }
  
  export default function EmailSupportTicketBody({
    name,
    ticketNumber,
    ticketType,
    ticketDate,
    ticketStatus,
    message,
  }: EmailSupportTicketBodyProps) {
    return (
      <div className="bg-white max-w-xl mx-auto p-8 rounded-md my-6 shadow-sm text-sm leading-relaxed text-center">
        {/* Header Greeting */}
        <p className="text-lg font-bold mb-2">مرحباً {name}</p>
  
        <p className="mb-4">شكرًا لتواصلك معنا.</p>
        <p className="mb-4">
          تم فتح تذكرة جديدة بخصوص استفسارك، فريق الدعم الفني سيقوم بمراجعة التفاصيل والرد عليك في أقرب وقت ممكن.
        </p>
  
        {/* Ticket Info Box */}
        <div className="flex flex-col gap-2 text-right">
            <div className="flex items-start gap-2">
                <span className="text-[#6B7280] w-[110px]">رقم التذكرة :</span>
                <span className="font-bold text-[#121A26]">#4525352</span>
            </div>

            <div className="flex items-start gap-2">
                <span className="text-[#6B7280] w-[110px]">نوع التذكرة :</span>
                <span className="font-bold text-[#121A26]">🥲 استفسار</span>
            </div>

            <div className="flex items-start gap-2">
                <span className="text-[#6B7280] w-[110px]">تاريخ التذكرة :</span>
                <span className="font-bold text-[#121A26]">22/05/2025</span>
            </div>

            <div className="flex items-start gap-2">
                <span className="text-[#6B7280] w-[110px]">الحالة :</span>
                <span className="font-bold text-[#F79009]">مفتوحة</span>
            </div>
            <div className="flex items-start gap-2">
                <span className="text-[#6B7280] w-[110px]">نص الرسالة :</span>
                <p className="font-normal text-[#121A26] leading-relaxed pr-2">
                    مرحباً، حاولت استخدام القالب ولكن القالب صعب الاستخدام والتطبيق ولا استطيع أن اكتب عنواني
                </p>
            </div>
        </div>
  
        {/* Follow-up Instructions */}
        <p className="mt-6">
          إذا كان لديك أي إضافات أو توضيحات، تقدر ترد مباشرة على هذا الإيميل
          وسيتم تحديث التذكرة تلقائيًا.
        </p>
  
        {/* Signature */}
        <div className="mt-8 text-sm text-[#6B7280]">
          <p className="mb-1">شكرًا لاختيارك سيرة</p>
          <p className="font-medium text-[#1F1F1F]">فريق الدعم الفني سيرة</p>
        </div>
      </div>
    );
  }