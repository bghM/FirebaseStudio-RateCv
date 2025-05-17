import { CheckCircle } from 'lucide-react';

const checklist = [
  'نص قصير',
  'نص طويل جدًا يتطلب عرضًا كاملاً للسطر من أجل قراءة أوضح وأكثر راحة للمستخدم',
  'عنصر أخير في المنتصف',
];

export default function ChecklistGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {checklist.map((text, i) => {
        const isLong = text.length > 35;
        const isLast = i === checklist.length - 1;
        const colSpan = isLong ? 'col-span-2' : '';
        const justify = isLast && !isLong && checklist.length % 2 !== 0 ? 'justify-self-center' : '';

        return (
          <div
            key={i}
            className={`flex items-center ${colSpan} ${justify} rounded-md`}
            style={{
              backgroundColor: '#F3F7FF',
              border: '0.7px solid #1A56DB',
              padding: '14px 21px',
            }}
          >
            <CheckCircle
              className="shrink-0"
              style={{
                width: 20,
                height: 20,
                marginLeft: 8,
                color: '#44981C',
              }}
            />
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '150%',
                color: '#1F1F1F',
                paddingInline: '0.2px',
              }}
            >
              {text}
            </span>
          </div>
        );
      })}
    </div>
  );
}