function ConvertTime(date: Date): Date {
  date = new Date(date);
  let offset = date.getTimezoneOffset() * 60000; //ms단위라 60000곱해줌
  let dateOffset = new Date(date.getTime() - offset);
  return dateOffset;
}

interface MonthData {
  weeks: Date[][];
  colorStatusWeeks: number[][];
  isFadeoutWeeks: number[];
}
// 현재 월에 해당하는 주별 날짜 2차원 배열을 가져옴
function GetWeeksOfCurrentMonth(month: number, year: number, date_info?: any): MonthData {
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
  //weeks를 순회하면서 convertTime(day)를 호출하여 날짜를 변환한 후 출력
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
    const colorStatusCurrentDayAfter = new Date(colorStatusCurrent.getTime() + 24 * 60 * 60 * 1000);
    var ccYear = colorStatusCurrentDayAfter.getFullYear();
    var ccMonth = colorStatusCurrentDayAfter.getMonth() + 1;
    var ccDate = colorStatusCurrentDayAfter.getDate();
    var ccfixedMonth = ccMonth < 10 ? `0${month}` : month;
    var ccfixedDate = ccDate < 10 ? `0${ccDate}` : ccDate;
    const dateString = ccYear + "-" + ccfixedMonth + "-" + ccfixedDate;

    if (date_info) {
      const value = date_info[dateString];

      if (colorStatusCurrent.getMonth() != firstDayOfMonth.getMonth()) {
        colorStatusWeek.push(-1);
      } else if (colorStatusCurrent.getDate() === now.getDate() && colorStatusCurrent.getMonth() === now.getMonth() && colorStatusCurrent.getFullYear() === now.getFullYear()) {
        colorStatusWeek.push(1);
      } else if (value === undefined) {
        colorStatusWeek.push(0);
      } else {
        colorStatusWeek.push(value);
      }
    } else {
      if (colorStatusCurrent.getMonth() != firstDayOfMonth.getMonth()) {
        colorStatusWeek.push(-1);
      } else if (colorStatusCurrent.getDate() === now.getDate() && colorStatusCurrent.getMonth() === now.getMonth() && colorStatusCurrent.getFullYear() === now.getFullYear()) {
        colorStatusWeek.push(1);
      } else {
        colorStatusWeek.push(0);
      }
    }

    colorStatusCurrent.setDate(colorStatusCurrent.getDate() + 1);
    if (colorStatusCurrent.getDay() === 1) {
      colorStatusWeeks.push(colorStatusWeek);
      isFadeoutWeeks.push(1);
      colorStatusWeek = [];
    }
  }
  //weeks와 colorStatusweeks를 두개 모두 리턴한다.
  // colorStatusWeeks[0][3] = 2;
  // colorStatusWeeks[0][4] = 3;
  // colorStatusWeeks[0][5] = 4;
  let monthData = {
    weeks: weeks,
    colorStatusWeeks: colorStatusWeeks,
    isFadeoutWeeks: isFadeoutWeeks,
  };
  return monthData;
}

type MonthAll = [MonthData, MonthData, MonthData];
export default function getMonthAll(offset: number, date_info?: any): MonthAll {
  // console.log("getMonth호출됨.", offset);

  let today = new Date();

  // console.log("현재 달", today.getMonth() + 1, today.getFullYear());
  if (offset < 0) {
    today = new Date(today.getTime() - Math.abs(offset) * 31 * 24 * 60 * 60 * 1000);
  } else if (offset > 0) {
    today = new Date(today.getTime() + Math.abs(offset) * 31 * 24 * 60 * 60 * 1000);
  }

  // console.log("새롭게 바뀐 달", today.getMonth() + 1, today.getFullYear());
  const past = GetWeeksOfCurrentMonth(today.getMonth(), today.getFullYear());
  const current = GetWeeksOfCurrentMonth(today.getMonth() + 1, today.getFullYear(), date_info);
  const future = GetWeeksOfCurrentMonth(today.getMonth() + 2, today.getFullYear());
  return [past, current, future];
}
