"use client";

import { useState } from "react";

import Thead from "./thead";

import AccordianItems from "./AccordianItems";
import GetWeeksOfCurrentMonth from "@/utility/getDayInformation";

export default function MyCalendar() {
  // 현재 월에 해당하는 주별 날짜 2차원 배열을 가져옴
  // const today = new Date();
  const [weeks, colorStatusWeeks, isFadeoutWeeks] = GetWeeksOfCurrentMonth(
    3,
    2024
  );
  const [openIndex, setOpenIndex] = useState<number[]>(isFadeoutWeeks);
  const toggle = (index: any) => {
    let newIndex: number[];
    let summedValue = openIndex.reduce((a, b) => a + b, 0);
    if (openIndex[index] == 1 && summedValue == 1) {
      newIndex = openIndex.map((item: number, i: number) => 1);
    } else {
      newIndex = openIndex.map((item: number, i: number) =>
        i === index ? 1 : 0
      );
    }

    setOpenIndex(newIndex);
  };

  return (
    <div className="flex items-center justify-center py-8 px-4">
      <div className="max-w-sm w-full">
        <div className="md:p-5 p-2  bg-white rounded-t">
          <div className="flex items-center justify-between">
            <div className="w-full">
              <Thead />
              <div className="pt-4 mt-4 flex flex-col w-full h-full">
                {weeks.map((week, weekindex) => (
                  <AccordianItems
                    key={weekindex}
                    open={1 == openIndex[weekindex]}
                    toggle={() => toggle(weekindex)}
                    weekindex={weekindex}
                    week={weeks[weekindex]}
                    colorStatusWeeks={colorStatusWeeks}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
