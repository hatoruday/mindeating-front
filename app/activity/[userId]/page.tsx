"use client";

import Satiety from "@/components/record/mind/eatingSatiety";
import FeedbackNote from "@/components/record/mind/feedbackNote";
import HungerMeter from "@/components/record/mind/hungerMeter";
import RecordSubmit from "@/components/record/recordSubmit";
import WhatIsYourTime from "@/components/record/whatIsYourEatingTime";
import WhatIsYourEatingTime from "@/components/record/whatIsYourEatingTime";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { activityAction, ActivityParams } from "./activityAction";
import { FetchResult } from "@/api/postFetch";
import Link from "next/link";

interface IParams {
  params: { userId: string };
}

export default function ActivityPage({ params: { userId } }: IParams) {
  /**

* 서버에 보낼 상태를 관리한다.

*/

  const [names, setNames] = useState<string[]>([]);
  const [extras, setExtras] = useState<string[]>([]); //not required
  const [when, setWhen] = useState<string>("");
  const whenTranslate: { [key: string]: string } = {
    새벽: "dawn",
    아침: "morning", // "morning
    점심: "lunch",
    저녁: "dinner",
    밤: "night",
  };

  const [time, setTime] = useState<string>(""); //not required
  //'enum': ['less_than_30m', '30m-1h', '1h-2h', 'more_than_2h']
  //"30분 미만", "30분 - 1시간", "1시간 - 2시간", "2시간 초과"
  const timeTranslate: { [key: string]: string } = {
    "30분 미만": "less_than_30m",
    "30분 - 1시간": "30m-1h", // "morning
    "1시간 - 2시간": "1h-2h",
    "2시간 초과": "more_than_2h",
  };
  const [intensity, setIntensity] = useState<number>();

  const [satisfaction, setSatisfaction] = useState<string>(""); //not required
  const satisfactionTranslate: { [key: string]: string } = {
    불만족: "unsatisfied",
    적당함: "moderate",
    만족: "satisfied",
  };
  const [note, setNote] = useState<string>(""); //not required

  /**
   * 어떤 활동을 하셨나요?의 상태를 관리한다.
   * 기타를 클릭한 경우 컴포넌트를 띄우고 데이터를 저장한다.
   */

  const typeList = ["휴식", "걷기", "달리기", "계단 오르기", "필라테스 & 요가", "웨이트 근력", "홈트레이닝", "수영", "구기종목", "등산", "기타"];

  //typeList의 각 요소의 index에 대해 1: 클릭됨 0: 클릭안됨

  //기타를 클릭했을 때 나오는 입력칸의 상태를 관리한다.

  const [currentInput, setCurrentInput] = useState("");
  const [selectExtra, setSelectExtra] = useState<boolean>(false);
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

        setExtras([...extras, currentInput.trim()]);

        // 입력 필드 초기화

        setCurrentInput("");
      }
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const clientActionWrapper = async (activityData: ActivityParams) => {
    setIsLoading(true);
    const result: FetchResult | undefined = await activityAction(activityData);

    if (result?.ok && result?.success) {
      const now = new Date();
      router.push(`/info/${userId}/${now.getFullYear()}-${now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : "0" + now.getMonth()}-${now.getDate() < 10 ? "0" + now.getDate() : now.getDate()}`);
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
    <div className="flex px-6 overflow-y-auto max-h-dvh justify-start flex-col  content-center">
      <header className="flex w-full sticky top-0 bg-white z-10 py-3 justify-center">
        <div className="relative flex w-full justify-center">
          <Link href={`/info/${userId}`}>
            <Image src="/leftChevron.svg" width={8} height={17} alt="leftChevron" className="absolute top-1/2 left-4 transform -translate-y-1/2" />
          </Link>

          <div className="flex gap-2">
            <span className="font-semibold text-[16px]">활동</span>
          </div>
        </div>
      </header>

      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3 py-2 content-center">
          <Image src="/bookIcon.svg" width={18} height={16} alt="bookIcon" />

          <span className="font-[600] text-black2 text-[14px]">어떤 활동을 하셨나요?</span>
        </header>

        <article className="flex flex-wrap justify-start items-center gap-2">
          {typeList.map((name, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  if (name === "기타") setSelectExtra(!selectExtra);
                  const newNames = [...names];
                  if (newNames.includes(name)) {
                    // 이미 선택된 경우 선택 해제
                    newNames.splice(newNames.indexOf(name), 1);
                    setNames(newNames);
                  } else {
                    // 선택되지 않은 경우 선택
                    newNames.push(name);
                    setNames(newNames);
                  }
                }}
                className={`flex justify-center items-center h-9 relative px-4 py-2.5 rounded-[56px] border ${
                  names.includes(name) ? "border-green2 bg-green3" : "border-black4"
                } text-sm font-[600] text-[#2c2c30] min-w-[60px]`}
              >
                {name}
              </button>
            );
          })}
        </article>

        {names.includes("기타") ? (
          <div className="flex flex-col justify-around w-full  px-3 py-2 rounded-[9.3px] bg-green3 border border-green2">
            <p className="text-[14px] text-black1 py-2 font-[600] px-3">기타</p>
            <input
              className="w-full h-[52px] px-5  rounded-[10px] text-[14px] bg-white border border-black4 placeholder-black3"
              value={currentInput}
              onChange={handleInputChange}
              onKeyUp={handleKeyPress}
              placeholder="활동 이름을 알려주세요!"
            />
            <div className="flex flex-wrap gap-1 px-2 my-1.5">
              {extras.map((item, index) => (
                <div key={index} className="flex justify-center items-center h-9 relative gap-2 px-3.5 py-2.5 rounded-[56px] border border-black4 bg-white">
                  <p className="flex flex-grow-0 flex-shrink-0 text-[14px] font-medium">{item}</p>
                  <RxCross2
                    onClick={() => {
                      let newExtras: string[] = [];
                      extras.forEach((element, idx) => {
                        if (idx !== index) {
                          newExtras.push(element);
                        }
                      });
                      setExtras(newExtras);
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
      <WhatIsYourTime when={when} setWhen={setWhen} timeType="활동 시간대를 알려주세요!" />
      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3 py-2 content-center">
          <Image src="/mindFullEating/clockPlusIcon.svg" width={17} height={19} alt="bookIcon" />
          <span className="font-medium text-black2 text-[14px]">활동을 얼마나 했나요?</span>
        </header>
        <article className="flex gap-x-3 px-3 flex-wrap">
          {["30분 미만", "30분 - 1시간", "1시간 - 2시간", "2시간 초과"].map((tAmount, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  if (time === tAmount) {
                    setTime("");
                  } else {
                    setTime(tAmount);
                  }
                }}
                className={`flex my-1 flex-shrink-0 flex-grow-0 justify-center h-9 items-center px-4 py-2 relative rounded-[56px] border ${
                  time === tAmount ? "border-green2 bg-green3" : "border-black4"
                }`}
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-[600] text-left text-black1">{tAmount}</p>
              </button>
            );
          })}
        </article>
      </section>
      <article className="flex flex-col w-full justify-center content-center items-center gap-y-2 py-4">
        <header className="flex px-3 gap-x-3 py-2 content-center justify-start w-full">
          <Image src="/bookIcon.svg" width={18} height={16} alt="bookIcon" />

          <span className="font-[600] text-black2 text-[14px]">활동 강도는 어땠나요?</span>
        </header>

        <div className="flex gap-3 w-4/5 justify-center">
          <div className="flex flex-shrink-0 items-center">
            <span className="text-black3 items-center font-[600] text-[12px]">Too Low</span>
          </div>
          <HungerMeter hungerList={[1, 2, 3, 4, 5]} hunger_meal={intensity!} setHunger_meal={setIntensity} />
          <div className="flex flex-shrink-0 items-center">
            <span className="text-black3 text-[12px] font-[600]">Too High</span>
          </div>
        </div>
      </article>
      <article className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3 py-2 content-center">
          <Image src="/bookIcon.svg" width={18} height={16} alt="bookIcon" />

          <span className="font-[600] text-black2 text-[14px]">활동 만족도</span>
        </header>

        <Satiety satisfaction={satisfaction} setSatisfaction={setSatisfaction} />
      </article>
      <article className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 py-2 gap-x-3">
          <Image src="/info/feedbackPencile.svg" width={18} height={16} className="w-[18px] h-[16px]" alt="bookIcon" />

          <span className="font-medium text-black2 text-[14px]">피드백 노트</span>
        </header>

        <FeedbackNote note={note} setNote={setNote} specificPlaceholder={`활동을 돌이켜보고 \n잘한 점과 아쉬운 점을 적어요 (선택)`} />
      </article>

      <RecordSubmit
        submitFunction={clientActionWrapper}
        data={{
          user_id: userId,
          record: {
            names: [...names, ...extras],
            when: whenTranslate[when],
            intensity,
            time: timeTranslate[time],
            satisfaction: satisfactionTranslate[satisfaction],
            note,
          },
        }}
        isLoading={isLoading}
        isActive={names.length > 0 && when != "" && time != "" && intensity != 0 && satisfaction != ""}
      />
    </div>
  );
}
