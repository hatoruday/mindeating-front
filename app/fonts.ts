// https://fonts.google.com/variablefonts 여기에서 Fonts를 찾아서 추가합니다.
import { IBM_Plex_Sans_KR, Gowun_Dodum } from "next/font/google";

// Font의 classnames를 합치는 공통 함수
const sumClass = (...classnames: string[]) => {
  return classnames.join(" ");
};

// noto_sans_kr에 Noto_Sans_KR 적용
const noto_sans_kr = IBM_Plex_Sans_KR({
  subsets: ["latin"], // preload에 사용할 subsets 또는 preload: false
  weight: ["100", "400", "700"], // 사용할 wght 설정
  variable: "--ibm_plex_sans_kr", // tailwindcss에서 사용할 수 있도록 CSS 변수 방식 설정
  display: "swap", // font-display 설정
});

// single_day에 Single_Day 적용
const gowun = Gowun_Dodum({
  weight: ["400"],
  variable: "--gowun-dodum-variable",
  subsets: ["latin"],
  display: "swap",
});

// 폰트가 추가되면 여기에 ,(콤마)로 구분하여 추가함 - 외부에서 FontClassNames를 불러와 적용함
export const FontClassNames = sumClass(noto_sans_kr.className, gowun.variable);
