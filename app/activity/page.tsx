"use client";

import Satiety from "@/components/record/mind/eatingSatiety";
import FeedbackNote from "@/components/record/mind/feedbackNote";
import HungerMeter from "@/components/record/mind/hungerMeter";
import WhatIsYourTime from "@/components/record/whatIsYourEatingTime";
import WhatIsYourEatingTime from "@/components/record/whatIsYourEatingTime";
import Image from "next/image";

import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function MindFullEating() {
  /**

* 서버에 보낼 상태를 관리한다.

*/

  const [type, setType] = useState<string[]>([]);

  const [time, setTime] = useState<string>("");

  const [timeAmount, setTimeAmount] = useState<string>(""); //not required

  const [intensity, setIntensity] = useState<number>();

  const [satisfaction, setSatisfaction] = useState<string>(""); //not required

  const [note, setNote] = useState<string>(""); //not required

  const date = new Date();

  /**
   * 어떤 활동을 하셨나요?의 상태를 관리한다.
   * 기타를 클릭한 경우 컴포넌트를 띄우고 데이터를 저장한다.
   */

  const typeList = [
    "휴식",

    "걷기",

    "달리기",

    "계단 오르기",

    "필라테스 & 요가",

    "웨이트 근력",

    "홈트레이닝",

    "수영",

    "구기종목",

    "등산",

    "기타",
  ];

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
          <span className="font-semibold text-[16px]">활동</span>
        </div>
      </header>

      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3">
          <Image src="/bookIcon.svg" width={18} height={16} alt="bookIcon" />

          <span className="font-medium text-black2 text-[14px]">
            어떤 활동을 하셨나요?
          </span>
        </header>

        <article className="flex flex-wrap justify-start items-center gap-2">
          {typeList.map((type, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  let newSelectedType = [...selectedType];

                  newSelectedType[index] = 1 - newSelectedType[index];

                  setSelectedType(newSelectedType);
                }}
                className={`flex justify-center items-center h-9 relative px-4 py-2.5 rounded-[56px] border ${
                  selectedType[index] == 1
                    ? "border-green2 bg-green3"
                    : "border-black4"
                } text-sm font-medium text-[#2c2c30] min-w-[80px]`}
              >
                {type}
              </button>
            );
          })}
        </article>

        {selectedType[selectedType.length - 1] == 1 ? (
          <div className="flex flex-col justify-around w-full  px-3 py-2 rounded-[9.3px] bg-green3 border border-green2">
            <p className="text-[14px] text-black1 py-2 font-medium px-3">
              기타
            </p>
            <input
              className="w-full h-[52px] px-5  rounded-[10px] text-[14px] bg-white border border-black4 placeholder-black3"
              value={currentInput}
              onChange={handleInputChange}
              onKeyUp={handleKeyPress}
              placeholder="활동 이름을 알려주세요!"
            />
            <div className="flex flex-wrap gap-1 px-2 my-1.5">
              {menu.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center h-9 relative gap-2 px-3.5 py-2.5 rounded-[56px] border border-black4 bg-white"
                >
                  <p className="flex flex-grow-0 flex-shrink-0">{item}</p>
                  <RxCross2
                    onClick={() => {
                      let newMenu: string[] = [];
                      menu.forEach((element, idx) => {
                        if (idx !== index) {
                          newMenu.push(element);
                        }
                      });
                      setMenu(newMenu);
                    }}
                    className="w-[20px] h-[20px]"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
      </section>
      <WhatIsYourTime timeType="활동 시간대를 알려주세요!" />
      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3">
          <Image
            src="/mindFullEating/clockPlusIcon.svg"
            width={17}
            height={19}
            alt="bookIcon"
          />
          <span className="font-medium text-black2 text-[14px]">
            활동을 얼마나 했나요?
          </span>
        </header>
        <article className="flex gap-x-3">
          {["30분 미만", "30분 - 1시간", "1시간 - 2시간", "2시간 초과"].map(
            (timeAmount, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setTime(timeAmount);
                  }}
                  className={`flex  justify-center h-9 items-center px-4 py-2 relative rounded-[56px] border ${
                    time === timeAmount
                      ? "border-green2 bg-green3"
                      : "border-black4"
                  }`}
                >
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black1">
                    {timeAmount}
                  </p>
                </button>
              );
            }
          )}
        </article>
      </section>
      <article className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3">
          <Image src="/bookIcon.svg" width={18} height={16} alt="bookIcon" />

          <span className="font-medium text-black2 text-[14px]">
            활동 강도는 어땠나요?
          </span>
        </header>

        <div className="flex gap-3 w-4/5">
          <div className="flex flex-shrink-0 items-center">
            <span className="text-black3 items-center text-[12px]">
              Too Low
            </span>
          </div>
          <HungerMeter hungerList={[1, 2, 3, 4, 5]} hunger_before_meal={1} />
          <div className="flex flex-shrink-0 items-center">
            <span className="text-black3 text-[12px]">Too High</span>
          </div>
        </div>
      </article>
      <article className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3">
          <Image src="/bookIcon.svg" width={18} height={16} alt="bookIcon" />

          <span className="font-medium text-black2 text-[14px]">
            활동 강도는 어땠나요?
          </span>
        </header>

        <Satiety selectedEmoji={satisfactionIndex} />
      </article>
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
