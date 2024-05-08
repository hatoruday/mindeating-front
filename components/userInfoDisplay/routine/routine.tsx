"use client";

import PostSpecificFetch from "@/api/postFetch";

import Image from "next/image";

import { useState } from "react";

import { FaRegCircle } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

interface Routine {
  routine_id: string;
  text: string;
  selected_date?: string;
}

export default function Routine({ userId, routineList }: { userId: string; routineList: Routine[] }) {
  const createRoutine = async ({ text, id }: { text: string; id: string }) => {
    const eatingData = {
      user_id: userId,
      record: {
        routine_id: id,
        text,
      },
    };
    const JSONdata: string = JSON.stringify(eatingData);

    await PostSpecificFetch(JSONdata, "record/add-routine");
  };

  const fetchDeleteRoutine = async ({ userId, routineIds }: { userId: string; routineIds: string[] }) => {
    const data = {
      user_id: userId,
      routine_ids: routineIds,
    };
    const JSONdata: string = JSON.stringify(data);

    await PostSpecificFetch(JSONdata, "record/delete-routine");
  };
  const fetchSelectRoutine = async ({ userId, routineId }: { userId: string; routineId: string }) => {
    const data = {
      user_id: userId,
      routine_id: routineId,
    };
    const JSONdata: string = JSON.stringify(data);

    await PostSpecificFetch(JSONdata, "record/select-routine");
  };
  const fetchUnSelectRoutine = async ({ userId, routineId }: { userId: string; routineId: string }) => {
    const data = {
      user_id: userId,
      routine_id: routineId,
    };
    const JSONdata: string = JSON.stringify(data);

    await PostSpecificFetch(JSONdata, "record/unselect-routine");
  };
  let initialRoutineList = routineList ? routineList : [];
  const [routines, setRoutines] = useState<Routine[]>(initialRoutineList);

  //routine의 selectedDate가 undefined이지 않은 Routine[]만 가져온다.
  let initialSelectedRoutineList: any;
  if (routineList !== null) {
    initialSelectedRoutineList = routineList.filter((routine) => routine.selected_date !== null).map((routine) => routine.routine_id);
  } else {
    initialSelectedRoutineList = [];
  }
  const [selectedRoutine, setSelectedRoutine] = useState<string[]>(initialSelectedRoutineList);

  //추가버튼을 눌렀을 때 활성화되는 상태변수

  const [isPrompting, setIsPrompting] = useState<boolean>(routineList ? false : true);

  const [currentInput, setCurrentInput] = useState("");

  // 텍스트 필드의 입력을 처리하는 함수

  const completeSelectedRoutine = (routineId: string) => {
    let selectedRoutineCopy = [...selectedRoutine];

    if (selectedRoutine.includes(routineId)) {
      fetchUnSelectRoutine({ userId, routineId: routineId });
      selectedRoutineCopy = selectedRoutineCopy.filter((selected) => selected !== routineId);
    } else {
      selectedRoutineCopy.push(routineId);
      fetchSelectRoutine({ userId, routineId: routineId });
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
        const id: string = uuidv4();
        const text = currentInput.trim();
        const newRoutine: Routine = { text, routine_id: id };
        setRoutines([...routines, newRoutine]);
        createRoutine({ text, id });
        // 입력 필드 초기화

        setCurrentInput("");

        setIsPrompting(false);
      }
    }
  };

  const handleBlur = () => {
    if (currentInput.trim() !== "") {
      // 새로운 아이템을 menu 배열에 추가
      const id: string = uuidv4();
      const text = currentInput.trim();
      const newRoutine: Routine = { text, routine_id: id };
      setRoutines([...routines, newRoutine]);
      createRoutine({ text, id });
      // 입력 필드 초기화

      setCurrentInput("");

      setIsPrompting(false);
    }
  };
  //지우기 버튼을 눌렀을 때 활성화되는 상태변수.

  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const [selectedDetingRoutine, setselectedDetingRoutine] = useState<string[]>([]);

  const selectDeleteRoutine = (routineId: string) => {
    let selectedRoutineCopy = [...selectedDetingRoutine];

    if (selectedDetingRoutine.includes(routineId)) {
      selectedRoutineCopy = selectedRoutineCopy.filter((selected) => selected !== routineId);
    } else {
      selectedRoutineCopy.push(routineId);
    }

    setselectedDetingRoutine(selectedRoutineCopy);
  };

  const completeDeteteRoutine = () => {
    let routinesCopy = [...routines];

    selectedDetingRoutine.forEach((routineId) => {
      routinesCopy = routinesCopy.filter((r) => r.routine_id !== routineId);
    });
    fetchDeleteRoutine({ userId, routineIds: selectedDetingRoutine });
    setRoutines(routinesCopy);

    setselectedDetingRoutine([]);

    setIsDeleting(false);
  };

  return (
    <div className="flex flex-col mb-5">
      <header className="flex w-full justify-between">
        <div className="flex gap-2">
          <Image src="/info/routineIcon.svg" width={16} height={16} className=" w-[16px] h-[16px]" alt="routineIcon" />

          <span className="font-semibold">오늘의 루틴</span>
        </div>

        <div className="flex space-x-4 justify-between">
          <button className="flex gap-2 mx-3 items-center" onClick={() => setIsDeleting(!isDeleting)}>
            <Image src="/trashCan.svg" width={15} height={18} alt="trashCan" />
            지우기
          </button>

          <button className="flex gap-2 mx-3 items-center" onClick={() => setIsPrompting(!isPrompting)}>
            <Image src="/plusIcon.svg" onClick={() => setIsPrompting(!isPrompting)} width={16} height={16} alt="plus" />
            추가
          </button>
        </div>
      </header>

      <section className="flex flex-col justify-around gap-y-2 py-4">
        {routines ? (
          <>
            {routines.map((routine, rIndex) => {
              return (
                <div
                  key={rIndex}
                  className={`flex h-9 border ${isDeleting ? "border-red1 bg-red2" : selectedRoutine.includes(routine.routine_id) ? "border-green2 bg-green3" : "border-black4"} w-full rounded-[40px]`}
                >
                  <div className="flex justify-between items-center w-full px-6">
                    <span className="font-medium text-[14px]">{routine.text}</span>

                    <button
                      onClick={() => {
                        if (isDeleting) {
                          selectDeleteRoutine(routine.routine_id);
                        } else {
                          completeSelectedRoutine(routine.routine_id);
                        }
                      }}
                    >
                      {isDeleting ? (
                        selectedDetingRoutine.includes(routine.routine_id) ? (
                          <FaRegCircle className="text-textRed bg-faceRed rounded-full" />
                        ) : (
                          <FaRegCircle className="text-textRed" />
                        )
                      ) : selectedRoutine.includes(routine.routine_id) ? (
                        <Image src="/routineCircle.svg" alt="routineCircle" width={16} height={16} />
                      ) : (
                        <FaRegCircle />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}

        {isPrompting ? (
          <div className={`flex h-9 border border-black4 w-full rounded-[40px]`}>
            <div className="flex justify-between items-center w-full px-6">
              <input
                type="text"
                placeholder="루틴을 입력해주세요"
                value={currentInput}
                onChange={handleInputChange}
                onKeyUp={handleKeyPress}
                onBlur={() => handleBlur()}
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
          <div className="flex justify-end w-full px-3 py-2">
            <button onClick={completeDeteteRoutine} className="flex justify-center content-center items-center w-[58px] h-9 rounded-[40px] bg-red2 border border-red1">
              <span className="font-medium text-[14px] text-center">완료</span>
            </button>
          </div>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
}
