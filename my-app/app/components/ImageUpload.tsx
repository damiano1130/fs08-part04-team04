"use client";

import { InputHTMLAttributes, useState, useRef } from "react";

type ImageUploadProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> & {
  label?: string;
  preview?: string | null;
  onImageChange?: (file: File | null, preview: string | null) => void;
  containerClassName?: string;
  previewClassName?: string;
};

export default function ImageUpload({
  label,
  preview: controlledPreview,
  onImageChange,
  containerClassName = "",
  previewClassName = "",
  className = "",
  ...props
}: ImageUploadProps) {
  const [internalPreview, setInternalPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const preview = controlledPreview ?? internalPreview;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setInternalPreview(result);
        onImageChange?.(file, result);
      };
      reader.readAsDataURL(file);
    } else {
      setInternalPreview(null);
      onImageChange?.(null, null);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`flex flex-col gap-4 ${containerClassName}`}>
      {label && (
        <label className="text-[20px] font-semibold text-[#1f1f1f] leading-[32px]">
          {label}
        </label>
      )}
      <label
        onClick={handleClick}
        className={`w-[160px] h-[160px] border border-[#fcc49c] bg-white rounded-[6px] flex items-center justify-center cursor-pointer hover:bg-gray-50 transition ${previewClassName}`}
      >
        {preview ? (
          <img
            src={preview}
            alt="이미지 미리보기"
            className="w-full h-full object-cover rounded-[6px]"
          />
        ) : (
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[#e0e0e0]"
          >
            <path
              d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z"
              fill="currentColor"
            />
          </svg>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          {...props}
        />
      </label>
    </div>
  );
}

