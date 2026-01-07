"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import HeaderNavLink from "../components/HeaderNavLink";

export default function ProfilePage() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState("코드잇");
  const [name, setName] = useState("김스낵");
  const [email, setEmail] = useState("codeit@email.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 로그아웃 처리
  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const isFormValid =
    password.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    password === confirmPassword;

  return (
    <div className="min-h-screen bg-[#fbf8f4] relative">
      {/* Header */}
      <Header
        variant="app"
        rightContent={
          <div className="flex items-center gap-12">
            <HeaderNavLink href="/profile" active>
              Profile
            </HeaderNavLink>
            <HeaderNavLink variant="button" onClick={handleLogout}>
              Logout
            </HeaderNavLink>
          </div>
        }
      />

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
            <Input
              label="기업명"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="bg-[#fbf8f4] border-[#e6e6e6] text-[#999]"
            />

            {/* Name */}
            <Input
              label="이름"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#fbf8f4] border-[#e6e6e6] text-[#999]"
            />

            {/* Email */}
            <Input
              label="이메일"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#fbf8f4] border-[#e6e6e6] text-[#999]"
            />

            {/* Password */}
            <Input
              label="비밀번호"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해주세요."
              showPasswordToggle
            />

            {/* Confirm Password */}
            <Input
              label="비밀번호 확인"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="비밀번호를 다시 한 번 입력해주세요."
              showPasswordToggle
            />
          </div>

          {/* Submit Button */}
          <Button
            type="button"
            variant={isFormValid ? "primary" : "disabled"}
            fullWidth
            disabled={!isFormValid}
          >
            변경하기
          </Button>
        </div>
      </main>
    </div>
  );
}




