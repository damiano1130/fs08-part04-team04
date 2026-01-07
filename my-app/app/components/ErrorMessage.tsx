"use client";

type ErrorMessageProps = {
  message: string;
  className?: string;
};

export default function ErrorMessage({ message, className = "" }: ErrorMessageProps) {
  return (
    <div className={`p-4 bg-red-50 border border-red-200 rounded-[16px] text-red-600 text-[16px] text-center ${className}`}>
      {message}
    </div>
  );
}

