"use client";

type SpeechBubbleProps = {
  text: string;
  arrowImage?: string;
};

export default function SpeechBubble({
  text,
  arrowImage = "/speech-arrow.svg",
}: SpeechBubbleProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="bg-[#f97b22] flex items-center justify-center px-6 sm:px-8 md:px-[34px] py-4 sm:py-5 md:py-[22px] rounded-[100px] w-full max-w-[399px] overflow-hidden">
        <p className="font-bold text-[#fdf0df] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] leading-[26px] sm:leading-[28px] md:leading-[32px] text-center whitespace-nowrap">
          {text}
        </p>
      </div>
      <div className="flex items-center justify-center mt-0">
        <div className="rotate-180">
          <div className="h-[20px] sm:h-[23px] md:h-[26px] relative w-[24px] sm:w-[28px] md:w-[32px]">
            <div className="absolute inset-[6.98%_0_0_0]">
              <img
                src={arrowImage}
                alt=""
                className="block max-w-none w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
