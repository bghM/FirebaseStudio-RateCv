

export default function EmailOrderDetailsCard() {
    return (
      <div className="bg-[#F9F9F9] rounded-xl p-6 w-full max-w-[600px] mx-auto text-right" dir="rtl">
        {/* Section Title */}
        <h2
          className="mb-4"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '150%',
            color: '#1F1F1F',
          }}
        >
          مثال على عنوان فرعي اصغر
        </h2>
  
        {/* Order Details Grid */}
        <div className="grid grid-cols-2 gap-y-4 text-sm">
          {/* 1 */}
          <p
            className="font-normal text-[#1F1F1F]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: '150%',
            }}
          >
            الرقم المرجعي للطلب
          </p>
          <p
            className="font-bold text-left"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: '150%',
              direction: 'ltr',
            }}
          >
            17278
          </p>
  
          {/* 2 */}
          <p
            className="font-normal text-[#1F1F1F]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: '150%',
            }}
          >
            رقم الطلب
          </p>
          <p
            className="font-bold text-left"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: '150%',
              direction: 'ltr',
            }}
          >
            2030
          </p>
  
          {/* 3 */}
          <p
            className="font-normal text-[#1F1F1F]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: '150%',
            }}
          >
            حالة الطلب
          </p>
          <p
            className="font-bold text-left"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: '150%',
              direction: 'rtl',
            }}
          >
            مُؤكد
          </p>
  
          {/* 4 */}
          <p
            className="font-normal text-[#1F1F1F]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: '150%',
            }}
          >
            تاريخ الطلب
          </p>
          <p
            className="font-bold text-left"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: '150%',
              direction: 'ltr',
            }}
          >
            18/06/2023
          </p>
        </div>
      </div>
    );
  }