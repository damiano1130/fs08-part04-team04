"use client";

import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  maxWidth?: string;
  showBackdrop?: boolean;
};

export default function Modal({
  isOpen,
  onClose,
  children,
  className = "",
  maxWidth = "max-w-[680px]",
  showBackdrop = true,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      {showBackdrop && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={onClose}
        />
      )}

      {/* Modal */}
      <div
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-[#fbf8f4] rounded-[32px] shadow-[4px_4px_10px_0px_rgba(169,169,169,0.2)] p-6 md:p-8 w-[90%] ${maxWidth} max-h-[90vh] overflow-y-auto ${className}`}
      >
        {children}
      </div>
    </>
  );
}

