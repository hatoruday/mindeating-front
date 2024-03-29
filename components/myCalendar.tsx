"use client";

import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
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
  //현재 접혀있지 않는 주차들을 관리한다.
  const [openIndex, setOpenIndex] = useState<number[]>(isFadeoutWeeks);
  const toggle = (index: any, isDragging: boolean) => {
    if (isDragging) return;
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

  /** 달력 각 월에 대해 스크롤 했을 때 터치하는 것 그대로 따라가되, 어느정도 임계치 이상을 넘기고 손가락을 뗏을때 다음
   * 월로 탄력적으로 이동하게 끔 애니메이션을 구현한다.
   */

  //애니메이션 상태 관리

  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState<number>(0);
  const [currentPageY, setCurrentPageY] = useState(0); // 현재 페이지 Y 위치
  const [animProps, setAnimProps] = useSpring(() => ({
    to: { transform: `translateY(${currentPageY}px)` },
  }));

  const handleDragStart = (event: any) => {
    setIsDragging(true);

    setStartY(event.clientY || event.touches[0].clientY); // 터치 지원
    console.log("dragstart", startY);
  };

  const handleDragMove = (event: any) => {
    if (!isDragging) return;
    let currentY = event.clientY || event.touches[0].clientY;

    console.log("dragmove", currentY - startY);
    setAnimProps({
      to: { transform: `translateY(${currentY - startY + currentPageY}px)` }, // 드래그하는 동안 실시간으로 이동
      immediate: true, // 애니메이션 없이 즉시 반영
    });
  };

  const handleDragEnd = (event: any) => {
    if (!isDragging) return;

    // 여기서 임계값을 기준으로 최종 위치 결정 및 애니메이션 적용
    // 예를 들어, diffY가 특정 값 이상이면 다음 페이지로 넘어가게 설정
    // currentPageY를 업데이트하여 최종 위치 반영
    // 예: setCurrentPageY((prev) => prev + 100) 또는 다른 로직
    let currentY = event.clientY || event.changedTouches[0].clientY; // 터치 이벤트 대응
    let endingdiffY = currentY - startY;

    console.log("dragend", endingdiffY);
    if (Math.abs(endingdiffY) > 20) {
      if (endingdiffY > 0) {
        setAnimProps({
          to: { transform: `translateY(${currentPageY + 200}px)` }, // 최종 위치로 애니메이션
          immediate: false, // 애니메이션 적용
        });
        setCurrentPageY((prev) => prev + 200);
        console.log("currentPageY", currentPageY);
      } else {
        setAnimProps({
          to: { transform: `translateY(${currentPageY - 200}px)` }, // 최종 위치로 애니메이션
          immediate: false, // 애니메이션 적용
        });
        setCurrentPageY((prev) => prev - 200);
        console.log("currentPageY", currentPageY);
      }
    }

    setIsDragging(false);
  };

  return (
    <div
      className="flex flex-col items-center justify-start px-4"
      onTouchEnd={handleDragEnd}
      onMouseUp={handleDragEnd}
    >
      <div className="max-w-sm w-full">
        <div className="md:p-5 p-2  bg-white rounded-t">
          <div className="flex items-center justify-between">
            <div className="w-full">
              <Thead />
              <animated.div
                onMouseMove={handleDragMove}
                onTouchMove={handleDragMove}
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                style={animProps}
                className=" flex flex-col w-full h-full"
              >
                {weeks.map((week, weekindex) => (
                  <AccordianItems
                    key={weekindex}
                    open={1 == openIndex[weekindex]}
                    toggle={() => toggle(weekindex, isDragging)}
                    weekindex={weekindex}
                    week={weeks[weekindex]}
                    colorStatusWeeks={colorStatusWeeks}
                  />
                ))}
              </animated.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
