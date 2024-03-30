"use client";

import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import Thead from "./thead";

import AccordianItems from "./AccordianItems";
import GetWeeksOfCurrentMonth from "@/utility/getDayInformation";
import MyMonth from "./myMonth";
import MyMonthList from "./myMonth";

export default function MyCalendar() {
  /** 달력 각 월에 대해 스크롤 했을 때 터치하는 것 그대로 따라가되, 어느정도 임계치 이상을 넘기고 손가락을 뗏을때 다음
   * 월로 탄력적으로 이동하게 끔 애니메이션을 구현한다.
   */

  /**
   * drag할때마다 기본적으로 애니메이션 효과에 의해 pastMonth 혹은 futureMonth가 보이게 된다.
   * 이후에, offset을 부여하여 설정한 pastMonth futureMonth를 중심으로 하는 {offset-1, offset, offset +1} 3개의
   * Month Component에 대해 rendering될 수 있도록 useState를 통해 관리한다.
   * 주어진 offset을 MyMonthList를 통해 넘겨주면 해당 offset에 대한 Month Component가 rendering된다.
   */
  const [monthOffset, setMonthOffset] = useState<number>(0);

  //애니메이션 상태 관리

  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState<number>(0);
  const [currentPageY, setCurrentPageY] = useState(-200); // 현재 페이지 Y 위치
  const [animProps, setAnimProps] = useSpring(() => ({
    to: { transform: `translateY(${currentPageY}px)` },
  }));

  const handleDragStart = (event: any) => {
    event.preventDefault();
    setIsDragging(true);

    setStartY(event.clientY || event.touches[0].clientY); // 터치 지원
    console.log("dragstart", startY);
  };

  const handleDragMove = (event: any) => {
    if (!isDragging) return;
    event.preventDefault();
    let currentY = event.clientY || event.touches[0].clientY;

    console.log("dragmove", currentY - startY);
    setAnimProps({
      to: { transform: `translateY(${currentY - startY + currentPageY}px)` }, // 드래그하는 동안 실시간으로 이동
      immediate: true, // 애니메이션 없이 즉시 반영
    });
  };

  const handleDragEnd = (event: any) => {
    if (!isDragging) return;
    event.preventDefault();

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
          onRest: () => {
            setMonthOffset((prev) => prev + 1);
          },
        });
        setCurrentPageY((prev) => prev + 200);

        console.log("currentPageY", currentPageY);
      } else {
        setAnimProps({
          to: { transform: `translateY(${currentPageY - 200}px)` }, // 최종 위치로 애니메이션
          immediate: false, // 애니메이션 적용
          onRest: () => {
            setMonthOffset((prev) => prev - 1);
          },
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
          <div className="flex flex-col items-center justify-between">
            <Thead />
            <div className="w-full overflow-hidden max-h-[200px] relative">
              <animated.div
                onMouseMove={handleDragMove}
                onTouchMove={handleDragMove}
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                style={animProps}
                className="flex flex-col w-full h-full draggable"
              >
                <MyMonthList offset={0} />
              </animated.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
