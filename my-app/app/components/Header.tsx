"use client";

import Link from "next/link";
import { ReactNode } from "react";

type HeaderVariant = "landing" | "auth" | "app";

type HeaderProps = {
  variant?: HeaderVariant;
  rightContent?: ReactNode;
};

export default function Header({ variant = "landing", rightContent }: HeaderProps) {
  const logoImage = "/snack-logo.png";
  const landingLogoImage = "/landing-logo-text.svg";

  if (variant === "landing") {
    return (
      <header className="flex h-[88px] w-full items-center justify-between bg-[#f97b22] px-6 md:px-[120px] text-white">
        <div className="flex items-center">
          <Link href="/">
            <img
              src={landingLogoImage}
              alt="Snack 로고"
              className="h-8 w-auto md:h-10 cursor-pointer"
              loading="lazy"
            />
          </Link>
        </div>
        <nav className="flex items-center gap-8 text-[18px] leading-[32px]">
          <Link href="/login" className="font-bold hover:opacity-80 transition">
            로그인
          </Link>
          <Link href="/signup" className="font-bold hover:opacity-80 transition">
            회원가입
          </Link>
        </nav>
      </header>
    );
  }

  if (variant === "auth") {
    return (
      <header className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-[88px] bg-[#f97b22] flex items-center justify-center px-6 md:px-[120px] py-[26px]">
        <div className="flex items-center justify-center h-8 w-[126px]">
          <Link href="/">
            <img
              src={logoImage}
              alt="Snack"
              className="h-8 w-auto"
              loading="lazy"
            />
          </Link>
        </div>
      </header>
    );
  }

  // app variant (products, profile pages)
  return (
    <header className="sticky top-0 z-50 bg-[#fbf8f4] border-b border-[#e6e6e6] h-[88px] flex items-center justify-between px-6 md:px-[120px] py-[26px]">
      <div className="flex items-center gap-16">
        <Link href="/" className="flex items-center justify-center h-8 w-[126px]">
          <img
            src={logoImage}
            alt="Snack"
            className="h-8 w-auto"
            loading="lazy"
          />
        </Link>
        <nav className="hidden md:flex gap-10">
          <Link
            href="/products"
            className="h-[88px] flex items-center justify-center px-4 text-[20px] font-bold text-[#f97b22] leading-[32px]"
          >
            상품 리스트
          </Link>
        </nav>
      </div>
      {rightContent || (
        <div className="flex items-center gap-12">
          <Link
            href="/profile"
            className="h-[88px] flex items-center justify-center px-4 text-[20px] font-bold text-[#c4c4c4] leading-[32px] hover:text-[#f97b22] transition"
          >
            Profile
          </Link>
        </div>
      )}
    </header>
  );
}

