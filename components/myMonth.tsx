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
  isFadeOut,
  setIsfadeOut,
  setSelectDate,
  setCurrentPageY,
}: {
  recentMonths: MonthAll;
  isFadeOut: boolean;
  setIsfadeOut: any;
  setSelectDate: any;
  setCurrentPageY: any;
}) {
  // 현재 월에 해당하는 주별 날짜 2차원 배열을 가져옴
  // console.log(recentMonths[0].weeks[0][0].getMonth());
  //현재 접혀있지 않는 주차들을 관리한다.
  const [openIndexList, setOpenIndexList] = useState<number[][]>([recentMonths[0].isFadeoutWeeks, recentMonths[1].isFadeoutWeeks, recentMonths[2].isFadeoutWeeks]);

  useEffect(() => {
    setOpenIndexList([recentMonths[0].isFadeoutWeeks, recentMonths[1].isFadeoutWeeks, recentMonths[2].isFadeoutWeeks]);
  }, [recentMonths]);

  const dragStartRef = useRef(false); // 드래그 시작을 확인하기 위한 ref
  const handleMouseDown = (weekindex: number) => {
    dragStartRef.current = false; // 드래그 시작 상태 초기화

    const handleMouseMove = () => {
      dragStartRef.current = true; // 마우스 무브가 발생하면 드래그 시작으로 표시
      document.removeEventListener("mousemove", handleMouseMove);
    };

    const handleMouseUp = () => {
      if (!dragStartRef.current) {
        toggle(weekindex); // 드래그가 시작되지 않았다면 toggle 실행
      }
      // 이벤트 리스너 제거
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };

    // 이벤트 리스너 추가
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const toggle = (index: number) => {
    // console.log("toggle 실행됨.", openIndexList, index);
    let newIndex: number[];
    //openIndexList의 sum을 구한다.
    let summedValue = openIndexList[1].reduce((a, b) => a + b, 0);
    if (openIndexList[1][index] == 1 && summedValue == 1) {
      newIndex = openIndexList[1].map((item: number, i: number) => 1);
    } else {
      newIndex = openIndexList[1].map((item: number, i: number) => (i === index ? 1 : 0));
    }
    // console.log(openIndexList, newIndex);
    setOpenIndexList([openIndexList[0], newIndex, openIndexList[2]]);
    setIsfadeOut(!isFadeOut);
  };

  const handleTouchStart = (weekindex: number) => {
    dragStartRef.current = false; // 드래그 시작 상태 초기화

    const handleTouchMove = () => {
      dragStartRef.current = true; // 터치 무브가 발생하면 드래그 시작으로 표시
      document.removeEventListener("touchmove", handleTouchMove);
    };

    const handleTouchEnd = () => {
      if (!dragStartRef.current) {
        toggle(weekindex); // 드래그가 시작되지 않았다면 toggle 실행
      }
      // 이벤트 리스너 제거
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("touchmove", handleTouchMove);
    };

    // 이벤트 리스너 추가
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };
  return (
    <>
      {recentMonths.map((month, monthindex) => {
        return (
          <div key={monthindex}>
            {month.weeks.map((week, weekindex) => (
              <div className="w-full" key={weekindex} onMouseDown={() => handleMouseDown(weekindex)} onTouchStart={() => handleTouchStart(weekindex)}>
                <AccordianItems
                  key={weekindex}
                  openIndexList={openIndexList[1]}
                  setOpenIndexList={setOpenIndexList}
                  open={openIndexList[1][weekindex] == 1 || monthindex != 1}
                  weekindex={weekindex}
                  week={month.weeks[weekindex]}
                  colorStatusWeeks={month.colorStatusWeeks}
                  setSelectDate={setSelectDate}
                />
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
}
