"use client";

type ProductDeleteModalProps = {
  productName: string;
  onClose: () => void;
  onConfirm: () => void;
};

export default function ProductDeleteModal({
  productName,
  onClose,
  onConfirm,
}: ProductDeleteModalProps) {
  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-[#fbf8f4] rounded-[32px] shadow-[4px_4px_10px_0px_rgba(169,169,169,0.2)] p-8 md:p-10 w-[90%] max-w-[640px]">
        <div className="flex flex-col items-center gap-12">
          {/* Icon and Illustration */}
          <div className="flex flex-col items-center gap-3">
            {/* Warning Icon */}
            <div className="h-[72px] w-[66px] relative flex items-center justify-center">
              <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-[#f97b22]"
                >
                  <path
                    d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            {/* Illustration placeholder - 실제 이미지는 Figma에서 가져올 수 있습니다 */}
            <div className="h-[113px] w-[221px] relative">
              <div className="w-full h-full bg-[#fee8b0] rounded-lg opacity-20"></div>
            </div>
          </div>

          {/* Title and Message */}
          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="text-[24px] font-bold text-[#1f1f1f] leading-[32px]">
              상품 삭제
            </h2>
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-[20px] font-medium leading-[32px] text-[#6b6b6b]">
                <span className="text-[#6b6b6b]">{productName}</span>
                <span> 상품을 삭제할까요?</span>
              </p>
              <p className="text-[20px] font-medium leading-[32px] text-[#6b6b6b]">
                상품 삭제 후에는 복구할 수 없어요!
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between gap-5 w-full">
            <button
              onClick={onClose}
              className="flex-1 h-16 bg-[#fdf0df] rounded-[16px] text-[20px] font-semibold text-[#f97b22] leading-[32px] hover:bg-[#fde1cd] transition"
            >
              더 생각해볼게요
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 h-16 bg-[#f97b22] rounded-[16px] text-[20px] font-semibold text-white leading-[32px] hover:bg-[#e06a1a] transition"
            >
              삭제할래요
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
