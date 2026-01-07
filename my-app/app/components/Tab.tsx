"use client";

type TabProps = {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  variant?: "default" | "underline";
  className?: string;
};

export default function Tab({
  tabs,
  activeTab,
  onTabChange,
  variant = "default",
  className = "",
}: TabProps) {
  if (variant === "underline") {
    return (
      <div className={`flex items-center gap-3 overflow-x-auto ${className}`}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`
              h-[64px] flex items-center justify-center px-4 py-[14px]
              text-[18px] leading-[26px] whitespace-nowrap transition
              ${
                activeTab === tab
                  ? "font-bold text-[#f97b22] border-b-2 border-[#f97b22]"
                  : "font-medium text-[#ababab]"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 overflow-x-auto ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`
            h-[64px] flex items-center justify-center px-4 py-[14px]
            text-[16px] leading-[26px] whitespace-nowrap transition
            ${
              activeTab === tab
                ? "font-semibold text-[#f97b22]"
                : "font-medium text-[#ababab]"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

