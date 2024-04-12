"use client";
import { FetchResult } from "@/api/postFetch";
import { infoAction, InfoParams } from "@/app/info/[userId]/infoAction";
import Activity from "@/components/userInfoDisplay/activity/activity";
import Emotion from "@/components/userInfoDisplay/emotion/emotion";
import MindFullEating from "@/components/userInfoDisplay/mindFullEating/mindFullEating";
import Routine from "@/components/userInfoDisplay/routine/routine";
import Sleep from "@/components/userInfoDisplay/sleep/sleep";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default function UserInfoDisplay({ userId, selectDate, infoData }: { userId: string; selectDate: Date; infoData: any }) {
  useEffect(() => {
    console.log("유저정보디스플레이", infoData);
  }, [infoData]);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col h-full justify-center gap-y-5">
      {infoData?.day_data?.eating == undefined ? (
        <div className="w-full flex flex-col justify-center content-center items-center">
          <Image src="/phoneMaumi.svg" width={113} height={122} alt="notLogIcon" priority={false} />
          <span>오늘의 기록을 입력해주세요!</span>
        </div>
      ) : (
        <>
          <Routine userId={userId} routineList={infoData.routines} />
          {infoData?.day_data?.eating ? (
            <>
              {infoData.day_data.eating.map((eating: any, index: number) => {
                return <MindFullEating key={index} eatingList={eating} />;
              })}
            </>
          ) : (
            <></>
          )}
          {infoData?.day_data?.activity ? (
            <>
              {infoData.day_data.activity.map((activity: any, index: number) => {
                return <Activity key={index} activtiyList={activity} />;
              })}
            </>
          ) : (
            <></>
          )}
          {infoData?.day_data?.sleep ? (
            <>
              {infoData.day_data.sleep.map((sleep: any, index: number) => {
                return <Sleep key={index} sleepList={sleep} />;
              })}
            </>
          ) : (
            <></>
          )}
          {infoData?.day_data.emotion ? (
            <>
              {infoData.day_data.emotion.map((emotion: any, index: number) => {
                return <Emotion key={index} emotionList={emotion} />;
              })}
            </>
          ) : (
            <></>
          )}

          <button onClick={scrollToTop} className="flex justify-center">
            <FaArrowCircleUp className="text-white bg-black4 rounded-full border border-black4 w-[29px] h-[29px]" />
          </button>
        </>
      )}
    </div>
  );
}
