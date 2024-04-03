"use client";
import Image from "next/image";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import HungerMeter from "../../components/record/mind/hungerMeter";
import { FaRegCircle } from "react-icons/fa";
import EatingSatiety from "@/components/record/mind/eatingSatiety";
import FeedbackNote from "@/components/record/mind/feedbackNote";
import WhatIsYourEatingTime from "@/components/record/whatIsYourEatingTime";
import Satiety from "@/components/record/mind/eatingSatiety";

export default function MindFullEating() {
  const [menu, setMenu] = useState<string[]>([]); //required
  const [type, setType] = useState<string[]>([]);
  const [time, setTime] = useState<string[]>([]);
  const [hunger_before_meal, setHunger_before_meal] = useState<number>(1);
  const hungetList = [1, 2, 3, 4, 5, 6, 7, 8];
  const [hunger_After_meal, setHunger_After_meal] = useState<number>(3);
  const [speed, setSpeed] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [successRoutine, setSuccessRoutine] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [satisfaction, setSatisfaction] = useState<string>("");
  const [note, setNote] = useState<string>(""); //not required
  const date = new Date();

  /**
   * 식사 메뉴를 추가하는 함수와, input, 그에 대한 상태값을 useState를 통해 관리한다.
   */
  // 현재 입력 필드의 텍스트를 저장할 상태
  const [currentInput, setCurrentInput] = useState("");

  // 텍스트 필드의 입력을 처리하는 함수
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
        setMenu([...menu, currentInput.trim()]);
        // 입력 필드 초기화
        setCurrentInput("");
      }
    }
  };

  const routineCheckList = [
    { content: "식전 물 한 컵 마시며 차분한 마음 장착하기", isDone: false },
    { content: "영양가 있는 음식 섭취하기", isDone: false },
    { content: "식사에만 온전히 집중해서 맛과 식감 느끼기", isDone: true },
    { content: "식사에만 온전히 집중해서 맛과 식감 느끼기", isDone: false },
    { content: `\"다음에 또 먹을 수 있다\" 상기시키기`, isDone: false },
    {
      content: "식후 물 한 컵 마시며 바로 식사 자리 정리하기",
      isDone: false,
    },
  ];
  /**
   * 식사 만족도를 관리하는 상태값과 함수
   */
  const [satisfactionIndex, setSatisfactionIndex] = useState<number>(1);

  /**
   * 피드백 노트의 상태값과 함수를 useState를 통해 관리한다.
   */
  const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setNote(value);
  };
  return (
    <div className="flex flex-col">
      <header className="flex relative w-full py-3 justify-center">
        <Image
          src="/leftChevron.svg"
          width={8}
          height={17}
          alt="leftChevron"
          className="absolute top-1/2 left-4 transform -translate-y-1/2"
        />
        <div className="flex gap-2">
          <span className="font-semibold text-[16px]">마인드풀이팅</span>
        </div>
      </header>
      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3">
          <Image src="/bookIcon.svg" width={18} height={16} alt="bookIcon" />
          <span className="font-medium text-black2 text-[14px]">
            어떤 음식을 드셨나요
          </span>
        </header>
        <input
          className="w-full h-[52px] px-3 opacity-20 rounded-[10px] text-[14px] bg-black4 placeholder-black3"
          value={currentInput}
          onChange={handleInputChange}
          onKeyUp={handleKeyPress}
          placeholder="음식 이름을 입력해주세요"
        />
        <div className="flex gap-1 px-2">
          {menu.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-9 relative gap-2 px-3.5 py-2.5 rounded-[56px] border border-green2 bg-green3"
            >
              <p className="flex flex-grow-0 flex-shrink-0">{item}</p>
              <RxCross2 className="w-[20px] h-[20px]" />
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3">
          <Image src="/bookSearch.svg" width={17} height={19} alt="bookIcon" />
          <span className="font-medium text-black2 text-[14px]">
            음식의 종류는 뭔가요?
          </span>
        </header>
        <article className="flex gap-x-3">
          <div className="flex  justify-center items-center h-9 relative gap-2.5 px-4 py-2.5 rounded-[56px] border border-[#e7e7e7]">
            <p className="flex text-sm font-medium text-left text-[#2c2c30]">
              식사류
            </p>
          </div>
          <div className="flex  justify-center items-center h-9 relative gap-2.5 px-4 py-2.5 rounded-[56px] border border-[#e7e7e7]">
            <p className="flex text-sm font-medium text-left text-[#2c2c30]">
              간식류
            </p>
          </div>
          <div className="flex  justify-center items-center h-9 relative gap-2.5 px-4 py-2.5 rounded-[56px] border border-[#e7e7e7]">
            <p className="flex text-sm font-medium text-left text-[#2c2c30]">
              음료류
            </p>
          </div>
        </article>
      </section>
      <WhatIsYourEatingTime timeType="식사" />
      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3">
          <Image src="/bookIcon.svg" width={17} height={19} alt="bookIcon" />
          <span className="font-medium text-black2 text-[14px]">
            배고픔 배부름 정도는 어떘나요
          </span>
        </header>

        <aside className="grid items-center grid-flow-row-dense grid-cols-5 grid-rows-3 gap-y-1">
          <div />
          <div className="col-span-4 w-[285px] h-[20px] flex items-end">
            <div className="flex w-full gap-x-2 items-center">
              <div className="bg-green2 rounded-full px-1 py-1" />
              <span className="text-black3 text-[12px]">Too hungry</span>
            </div>
            <div className="flex w-full h-[20px] gap-x-2 items-center justify-end">
              <span className="text-black3 text-[12px]">Too full</span>
              <div className="bg-green2 rounded-full px-1 py-1 mr-2" />
            </div>
          </div>

          <div className="flex justify-center content-center">
            <span className="text-center">식전</span>
          </div>
          <div className="col-span-4 w-full">
            <HungerMeter
              hungerList={hungetList}
              hunger_before_meal={hunger_before_meal}
            />
          </div>
          <div className="flex justify-center content-center">
            <span className="text-center">식후</span>
          </div>
          <div className="col-span-4 ">
            <HungerMeter
              hungerList={hungetList}
              hunger_before_meal={hunger_After_meal}
            />
          </div>
        </aside>
      </section>
      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3 py-2">
          <Image src="/bookIcon.svg" width={17} height={19} alt="bookIcon" />
          <span className="font-medium text-black2 text-[14px]">
            식사 속도를 알려주세요!
          </span>
        </header>
        <article className="flex gap-x-3">
          <div className="flex  justify-center items-center h-9 relative gap-2.5 px-4 py-2.5 rounded-[56px] border border-[#e7e7e7]">
            <p className="flex text-sm font-medium text-left text-[#2c2c30]">
              빠르게
            </p>
          </div>
          <div className="flex  justify-center items-center h-9 relative gap-2.5 px-4 py-2.5 rounded-[56px] border border-[#e7e7e7]">
            <p className="flex text-sm font-medium text-left text-[#2c2c30]">
              적당히
            </p>
          </div>
          <div className="flex  justify-center items-center h-9 relative gap-2.5 px-4 py-2.5 rounded-[56px] border border-[#e7e7e7]">
            <p className="flex text-sm font-medium text-left text-[#2c2c30]">
              천천히
            </p>
          </div>
        </article>
      </section>
      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3">
          <Image src="/bookIcon.svg" width={17} height={19} alt="bookIcon" />
          <span className="font-medium text-black2 text-[14px]">
            오늘 성공한 식사 루틴을 체크해주세요!
          </span>
        </header>
        <article className="flex flex-col max-w-[400px] gap-3">
          {routineCheckList.map((routine, index) => (
            <div key={index}>
              <div
                className={`flex max-w-[330px] justify-between items-center h-9 gap-2.5 px-4 py-2.5 rounded-[56px] border border-[#e7e7e7] ${
                  routine.isDone ? "bg-green3 border border-green2" : ""
                }`}
              >
                <p className="text-sm font-medium text-center text-[#2c2c30]">
                  {routine.content}
                </p>
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
          ))}
        </article>
      </section>
      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3">
          <Image
            src="/emoji/satisfiedFace.svg"
            width={17}
            height={19}
            alt="bookIcon"
          />
          <span className="font-medium text-black2 text-[14px]">
            식사 만족도
          </span>
        </header>
        <Satiety selectedEmoji={satisfactionIndex} />
        <FeedbackNote note={note} setNote={setNote} />
      </section>
      <button className="w-[330px] h-[52px] rounded-xl bg-green3">
        <p className="text-base font-medium text-center text-black3">
          제출하기
        </p>
      </button>
    </div>
  );
}
