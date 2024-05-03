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
  const scrollToTop = () => {
    window.scrollTo({ top: 10, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col h-full justify-center">
      {infoData?.day_data?.eating == undefined ? (
        <div className="w-full h-full flex flex-grow flex-col justify-center content-center items-center">
          <Image src="/phoneMaumi.svg" width={113} height={122} alt="notLogIcon" priority={false} />
          <span>오늘의 기록을 입력해주세요!</span>
        </div>
      ) : (
        <div className="overflow-scroll py-10 gap-y-5">
          <Routine userId={userId} routineList={infoData.routines} />
          {infoData?.day_data?.eating ? (
            <>
              <header className="flex w-full justify-between">
                <div className="flex gap-2 content-center items-center">
                  <Image src="/info/mindFullEatingIcon.svg" width={16} height={16} className="w-[16px] h-[16px]" alt="fullEatingIcon" />
                  <span className="font-semibold">마인드풀이팅</span>
                </div>
              </header>
              {infoData.day_data.eating.map((eating: any, index: number) => {
                return <MindFullEating key={index} eatingList={eating} />;
              })}
            </>
          ) : (
            <></>
          )}
          {infoData?.day_data?.activity.length != 0 ? (
            <>
              <header className="flex w-full justify-between">
                <div className="flex gap-2">
                  <Image src="/info/activityIcon.svg" width={16} height={16} alt="fullEatingIcon" />
                  <span className="font-semibold">활동</span>
                </div>
              </header>
              {infoData.day_data.activity.map((activity: any, index: number) => {
                return <Activity key={index} activtiyList={activity} />;
              })}
            </>
          ) : (
            <></>
          )}
          {infoData?.day_data?.sleep.length != 0 ? (
            <>
              <header className="flex w-full justify-between">
                <div className="flex gap-2">
                  <Image src="/info/fi-rr-bed.svg" width={16} height={16} alt="fullEatingIcon" />
                  <span className="font-semibold">수면</span>
                </div>
              </header>
              {infoData.day_data.sleep.map((sleep: any, index: number) => {
                return <Sleep key={index} sleepList={sleep} />;
              })}
            </>
          ) : (
            <></>
          )}
          {infoData?.day_data.emotion.length != 0 ? (
            <>
              <header className="flex w-full justify-between">
                <div className="flex gap-2">
                  <Image src="/info/fi-rr-laugh.svg" width={16} height={16} alt="fullEatingIcon" />
                  <span className="font-semibold">감정</span>
                </div>
              </header>
              {infoData.day_data.emotion.map((emotion: any, index: number) => {
                return <Emotion key={index} emotionList={emotion} />;
              })}
            </>
          ) : (
            <></>
          )}
          <div className="flex justify-center mt-5 mb-3">
            <button onClick={scrollToTop} className="flex justify-center">
              <FaArrowCircleUp className="text-white bg-black4 rounded-full border border-black4 w-[29px] h-[29px]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
