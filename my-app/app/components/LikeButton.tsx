"use client";

import { useState, ButtonHTMLAttributes } from "react";

type LikeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  initialLiked?: boolean;
  onLikeChange?: (isLiked: boolean) => void;
  size?: "sm" | "md" | "lg";
};

export default function LikeButton({
  initialLiked = false,
  onLikeChange,
  size = "md",
  className = "",
  ...props
}: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(initialLiked);

  const sizeStyles = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const handleClick = () => {
    const newLiked = !isLiked;
    setIsLiked(newLiked);
    onLikeChange?.(newLiked);
  };

  return (
    <button
      onClick={handleClick}
      className={`${sizeStyles[size]} flex items-center justify-center z-10 ${className}`}
      {...props}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        className={isLiked ? "text-red-500" : "text-gray-300"}
      >
        <path
          d="M24 36.7L21.1 34.1C10.8 25.4 4 19.7 4 12.5C4 6.9 8.5 2.5 14.1 2.5C17.3 2.5 20.4 4.1 24 6.9C27.6 4.1 30.7 2.5 33.9 2.5C39.5 2.5 44 6.9 44 12.5C44 19.7 37.2 25.4 26.9 34.1L24 36.7Z"
          fill={isLiked ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

