"use client";

import GetWeeksOfCurrentMonth from "@/utility/getDayInformation";
import AccordianItems from "./AccordianItems";
import { useEffect, useRef, useState } from "react";

interface MyMonthProps {
  offset: number;
}
interface MyWeekProps {
  currentWeeks: Date[][];
  pastWeeks: Date[][];
  futureWeeks: Date[][];
}
interface MyColorProps {
  currentColors: number[][];
  pastColors: number[][];
  futureColors: number[][];
}
export default function MyMonthList({ offset }: MyMonthProps) {
  // 현재 월에 해당하는 주별 날짜 2차원 배열을 가져옴
  const today = new Date();
  const [currentWeeks, currentColorStatusWeeks, currentIsFadeoutWeeks] =
    GetWeeksOfCurrentMonth(today.getMonth() + 1, today.getFullYear());
  const [pastWeeks, pastColorStatusWeeks, pastIsFadeoutWeeks] =
    GetWeeksOfCurrentMonth(today.getMonth(), today.getFullYear());
  const [futureWeeks, futureColorStatusWeeks, futureIsFadeoutWeeks] =
    GetWeeksOfCurrentMonth(today.getMonth() + 2, today.getFullYear());
  //현재 접혀있지 않는 주차들을 관리한다.
  const [openIndexList, setOpenIndexList] = useState<number[]>(
    currentIsFadeoutWeeks
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
      <div>
        {pastWeeks.map((week, weekindex) => (
          <AccordianItems
            key={weekindex}
            open={true}
            toggle={() => toggle(weekindex)}
            weekindex={weekindex}
            week={pastWeeks[weekindex]}
            colorStatusWeeks={pastColorStatusWeeks}
          />
        ))}
      </div>
      <div>
        {currentWeeks.map((week, weekindex) => (
          <AccordianItems
            key={weekindex}
            open={1 == openIndexList[weekindex]}
            toggle={() => toggle(weekindex)}
            weekindex={weekindex}
            week={currentWeeks[weekindex]}
            colorStatusWeeks={currentColorStatusWeeks}
          />
        ))}
      </div>
      <div>
        {futureWeeks.map((week, weekindex) => (
          <AccordianItems
            key={weekindex}
            open={true}
            toggle={() => toggle(weekindex)}
            weekindex={weekindex}
            week={futureWeeks[weekindex]}
            colorStatusWeeks={futureColorStatusWeeks}
          />
        ))}
      </div>
    </>
  );
}
