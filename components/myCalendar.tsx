"use client";

import GetWeeksOfCurrentMonth from "@/utility/getDayInformation";
import MyDay from "./myday";
import Thead from "./thead";

function toggleCalendar(event: any) {
  return;
}

export default function MyCalendar() {
  // 현재 월에 해당하는 주별 날짜 2차원 배열을 가져옴
  // const today = new Date();
  const [weeks, colorStatusWeeks] = GetWeeksOfCurrentMonth(3, 2024);

  return (
    <div className="flex items-center justify-center py-8 px-4">
      <div className="max-w-sm w-full">
        <div className="md:p-5 p-2  bg-white rounded-t">
          <div className="flex items-center justify-between">
            <table className="w-full">
              <Thead />
              <tbody>
                {weeks.map((week, weekindex) => (
                  <tr key={weekindex}>
                    {week.map((day, dayindex) => (
                      <td key={dayindex}>
                        <button type="button">
                          <MyDay
                            status={colorStatusWeeks[weekindex][dayindex]}
                            day={day}
                          />
                        </button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
<tr>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                  </td>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                  </td>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        1
                      </p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        2
                      </p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">
                        3
                      </p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">
                        4
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        5
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        6
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        7
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="w-full h-full">
                      <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                        <a
                          role="link"
                          tabIndex={0}
                          className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
                        >
                          8
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        9
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">
                        10
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">
                        11
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        12
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        13
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        14
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        15
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        16
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">
                        17
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">
                        18
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        19
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        20
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        21
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        22
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        23
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">
                        24
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">
                        25
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        26
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        27
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        28
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        29
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        30
                      </p>
                    </div>
                  </td>
                </tr>
*/
