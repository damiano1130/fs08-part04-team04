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
          <SpeechBubble text="쉽고 빠르게 구매를 요청해보세요" />
          <SpeechBubble text="다양한 품목도 한 눈에 파악해요" />
          <SpeechBubble text="관리자와 유저 모두 이용 가능해요" />
        </div>

        {/* Hero illustration - 디자인 시스템 Img_landing 기반 */}
        <div className="mt-14 w-full max-w-5xl">
          <div className="relative w-full overflow-hidden rounded-[32px] border-[4px] border-[#f97b22]/40 bg-[#fef3eb]" style={{ aspectRatio: "1674/1189" }}>
            <LandingHeroIllustration />
          </div>
        </div>
      </main>
    </div>
  );
}
