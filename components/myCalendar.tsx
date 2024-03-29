"use client";

import { useEffect, useState } from "react";
import MyDay from "./myday";
import Thead from "./thead";
import AccordianWeek from "./accordianWeek";
import MyWeek from "./myWeek";
import AccordianItems from "./AccordianItems";

function ConvertTime(date: Date): Date {
  date = new Date(date);
  let offset = date.getTimezoneOffset() * 60000; //ms단위라 60000곱해줌
  let dateOffset = new Date(date.getTime() - offset);
  return dateOffset;
}
// 현재 월에 해당하는 주별 날짜 2차원 배열을 가져옴
function GetWeeksOfCurrentMonth(
  month: number,
  year: number
): [Date[][], number[][], number[]] {
  const now = new Date();
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const dayOfWeek = firstDayOfMonth.getDay();

  // 1일이 속한 주의 월요일을 구함
  let firstMonday;
  if (dayOfWeek === 0) {
    // 1일이 일요일인 경우, 이전 월요일은 -6일
    firstMonday = new Date(firstDayOfMonth);
    firstMonday.setDate(firstDayOfMonth.getDate() - 6);
  } else {
    // 그 외의 경우, 1일에서 해당 요일의 숫자만큼 빼면 월요일
    firstMonday = new Date(firstDayOfMonth);
    firstMonday.setDate(firstDayOfMonth.getDate() - dayOfWeek + 1);
  }

  // 마지막 일을 구함
  const lastDayOfMonth = new Date(year, month, 0);
  const dayOfLastweek = lastDayOfMonth.getDay();
  let lastSunday = new Date(lastDayOfMonth);
  if (dayOfLastweek !== 0) {
    lastSunday.setDate(lastDayOfMonth.getDate() + (7 - dayOfLastweek));
  } else {
    lastSunday.setDate(lastDayOfMonth.getDate());
  }

  // 주별로 끊어서 출력
  let weeks = [];
  let week = [];
  let current = new Date(firstMonday);
  while (current <= lastSunday) {
    week.push(new Date(current));
    current.setDate(current.getDate() + 1);
    if (current.getDay() === 1) {
      weeks.push(week);
      week = [];
    }
  }
  //weeks를 순회하면서 convertTime(day)ㄹ 호출하여 날짜를 변환한 후 출력
  for (let i = 0; i < weeks.length; i++) {
    for (let j = 0; j < weeks[i].length; j++) {
      weeks[i][j] = ConvertTime(weeks[i][j]);
    }
  }

  let colorStatusWeeks = [];
  let isFadeoutWeeks = [];
  let colorStatusWeek = [];
  let colorStatusCurrent = new Date(firstMonday);
  while (colorStatusCurrent <= lastSunday) {
    // 이전달이거나 다음달의 날짜일경우 -1 플래그를 주고, 오늘날짜일 경우 1플래그를 준다.
    if (colorStatusCurrent.getMonth() + 1 != month) {
      colorStatusWeek.push(-1);
    } else if (colorStatusCurrent.getDate() === now.getDate()) {
      colorStatusWeek.push(1);
    } else {
      colorStatusWeek.push(0);
    }
    colorStatusCurrent.setDate(colorStatusCurrent.getDate() + 1);
    if (colorStatusCurrent.getDay() === 1) {
      colorStatusWeeks.push(colorStatusWeek);
      isFadeoutWeeks.push(1);
      colorStatusWeek = [];
    }
  }
  //weeks와 colorStatusweeks를 두개 모두 리턴한다.
  return [weeks, colorStatusWeeks, isFadeoutWeeks];
}

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
