"use client";

import MyCalendar from "../components/myCalendar";
import LeftChevron from "../components/leftChevron";
import OutagePeriod from "../components/outagePeriod";
import RightChevron from "../components/rightChevron";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  // const name = "현경";
  // const month = 3;
  // const day = 14;
  // const week = 2;
  // const [isFadeOut, setIsFadeOut] = useState<boolean>(false);
  //set slash to !slash whey clicked
  return (
    <div className="bg-white px-10">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex pt-10 justify-end">
          <Image src="/CheerIcon.svg" alt="Your Company" width={200} height={200} className="ml-20 h-[121px] w-auto" priority={true} />
        </div>
        <h3 className="text-[#9F9FAC] text-[16px] te">마음먹기에 오신 걸 환영해요</h3>
        <h1 className="text-black font-semibold text-[26px]">마음먹기를 시작해볼까요?</h1>
      </div>
      <div className="mt-6">
        <div>
          {/* {error && <p className="text-red-500 text-center text-sm mt-5">{error}</p>} */}
          <div className="flex items-center space-x-4 md:space-x-2 justify-between mx-auto w-full my-8"></div>
        </div>
      </div>
      <button
        onClick={() => {
          location.href = "https://www.lifekeepsgettingbetter.com/?idx=1";
        }}
        onTouchEnd={() => {
          location.href = "https://www.lifekeepsgettingbetter.com/?idx=1";
        }}
        className="flex w-full justify-center py-5 hover:text-green2"
      >
        <span>결제 페이지로 가기</span>
      </button>
      <small className="text-center block text-xs text-black3 font-medium">
        주문번호를 잊었나요?{" "}
        <a href="" className="underline font-semibold text-black3 hover:text-black2">
          결제 알림톡을 확인해 보세요!
        </a>
      </small>
    </div>
  );
}
