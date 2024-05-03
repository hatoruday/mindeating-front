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
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <Image src="/cheerIcon.svg" alt="cheerIcon" width={300} height={300} />
      </div>
      <div>
        <span>결제 페이지로 가기</span>
      </div>
      <div className="flex flex-col w-full justify-center content-center">
        <span>LOGIN</span>
        <span>INFO</span>
        <span>CONTENTS</span>
        <span>MIND</span>
        <span>ACTIVITY</span>
        <span>SLEEP</span>
        <span>EMOTION</span>
      </div>
    </div>
  );
}
