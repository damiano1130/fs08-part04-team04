"use client";

import { useState } from "react";
import ProductDeleteModal from "./ProductDeleteModal";

export default function ModalsTestPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#fbf8f4] flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-[32px] font-bold text-[#1f1f1f]">
          상품 삭제 모달 테스트
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-8 py-4 bg-[#f97b22] text-white rounded-[16px] text-[20px] font-semibold hover:bg-[#e06a1a] transition"
        >
          모달 열기
        </button>

        {showModal && (
          <ProductDeleteModal
            productName="코카콜라 제로"
            onClose={() => setShowModal(false)}
            onConfirm={() => {
              alert("상품이 삭제되었습니다!");
              setShowModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
}

