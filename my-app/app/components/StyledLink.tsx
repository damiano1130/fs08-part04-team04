"use client";

import Link from "next/link";
import { ReactNode } from "react";

type StyledLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "default" | "underline" | "nav";
  className?: string;
};

export default function StyledLink({
  href,
  children,
  variant = "default",
  className = "",
}: StyledLinkProps) {
  const variantStyles = {
    default: "font-bold hover:opacity-80 transition",
    underline: "font-semibold text-[#f97b22] underline decoration-solid underline-offset-2 hover:text-[#e06a1a] transition",
    nav: "font-bold text-[#c4c4c4] hover:text-[#f97b22] transition",
  };

  return (
    <Link href={href} className={`${variantStyles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

