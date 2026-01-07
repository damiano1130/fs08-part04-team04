"use client";

import { useState, useRef, useEffect } from "react";

type DropdownOption = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
};

export default function Dropdown({
  options,
  value,
  onChange,
  placeholder = "선택해주세요",
  className = "",
  disabled = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`
          w-full h-16 px-[14px] rounded-[16px] border bg-white
          flex items-center justify-between
          text-[20px] leading-[32px]
          focus:border-[#f97b22] focus:outline-none focus:ring-2 focus:ring-[#f97b22]/30
          transition
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          ${selectedOption ? "text-[#1f1f1f] border-[#fcc49c]" : "text-[#ababab] border-[#fcc49c]"}
        `}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#f97b22"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full mt-1 left-0 right-0 z-20 bg-white border border-[#fcc49c] rounded-[16px] shadow-lg overflow-hidden">
            {options.map((option, index) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`
                  w-full px-[14px] py-3 text-[20px] leading-[32px] text-[#1f1f1f] text-left
                  hover:bg-gray-50 transition
                  ${index === 0 ? "rounded-tl-[16px] rounded-tr-[16px]" : ""}
                  ${index === options.length - 1 ? "rounded-bl-[16px] rounded-br-[16px]" : ""}
                  ${value === option.value ? "bg-gray-50" : ""}
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

