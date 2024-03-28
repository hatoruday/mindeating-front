"use client";

import MyCalendar from "../components/myCalendar";
import LeftChevron from "../components/leftChevron";
import OutagePeriod from "../components/outagePeriod";
import RightChevron from "../components/rightChevron";

export default function HomePage() {
  const name = "현경";
  const month = 3;
  const day = 14;
  const week = 2;

  //set slash to !slash whey clicked
  return (
    <div>
      <div className="flex flex-1 flex-col justify-center">
        <header className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h3 className="text-[#9F9FAC] text-[16px] te">
            안녕하세요! 오늘도 파이팅해봐요:{")"}
          </h3>
          <h1 className="text-black text-[26px] font-normal">
            <span className="font-semibold">{name}님</span>의 마음 냉장고
          </h1>
        </header>
        {/* 식욕안정기 3월 14일 / 마음먹기 2주차 < > */}
        <aside className="mt-10 flex w-full justify-around items-center font-normal">
          <OutagePeriod name="식욕안정기" />
          <span className="text-[14px]">
            {month}월 {day}일 / 마음먹기 {week} 주차
          </span>
          {/*< > 양쪽 꺽쇠 관련 컴포넌트*/}
          <div className="flex items-center">
            <button
              aria-label="calendar backward"
              className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
            >
              <LeftChevron />
            </button>
            <button
              aria-label="calendar forward"
              className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
            >
              {<RightChevron />}
            </button>
          </div>
        </aside>
        {/* 캘린더 */}
        <MyCalendar />
      </div>
    </div>
  );
}
