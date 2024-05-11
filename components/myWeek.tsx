import { useRef } from "react";
import MyDay from "./myday";

interface MyWeekProps {
  week: Date[];
  weekindex: number;
  colorStatusWeeks: number[][];
  setSelectDate: any;
  higherHandleToggle: any;
}

export default function MyWeek({ week, higherHandleToggle, weekindex, colorStatusWeeks, setSelectDate }: MyWeekProps) {
  const dragStartRef = useRef(false); // 드래그 시작을 확인하기 위한 ref
  const handleMouseDown = (day: Date) => {
    dragStartRef.current = false; // 드래그 시작 상태 초기화

    const handleMouseMove = () => {
      dragStartRef.current = true; // 마우스 무브가 발생하면 드래그 시작으로 표시
      document.removeEventListener("mousemove", handleMouseMove);
    };

    const handleMouseUp = (day: Date) => {
      if (!dragStartRef.current) {
        // console.log("toggle 실행");
        selectToggle(day); // 드래그가 시작되지 않았다면 toggle 실행
      }
      // 이벤트 리스너 제거
      document.removeEventListener("mouseup", () => {
        handleMouseUp(day);
      });
      document.removeEventListener("mousemove", handleMouseMove);
    };

    // 이벤트 리스너 추가
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", () => handleMouseUp(day));
  };
  const selectToggle = (day: Date) => {
    // console.log("setSelecttoggle 실행", day);
    higherHandleToggle(weekindex);
    setSelectDate(day);
  };
  const handleTouchStart = (day: Date) => {
    dragStartRef.current = false; // 드래그 시작 상태 초기화

    const handleTouchMove = () => {
      dragStartRef.current = true; // 터치 무브가 발생하면 드래그 시작으로 표시
      document.removeEventListener("touchmove", handleTouchMove);
    };

    const handleTouchEnd = () => {
      if (!dragStartRef.current) {
        selectToggle(day); // 드래그가 시작되지 않았다면 toggle 실행
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
    <div key={weekindex} className={"flex justify-between items-center cursor-pointer"}>
      {week.map((day: Date, dayindex: number) => (
        <button onClick={() => selectToggle(day)} onTouchStart={() => handleTouchStart(day)} key={dayindex} className="flex my-1">
          <MyDay status={colorStatusWeeks[weekindex][dayindex]} day={day} />
        </button>
      ))}
    </div>
  );
}
