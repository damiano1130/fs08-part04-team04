"use client";

export default function LandingHeroIllustration() {
  // Figma 디자인 기준: 전체 컨테이너 1674px x 1189px
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Ellipse - Figma: left-1/2, top-[157px], translate-x-[-50%], 1674px x 1032px */}
      <div className="absolute left-1/2 top-[13.2%] -translate-x-1/2 w-full" style={{ height: "86.8%" }}>
        <img
          src="/landing-ellipse.svg"
          alt=""
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Main Illustration Groups - Figma 정확한 위치 기반 */}
      <div className="absolute inset-0">
        {/* Group 1 - Rotated element: Figma left-[804px] top-0, rotate-[15deg], 344.421px x 365.401px */}
        <div 
          className="absolute rotate-[15deg] origin-center"
          style={{
            left: "48%", // 804/1674 ≈ 48%
            top: "0%",
            width: "20.6%", // 344.421/1674
            height: "30.7%", // 365.401/1189
          }}
        >
          <img
            src="/landing-group-1.svg"
            alt=""
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Group 2: Figma left-[476px] top-[141px], 298px x 298px */}
        <div
          className="absolute"
          style={{
            left: "28.4%", // 476/1674
            top: "11.9%", // 141/1189
            width: "17.8%", // 298/1674
            height: "25.1%", // 298/1189
          }}
        >
          <img
            src="/landing-group-2.svg"
            alt=""
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Group 3 - Grid pattern: Figma left-[443px] top-[333px], 759px x 409px */}
        <div
          className="absolute"
          style={{
            left: "26.4%", // 443/1674
            top: "28%", // 333/1189
            width: "45.3%", // 759/1674
            height: "34.4%", // 409/1189
          }}
        >
          <img
            src="/landing-group-3.svg"
            alt=""
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Group 4 - Main illustration: Figma left-[539px] top-[74px], 587.999px x 328.863px */}
        <div
          className="absolute"
          style={{
            left: "32.2%", // 539/1674
            top: "6.2%", // 74/1189
            width: "35.1%", // 588/1674
            height: "27.7%", // 329/1189
          }}
        >
          <img
            src="/landing-group-4.svg"
            alt=""
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

