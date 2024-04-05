"use client";
import FeedbackNote from "@/components/record/mind/feedbackNote";
import RecordSubmit from "@/components/record/recordSubmit";
import WhatIsYourTime from "@/components/record/whatIsYourEatingTime";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

interface IParams {
  params: { userId: string };
}
export default function MindFullEating({ params: { userId } }: IParams) {
  const [state, setState] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [when, setWhen] = useState<string>("");
  const [note, setNote] = useState<string>("");

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
          state,
          when,
          type,
          note,
        },
      };

      const JSONdata = JSON.stringify(eatingData);
      const endpoint = "http://13.124.182.175:8000/record/record-emotion/";

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

    //typeList의 각 요소의 index에 대해 1: 클릭됨 0: 클릭안됨

    //기타를 클릭했을 때 나오는 입력칸의 상태를 관리한다.

    // 텍스트 필드의 입력을 처리하는 함수
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setState(value);
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
          className="w-full h-[52px] px-3 bg-opacity-20 text-black1 rounded-[10px] text-[14px] bg-black4 placeholder-black3 outline-none ring-0"
          value={state}
          onChange={handleInputChange}
          placeholder="어떤 감정이 들었나요?"
        />
      </section>

      <section className="flex flex-col w-full content-center gap-y-2 py-4">
        <header className="flex px-3 gap-x-3">
          <Image src="/bookSearch.svg" width={17} height={19} alt="bookIcon" />
          <span className="font-medium text-black2 text-[14px]">
            감정의 종류는 뭔가요?
          </span>
        </header>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => {
              if (type == "부정") setType("");
              else {
                setType("부정");
              }
            }}
            className={`flex flex-col justify-around content-center items-center w-[94px] h-[94px] rounded-lg border ${
              type == "부정" ? "border-green2" : "border-black4"
            }`}
          >
            <Image
              src="/emoji/Crying face.svg"
              width={45}
              height={45}
              alt="nope"
              className={`${type != "부정" ? "opacity-20" : ""}`}
            />

            <span
              className={`text-[12px] ${
                type == "부정" ? "font-bold text-black1" : "text-black4"
              }`}
            >
              부정
            </span>
          </button>

          <button
            onClick={() => {
              if (type == "긍정") setType("");
              else {
                setType("긍정");
              }
            }}
            className={`flex flex-col justify-around content-center items-center w-[94px] h-[94px] rounded-lg border ${
              type == "긍정" ? "border-green2" : "border-black4"
            }`}
          >
            <Image
              src="/emoji/Smiling face with 3 hearts.svg"
              width={38}
              height={38}
              alt="neutral"
              className={`${type != "긍정" ? "opacity-20" : ""}`}
            />

            <span
              className={`text-[12px] ${
                type == "긍정" ? "font-bold text-black1" : "text-black4"
              }`}
            >
              긍정
            </span>
          </button>
        </div>
      </section>
      <section className="flex w-full justify-center">
        <WhatIsYourTime
          timeType="언제 그런 감정을 느꼈나요?"
          when={when}
          setWhen={setWhen}
        />
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

      <RecordSubmit
        submitFunction={submitFunction}
        isLoading={isLoading}
        isActive={state != "" && type != "" && when != "" ? true : false}
      />
    </div>
  );
}
