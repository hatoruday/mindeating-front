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
import { FetchResult } from "@/api/postFetch";
import { mindAction, MindParams } from "./mindAction";
import Link from "next/link";

interface SuccessMealRoutine {
  [key: number]: boolean;
}
interface IParams {
  params: { userId: string };
}

export default function MindFullEating({ params: { userId } }: IParams) {
  const [menu, setMenu] = useState<string[]>([]); //required
  const [type, setType] = useState<string>("");
  const typeTranslate: { [key: string]: string } = {
    식사류: "meals",
    간식류: "snacks",
    음료류: "beverages",
  };
  const [when, setWhen] = useState<string>("");
  //
  //['dawn', 'morning', 'lunch', 'dinner', 'night']
  const whenTranslate: { [key: string]: string } = {
    새벽: "dawn",
    아침: "morning", // "morning
    점심: "lunch",
    저녁: "dinner",
    밤: "night",
  };
  const [hunger_before_meal, setHunger_before_meal] = useState<number>(0);
  const hungetList = [1, 2, 3, 4, 5, 6, 7, 8];
  const [hunger_after_meal, setHunger_After_meal] = useState<number>(0);
  const [speed, setSpeed] = useState<string>("");
  //'fast', 'moderate', 'slow
  const speedTranslate: { [key: string]: string } = {
    빠르게: "fast",
    적당히: "moderate",
    천천히: "slow",
  };
  const [amount, setAmount] = useState<string>("");
  //['little', 'moderate', 'bit much', 'a lot']
  //["적게 먹었어요", "적당했어요", "약간 많았어요", "아주 많았어요"]
  const amountTranslate: { [key: string]: string } = {
    "적게 먹었어요": "little",
    적당했어요: "moderate",
    "약간 많았어요": "bit much",
    "아주 많았어요": "a lot",
  };
  const [successed_meal_routine, setSuccesssed_meal_routine] = useState<SuccessMealRoutine>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const [satisfaction, setSatisfaction] = useState<string>("");
  //['unsatisfied', 'moderate', 'satisfied']
  const satisfactionTranslate: { [key: string]: string } = {
    불만족: "unsatisfied",
    적당함: "moderate",
    만족: "satisfied",
  };
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
  const handleBlur = () => {
    if (currentInput.trim() !== "") {
      // 새로운 아이템을 menu 배열에 추가
      setMenu([...menu, currentInput.trim()]);
      // 입력 필드 초기화
      setCurrentInput("");
    }
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

    { content: "식사에만 온전히 집중해서 맛과 식감 느끼기", isDone: false },
    { content: `\"다음에 또 먹을 수 있다\" 상기시키기`, isDone: false },
    {
      content: "식후 물 한 컵 마시며 바로 식사 자리 정리하기",
      isDone: false,
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const clientActionWrapper = async (eatingData: MindParams) => {
    setIsLoading(true);
    const result: FetchResult | undefined = await mindAction(eatingData);
    if (result?.ok && result?.success) {
      // alert("성공");
      const now = new Date();
      router.push(`/info/${userId}/${now.getFullYear()}-${now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : "0" + now.getMonth()}-${now.getDate() < 10 ? "0" + now.getDate() : now.getDate()}`);
      // console.log(result?.result.name);
      // window.location.href = "kakaotalk://inappbrowser/close";
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
            <span className="font-semibold text-[16px]">마인드풀이팅</span>
          </div>
        </div>
      </header>

      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3 pb-3">
          <Image src="/bookIcon.svg" width={18} height={16} alt="bookIcon" />
          <span className="font-[600] text-black2 text-[14px]">어떤 음식을 드셨나요</span>
        </header>
        <input
          className="w-full h-[52px] px-5  rounded-[10px] ring-0 text-black1 text-[14px] bg-black4 bg-opacity-20 placeholder-black3 outline-none"
          value={currentInput}
          onChange={handleInputChange}
          onKeyUp={handleKeyPress}
          onBlur={() => {
            handleBlur();
          }}
          placeholder="음식 이름을 입력해주세요"
        />
        <div className="flex gap-1 px-2">
          {menu.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setMenu(menu.filter((_, i) => i !== index));
              }}
              className="flex justify-center items-center h-9 relative gap-2 px-3.5 py-2.5 rounded-[56px] border border-green2 bg-green3"
            >
              <p className="flex flex-grow-0 flex-shrink-0">{item}</p>
              <RxCross2 className="w-[20px] h-[20px]" />
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3 py-2 content-center">
          <Image src="/bookSearch.svg" width={17} height={19} alt="bookIcon" />
          <span className="font-[600] text-black2 text-[14px]">음식의 종류는 뭔가요?</span>
        </header>
        <article className="flex justify-start px-3 gap-x-2">
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
              className={`flex  justify-center items-center h-9 relative gap-2.5 px-4 py-2.5 rounded-[56px] border ${type == item ? "border-green2 bg-green3" : "border-black4"}`}
            >
              <p className="flex text-sm font-medium text-left text-[#2c2c30]">{item}</p>
            </button>
          ))}
        </article>
      </section>
      <WhatIsYourTime when={when} setWhen={setWhen} timeType="식사 시간대를 알려주세요!" />
      <section className="flex flex-col py-4 content-center">
        <header className="flex px-3 gap-x-3 py-2 content-center">
          <Image src="/bookIcon.svg" width={17} height={19} alt="bookIcon" />
          <span className="font-[600] text-black2 text-[14px]">배고픔 배부름 정도는 어땠나요</span>
        </header>
        <aside>
          <div className="flex gap-x-3 justify-center my-3">
            <div className="flex-shrink-0 items-center justify-center flex ">
              <span className="font-semibold text-[13px] text-black2">식전</span>
            </div>
            <div className="flex flex-shrink-0 items-center">
              <span className="text-black3 items-center text-[12px]">Too hungry</span>
            </div>
            <HungerMeter colorList={[1, 2, 3, 4, 5]} hungerList={[1, 2, 3, 4, 5]} hunger_meal={hunger_before_meal} setHunger_meal={setHunger_before_meal} />
            <div className="flex flex-shrink-0 items-center">
              <span className="text-black3 text-[12px]">Too full</span>
            </div>
          </div>
          <div className="flex gap-x-3 justify-center">
            <div className="flex-shrink-0 items-center justify-center flex ">
              <span className="font-semibold text-[13px] text-black2">식후</span>
            </div>
            <div className="flex flex-shrink-0 items-center">
              <span className="text-black3 items-center text-[12px]">Too hungry</span>
            </div>
            <HungerMeter colorList={[1, 2, 3, 4, 5]} hungerList={[1, 2, 3, 4, 5]} hunger_meal={hunger_after_meal} setHunger_meal={setHunger_After_meal} />
            <div className="flex flex-shrink-0 items-center">
              <span className="text-black3 text-[12px]">Too full</span>
            </div>
          </div>
        </aside>
      </section>
      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3 py-2 content-center">
          <Image src="/bookIcon.svg" width={17} height={19} alt="bookIcon" />
          <span className="font-[600] text-black2 text-[14px]">식사 속도를 알려주세요!</span>
        </header>
        <article className="flex gap-x-3 px-3">
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
              className={`flex  justify-center items-center h-9 relative gap-2.5 px-3 py-2.5 rounded-[56px] border ${speed == item ? "border-green2 bg-green3" : "border-black4"}`}
            >
              <p className="flex text-sm font-medium text-left text-[#2c2c30]">{item}</p>
            </button>
          ))}
        </article>
      </section>
      <section className="flex flex-col gap-y-2 py-4">
        <header className="flex px-3 gap-x-3 py-2 content-center">
          <Image src="/bookIcon.svg" width={17} height={19} alt="bookIcon" />
          <span className="font-[600] text-black2 text-[14px]">식사량은 어땠나요?</span>
        </header>
        <article className="flex gap-x-3 flex-wrap px-3">
          {["적게 먹었어요", "적당했어요", "약간 많았어요", "아주 많았어요"].map((item, index) => (
            <button
              key={index}
              onClick={() => {
                if (amount == item) {
                  setAmount("");
                } else {
                  setAmount(item);
                }
              }}
              className={`flex mb-2 justify-center items-center h-9 relative gap-2.5 px-4 py-2.5 rounded-[56px] border ${amount == item ? "border-green2 bg-green3" : "border-black4"}`}
            >
              <p className="flex text-sm font-medium text-left text-[#2c2c30]">{item}</p>
            </button>
          ))}
        </article>
      </section>
      <section className="flex flex-col justify-center content-center w-full gap-y-2 py-4">
        <header className="flex px-3 gap-x-3 py-2 content-center">
          <Image src="/bookIcon.svg" width={17} height={19} alt="bookIcon" />
          <span className="font-[600] text-black2 text-[14px]">오늘 성공한 식사 루틴을 체크해주세요!</span>
        </header>
        <article className="flex flex-col w-full  gap-3">
          {routineCheckList.map((routine, index) => (
            <div key={index} className="flex justify-center">
              <button
                onClick={() => {
                  const newSuccessedMealRoutine = { ...successed_meal_routine };
                  newSuccessedMealRoutine[index] = !newSuccessedMealRoutine[index];
                  setSuccesssed_meal_routine(newSuccessedMealRoutine);
                }}
                className={`flex w-[95%] justify-between items-center h-9 gap-2.5 px-4 py-2.5 rounded-[56px] border border-[#e7e7e7] ${
                  successed_meal_routine[index] ? "bg-green3 border border-green2" : ""
                }`}
              >
                <p className="text-sm flex-shrink-0 font-medium text-center text-[#2c2c30]">{routine.content}</p>
                {successed_meal_routine[index] ? <FaRegCircle className="bg-green2 text-green2 rounded-full" /> : <FaRegCircle />}
              </button>
            </div>
          ))}
        </article>
      </section>
      <section className="flex flex-col w-full gap-y-2 py-4">
        <header className="flex px-3 gap-x-3 py-2 content-center">
          <Image src="/emoji/satisfiedFace.svg" width={17} height={19} alt="bookIcon" />
          <span className="font-[600] text-black2 text-[14px]">식사 만족도</span>
        </header>
        <Satiety satisfaction={satisfaction} setSatisfaction={setSatisfaction} />
      </section>
      <section className="flex flex-col w-full gap-y-2 py-4">
        <header className="flex px-3 gap-x-3 py-2 content-center">
          <Image src="/info/feedbackPencile.svg" width={19} height={19} alt="bookIcon" />
          <span className="font-[600] text-black2 text-[14px]">피드백 노트</span>
        </header>
        <FeedbackNote note={note} setNote={setNote} />
      </section>

      <RecordSubmit
        submitFunction={clientActionWrapper}
        data={{
          user_id: userId,
          record: {
            menu,
            type: typeTranslate[type],
            when: whenTranslate[when],
            hunger_before_meal,
            hunger_after_meal,
            speed: speedTranslate[speed],
            amount: amountTranslate[amount],
            successed_meal_routine,
            satisfaction: satisfactionTranslate[satisfaction],
            note,
          },
        }}
        isLoading={isLoading}
        isActive={menu.length > 0 && type != "" && when != "" && hunger_before_meal != 0 && hunger_after_meal != 0 && speed != "" && satisfaction != ""}
      />
    </div>
  );
}
