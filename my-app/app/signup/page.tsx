"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import StyledLink from "../components/StyledLink";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const isFormValid =
    email.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    password === confirmPassword;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || isLoading) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // 회원가입 성공 - 로그인 페이지로 리다이렉트
        router.push("/login");
      } else {
        setError(data.message || "회원가입에 실패했습니다.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("서버 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf8f4] text-[#1f1f1f]">
      <Header variant="auth" />

      <main className="mx-auto flex max-w-[760px] flex-col items-center px-4 pb-24 pt-16 md:pt-24">
        <h1 className="text-center text-[32px] font-semibold leading-[42px]">
          안녕하세요, 스낵에 오신 걸 환영합니다
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-12 flex w-full max-w-[640px] flex-col gap-14"
          aria-label="회원가입"
        >
          {/* Error Message */}
          {error && <ErrorMessage message={error} />}
          <div className="flex flex-col gap-8">
            <Input
              label="이메일"
              placeholder="이메일을 입력해주세요."
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showPasswordToggle
            />
            <Input
              label="비밀번호 확인"
              placeholder="비밀번호를 다시 한 번 입력해주세요."
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              showPasswordToggle
            />
          </div>

          <Button
            type="submit"
            variant={isFormValid && !isLoading ? "primary" : "disabled"}
            fullWidth
            isLoading={isLoading}
            disabled={!isFormValid || isLoading}
          >
            시작하기
          </Button>

          <div className="flex items-center justify-center gap-2 text-[20px] leading-8">
            <span className="text-[#999999]">이미 계정이 있으신가요?</span>
            <StyledLink href="/login" variant="underline">
              로그인
            </StyledLink>
          </div>
        </form>
      </main>
    </div>
  );
}

