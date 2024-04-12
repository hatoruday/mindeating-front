"use client";
import { FetchResult } from "@/api/postFetch";
import Satiety from "@/components/record/mind/eatingSatiety";
import FeedbackNote from "@/components/record/mind/feedbackNote";
import RecordSubmit from "@/components/record/recordSubmit";
import WhatIsYourEatingTime from "@/components/record/whatIsYourEatingTime";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { sleepAction, SleepParams } from "./sleepAction";

interface IParams {
  params: { userId: string };
}

export default function Sleep({ params: { userId } }: IParams) {
  const [time, setTimeAmount] = useState<string>(""); //not required
  const [when, setWhen] = useState<string>("");
  const [empty_stomach, setHead_empty_stomach] = useState<boolean | undefined>();
  const [satisfaction, setSatisfaction] = useState<string>(""); //not required
  const [note, setNote] = useState<string>(""); //not required

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const sleepData = {
    user_id: userId,
    record: {
      time,
      when,
      empty_stomach,
      satisfaction,
      note,
    },
  };

  const clientActionWrapper = async (sleepData: SleepParams) => {
    setIsLoading(true);
    const result: FetchResult | undefined = await sleepAction(sleepData);
    console.log(result);
    if (result?.ok && result?.success) {
      alert("성공");
      // router.push("/info/");
      console.log(result?.result.name);
      setIsLoading(false);
    } else if (result?.ok) {
      alert("실패. client error success:" + result?.success + " name: " + result?.result.name);
      setIsLoading(false);
      console.log(result?.result);
    } else {
      alert("실패. server error\n" + result?.result);
      setIsLoading(false);
    }
    // setState(result)
  };

  return (
    <div className="flex flex-col px-6">
      <header className="flex relative w-full py-3 justify-center">
        <Image src="/leftChevron.svg" width={8} height={17} alt="leftChevron" className="absolute top-1/2 left-4 transform -translate-y-1/2" />

        <div className="flex gap-2">
          <span className="font-semibold text-[16px]">수면</span>
        </div>
      </header>
      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3">
          <Image src="/bookIcon.svg" width={17} height={19} alt="bookIcon" />
          <span className="font-medium text-black2 text-[14px]">총 취침시간을 알려주세요</span>
        </header>
        <article className="flex gap-x-3">
          {["6시간 미만", "6-8시간", "8시간 초과"].map((totalSleepTIme, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  if (totalSleepTIme === time) setTimeAmount("");
                  else {
                    setTimeAmount(totalSleepTIme);
                  }
                }}
                className={`flex  justify-center h-9 items-center px-4 py-2 relative rounded-[56px] border ${totalSleepTIme === time ? "border-green2 bg-green3" : "border-black4"}`}
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black1">{totalSleepTIme}</p>
              </button>
            );
          })}
        </article>
      </section>
      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3">
          <Image src="/mindFullEating/clockPlusIcon.svg" width={17} height={19} alt="bookIcon" />
          <span className="font-medium text-black2 text-[14px]">취침 시간대를 알려주세요!</span>
        </header>
        <article className="flex gap-x-3">
          {["12시 이전", "12시-2시 사이", "2시 이후"].map((sleepTimeZone, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  if (sleepTimeZone === when) setWhen("");
                  else setWhen(sleepTimeZone);
                }}
                className={`flex  justify-center h-9 items-center px-4 py-2 relative rounded-[56px] border ${when === sleepTimeZone ? "border-green2 bg-green3" : "border-black4"}`}
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black1">{sleepTimeZone}</p>
              </button>
            );
          })}
        </article>
      </section>
      <section className="flex w-full justify-center flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3">
          <Image src="/bookIcon.svg" width={17} height={19} alt="bookIcon" />
          <span className="font-medium text-black2 text-[14px]">취침 전 4시간 공복 유지 하셨나요?</span>
        </header>
        <div className="flex w-full justify-center gap-3">
          <button
            onClick={() => {
              if (empty_stomach != false) setHead_empty_stomach(false);
              else setHead_empty_stomach(undefined);
            }}
            className={`flex flex-col justify-around content-center items-center w-[94px] h-[94px] rounded-lg border ${empty_stomach == false ? "border-green2" : "border-black4"}`}
          >
            <Image src="/Bowl with spoon.svg" width={45} height={45} alt="nope" />

            <span className={`text-[12px] ${empty_stomach == false ? "font-bold text-black1" : "text-black4"}`}>아니요</span>
          </button>

          <button
            onClick={() => {
              if (empty_stomach != true) setHead_empty_stomach(true);
              else setHead_empty_stomach(undefined);
            }}
            className={`flex flex-col justify-around content-center items-center w-[94px] h-[94px] rounded-lg border ${empty_stomach == true ? "border-green2" : "border-black4"}`}
          >
            <Image src="/emoji/Sleeping face.svg" width={38} height={38} alt="neutral" />

            <span className={`text-[12px] ${empty_stomach == true ? "font-bold text-black1" : "text-black4"}`}>네!</span>
          </button>
        </div>
      </section>
      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3">
          <Image src="/bookIcon.svg" width={18} height={16} alt="bookIcon" />

          <span className="font-medium text-black2 text-[14px]">수면만족도</span>
        </header>
        <Satiety satisfaction={satisfaction} setSatisfaction={setSatisfaction} />
      </section>
      <article className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 py-2 gap-x-3">
          <Image src="/info/feedbackPencile.svg" width={18} height={16} alt="bookIcon" />

          <span className="font-medium text-black2 text-[14px]">피드백 노트</span>
        </header>

        <FeedbackNote note={note} setNote={setNote} />
      </article>

      <RecordSubmit submitFunction={clientActionWrapper} data={sleepData} isLoading={isLoading} isActive={time != "" && when != "" && empty_stomach != undefined && satisfaction != ""} />
    </div>
  );
}
