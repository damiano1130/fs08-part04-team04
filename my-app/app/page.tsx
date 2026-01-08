"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LandingHeroIllustration from "./components/LandingHeroIllustration";
import Header from "./components/Header";
import SpeechBubble from "./components/SpeechBubble";
import HeaderNavLink from "./components/HeaderNavLink";

export default function LandingPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  // 인증 상태 확인
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/me");
        const data = await response.json();
        if (data.success) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Auth check error:", error);
      } finally {
        setIsChecking(false);
      }
    };

    checkAuth();
  }, []);

  // 로그아웃 처리
  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setIsAuthenticated(false);
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf0df] text-[#1f1f1f]">
      {/* Top GNB */}
      {isAuthenticated ? (
        <Header
          variant="app"
          rightContent={
            <div className="flex items-center gap-12">
              <HeaderNavLink href="/profile">Profile</HeaderNavLink>
              <HeaderNavLink variant="button" onClick={handleLogout}>
                Logout
              </HeaderNavLink>
            </div>
          }
        />
      ) : (
        <Header variant="landing" />
      )}

      {/* Main visual - 반응형 레이아웃 */}
      <main className="relative w-full min-h-screen bg-[#fdf0df] pt-16 md:pt-24 pb-24 px-4 md:px-0">
        {/* 모바일/태블릿 레이아웃 */}
        <div className="lg:hidden flex flex-col items-center">
          {/* Logo and Center speech bubble */}
          <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-[742px] mb-12 md:mb-16">
            {/* Logo SVG */}
            <div className="h-[96px] sm:h-[112px] md:h-[128px] w-full max-w-[380px] sm:max-w-[450px] md:max-w-[504px] flex items-center justify-center">
              <img
                src="/landing-logo-main.svg"
                alt="Snack"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            {/* Center speech bubble */}
            <div className="w-full rounded-[100px] border-[4px] border-[#fcc49c] bg-white px-6 sm:px-8 md:px-[32px] py-4 sm:py-5 md:py-[20px] text-center overflow-hidden">
              <p className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] font-bold text-[#f97b22] leading-[28px] sm:leading-[32px] whitespace-nowrap">
                흩어진 간식 구매처를 통합하고, 기수별 지출을 똑똑하게 관리하세요
              </p>
            </div>
          </div>

          {/* Hero illustration */}
          <div className="relative w-full max-w-[95vw] md:max-w-[90vw] mb-8 md:mb-12 flex items-center justify-center">
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "1674/564" }}
            >
              <LandingHeroIllustration />
            </div>
          </div>

          {/* Speech bubbles - 그리드 레이아웃 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full max-w-[95vw] md:max-w-[90vw]">
            <div className="flex justify-center sm:justify-start">
              <SpeechBubble
                text="쉽고 빠르게 구매를 요청해보세요"
                arrowImage="/speech-arrow-base.svg"
              />
            </div>
            <div className="flex justify-center sm:justify-end">
              <SpeechBubble
                text="다양한 품목도 한 눈에 파악해요"
                arrowImage="/speech-arrow-2.svg"
              />
            </div>
            <div className="flex justify-center sm:justify-start">
              <SpeechBubble
                text="내가 원하는 간식을, 원하는 만큼!"
                arrowImage="/speech-arrow-1.svg"
              />
            </div>
            <div className="flex justify-center sm:justify-end">
              <SpeechBubble
                text="관리자와 유저 모두 이용 가능해요"
                arrowImage="/speech-arrow-3.svg"
              />
            </div>
          </div>
        </div>

        {/* 데스크톱 레이아웃 - Figma 디자인 기준 */}
        <div className="hidden lg:block relative w-full max-w-[1920px] mx-auto min-h-screen">
          {/* Logo and Center speech bubble - Figma: Frame 2610633 */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[160px] flex flex-col items-center gap-[48px] w-full max-w-[742px]">
            {/* Logo SVG */}
            <div className="h-[128px] w-full max-w-[504px] flex items-center justify-center">
              <img
                src="/landing-logo-main.svg"
                alt="Snack"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            {/* Center speech bubble */}
            <div className="w-full max-w-[742px] rounded-[100px] border-[4px] border-[#fcc49c] bg-white px-[32px] py-[20px] text-center overflow-hidden">
              <p className="text-[26px] font-bold text-[#f97b22] leading-[32px] whitespace-nowrap">
                흩어진 간식 구매처를 통합하고, 기수별 지출을 똑똑하게 관리하세요
              </p>
            </div>
          </div>

          {/* Hero illustration - Figma: img/landing */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[519px] w-[1674px] h-[564px] flex items-center justify-center">
            <div
              className="relative w-full h-full overflow-hidden"
              style={{ aspectRatio: "1674/564" }}
            >
              <LandingHeroIllustration />
            </div>
          </div>

          {/* Speech bubbles - Figma 좌표 기준 */}
          {/* Speech bubble 1 - Figma: left-[58px] top-[639px] */}
          <div className="absolute left-[58px] top-[639px] flex flex-col items-center w-[399px]">
            <SpeechBubble
              text="내가 원하는 간식을, 원하는 만큼!"
              arrowImage="/speech-arrow-1.svg"
            />
          </div>

          {/* Speech bubble 2 - Figma: left-[220px] top-[467px] */}
          <div className="absolute left-[220px] top-[467px] flex flex-col items-center w-[399px]">
            <SpeechBubble
              text="쉽고 빠르게 구매를 요청해보세요"
              arrowImage="/speech-arrow-base.svg"
            />
          </div>

          {/* Speech bubble 3 - Figma: left-[1301px] top-[465px] */}
          <div className="absolute right-[220px] top-[465px] flex flex-col items-center w-[399px]">
            <SpeechBubble
              text="다양한 품목도 한 눈에 파악해요"
              arrowImage="/speech-arrow-2.svg"
            />
          </div>

          {/* Speech bubble 4 - Figma: left-[1463px] top-[639px] */}
          <div className="absolute right-[58px] top-[639px] flex flex-col items-center w-[399px]">
            <SpeechBubble
              text="관리자와 유저 모두 이용 가능해요"
              arrowImage="/speech-arrow-3.svg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
