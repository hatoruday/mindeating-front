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
  specificDay,
  loadNew,
  setCurrentPageY,
}: {
  recentMonths: MonthAll;
  isFadeOut: boolean;
  setIsfadeOut: any;
  setSelectDate: any;
  setCurrentPageY: any;
  loadNew: any;
  specificDay?: string;
}) {
  // 현재 월에 해당하는 주별 날짜 2차원 배열을 가져옴
  // console.log(recentMonths[0].weeks[0][0].getMonth());
  //현재 접혀있지 않는 주차들을 관리한다.
  const [openIndexList, setOpenIndexList] = useState<number[][]>([recentMonths[0].isFadeoutWeeks, recentMonths[1].isFadeoutWeeks, recentMonths[2].isFadeoutWeeks]);
  const [hasToggled, setHasToggled] = useState(false);
  useEffect(() => {
    if (!hasToggled && specificDay) {
      // 여기에서 specificDay를 기반으로 특정 week를 찾는 로직을 구현합니다.
      // 예시에서는 단순화를 위해 defaultWeekIndex를 사용합니다.
      let specificWeekIndex = 0;
      recentMonths[1].weeks.forEach((week, weekIndex) => {
        //specificDay가 해당 주에 포함되어 있다면
        if (week.some((day) => day.toDateString() === new Date(specificDay).toDateString())) {
          specificWeekIndex = weekIndex;
        }
      });
      console.log("specificDay 실행됨.");
      toggle(specificWeekIndex);
      setHasToggled(true); // toggle이 실행되었음을 표시

      // specificDay에 해당하는 날짜를 선택 상태로 설정
      const specificDate = new Date(specificDay);
      setSelectDate(specificDate);
    }
  }, [specificDay, openIndexList]);
  // useEffect(() => {
  //   setOpenIndexList([recentMonths[0].isFadeoutWeeks, recentMonths[1].isFadeoutWeeks, recentMonths[2].isFadeoutWeeks]);
  // }, [recentMonths]);

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
    // loadNew();
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
                  open={openIndexList[1][weekindex] == 1 || monthindex != 1 || weekindex == 5}
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
