"use client";
import Satiety from "@/components/record/mind/eatingSatiety";
import FeedbackNote from "@/components/record/mind/feedbackNote";
import WhatIsYourEatingTime from "@/components/record/whatIsYourEatingTime";
import Image from "next/image";
import { useState } from "react";

export default function Sleep() {
  const [timeAmount, setTimeAmount] = useState<string>(""); //not required
  const [time, setTime] = useState<string>("");
  const [head_empty_stomach, setHead_empty_stomach] = useState<
    boolean | undefined
  >();
  const [satisfaction, setSatisfaction] = useState<string>(""); //not required
  const [note, setNote] = useState<string>(""); //not required
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
          <Image src="/bookIcon.svg" width={17} height={19} alt="bookIcon" />
          <span className="font-medium text-black2 text-[14px]">
            총 취침시간을 알려주세요
          </span>
        </header>
        <article className="flex gap-x-3">
          {["6시간 미만", "6-8시간", "8시간 초과"].map(
            (totalSleepTIme, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setTimeAmount(totalSleepTIme);
                  }}
                  className={`flex  justify-center h-9 items-center px-4 py-2 relative rounded-[56px] border ${
                    totalSleepTIme === timeAmount
                      ? "border-green2 bg-green3"
                      : "border-black4"
                  }`}
                >
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black1">
                    {totalSleepTIme}
                  </p>
                </button>
              );
            }
          )}
        </article>
      </section>
      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3">
          <Image
            src="/mindFullEating/clockPlusIcon.svg"
            width={17}
            height={19}
            alt="bookIcon"
          />
          <span className="font-medium text-black2 text-[14px]">
            취침 시간대를 알려주세요!
          </span>
        </header>
        <article className="flex gap-x-3">
          {["12시 이전", "12시-2시 사이", "2시 이후"].map(
            (sleepTimeZone, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setTime(sleepTimeZone);
                  }}
                  className={`flex  justify-center h-9 items-center px-4 py-2 relative rounded-[56px] border ${
                    time === sleepTimeZone
                      ? "border-green2 bg-green3"
                      : "border-black4"
                  }`}
                >
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black1">
                    {sleepTimeZone}
                  </p>
                </button>
              );
            }
          )}
        </article>
      </section>
      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3">
          <Image src="/bookIcon.svg" width={17} height={19} alt="bookIcon" />
          <span className="font-medium text-black2 text-[14px]">
            취침 전 4시간 공복 유지 하셨나요?
          </span>
        </header>
        <div className="flex gap-3">
          <div
            className={`flex flex-col justify-around content-center items-center w-[94px] h-[94px] rounded-lg border ${
              head_empty_stomach == false ? "border-green2" : "border-black4"
            }`}
          >
            <Image
              src="/Bowl with spoon.svg"
              width={45}
              height={45}
              alt="nope"
            />

            <span
              className={`text-[12px] ${
                head_empty_stomach == false
                  ? "font-bold text-black1"
                  : "text-black4"
              }`}
            >
              아니요
            </span>
          </div>

          <div
            className={`flex flex-col justify-around content-center items-center w-[94px] h-[94px] rounded-lg border ${
              head_empty_stomach == true ? "border-green2" : "border-black4"
            }`}
          >
            <Image
              src="/emoji/Sleeping face.svg"
              width={38}
              height={38}
              alt="neutral"
            />

            <span
              className={`text-[12px] ${
                head_empty_stomach == true
                  ? "font-bold text-black1"
                  : "text-black4"
              }`}
            >
              네!
            </span>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3">
          <Image src="/bookIcon.svg" width={18} height={16} alt="bookIcon" />

          <span className="font-medium text-black2 text-[14px]">
            수면만족도
          </span>
        </header>
        <Satiety selectedEmoji={satisfactionIndex} />
      </section>
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
