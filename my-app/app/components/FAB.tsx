"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

type FABProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
  label?: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
};

export default function FAB({
  icon,
  label,
  position = "bottom-right",
  className = "",
  children,
  ...props
}: FABProps) {
  const positionStyles = {
    "bottom-right": "bottom-8 right-6 md:right-[calc(12.5%-43px)]",
    "bottom-left": "bottom-8 left-6 md:left-[calc(12.5%-43px)]",
    "top-right": "top-8 right-6 md:right-[calc(12.5%-43px)]",
    "top-left": "top-8 left-6 md:left-[calc(12.5%-43px)]",
  };

  const defaultIcon = (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      className="text-white"
    >
      <path
        d="M18 9V27M9 18H27"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <button
      className={`fixed ${positionStyles[position]} bg-[#64d396] rounded-full px-4 py-4 shadow-[4px_0px_10px_0px_rgba(204,204,204,0.12),0px_4px_8px_0px_rgba(0,0,0,0.08)] flex items-center gap-2 hover:bg-[#5bc088] transition z-30 ${className}`}
      {...props}
    >
      {icon || defaultIcon}
      {label && (
        <span className="text-[24px] font-semibold text-white leading-[32px] hidden md:inline">
          {label}
        </span>
      )}
      {children}
    </button>
  );
}

