"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [companyName, setCompanyName] = useState("코드잇");
  const [name, setName] = useState("김스낵");
  const [email, setEmail] = useState("codeit@email.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isFormValid =
    password.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    password === confirmPassword;

  return (
    <div className="min-h-screen bg-[#fbf8f4] relative">
      {/* Header */}
      <header className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-[88px] bg-[#fbf8f4] border-b border-[#e6e6e6] flex items-center justify-between px-6 md:px-[120px] py-[26px]">
        <div className="flex items-center gap-16">
          <Link
            href="/"
            className="flex items-center justify-center h-8 w-[126px]"
          >
            <img
              src="/snack-logo.png"
              alt="Snack"
              className="h-8 w-auto"
              loading="lazy"
            />
          </Link>
          <nav className="hidden md:flex gap-10">
            <Link
              href="/products"
              className="h-[88px] flex items-center justify-center px-4 text-[20px] font-bold text-[#ababab] leading-[32px]"
            >
              상품 리스트
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-12">
          <Link
            href="/profile"
            className="h-[88px] flex items-center justify-center px-4 text-[20px] font-bold text-[#f97b22] leading-[32px]"
          >
            Profile
          </Link>
          <button className="h-[88px] flex items-center justify-center px-4 text-[20px] font-bold text-[#c4c4c4] leading-[32px]">
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-[44px] flex flex-col items-center gap-20 px-4 w-full max-w-[640px]">
        {/* Title */}
        <div className="w-full">
          <h1 className="text-[32px] font-semibold leading-[42px] text-[#1f1f1f] text-center">
            내 프로필
          </h1>
        </div>

        {/* Form */}
        <div className="w-full flex flex-col gap-14">
          <div className="flex flex-col gap-8">
            {/* Company Name */}
            <div className="flex flex-col gap-4">
              <label className="text-[20px] font-normal leading-[32px] text-[#1f1f1f]">
                기업명
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full h-16 px-6 py-[14px] rounded-[16px] border border-[#e6e6e6] bg-[#fbf8f4] text-[20px] leading-[32px] text-[#999] focus:border-[#f97b22] focus:outline-none focus:ring-2 focus:ring-[#f97b22]/30 transition"
              />
            </div>

            {/* Name */}
            <div className="flex flex-col gap-4">
              <label className="text-[20px] font-normal leading-[32px] text-[#1f1f1f]">
                이름
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-16 px-6 py-[14px] rounded-[16px] border border-[#e6e6e6] bg-[#fbf8f4] text-[20px] leading-[32px] text-[#999] focus:border-[#f97b22] focus:outline-none focus:ring-2 focus:ring-[#f97b22]/30 transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-4">
              <label className="text-[20px] font-normal leading-[32px] text-[#1f1f1f]">
                이메일
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-16 px-6 py-[14px] rounded-[16px] border border-[#e6e6e6] bg-[#fbf8f4] text-[20px] leading-[32px] text-[#999] focus:border-[#f97b22] focus:outline-none focus:ring-2 focus:ring-[#f97b22]/30 transition"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-4">
              <label className="text-[20px] font-normal leading-[32px] text-[#1f1f1f]">
                비밀번호
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력해주세요."
                  className="w-full h-16 px-[14px] pr-12 rounded-[16px] border border-[#fcc49c] bg-white text-[20px] leading-[32px] text-[#1f1f1f] placeholder:text-[#ababab] focus:border-[#f97b22] focus:outline-none focus:ring-2 focus:ring-[#f97b22]/30 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-auto"
                >
                  <img
                    src="/icon-visibility.png"
                    alt={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
                    className="h-6 w-6 opacity-60"
                    loading="lazy"
                  />
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-4">
              <label className="text-[20px] font-normal leading-[32px] text-[#1f1f1f]">
                비밀번호 확인
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="비밀번호를 다시 한 번 입력해주세요."
                  className="w-full h-16 px-[14px] pr-12 rounded-[16px] border border-[#fcc49c] bg-white text-[20px] leading-[32px] text-[#1f1f1f] placeholder:text-[#ababab] focus:border-[#f97b22] focus:outline-none focus:ring-2 focus:ring-[#f97b22]/30 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-auto"
                >
                  <img
                    src="/icon-visibility.png"
                    alt={
                      showConfirmPassword ? "비밀번호 숨기기" : "비밀번호 보기"
                    }
                    className="h-6 w-6 opacity-60"
                    loading="lazy"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            disabled={!isFormValid}
            className={`w-full h-16 rounded-[16px] text-[20px] font-semibold text-center text-white transition ${
              isFormValid
                ? "bg-[#f97b22] hover:bg-[#e06a1a] cursor-pointer"
                : "bg-[#e0e0e0] cursor-not-allowed"
            }`}
          >
            변경하기
          </button>
        </div>
      </main>
    </div>
  );
}



