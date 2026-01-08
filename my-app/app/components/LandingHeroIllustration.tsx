"use client";

export default function LandingHeroIllustration() {
  // Figma 디자인 기준: 전체 컨테이너 1674px x 564px
  // 원본 내부 구조: 1674px x 1189px
  // 높이 비율: 564 / 1189 = 0.4744 (47.44%)

  // Figma 좌표 분석 (원본 1189px 기준):
  // - Ellipse: left-1/2 top-[157px] translate-x-[-50%], h-[1032px] w-[1674px]
  //   → ellipse 하단 = 157 + 1032 = 1189px (원본 컨테이너 하단과 일치)
  // - Group 3 (바구니): left-[443px] top-[333px], 759px x 409px
  //   → 바구니 하단 = 333 + 409 = 742px
  //   → ellipse 하단(1189px)과 바구니 하단(742px)을 맞추려면 바구니를 447px 아래로 이동
  //   → 컨테이너 564px 기준: bottom: 0% (컨테이너 하단 = ellipse 하단)

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Ellipse - Figma 정확한 위치 */}
      {/* 원본: left-1/2 top-[157px] translate-x-[-50%], h-[1032px] w-[1674px] */}
      {/* 컨테이너 564px 기준: top = 157/1189 = 13.2%, 높이는 원본 비율 유지 */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-full"
        style={{
          top: "13.2%", // 157/1189 = 13.2%
          height: "489px", // 1032 * 0.4744 = 489px (축소된 높이)
        }}
      >
        <img
          src="/landing-ellipse.svg"
          alt=""
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Main Illustration Groups - Figma 정확한 좌표 기준 */}
      <div className="absolute inset-0">
        {/* Group 1 - Rotated element: Figma left-[804px] top-0, rotate-[15deg], 344.421px x 365.401px */}
        <div
          className="absolute"
          style={{
            left: "48%", // 804/1674
            top: "0%",
            width: "20.6%", // 344.421/1674
            transform: "rotate(15deg) scaleY(0.4744)",
            transformOrigin: "top center",
          }}
        >
          <img
            src="/landing-group-1.svg"
            alt=""
            className="w-full h-full object-contain"
            loading="lazy"
            style={{ aspectRatio: "344.421/365.401" }}
          />
        </div>

        {/* Group 2: Figma left-[476px] top-[141px], 298px x 298px */}
        <div
          className="absolute"
          style={{
            left: "28.4%", // 476/1674
            top: "11.9%", // 141/1189
            width: "17.8%", // 298/1674
            transform: "scaleY(0.4744)",
            transformOrigin: "top",
          }}
        >
          <img
            src="/landing-group-2.svg"
            alt=""
            className="w-full h-full object-contain"
            loading="lazy"
            style={{ aspectRatio: "298/298" }}
          />
        </div>

        {/* Group 3 - Grid pattern (바구니): Figma left-[443px] top-[333px], 759px x 409px */}
        {/* 바구니 하단을 ellipse 하단과 정확히 맞춤 */}
        {/* 원본: 바구니 하단 = 742px, ellipse 하단 = 1189px */}
        {/* 바구니를 컨테이너 하단(ellipse 하단)에 맞춤 */}
        <div
          className="absolute"
          style={{
            left: "26.4%", // 443/1674
            bottom: "0%", // ellipse 하단(컨테이너 하단)에 정확히 맞춤
            width: "45.3%", // 759/1674
            transform: "scaleY(0.4744)",
            transformOrigin: "bottom", // 하단 기준으로 스케일
          }}
        >
          <img
            src="/landing-group-3.svg"
            alt=""
            className="w-full h-full object-contain"
            loading="lazy"
            style={{ aspectRatio: "759/409" }}
          />
        </div>

        {/* Group 4 - Main illustration (강아지): Figma left-[539px] top-[74px], 587.999px x 328.863px */}
        <div
          className="absolute"
          style={{
            left: "32.2%", // 539/1674
            top: "6.2%", // 74/1189
            width: "35.1%", // 588/1674
            transform: "scaleY(0.4744)",
            transformOrigin: "top",
          }}
        >
          <img
            src="/landing-group-4.svg"
            alt=""
            className="w-full h-full object-contain"
            loading="lazy"
            style={{ aspectRatio: "587.999/328.863" }}
          />
        </div>
      </div>
    </div>
  );
}
