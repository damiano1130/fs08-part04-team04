"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductDeleteModal from "./modals/ProductDeleteModal";
import Header from "../components/Header";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Tab from "../components/Tab";
import FAB from "../components/FAB";
import LikeButton from "../components/LikeButton";
import KebabMenuButton from "../components/KebabMenuButton";
import Input from "../components/Input";
import ImageUpload from "../components/ImageUpload";
import Modal from "../components/Modal";
import HeaderNavLink from "../components/HeaderNavLink";

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
  const router = useRouter();
  const [sortOption, setSortOption] = useState<SortOption>("최신순");
  const [mainCategory, setMainCategory] = useState("음료");
  const [subCategory, setSubCategory] = useState("청량・탄산음료");
  const [showProductModal, setShowProductModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  // 인증 상태 확인
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/me");
        const data = await response.json();
        if (data.success) {
          setIsAuthenticated(true);
        } else {
          router.push("/login");
        }
      } catch (error) {
        console.error("Auth check error:", error);
        router.push("/login");
      } finally {
        setIsChecking(false);
      }
    };

    checkAuth();
  }, [router]);

  // 로그아웃 처리
  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // 인증 확인 중이면 로딩 표시
  if (isChecking) {
    return (
      <div className="min-h-screen bg-[#fbf8f4] flex items-center justify-center">
        <div className="text-[20px] text-[#1f1f1f]">로딩 중...</div>
      </div>
    );
  }

  // 인증되지 않았으면 아무것도 렌더링하지 않음 (리다이렉트 중)
  if (!isAuthenticated) {
    return null;
  }

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
      <Header
        variant="app"
        rightContent={
          <div className="flex items-center gap-12">
            <HeaderNavLink href="/profile">Profile</HeaderNavLink>
            <HeaderNavLink variant="button" onClick={handleLogout}>
              Logout
            </HeaderNavLink>
          </div>
        }
      />

      {/* Main Category Tabs */}
      <div className="sticky top-[88px] z-40 bg-[#fbf8f4] border-b border-[#e6e6e6] h-[64px] px-6 md:px-[120px]">
        <Tab
          tabs={mainCategories}
          activeTab={mainCategory}
          onTabChange={setMainCategory}
          variant="underline"
        />
      </div>

      {/* Sub Category Tabs */}
      {subCategories[mainCategory] && (
        <div className="sticky top-[152px] z-40 bg-[#fbf8f4] border-b border-[#e6e6e6] h-[64px] px-6 md:px-[120px]">
          <Tab
            tabs={subCategories[mainCategory]}
            activeTab={subCategory}
            onTabChange={setSubCategory}
          />
        </div>
      )}

      {/* Content Area */}
      <div className="px-6 md:px-[120px] py-6 md:py-14">
        {/* Sort Dropdown */}
        <div className="flex justify-end mb-6">
          <Dropdown
            options={sortOptions.map((opt) => ({ value: opt, label: opt }))}
            value={sortOption}
            onChange={(value) => setSortOption(value as SortOption)}
            className="w-[136px]"
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mb-24">
          <Button variant="outline" className="px-6 py-4 shadow-[4px_4px_10px_0px_rgba(195,217,242,0.2)] flex items-center gap-2">
            <span>더보기</span>
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
          </Button>
        </div>
      </div>

      {/* FAB - Register Product Button */}
      <FAB
        onClick={() => setShowProductModal(true)}
        label="상품 등록"
      />

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
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-6">
        {/* Product Image Card */}
        <div className="bg-white rounded-[20px] h-[402px] relative shadow-[4px_4px_20px_0px_rgba(250,247,243,0.25)] flex items-center justify-center p-[73px]">
          {/* Like Button */}
          <LikeButton className="absolute top-4 right-4" />

          {/* Delete Button (Kebab Menu) */}
          <KebabMenuButton
            onClick={() => setShowDeleteModal(true)}
            className="absolute top-4 left-4"
          />

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
    <Modal isOpen={true} onClose={onClose}>
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
          <Input
            label="상품명"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="상품명을 입력해주세요."
          />

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
          <Input
            label="가격"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="가격을 입력해주세요."
          />

          {/* Product Image */}
          <ImageUpload
            label="상품 이미지"
            preview={imagePreview}
            onImageChange={(file, preview) => setImagePreview(preview)}
          />

          {/* Product Link */}
          <Input
            label="제품링크"
            type="url"
            value={productLink}
            onChange={(e) => setProductLink(e.target.value)}
            placeholder="링크를 입력해주세요."
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between gap-4 mt-8">
          <Button
            onClick={onClose}
            variant="secondary"
            fullWidth
          >
            취소
          </Button>
          <Button
            onClick={handleSubmit}
            variant="primary"
            fullWidth
          >
            등록하기
          </Button>
        </div>
    </Modal>
  );
}
