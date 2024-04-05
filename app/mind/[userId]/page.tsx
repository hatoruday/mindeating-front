"use client";
import Image from "next/image";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import HungerMeter from "../../../components/record/mind/hungerMeter";
import { FaRegCircle } from "react-icons/fa";
import EatingSatiety from "@/components/record/mind/eatingSatiety";
import FeedbackNote from "@/components/record/mind/feedbackNote";
import WhatIsYourEatingTime from "@/components/record/whatIsYourEatingTime";
import Satiety from "@/components/record/mind/eatingSatiety";
import WhatIsYourTime from "@/components/record/whatIsYourEatingTime";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from "next/navigation";
import RecordSubmit from "@/components/record/recordSubmit";

interface SuccessMealRoutine {
  [key: number]: boolean;
}
interface IParams {
  params: { userId: string };
}

export default function MindFullEating({ params: { userId } }: IParams) {
  const [menu, setMenu] = useState<string[]>([]); //required
  const [type, setType] = useState<string>("");
  const [when, setWhen] = useState<string>("");
  const [hunger_before_meal, setHunger_before_meal] = useState<number>(0);
  const hungetList = [1, 2, 3, 4, 5, 6, 7, 8];
  const [hunger_after_meal, setHunger_After_meal] = useState<number>(0);
  const [speed, setSpeed] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [successed_meal_routine, setSuccesssed_meal_routine] =
    useState<SuccessMealRoutine>({
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    });
  const [satisfaction, setSatisfaction] = useState<string>("");
  const [note, setNote] = useState<string>(""); //not required

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

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const submitFunction = async () => {
    setIsLoading(true);
    // e.preventDefault();

    // if (loading || userId === "" || password === "") return;

    try {
      const eatingData = {
        user_id: userId,
        record: {
          menu,
          type,
          when,
          hunger_before_meal,
          hunger_after_meal,
          speed,
          amount,
          successed_meal_routine,
          satisfaction,
          note,
        },
      };

      const JSONdata = JSON.stringify(eatingData);
      const endpoint = "http://13.124.182.175:8000/record/record-eating";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };
      console.log(options.body);
      const response = await fetch(endpoint, options);
      // console.log(response);
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        if (result.success) {
          router.push("/info/");
        } else {
          alert("전송 실패" + result.message);
          setIsLoading(false);
        }
      } else {
        // 에러 처리
        console.error("response not ok 전송 실패");
        setIsLoading(false);
      }
    } catch (e: any) {
      // if (e instanceof FirebaseError) {
      //   setError(e.message);
      // }
    } finally {
    }
  };
  return (
    <div className="flex flex-col justify-center content-center">
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
          className="w-full h-[52px] px-3  rounded-[10px] ring-0 text-black1 text-[14px] bg-black4 placeholder-black3 outline-none"
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
          {["식사류", "간식류", "음료류"].map((item, index) => (
            <button
              onClick={() => {
                if (type == item) {
                  setType("");
                } else {
                  setType(item);
                }
              }}
              key={index}
              className={`flex  justify-center items-center h-9 relative gap-2.5 px-4 py-2.5 rounded-[56px] border ${
                type == item ? "border-green2 bg-green3" : "border-black4"
              }`}
            >
              <p className="flex text-sm font-medium text-left text-[#2c2c30]">
                {item}
              </p>
            </button>
          ))}
        </article>
      </section>
      <WhatIsYourTime
        when={when}
        setWhen={setWhen}
        timeType="식사 시간대를 알려주세요!"
      />
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
              setHunger_meal={setHunger_before_meal}
              hungerList={hungetList}
              hunger_meal={hunger_before_meal}
            />
          </div>
          <div className="flex justify-center content-center">
            <span className="text-center">식후</span>
          </div>
          <div className="col-span-4 ">
            <HungerMeter
              setHunger_meal={setHunger_After_meal}
              hungerList={hungetList}
              hunger_meal={hunger_after_meal}
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
          {["빠르게", "적당히", "천천히"].map((item, index) => (
            <button
              key={index}
              onClick={() => {
                if (speed == item) {
                  setSpeed("");
                } else {
                  setSpeed(item);
                }
              }}
              className={`flex  justify-center items-center h-9 relative gap-2.5 px-4 py-2.5 rounded-[56px] border ${
                speed == item ? "border-green2 bg-green3" : "border-black4"
              }`}
            >
              <p className="flex text-sm font-medium text-left text-[#2c2c30]">
                {item}
              </p>
            </button>
          ))}
        </article>
      </section>
      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3 py-2">
          <Image src="/bookIcon.svg" width={17} height={19} alt="bookIcon" />
          <span className="font-medium text-black2 text-[14px]">
            식사량은 어땠나요?
          </span>
        </header>
        <article className="flex gap-x-3 flex-wrap">
          {[
            "적게 먹었어요",
            "적당했어요",
            "약간 많았어요",
            "아주 많았어요",
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => {
                if (amount == item) {
                  setAmount("");
                } else {
                  setAmount(item);
                }
              }}
              className={`flex my-2 justify-center items-center h-9 relative gap-2.5 px-4 py-2.5 rounded-[56px] border ${
                amount == item ? "border-green2 bg-green3" : "border-black4"
              }`}
            >
              <p className="flex text-sm font-medium text-left text-[#2c2c30]">
                {item}
              </p>
            </button>
          ))}
        </article>
      </section>
      <section className="flex flex-col justify-center content-center w-full gap-y-2 py-4">
        <header className="flex px-3 gap-x-3">
          <Image src="/bookIcon.svg" width={17} height={19} alt="bookIcon" />
          <span className="font-medium text-black2 text-[14px]">
            오늘 성공한 식사 루틴을 체크해주세요!
          </span>
        </header>
        <article className="flex flex-col w-full  gap-3">
          {routineCheckList.map((routine, index) => (
            <div key={index} className="flex justify-center">
              <button
                onClick={() => {
                  const newSuccessedMealRoutine = { ...successed_meal_routine };
                  newSuccessedMealRoutine[index] =
                    !newSuccessedMealRoutine[index];
                  setSuccesssed_meal_routine(newSuccessedMealRoutine);
                }}
                className={`flex w-[95%] justify-between items-center h-9 gap-2.5 px-4 py-2.5 rounded-[56px] border border-[#e7e7e7] ${
                  successed_meal_routine[index]
                    ? "bg-green3 border border-green2"
                    : ""
                }`}
              >
                <p className="text-sm font-medium text-center text-[#2c2c30]">
                  {routine.content}
                </p>
                {successed_meal_routine[index] ? (
                  <FaRegCircle className="bg-green2 text-green2 rounded-full" />
                ) : (
                  <FaRegCircle />
                )}
              </button>
            </div>
          ))}
        </article>
      </section>
      <section className="flex flex-col w-full gap-y-2 py-4">
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
        <Satiety
          satisfaction={satisfaction}
          setSatisfaction={setSatisfaction}
        />
        <FeedbackNote note={note} setNote={setNote} />
      </section>
      <RecordSubmit
        submitFunction={submitFunction}
        isLoading={isLoading}
        isActive={
          menu.length > 0 &&
          type != "" &&
          when != "" &&
          hunger_before_meal != 0 &&
          hunger_after_meal != 0 &&
          speed != "" &&
          satisfaction != ""
        }
      />
    </div>
  );
}
