"use client";
interface MonthData {
  weeks: Date[][];
  colorStatusWeeks: number[][];
  isFadeoutWeeks: number[];
}
type MonthAll = [MonthData, MonthData, MonthData];

import AccordianItems from "./AccordianItems";
import { useEffect, useRef, useState } from "react";

export default function MyMonthList({
  recentMonths: recentMonths,
}: {
  recentMonths: MonthAll;
}) {
  // 현재 월에 해당하는 주별 날짜 2차원 배열을 가져옴
  // console.log(recentMonths[0].weeks[0][0].getMonth());
  //현재 접혀있지 않는 주차들을 관리한다.
  const [openIndexList, setOpenIndexList] = useState<number[]>(
    recentMonths[1].isFadeoutWeeks
  );
  const [firstRender, setFirstRender] = useState(false);
  useEffect(() => {
    setOpenIndexList(recentMonths[1].isFadeoutWeeks);
  }, [recentMonths]);

  const toggle = (index: number) => {
    console.log("toggle 실행됨.", openIndexList, index);
    let newIndex: number[];
    //openIndexList의 sum을 구한다.
    let summedValue = openIndexList.reduce((a, b) => a + b, 0);
    if (openIndexList[index] == 1 && summedValue == 1) {
      newIndex = openIndexList.map((item: number, i: number) => 1);
    } else {
      newIndex = openIndexList.map((item: number, i: number) =>
        i === index ? 1 : 0
      );
    }
    console.log(openIndexList, newIndex);
    setOpenIndexList(newIndex);
  };
  return (
    <>
      {openIndexList.reduce((a, b) => a + b, 0) == 1 ? (
        <>
          <div className="w-[318px] h-[200px]"></div>
          {recentMonths[1].weeks.map((week, weekindex) => (
            <AccordianItems
              key={weekindex}
              openIndexList={openIndexList}
              setOpenIndexList={setOpenIndexList}
              open={openIndexList[weekindex] == 1}
              weekindex={weekindex}
              week={recentMonths[1].weeks[weekindex]}
              colorStatusWeeks={recentMonths[1].colorStatusWeeks}
            />
          ))}
          <div className="w-[318px] h-[200px]"></div>
        </>
      ) : (
        <>
          {recentMonths.map((month, monthindex) => {
            return (
              <div key={monthindex}>
                {month.weeks.map((week, weekindex) => (
                  <button
                    className="w-full"
                    key={weekindex}
                    onClick={() => toggle(weekindex)}
                  >
                    <AccordianItems
                      key={weekindex}
                      openIndexList={openIndexList}
                      setOpenIndexList={setOpenIndexList}
                      open={openIndexList[weekindex] == 1}
                      weekindex={weekindex}
                      week={month.weeks[weekindex]}
                      colorStatusWeeks={month.colorStatusWeeks}
                    />
                  </button>
                ))}
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
