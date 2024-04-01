"use client";
import Image from "next/image";
import { useState } from "react";

export default function MindFullEating() {
  const [type, setType] = useState<string[]>([]);
  const [time, setTime] = useState<string>("");
  const [timeAmount, setTimeAmount] = useState<string>(""); //not required
  const [intensity, setIntensity] = useState<number>();
  const [satisfaction, setSatisfaction] = useState<string>(""); //not required
  const [note, setNote] = useState<string>(""); //not required

  const date = new Date();

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
          placeholder="음식 이름을 입력해주세요"
        />
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
    </div>
  );
}
