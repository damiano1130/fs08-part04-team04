"use client";

import { useState } from "react";
import Link from "next/link";
import ProductDeleteModal from "./modals/ProductDeleteModal";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  purchaseCount: number;
};

const mockProducts: Product[] = [
  {
    id: 1,
    name: "코카콜라 제로",
    category: "청량・탄산음료",
    price: 2000,
    image: "/product-coke-zero.png",
    purchaseCount: 29,
  },
  {
    id: 2,
    name: "코카콜라",
    category: "청량・탄산음료",
    price: 2000,
    image: "/product-coke.png",
    purchaseCount: 29,
  },
  {
    id: 3,
    name: "환타 오렌지",
    category: "청량・탄산음료",
    price: 2000,
    image: "/product-fanta.png",
    purchaseCount: 29,
  },
  {
    id: 4,
    name: "스프라이트",
    category: "청량・탄산음료",
    price: 2000,
    image: "/product-sprite.png",
    purchaseCount: 29,
  },
  {
    id: 5,
    name: "코카콜라 제로",
    category: "청량・탄산음료",
    price: 2000,
    image: "/product-coke-zero.png",
    purchaseCount: 29,
  },
  {
    id: 6,
    name: "코카콜라",
    category: "청량・탄산음료",
    price: 2000,
    image: "/product-coke.png",
    purchaseCount: 29,
  },
  {
    id: 7,
    name: "환타 오렌지",
    category: "청량・탄산음료",
    price: 2000,
    image: "/product-fanta.png",
    purchaseCount: 29,
  },
  {
    id: 8,
    name: "스프라이트",
    category: "청량・탄산음료",
    price: 2000,
    image: "/product-sprite.png",
    purchaseCount: 29,
  },
];

type SortOption = "최신순" | "판매순" | "낮은가격순" | "높은가격순";

export default function ProductsPage() {
  const [sortOption, setSortOption] = useState<SortOption>("최신순");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [mainCategory, setMainCategory] = useState("음료");
  const [subCategory, setSubCategory] = useState("청량・탄산음료");
  const [showProductModal, setShowProductModal] = useState(false);

  const mainCategories = [
    "스낵",
    "음료",
    "생수",
    "간편식",
    "신선식품",
    "원두커피",
    "비품",
  ];

  const subCategories: Record<string, string[]> = {
    음료: ["청량・탄산음료", "과즙음료", "에너지음료", "원두커피", "건강음료"],
  };

  const sortOptions: SortOption[] = [
    "최신순",
    "판매순",
    "낮은가격순",
    "높은가격순",
  ];

  return (
    <div className="min-h-screen bg-[#fbf8f4] relative">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#fbf8f4] border-b border-[#e6e6e6] h-[88px] flex items-center justify-between px-6 md:px-[120px] py-[26px]">
        <div className="flex items-center gap-16">
          <Link
            href="/"
            className="flex items-center justify-center h-8 w-[126px]"
          >
            <img
              src="/snack-logo.png"
              alt="Snack"
              className="h-8 w-auto"
              loading="lazy"
            />
          </Link>
          <nav className="hidden md:flex gap-10">
            <Link
              href="/products"
              className="h-[88px] flex items-center justify-center px-4 text-[20px] font-bold text-[#f97b22] leading-[32px]"
            >
              상품 리스트
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-12">
          <Link
            href="/profile"
            className="h-[88px] flex items-center justify-center px-4 text-[20px] font-bold text-[#c4c4c4] leading-[32px] hover:text-[#f97b22] transition"
          >
            Profile
          </Link>
          <button className="h-[88px] flex items-center justify-center px-4 text-[20px] font-bold text-[#c4c4c4] leading-[32px]">
            Logout
          </button>
        </div>
      </header>

      {/* Main Category Tabs */}
      <div className="sticky top-[88px] z-40 bg-[#fbf8f4] border-b border-[#e6e6e6] h-[64px] flex items-center gap-3 px-6 md:px-[120px] overflow-x-auto">
        {mainCategories.map((category) => (
          <button
            key={category}
            onClick={() => setMainCategory(category)}
            className={`h-[64px] flex items-center justify-center px-4 py-[14px] text-[18px] leading-[26px] whitespace-nowrap transition ${
              mainCategory === category
                ? "font-bold text-[#f97b22] border-b-2 border-[#f97b22]"
                : "font-medium text-[#ababab]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Sub Category Tabs */}
      {subCategories[mainCategory] && (
        <div className="sticky top-[152px] z-40 bg-[#fbf8f4] border-b border-[#e6e6e6] h-[64px] flex items-center gap-3 px-6 md:px-[120px] overflow-x-auto">
          {subCategories[mainCategory].map((category) => (
            <button
              key={category}
              onClick={() => setSubCategory(category)}
              className={`h-[64px] flex items-center justify-center px-4 py-[14px] text-[16px] leading-[26px] whitespace-nowrap transition ${
                subCategory === category
                  ? "font-semibold text-[#f97b22]"
                  : "font-medium text-[#ababab]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Content Area */}
      <div className="px-6 md:px-[120px] py-6 md:py-14">
        {/* Sort Dropdown */}
        <div className="flex justify-end mb-6 relative">
          <button
            onClick={() => setShowSortDropdown(!showSortDropdown)}
            className="bg-white border border-[#e0e0e0] rounded-[8px] px-[14px] py-3 flex items-center justify-between gap-2 w-[136px]"
          >
            <span className="text-[18px] leading-[26px] text-[#999]">
              {sortOption}
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className={`transition-transform ${
                showSortDropdown ? "rotate-180" : ""
              }`}
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="#ababab"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {showSortDropdown && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowSortDropdown(false)}
              />
              <div className="absolute top-full mt-1 right-0 z-20 bg-white border border-[#e0e0e0] rounded-[8px] shadow-[4px_4px_8px_0px_rgba(236,236,236,0.25)] overflow-hidden w-[136px]">
                {sortOptions.map((option, index) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortOption(option);
                      setShowSortDropdown(false);
                    }}
                    className={`w-full px-[14px] py-3 text-[18px] leading-[26px] text-[#999] text-center hover:bg-gray-50 transition ${
                      index === 0 ? "rounded-tl-[8px] rounded-tr-[8px]" : ""
                    } ${
                      index === sortOptions.length - 1
                        ? "rounded-bl-[8px] rounded-br-[8px]"
                        : ""
                    } ${sortOption === option ? "bg-gray-50" : ""}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mb-24">
          <button className="bg-white border border-[#f97b22] rounded-[16px] px-6 py-4 shadow-[4px_4px_10px_0px_rgba(195,217,242,0.2)] flex items-center gap-2 hover:bg-[#fef3eb] transition">
            <span className="text-[20px] font-semibold text-[#f97b22] leading-[32px]">
              더보기
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="rotate-180"
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
        </div>
      </div>

      {/* FAB - Register Product Button */}
      <button
        onClick={() => setShowProductModal(true)}
        className="fixed bottom-8 right-6 md:right-[calc(12.5%-43px)] bg-[#64d396] rounded-full px-4 py-4 shadow-[4px_0px_10px_0px_rgba(204,204,204,0.12),0px_4px_8px_0px_rgba(0,0,0,0.08)] flex items-center gap-2 hover:bg-[#5bc088] transition z-30"
      >
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
        <span className="text-[24px] font-semibold text-white leading-[32px] hidden md:inline">
          상품 등록
        </span>
      </button>

      {/* Product Registration Modal */}
      {showProductModal && (
        <ProductRegistrationModal
          onClose={() => setShowProductModal(false)}
          mainCategories={mainCategories}
          subCategories={subCategories}
          mainCategory={mainCategory}
          subCategory={subCategory}
          onMainCategoryChange={setMainCategory}
          onSubCategoryChange={setSubCategory}
        />
      )}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [isLiked, setIsLiked] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-6">
        {/* Product Image Card */}
        <div className="bg-white rounded-[20px] h-[402px] relative shadow-[4px_4px_20px_0px_rgba(250,247,243,0.25)] flex items-center justify-center p-[73px]">
          {/* Like Button */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center z-10"
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

          {/* Delete Button (Kebab Menu) */}
          <button
            onClick={() => setShowDeleteModal(true)}
            className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center z-10"
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

          {/* Product Image */}
          <div className="w-[140px] h-[243px] relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[16px] leading-[26px] text-[#999]">
                {product.category}
              </span>
              <div className="bg-[#fee8b0] px-2 py-1 rounded">
                <span className="text-[16px] font-semibold text-[#f97b22] leading-[26px]">
                  {product.purchaseCount}회 구매
                </span>
              </div>
            </div>
            <h3 className="text-[20px] font-semibold text-[#1f1f1f] leading-[32px]">
              {product.name}
            </h3>
          </div>
          <div>
            <p className="text-[32px] font-bold text-[#1f1f1f] leading-[42px]">
              {product.price.toLocaleString()}원
            </p>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <ProductDeleteModal
          productName={product.name}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={() => {
            // TODO: 상품 삭제 로직 구현
            console.log("상품 삭제:", product.id);
            setShowDeleteModal(false);
          }}
        />
      )}
    </>
  );
}

type ProductRegistrationModalProps = {
  onClose: () => void;
  mainCategories: string[];
  subCategories: Record<string, string[]>;
  mainCategory: string;
  subCategory: string;
  onMainCategoryChange: (category: string) => void;
  onSubCategoryChange: (category: string) => void;
};

function ProductRegistrationModal({
  onClose,
  mainCategories,
  subCategories,
  mainCategory,
  subCategory,
  onMainCategoryChange,
  onSubCategoryChange,
}: ProductRegistrationModalProps) {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [productLink, setProductLink] = useState("");
  const [showMainCategoryDropdown, setShowMainCategoryDropdown] =
    useState(false);
  const [showSubCategoryDropdown, setShowSubCategoryDropdown] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // TODO: 상품 등록 로직 구현
    console.log({
      productName,
      mainCategory,
      subCategory,
      price,
      productLink,
      image: imagePreview,
    });
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-[#fbf8f4] rounded-[32px] shadow-[4px_4px_10px_0px_rgba(169,169,169,0.2)] p-6 md:p-8 w-[90%] max-w-[680px] max-h-[90vh] overflow-y-auto">
        {/* Title */}
        <div className="mb-4">
          <h2 className="text-[24px] font-bold text-[#1f1f1f] leading-[32px]">
            상품 등록
          </h2>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#e6e6e6] mb-8" />

        {/* Form */}
        <div className="flex flex-col gap-8">
          {/* Product Name */}
          <div className="flex flex-col gap-4">
            <label className="text-[20px] font-semibold text-[#1f1f1f] leading-[32px]">
              상품명
            </label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="상품명을 입력해주세요."
              className="h-16 w-full px-[14px] rounded-[16px] border border-[#fcc49c] bg-white text-[20px] leading-[32px] text-[#1f1f1f] placeholder:text-[#ababab] focus:border-[#f97b22] focus:outline-none focus:ring-2 focus:ring-[#f97b22]/30 transition"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-4">
            <label className="text-[20px] font-semibold text-[#1f1f1f] leading-[32px]">
              카테고리
            </label>
            <div className="flex gap-2">
              {/* Main Category Dropdown */}
              <div className="flex-1 relative">
                <button
                  onClick={() => {
                    setShowMainCategoryDropdown(!showMainCategoryDropdown);
                    setShowSubCategoryDropdown(false);
                  }}
                  className="w-full h-16 px-[14px] rounded-[16px] border border-[#fcc49c] bg-white flex items-center justify-between text-[20px] leading-[32px] text-[#ababab] focus:border-[#f97b22] focus:outline-none focus:ring-2 focus:ring-[#f97b22]/30 transition"
                >
                  <span className={mainCategory ? "text-[#1f1f1f]" : ""}>
                    {mainCategory || "대분류"}
                  </span>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transition-transform ${
                      showMainCategoryDropdown ? "rotate-180" : ""
                    }`}
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
                {showMainCategoryDropdown && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowMainCategoryDropdown(false)}
                    />
                    <div className="absolute top-full mt-1 left-0 right-0 z-20 bg-white border border-[#fcc49c] rounded-[16px] shadow-lg overflow-hidden">
                      {mainCategories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            onMainCategoryChange(category);
                            setShowMainCategoryDropdown(false);
                          }}
                          className="w-full px-[14px] py-3 text-[20px] leading-[32px] text-[#1f1f1f] text-left hover:bg-gray-50 transition"
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Sub Category Dropdown */}
              <div className="flex-1 relative">
                <button
                  onClick={() => {
                    if (subCategories[mainCategory]) {
                      setShowSubCategoryDropdown(!showSubCategoryDropdown);
                      setShowMainCategoryDropdown(false);
                    }
                  }}
                  disabled={!subCategories[mainCategory]}
                  className="w-full h-16 px-[14px] rounded-[16px] border border-[#fcc49c] bg-white flex items-center justify-between text-[20px] leading-[32px] text-[#ababab] focus:border-[#f97b22] focus:outline-none focus:ring-2 focus:ring-[#f97b22]/30 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className={subCategory ? "text-[#1f1f1f]" : ""}>
                    {subCategory || "소분류"}
                  </span>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transition-transform ${
                      showSubCategoryDropdown ? "rotate-180" : ""
                    }`}
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
                {showSubCategoryDropdown && subCategories[mainCategory] && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowSubCategoryDropdown(false)}
                    />
                    <div className="absolute top-full mt-1 left-0 right-0 z-20 bg-white border border-[#fcc49c] rounded-[16px] shadow-lg overflow-hidden">
                      {subCategories[mainCategory].map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            onSubCategoryChange(category);
                            setShowSubCategoryDropdown(false);
                          }}
                          className="w-full px-[14px] py-3 text-[20px] leading-[32px] text-[#1f1f1f] text-left hover:bg-gray-50 transition"
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="flex flex-col gap-4">
            <label className="text-[20px] font-semibold text-[#1f1f1f] leading-[32px]">
              가격
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="가격을 입력해주세요."
              className="h-16 w-full px-[14px] rounded-[16px] border border-[#fcc49c] bg-white text-[20px] leading-[32px] text-[#1f1f1f] placeholder:text-[#ababab] focus:border-[#f97b22] focus:outline-none focus:ring-2 focus:ring-[#f97b22]/30 transition"
            />
          </div>

          {/* Product Image */}
          <div className="flex flex-col gap-4">
            <label className="text-[20px] font-semibold text-[#1f1f1f] leading-[32px]">
              상품 이미지
            </label>
            <label className="w-[160px] h-[160px] border border-[#fcc49c] bg-white rounded-[6px] flex items-center justify-center cursor-pointer hover:bg-gray-50 transition">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="상품 이미지 미리보기"
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
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Product Link */}
          <div className="flex flex-col gap-4">
            <label className="text-[20px] font-semibold text-[#1f1f1f] leading-[32px]">
              제품링크
            </label>
            <input
              type="url"
              value={productLink}
              onChange={(e) => setProductLink(e.target.value)}
              placeholder="링크를 입력해주세요."
              className="h-16 w-full px-[14px] rounded-[16px] border border-[#fcc49c] bg-white text-[20px] leading-[32px] text-[#1f1f1f] placeholder:text-[#ababab] focus:border-[#f97b22] focus:outline-none focus:ring-2 focus:ring-[#f97b22]/30 transition"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between gap-4 mt-8">
          <button
            onClick={onClose}
            className="flex-1 h-16 bg-[#fdf0df] rounded-[16px] text-[20px] font-semibold text-[#f97b22] leading-[32px] hover:bg-[#fde1cd] transition"
          >
            취소
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 h-16 bg-[#f97b22] rounded-[16px] text-[20px] font-semibold text-white leading-[32px] hover:bg-[#e06a1a] transition"
          >
            등록하기
          </button>
        </div>
      </div>
    </>
  );
}
