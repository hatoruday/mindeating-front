"use client";

import GetWeeksOfCurrentMonth from "@/utility/getDayInformation";
import AccordianItems from "./AccordianItems";
import { useEffect, useRef, useState } from "react";
import getMonthAll from "@/utility/getDayInformation";

interface MyMonthProps {
  offset: number;
}

export default function MyMonthList({ offset }: MyMonthProps) {
  // 현재 월에 해당하는 주별 날짜 2차원 배열을 가져옴
  let recentMonths = getMonthAll(offset);
  //현재 접혀있지 않는 주차들을 관리한다.
  const [openIndexList, setOpenIndexList] = useState<number[]>(
    recentMonths[1].isFadeoutWeeks
  );
  const toggle = (index: any) => {
    let newIndex: number[];
    let summedValue = openIndexList.reduce((a, b) => a + b, 0);
    if (openIndexList[index] == 1 && summedValue == 1) {
      newIndex = openIndexList.map((item: number, i: number) => 1);
    } else {
      newIndex = openIndexList.map((item: number, i: number) =>
        i === index ? 1 : 0
      );
    }
    setOpenIndexList(newIndex);
  };
  return (
    <>
      {recentMonths.map((month, monthindex) => {
        return (
          <div key={monthindex}>
            {month.weeks.map((week, weekindex) => (
              <AccordianItems
                key={weekindex}
                open={!(1 != openIndexList[weekindex] && monthindex == 1)}
                toggle={() => {
                  () => toggle(weekindex);
                }}
                weekindex={weekindex}
                week={month.weeks[weekindex]}
                colorStatusWeeks={month.colorStatusWeeks}
              />
            ))}
          </div>
        );
      })}
    </>
  );
}
