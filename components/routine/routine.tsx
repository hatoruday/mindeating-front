"use client";

import Image from "next/image";
import { useState } from "react";
import { FaRegCircle } from "react-icons/fa";

const routineExampleList = [
  {
    id: 1,
    content: "아침에 운동다녀오기",
    isDone: false,
  },
  {
    id: 2,
    content: "커피 마시지 않기",
    isDone: false,
  },
  {
    id: 3,
    content: "아침에 운동다녀오기",
    isDone: true,
  },
  {
    id: 4,
    content: "폭식하지않기",
    isDone: false,
  },
];

export default function Routine() {
  const [routines, setRoutines] = useState(routineExampleList);

  return (
    <div className="flex flex-col ">
      <header className="flex w-full justify-between">
        <div className="flex">
          <Image
            src="/routineIcon.svg"
            width={16}
            height={16}
            alt="routineIcon"
          />
          <span className="font-semibold">오늘의 루틴</span>
        </div>
        <div className="flex space-x-4 justify-between">
          <Image src="/trashCan.svg" width={15} height={18} alt="trashCan" />
          지우기
          <Image src="/plusIcon.svg" width={16} height={16} alt="plus" />
          추가
        </div>
      </header>

      <section className="flex flex-col justify-around gap-y-2 py-4">
        {routines.map((routine, rIndex) => {
          return (
            <div
              key={rIndex}
              className="flex h-9 border border-[#e7e7e7] w-full rounded-[40px] "
            >
              <div className="flex justify-between items-center w-full px-6">
                <span className="font-medium text-[14px]">
                  {routine.content}
                </span>
                {routine.isDone ? (
                  <Image
                    src="/routineCircle.svg"
                    alt="routineCircle"
                    width={16}
                    height={16}
                  />
                ) : (
                  <FaRegCircle />
                )}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
