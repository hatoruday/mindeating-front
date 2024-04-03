"use client";
import FeedbackNote from "@/components/record/mind/feedbackNote";
import WhatIsYourTime from "@/components/record/whatIsYourEatingTime";
import Image from "next/image";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function MindFullEating() {
  const [state, setState] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [note, setNote] = useState<string>("");

  const date = new Date();

  //typeList의 각 요소의 index에 대해 1: 클릭됨 0: 클릭안됨

  const [selectedType, setSelectedType] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  //기타를 클릭했을 때 나오는 입력칸의 상태를 관리한다.

  const [menu, setMenu] = useState<string[]>([]);

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

  /**
   * 활동 시간대를 알려주세요!의 상태를 관리한다.
   */

  /**
   * 활동 만족도의 상태를 관리한다.
   */
  const [satisfactionIndex, setSatisfactionIndex] = useState<number>(1);

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
          <span className="font-semibold text-[16px]">수면</span>
        </div>
      </header>
      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3">
          <Image src="/bookIcon.svg" width={18} height={16} alt="bookIcon" />
          <span className="font-medium text-black2 text-[14px]">
            감정 상태를 알려주세요!
          </span>
        </header>
        <input
          className="w-full h-[52px] px-3 opacity-20 rounded-[10px] text-[14px] bg-black4 placeholder-black3"
          value={currentInput}
          onChange={handleInputChange}
          onKeyUp={handleKeyPress}
          placeholder="어떤 감정이 들었나요?"
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
            감정의 종류는 뭔가요?
          </span>
        </header>
        <div className="flex gap-3">
          <div
            className={`flex flex-col justify-around content-center items-center w-[94px] h-[94px] rounded-lg border ${
              type == "부정" ? "border-green2" : "border-black4"
            }`}
          >
            <Image
              src="/emoji/Crying face.svg"
              width={45}
              height={45}
              alt="nope"
            />

            <span
              className={`text-[12px] ${
                type == "부정" ? "font-bold text-black1" : "text-black4"
              }`}
            >
              부정
            </span>
          </div>

          <div
            className={`flex flex-col justify-around content-center items-center w-[94px] h-[94px] rounded-lg border ${
              type == "긍정" ? "border-green2" : "border-black4"
            }`}
          >
            <Image
              src="/emoji/Smiling face with 3 hearts.svg"
              width={38}
              height={38}
              alt="neutral"
            />

            <span
              className={`text-[12px] ${
                type == "긍정" ? "font-bold text-black1" : "text-black4"
              }`}
            >
              긍정
            </span>
          </div>
        </div>
      </section>
      <WhatIsYourTime timeType="언제 그런 감정을 느꼈나요?" />
      <article className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 py-2 gap-x-3">
          <Image
            src="/info/feedbackPencile.svg"
            width={18}
            height={16}
            alt="bookIcon"
          />

          <span className="font-medium text-black2 text-[14px]">
            피드백 노트
          </span>
        </header>

        <FeedbackNote note={note} setNote={setNote} />
      </article>

      <section className="my-10">
        <button className="w-[330px] h-[52px] rounded-xl bg-green3">
          <p className="text-base font-medium text-center text-black3">
            제출하기
          </p>
        </button>
      </section>
    </div>
  );
}
