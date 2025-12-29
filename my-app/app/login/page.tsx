"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="min-h-screen bg-[#fbf8f4] relative">
      {/* Header */}
      <header className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-[88px] bg-[#f97b22] flex items-center justify-center px-6 md:px-[120px] py-[26px]">
        <div className="flex items-center justify-center h-8 w-[126px]">
          <img
            src="/snack-logo.png"
            alt="Snack"
            className="h-8 w-auto"
            loading="lazy"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-[35px] flex flex-col items-center gap-12 md:gap-16 px-4 w-full max-w-[640px]">
        {/* Title */}
        <div className="flex flex-col items-center">
          <h1 className="text-[32px] font-semibold leading-[42px] text-[#1f1f1f] text-center">
            로그인
          </h1>
        </div>

        {/* Login Form */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-start gap-14">
              {/* Input Fields */}
              <div className="flex flex-col items-start gap-8">
                {/* Email Field */}
                <div className="flex flex-col items-start gap-4 w-full">
                  <label className="text-[20px] font-normal leading-[32px] text-[#1f1f1f]">
                    이메일
                  </label>
                  <div className="relative w-full">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="이메일을 입력해주세요."
                      className="w-full h-16 px-[14px] rounded-[16px] border border-[#fcc49c] bg-white text-[20px] leading-[32px] text-[#1f1f1f] placeholder:text-[#ababab] focus:border-[#f97b22] focus:outline-none focus:ring-2 focus:ring-[#f97b22]/30 transition"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="flex flex-col items-start gap-4 w-full">
                  <label className="text-[20px] font-normal leading-[32px] text-[#1f1f1f]">
                    비밀번호
                  </label>
                  <div className="relative w-full">
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
              </div>

              {/* Login Button */}
              <button
                type="button"
                disabled={!isFormValid}
                className={`w-full h-16 rounded-[16px] text-[20px] font-semibold text-center text-white transition ${
                  isFormValid
                    ? "bg-[#f97b22] hover:bg-[#e06a1a] cursor-pointer"
                    : "bg-[#e0e0e0] cursor-not-allowed"
                }`}
              >
                로그인
              </button>
            </div>

            {/* Footer Link */}
            <div className="flex items-center justify-center gap-2 text-[20px] leading-[32px] w-full max-w-[419px]">
              <span className="text-[#999999] font-normal">
                기업 담당자이신가요?
              </span>
              <Link
                href="/signup"
                className="text-[#f97b22] font-semibold underline decoration-solid underline-offset-2 hover:text-[#e06a1a] transition"
              >
                가입하기
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
