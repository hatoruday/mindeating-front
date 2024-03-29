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
  //애니메이션 상태 관리
  const [animProps, setAnimProps] = useSpring(() => ({
    to: { transform: "translateY(-100%)" },
    from: { transform: "translateY(0%)" },
  }));

  // 여기에서 useRef에 대한 타입을 HTMLDivElement로 명시적으로 지정합니다.
  const calendarRef = useRef<HTMLDivElement>(null); // 달력 컴포넌트에 대한 ref
  const [isDragging, setIsDragging] = useState(false); // 드래그 상태
  const [startY, setStartY] = useState(0); // 드래그 시작 Y 위치

  useEffect(() => {
    const handleMouseDown = (event: any) => {
      setIsDragging(true);
      setStartY(event.clientY); // 마우스 다운 위치 저장
    };

    const handleMouseMove = (event: any) => {
      if (isDragging) {
        const currentY = event.clientY;
        const diffY = startY - currentY;
        if (diffY > 0) {
          // 위로 드래그
          console.log("위로 드래그", diffY);
          // 여기서 달력을 다음 달로 넘기는 로직 구현
        } else if (diffY < 0) {
          // 아래로 드래그
          console.log("아래로 드래그", diffY);
          // 여기서 달력을 이전 달로 넘기는 로직 구현
        }
        setAnimProps({ transform: `translateY(${diffY}px)` });
      }
    };
    const handleDragStart = (position: any) => {
      setIsDragging(true);
      setStartY(position);
    };

    const handleDragMove = (position: any) => {
      if (!isDragging) return;
      const diffY = startY - position;
      if (diffY > 0) {
        // 위로 드래그
        console.log("위로 드래그", diffY);
        // 여기서 달력을 다음 달로 넘기는 로직 구현
      } else if (diffY < 0) {
        // 아래로 드래그
        console.log("아래로 드래그", diffY);
        // 여기서 달력을 이전 달로 넘기는 로직 구현
      }
      setAnimProps({ transform: `translateY(${diffY}px)` });
    };

    const handleDragEnd = () => {
      setIsDragging(false);
    };
    // 모바일 터치 이벤트 핸들러
    const handleTouchStart = (event: any) => {
      const touch = event.touches[0];
      handleDragStart(touch.clientY);
    };

    const handleTouchMove = (event: any) => {
      const touch = event.touches[0];
      handleDragMove(touch.clientY);
    };

    const handleTouchEnd = () => {
      handleDragEnd();
    };

    const handleMouseUp = () => {
      setIsDragging(false); // 드래그 종료
    };
    const calendarElement = calendarRef.current;
    if (calendarElement) {
      // 마우스 이벤트
      calendarElement.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      // 터치 이벤트
      calendarElement.addEventListener("touchstart", handleTouchStart);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
      return () => {
        calendarElement.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        calendarElement.removeEventListener("touchstart", handleTouchStart);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [isDragging, startY, setAnimProps]);

  return (
    <div className="flex items-center justify-center py-8 px-4">
      <div className="max-w-sm w-full">
        <div className="md:p-5 p-2  bg-white rounded-t">
          <div className="flex items-center justify-between">
            <div className="w-full">
              <Thead />
              <animated.div
                ref={calendarRef}
                style={animProps}
                className="pt-4 mt-4 flex flex-col w-full h-full"
              >
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
              </animated.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
