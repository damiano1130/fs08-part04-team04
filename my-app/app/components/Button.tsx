"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "disabled";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  isLoading = false,
  fullWidth = false,
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "rounded-[16px] font-semibold text-center transition focus:outline-none focus:ring-2 focus:ring-[#f97b22]/30";
  
  const variantStyles = {
    primary: "bg-[#f97b22] text-white hover:bg-[#e06a1a] disabled:bg-[#e0e0e0] disabled:cursor-not-allowed",
    secondary: "bg-[#fdf0df] text-[#f97b22] hover:bg-[#fde1cd]",
    outline: "bg-white border border-[#f97b22] text-[#f97b22] hover:bg-[#fef3eb]",
    ghost: "bg-transparent text-[#c4c4c4] hover:text-[#f97b22]",
    disabled: "bg-[#e0e0e0] text-white cursor-not-allowed",
  };

  const sizeStyles = {
    sm: "h-12 px-4 text-[16px] leading-[24px]",
    md: "h-16 px-6 text-[20px] leading-[32px]",
    lg: "h-20 px-8 text-[24px] leading-[36px]",
  };

  const isDisabled = disabled || isLoading || variant === "disabled";

  return (
    <button
      disabled={isDisabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {isLoading ? "처리 중..." : children}
    </button>
  );
}

