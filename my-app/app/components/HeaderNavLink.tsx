"use client";

import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

type HeaderNavLinkProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  active?: boolean;
  variant?: "link" | "button";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function HeaderNavLink({
  href,
  onClick,
  children,
  active = false,
  variant = "link",
  className = "",
  ...props
}: HeaderNavLinkProps) {
  const baseStyles =
    "h-[88px] flex items-center justify-center px-4 text-[20px] font-bold leading-[32px] transition";

  const activeStyles = active
    ? "text-[#f97b22]"
    : "text-[#c4c4c4] hover:text-[#f97b22]";

  const combinedClassName = `${baseStyles} ${activeStyles} ${className}`;

  if (variant === "button" || onClick) {
    return (
      <button onClick={onClick} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return null;
}

