"use client";

import Link from "next/link";

// 디자인 시스템 Img 소스 사용
const LANDING_LOGO_IMAGE =
  "https://www.figma.com/api/mcp/asset/6a206442-5794-4b42-aeda-21a5a9df293d";
const LANDING_HERO_IMAGE =
  "https://www.figma.com/api/mcp/asset/c6a830ad-bcab-42e7-9e91-6baa1cf10778";

// 말풍선 화살표 이미지
const SPEECH_BUBBLE_ARROW_1 =
  "https://www.figma.com/api/mcp/asset/38216541-c53a-49f6-9057-3fc99d51059d";
const SPEECH_BUBBLE_ARROW_2 =
  "https://www.figma.com/api/mcp/asset/5c26bd4e-ba1e-4e8b-8fac-b897f9af3988";
const SPEECH_BUBBLE_ARROW_3 =
  "https://www.figma.com/api/mcp/asset/e9eb58ea-8c24-4269-89f8-c60f2aca4495";

type SpeechBubbleProps = {
  text: string;
  arrowImage: string;
};

function SpeechBubble({ text, arrowImage }: SpeechBubbleProps) {
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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#fdf0df] text-[#1f1f1f]">
      {/* Top GNB */}
      <header className="flex h-[88px] w-full items-center justify-between bg-[#f97b22] px-6 md:px-[120px] text-white">
        <div className="flex items-center">
          <img
            src={LANDING_LOGO_IMAGE}
            alt="Snack 로고"
            className="h-8 w-auto md:h-10"
            loading="lazy"
          />
        </div>
        <nav className="flex items-center gap-8 text-[18px] leading-[32px]">
          <Link href="/login" className="font-bold hover:opacity-80 transition">
            로그인
          </Link>
          <Link
            href="/signup"
            className="font-bold hover:opacity-80 transition"
          >
            회원가입
          </Link>
        </nav>
      </header>

      {/* Main visual */}
      <main className="mx-auto flex max-w-5xl flex-col items-center px-4 pb-24 pt-16 md:pt-24">
        {/* Logo text */}
        <h1 className="text-[72px] md:text-[96px] font-bold text-[#f97b22] leading-[1.1]">
          Snack
        </h1>

        {/* Center speech bubble */}
        <div className="mt-6 rounded-[999px] border-[4px] border-[#fcc49c] bg-white px-8 py-5 text-center max-w-[720px]">
          <p className="text-[20px] md:text-[22px] font-bold text-[#f97b22] leading-[32px]">
            흩어진 간식 구매처를 통합하고, 기수별 지출을 똑똑하게 관리하세요
          </p>
        </div>

        {/* Sub bubbles with speech bubble arrows */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 w-full max-w-5xl">
          <SpeechBubble
            text="쉽고 빠르게 구매를 요청해보세요"
            arrowImage={SPEECH_BUBBLE_ARROW_1}
          />
          <SpeechBubble
            text="다양한 품목도 한 눈에 파악해요"
            arrowImage={SPEECH_BUBBLE_ARROW_2}
          />
          <SpeechBubble
            text="관리자와 유저 모두 이용 가능해요"
            arrowImage={SPEECH_BUBBLE_ARROW_3}
          />
        </div>

        {/* Hero illustration - 디자인 시스템 Img_landing 기반 */}
        <div className="mt-14 w-full max-w-5xl">
          <div className="relative w-full overflow-hidden rounded-[32px] border-[4px] border-[#f97b22]/40 bg-[#fef3eb] aspect-[1674/564]">
            <img
              src={LANDING_HERO_IMAGE}
              alt="스낵 서비스 랜딩 일러스트"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
