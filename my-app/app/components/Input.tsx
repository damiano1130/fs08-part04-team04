"use client";

import { InputHTMLAttributes, useState } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  showPasswordToggle?: boolean;
  containerClassName?: string;
};

export default function Input({
  label,
  error,
  showPasswordToggle = false,
  containerClassName = "",
  className = "",
  type = "text",
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className={`flex flex-col gap-4 ${containerClassName}`}>
      {label && (
        <label className="text-[20px] font-normal leading-[32px] text-[#1f1f1f]">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={inputType}
          className={`
            w-full h-16 px-[14px] ${isPassword && showPasswordToggle ? "pr-12" : ""}
            rounded-[16px] border bg-white
            text-[20px] leading-[32px] text-[#1f1f1f]
            placeholder:text-[#ababab]
            focus:border-[#f97b22] focus:outline-none focus:ring-2 focus:ring-[#f97b22]/30
            transition
            ${error ? "border-red-300" : "border-[#fcc49c]"}
            ${className}
          `}
          {...props}
        />
        {isPassword && showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-auto"
          >
            <img
              src={showPassword ? "/icon-visibility-on.svg" : "/icon-visibility-off.svg"}
              alt={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
              className="h-6 w-6 opacity-60"
              loading="lazy"
            />
          </button>
        )}
      </div>
      {error && (
        <p className="text-[14px] text-red-600 leading-[20px]">{error}</p>
      )}
    </div>
  );
}

