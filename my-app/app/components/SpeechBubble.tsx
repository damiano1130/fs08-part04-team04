"use client";

type SpeechBubbleProps = {
  text: string;
  arrowImage?: string;
};

export default function SpeechBubble({ text, arrowImage = "/speech-arrow.svg" }: SpeechBubbleProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#f97b22] flex items-center justify-center px-[34px] py-[22px] rounded-[100px]">
        <p className="font-bold text-[#fdf0df] text-[26px] leading-[32px] whitespace-nowrap">
          {text}
        </p>
      </div>
      <div className="flex items-center justify-center mt-0">
        <div className="rotate-180">
          <div className="h-[26px] relative w-[32px]">
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

