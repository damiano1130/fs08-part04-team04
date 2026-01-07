"use client";

import { ButtonHTMLAttributes } from "react";

type KebabMenuButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
};

export default function KebabMenuButton({
  size = "md",
  className = "",
  ...props
}: KebabMenuButtonProps) {
  const sizeStyles = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <button
      className={`${sizeStyles[size]} flex items-center justify-center z-10 ${className}`}
      {...props}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-[#ababab]"
      >
        <circle cx="12" cy="6" r="1.5" fill="currentColor" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <circle cx="12" cy="18" r="1.5" fill="currentColor" />
      </svg>
    </button>
  );
}

