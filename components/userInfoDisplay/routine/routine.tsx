"use client";

import Image from "next/image";

import { useState } from "react";

import { FaRegCircle } from "react-icons/fa";

const routineExampleList = [
  "아침에 운동다녀오기",

  "커피 마시지 않기",

  "저녁에 운동다녀오기",

  "폭식하지않기",
];

export default function Routine() {
  const [routines, setRoutines] = useState(routineExampleList);

  const [selectedRoutine, setSelectedRoutine] = useState<string[]>([]);

  //추가버튼을 눌렀을 때 활성화되는 상태변수

  const [isPrompting, setIsPrompting] = useState<boolean>(false);

  const [currentInput, setCurrentInput] = useState("");

  // 텍스트 필드의 입력을 처리하는 함수

  const completeSelectedRoutine = (routine: string) => {
    let selectedRoutineCopy = [...selectedRoutine];

    if (selectedRoutine.includes(routine)) {
      selectedRoutineCopy = selectedRoutineCopy.filter(
        (selected) => selected !== routine
      );
    } else {
      selectedRoutineCopy.push(routine);
    }

    setSelectedRoutine(selectedRoutineCopy);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setCurrentInput(value);
  };

  // 엔터 키를 누를 때 실행될 함수

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (currentInput.trim() !== "") {
        // 새로운 아이템을 menu 배열에 추가

        setRoutines([...routines, currentInput.trim()]);

        // 입력 필드 초기화

        setCurrentInput("");

        setIsPrompting(false);
      }
    }
  };

  //지우기 버튼을 눌렀을 때 활성화되는 상태변수.

  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const [selectedDetingRoutine, setselectedDetingRoutine] = useState<string[]>(
    []
  );

  const selectDeleteRoutine = (routine: string) => {
    let selectedRoutineCopy = [...selectedDetingRoutine];

    if (selectedDetingRoutine.includes(routine)) {
      selectedRoutineCopy = selectedRoutineCopy.filter(
        (selected) => selected !== routine
      );
    } else {
      selectedRoutineCopy.push(routine);
    }

    setselectedDetingRoutine(selectedRoutineCopy);
  };

  const completeDeteteRoutine = () => {
    let routinesCopy = [...routines];

    selectedDetingRoutine.forEach((routine) => {
      routinesCopy = routinesCopy.filter((r) => r !== routine);
    });

    setRoutines(routinesCopy);

    setselectedDetingRoutine([]);

    setIsDeleting(false);
  };

  return (
    <div className="flex flex-col ">
      <header className="flex w-full justify-between">
        <div className="flex">
          <Image
            src="/info/routineIcon.svg"
            width={16}
            height={16}
            alt="routineIcon"
          />

          <span className="font-semibold">오늘의 루틴</span>
        </div>

        <div className="flex space-x-4 justify-between">
          <button
            className="flex gap-2 mx-3 items-center"
            onClick={() => setIsDeleting(!isDeleting)}
          >
            <Image src="/trashCan.svg" width={15} height={18} alt="trashCan" />
            지우기
          </button>

          <button
            className="flex gap-2 mx-3 items-center"
            onClick={() => setIsPrompting(!isPrompting)}
          >
            <Image
              src="/plusIcon.svg"
              onClick={() => setIsPrompting(!isPrompting)}
              width={16}
              height={16}
              alt="plus"
            />
            추가
          </button>
        </div>
      </header>

      <section className="flex flex-col justify-around gap-y-2 py-4">
        {routines.map((routine, rIndex) => {
          return (
            <div
              key={rIndex}
              className={`flex h-9 border ${
                isDeleting
                  ? "border-red1 bg-red2"
                  : selectedRoutine.includes(routine)
                  ? "border-green2 bg-green3"
                  : "border-black4"
              } w-full rounded-[40px]`}
            >
              <div className="flex justify-between items-center w-full px-6">
                <span className="font-medium text-[14px]">{routine}</span>

                <button
                  onClick={() => {
                    if (isDeleting) {
                      selectDeleteRoutine(routine);
                    } else {
                      completeSelectedRoutine(routine);
                    }
                  }}
                >
                  {isDeleting ? (
                    selectedDetingRoutine.includes(routine) ? (
                      <FaRegCircle className="text-textRed bg-faceRed rounded-full" />
                    ) : (
                      <FaRegCircle className="text-textRed" />
                    )
                  ) : selectedRoutine.includes(routine) ? (
                    <Image
                      src="/routineCircle.svg"
                      alt="routineCircle"
                      width={16}
                      height={16}
                    />
                  ) : (
                    <FaRegCircle />
                  )}
                </button>
              </div>
            </div>
          );
        })}

        {isPrompting ? (
          <div
            className={`flex h-9 border border-black4 w-full rounded-[40px]`}
          >
            <div className="flex justify-between items-center w-full px-6">
              <input
                type="text"
                placeholder="루틴을 입력해주세요"
                value={currentInput}
                onChange={handleInputChange}
                onKeyUp={handleKeyPress}
                className="font-medium text-[14px] w-full bg-white border-none outline-none placeholder-black4 text-black1"
              />

              <button>
                <FaRegCircle />
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}

        {isDeleting ? (
          <div className="w-[58px] h-9 rounded-[40px] bg-red2 border border-red1">
            완료
          </div>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
}
