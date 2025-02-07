"use client";

import Image from "next/image";
import { use, useEffect, useRef, useState } from "react";
import OutagePeriod from "../outagePeriod";
import MyCalendar from "../myCalendar";
import RightChevron from "../rightChevron";
import LeftChevron from "../leftChevron";
import UserInfoDisplay from "./userInfoDisplay";
import PostSpecificFetch, { FetchResult } from "@/api/postFetch";
import Link from "next/link";
import { infoAction, InfoParams } from "@/app/info/[userId]/infoAction";
import SubmitPopUpScreen from "../record/submitPopup";

export const revalidate = 0;
export default function HomePage({ userId, userData, specificDay }: { userData: any; userId: string; specificDay?: string }) {
  const divRef = useRef<HTMLDivElement | null>(null);

  // 스크롤 조정 함수 예시
  const scrollToTop = () => {
    if (divRef.current) {
      divRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const name = userData?.user_name;
  const state = userData?.state;
  const week = userData?.week;

  const [offset, setOffset] = useState<number>(0);
  let currentDate = new Date();
  if (specificDay) currentDate = new Date(specificDay);
  //nowOffset을 offset으로 하여 currentDate를 변경한다.
  currentDate.setTime(currentDate.getTime() + offset * 30 * 24 * 60 * 60 * 1000);

  const [isFadeOut, setIsFadeOut] = useState<boolean>(false);
  const [enablePopUp, setEnablePopUp] = useState<boolean>(false);
  //4월 13일을 표시하는 Date객체를 만든다.
  const date = new Date(2024, 3, 12, 9, 0, 0, 0);
  const [selectDate, setSelectDate] = useState<Date>(date);
  //set slash to !slash whey clicked
  const fetchSubmit = async () => {
    const eatingData = {
      user_id: userId,
    };
    const JSONdata: string = JSON.stringify(eatingData);
    setEnableSubmit(false);
    const now = new Date();
    // router.push(`/info/${userId}/${now.getFullYear()}-${now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : "0" + now.getMonth()}-${now.getDate()}`);
    await PostSpecificFetch(JSONdata, "feedback");
  };
  const [enableSubmit, setEnableSubmit] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [infoData, setInfoData] = useState<string>("");
  const clientActionWrapper = async (infoParam: InfoParams) => {
    setIsLoading(true);
    const result: FetchResult | undefined = await infoAction(infoParam);

    if (result?.ok && result?.success) {
      setIsLoading(false);
      return result?.result;
    } else if (result?.ok) {
      setIsLoading(false);
      return result?.result;
      // alert("실패. client error success:" + result?.success + " name: " + result?.result.name);
      // setIsLoading(false);
      // console.log(result?.result);
    } else {
      // alert("실패. server error\n" + result?.result);
      // setIsLoading(false);
    }
    // setState(result)
  };
  let infodata: any;
  useEffect(() => {
    loadNewData();
  }, [selectDate]);
  const loadNewData = () => {
    if (isLoading) return;
    setIsLoading(true);
    // console.log("해당 selectDate로 데이터를 불러옵니다.", selectDate);
    clientActionWrapper({ user_id: userId, date: selectDate }).then((result) => {
      setInfoData(result);
      setEnableSubmit(result.submit_activated);
      // console.log("loadNewData", result.submit_activated);

      // console.log("loadNewData", result);
    });
  };

  useEffect(() => {
    // setInfoData(infodata);
    // console.log("useEffect", infodata);
    setIsLoading(false);
  }, [infodata]);

  return (
    <div ref={divRef} className="overflow-y-scroll max-h-[100dvh] flex flex-col">
      <div className="flex h-full flex-col">
        <header className="flex flex-col px-3 justify-start">
          <div className="flex w-full justify-between content-center items-center sm:mx-auto sm:w-full sm:max-w-sm pt-5">
            <div className="flex flex-col">
              <h3 className="text-[#9F9FAC] text-[16px] pt-5">안녕하세요! 오늘도 파이팅해봐요:{")"}</h3>
              <h1 className="text-black text-[26px] font-normal">
                <span className="font-semibold">{name}님</span>의 마음먹기
              </h1>
            </div>
            <div></div>
            {isFadeOut &&
              (enableSubmit ? (
                <button
                  className={`${enableSubmit ? "bg-green3 border border-green2" : "border border-black3 bg-black4 "} rounded-[12px] w-[69px] h-[40px] border-2 `}
                  onClick={() => {
                    setEnablePopUp(!enablePopUp);
                  }}
                >
                  <span className="font-bold text-[16px] text-black1">제출</span>
                </button>
              ) : (
                <button className={`${enableSubmit ? "bg-green3 border border-green2" : "border border-black3 bg-black4 "} rounded-[12px] w-[69px] h-[40px] border-2 `}>
                  <span className="font-bold text-[16px] text-black1">제출</span>
                </button>
              ))}
          </div>
          {/* 식욕안정기 3월 14일 / 마음먹기 2주차 < > */}
          {!(isFadeOut && specificDay) && (
            <aside className="flex max-md justify-start gap-x-3 items-center font-normal pt-3">
              <OutagePeriod nameIdentifier={state} />
              <span className="text-[14px] text-center ">마음먹기 {week} 주차</span>
              {/*< > 양쪽 꺽쇠 관련 컴포넌트*/}
              <div className="flex items-center">
                <button aria-label="calendar backward" className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100">
                  {/* <LeftChevron /> */}
                </button>
                <button aria-label="calendar forward" className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100">
                  {/* {<RightChevron />} */}
                </button>
              </div>
            </aside>
          )}

          <div className="w-full flex justify-center pt-7">
            <span>
              {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
            </span>
          </div>
        </header>

        {/* 캘린더 */}
        <MyCalendar
          offset={offset}
          setOffset={setOffset}
          isFadeOut={isFadeOut}
          loadNew={loadNewData}
          specificDay={specificDay}
          setIsFadeOut={setIsFadeOut}
          userData={userData}
          selectDate={selectDate}
          setSelectDate={setSelectDate}
        />
        {/** split bar */}
        <div className="border-t border-gray-200"></div>
        {enablePopUp && (
          <SubmitPopUpScreen
            fetchSubmit={fetchSubmit}
            setOpen={() => {
              setEnablePopUp(!enablePopUp);
            }}
            isOpen={enablePopUp}
          />
        )}
        {isFadeOut && !isLoading ? (
          <>
            <div className="w-full h-5" />
            <UserInfoDisplay scrollToTop={scrollToTop} infoData={infoData} userId={userId} selectDate={selectDate} />
          </>
        ) : (
          <footer className="flex justify-center">
            <Link href={`/contents/${userId}`}>
              <div className="flex items-center content-center justify-items-center mt-5 justify-between px-4 w-[330px] h-[50px] rounded-[40px] bg-green3 hover:bg-green2 border border-[#c1f1c1]">
                <div className="flex items-center mt">
                  <Image src="/bookIcon.svg" alt="bookIcon" width={18} height={18} /> <span className="px-3 text-sm font-semibold">식욕 올라올 땐? 노하우 콘텐츠!</span>
                </div>

                <RightChevron />
              </div>
            </Link>
          </footer>
        )}
      </div>
    </div>
  );
}
