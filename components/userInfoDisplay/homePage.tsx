"use client";

import Image from "next/image";
import { use, useEffect, useState } from "react";
import OutagePeriod from "../outagePeriod";
import MyCalendar from "../myCalendar";
import RightChevron from "../rightChevron";
import LeftChevron from "../leftChevron";
import UserInfoDisplay from "./userInfoDisplay";
import PostSpecificFetch, { FetchResult } from "@/api/postFetch";
import Link from "next/link";
import { infoAction, InfoParams } from "@/app/info/[userId]/infoAction";
export const revalidate = 0;
export default function HomePage({ userId, userData }: { userData: any; userId: string }) {
  const name = userData?.user_name;
  const month = 3;
  const day = 14;
  const week = 2;
  const [isFadeOut, setIsFadeOut] = useState<boolean>(false);
  const [popUpEnable, setPopUpEnable] = useState<boolean>(false);
  //4월 13일을 표시하는 Date객체를 만든다.
  const date = new Date(2024, 3, 12, 9, 0, 0, 0);
  const [selectDate, setSelectDate] = useState<Date>(date);
  //set slash to !slash whey clicked
  const fetchSubmit = async () => {
    const eatingData = {
      user_id: userId,
    };
    const JSONdata: string = JSON.stringify(eatingData);

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
    <div>
      <div className="flex h-full flex-col">
        <header className="flex w-full justify-between content-center items-center sm:mx-auto sm:w-full sm:max-w-sm pt-5">
          <div className="flex flex-col">
            <h3 className="text-[#9F9FAC] text-[16px] te">안녕하세요! 오늘도 파이팅해봐요:{")"}</h3>
            <h1 className="text-black text-[26px] font-normal">
              <span className="font-semibold">{name}님</span>의 마음 냉장고
            </h1>
          </div>
          {isFadeOut && (
            <button className={`${enableSubmit ? "bg-green3 border border-green2" : "border border-black3 bg-black4 "} rounded-[12px] w-[69px] h-[40px] border-2 `} onClick={fetchSubmit}>
              <span className="font-bold text-[16px] text-black1">제출</span>
            </button>
          )}
        </header>
        {/* 식욕안정기 3월 14일 / 마음먹기 2주차 < > */}
        <aside className="mt-10 flex max-md justify-around items-center font-normal">
          <OutagePeriod name="식욕안정기" />
          <span className="text-[14px] text-center ">
            {month}월 {day}일 / 마음먹기 {week} 주차
          </span>
          {/*< > 양쪽 꺽쇠 관련 컴포넌트*/}
          <div className="flex items-center">
            <button aria-label="calendar backward" className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100">
              <LeftChevron />
            </button>
            <button aria-label="calendar forward" className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100">
              {<RightChevron />}
            </button>
          </div>
        </aside>
        {/* 캘린더 */}
        <MyCalendar isFadeOut={isFadeOut} loadNew={loadNewData} setIsFadeOut={setIsFadeOut} userData={userData} selectDate={selectDate} setSelectDate={setSelectDate} />
        {/** split bar */}
        <div className="border-t border-gray-200"></div>
        {isFadeOut && !isLoading ? (
          <>
            <div className="w-full h-5" />
            <UserInfoDisplay infoData={infoData} userId={userId} selectDate={selectDate} />
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
