import Image from 'next/image';

interface ProductInfo {
  name: string;
  price: string;
  thumbnail?: string; // shown if not subscription
  icon?: string;      // shown if subscription
}

interface EmailPurchaseSummaryBodyProps {
  name: string;
  orderNumber: string;
  orderStatus: string;
  orderDate: string;
  product: ProductInfo;
  discountAmount: string;
  totalAmount: string;
  cardDetails: string;
  cardBrand: 'mastercard' | 'visa';
  isSubscription?: boolean;
}

export default function EmailPurchaseSummaryBody({
  name,
  orderNumber,
  orderStatus,
  orderDate,
  product,
  discountAmount,
  totalAmount,
  cardDetails,
  cardBrand,
  isSubscription = false,
}: EmailPurchaseSummaryBodyProps) {
  return (
    <div className="bg-white max-w-xl mx-auto p-8 my-6 shadow-sm text-sm leading-relaxed text-center">
      {/* Greeting */}
      <p className="text-lg font-bold mb-2">مرحباً {name}</p>
      <p className="mb-4">أولاً وقبل كل شيء، شكراً لاختيارك سيرة! نحن متحمسون للغاية لوجودك معنا.</p>
      <p className="mb-6">إليك تفاصيل الشراء الخاصة بك:</p>

      {/* Order Info */}
      <div className="bg-[#FAFAFA] rounded-md text-right p-6 mb-6">
        <div className="flex items-start justify-between mb-2">
          <span className="text-[#6B7280]">رقم الطلب :</span>
          <span className="text-[#121A26] font-bold">{orderNumber}</span>
        </div>
        <div className="flex items-start justify-between mb-2">
          <span className="text-[#6B7280]">حالة الطلب :</span>
          <span className="text-[#121A26] font-bold">{orderStatus}</span>
        </div>
        <div className="flex items-start justify-between">
          <span className="text-[#6B7280]">تاريخ الطلب :</span>
          <span className="text-[#121A26] font-bold">{orderDate}</span>
        </div>
      </div>

      {/* Product Summary */}
      <div className="bg-[#FAFAFA] rounded-md p-6 text-right mb-6">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            {isSubscription ? (
                <div className="bg-[#7D67F3] w-[75px] h-[80px] rounded-lg flex items-center justify-center">
                <Image
                    src="/emails/subscription-icon.svg"
                    alt="Subscription"
                    width={24}
                    height={19}
                />
                </div>
            ) : (
              product.thumbnail && (
                <Image
                  src={product.thumbnail}
                  alt="Template thumbnail"
                  width={80}
                  height={100}
                  className="rounded-md"
                />
              )
            )}
            <span className="font-medium text-[#121A26]">{product.name}</span>
          </div>
          <span className="font-bold text-[#121A26] whitespace-nowrap">{product.price}</span>
        </div>

        

        {/* Pricing Breakdown */}
        <div className="pt-4 mt-2 space-y-2">
          <div className="flex justify-between">
            <span className="text-[#6B7280]">إجمالي الطلب</span>
            <span className="text-[#121A26] font-bold">{product.price}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6B7280]">مبلغ الخصم</span>
            <span className="text-[#121A26] font-bold">{discountAmount}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#6B7280]">الإجمالي</span>
            <span className="text-[#121A26] font-bold flex items-center gap-1">
              {cardDetails} ****
              <Image
                src={`/emails/${cardBrand}-logo.svg`}
                alt={cardBrand}
                width={28}
                height={20}
              /> 
              {totalAmount}
            </span>
          </div>
        </div>
      </div>

      {/* Final Note */}
      <p className="mb-6 text-[#1F1F1F]">
        إذا كانت لديك أي أسئلة أو تحتاج إلى أي مساعدة، لا تتردد في التواصل مع فريق الدعم لدينا على
        <a href="mailto:info@seirah.com" className="text-[#3B82F6] font-medium"> info@seirah.com </a>
        نحن هنا من أجلك!
      </p>

      {/* Signature */}
      <div className="text-sm text-[#6B7280]">
        <p className="mb-1">شكراً لاختيارك سيرة</p>
        <p className="font-medium text-[#1F1F1F]">فريق الدعم الفني سيرة</p>
      </div>
    </div>
  );
}
