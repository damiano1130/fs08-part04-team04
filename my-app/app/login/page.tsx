"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import StyledLink from "../components/StyledLink";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || isLoading) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // 로그인 성공 - 홈 또는 상품 페이지로 리다이렉트
        router.push("/products");
      } else {
        setError(data.message || "로그인에 실패했습니다.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("서버 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf8f4] relative">
      {/* Header */}
      <Header variant="auth" />

      {/* Main Content */}
      <main className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-[35px] flex flex-col items-center gap-12 md:gap-16 px-4 w-full max-w-[640px]">
        {/* Title */}
        <div className="flex flex-col items-center">
          <h1 className="text-[32px] font-semibold leading-[42px] text-[#1f1f1f] text-center">
            로그인
          </h1>
        </div>

        {/* Login Form */}
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center gap-6 w-full">
            {/* Error Message */}
            {error && <ErrorMessage message={error} className="w-full" />}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-14 w-full max-w-[640px]"
            >
              {/* Input Fields */}
              <div className="flex flex-col items-center gap-8 w-full">
                <Input
                  label="이메일"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일을 입력해주세요."
                  containerClassName="w-full"
                />
                <Input
                  label="비밀번호"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력해주세요."
                  showPasswordToggle
                  containerClassName="w-full"
                />
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                variant={isFormValid && !isLoading ? "primary" : "disabled"}
                fullWidth
                isLoading={isLoading}
                disabled={!isFormValid || isLoading}
              >
                로그인
              </Button>
            </form>

            {/* Footer Link */}
            <div className="flex items-center justify-center gap-2 text-[20px] leading-[32px] w-full max-w-[419px]">
              <span className="text-[#999999] font-normal">
                아직 계정이 없으신가요?
              </span>
              <StyledLink href="/signup" variant="underline">
                회원가입
              </StyledLink>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
