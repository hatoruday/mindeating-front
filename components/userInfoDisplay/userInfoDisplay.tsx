"use client";
import Activity from "@/components/userInfoDisplay/activity/activity";
import Emotion from "@/components/userInfoDisplay/emotion/emotion";
import MindFullEating from "@/components/userInfoDisplay/mindFullEating/mindFullEating";
import Routine from "@/components/userInfoDisplay/routine/routine";
import Sleep from "@/components/userInfoDisplay/sleep/sleep";
import Image from "next/image";
import { FaArrowCircleUp } from "react-icons/fa";

export default function UserInfoDisplay({ info }: any) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-y-5">
      <Routine />
      {info?.day_data.eating ? (
        <>
          {info.day_data.eating.map((eating: any, index: number) => {
            return <MindFullEating key={index} eatingList={eating} />;
          })}
        </>
      ) : (
        <></>
      )}

      <Activity />
      <Sleep />
      <Emotion />
      <button onClick={scrollToTop} className="flex justify-center">
        <FaArrowCircleUp className="text-white bg-black4 rounded-full border border-black4 w-[29px] h-[29px]" />
      </button>
    </div>
  );
}
