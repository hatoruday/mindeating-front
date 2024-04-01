"use client";
import Image from "next/image";
import SatisfiedImoticon from "./userInfoDisplay/mindFullEating/satisfiedImoticon";
import { useState } from "react";

export default function ClosingHeader({
  itemList,
  satisfiedString,
  satisfiedExtent,
}: {
  itemList: string[];
  satisfiedString: string[];
  satisfiedExtent: number;
}) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <header className="flex px-3 py-3 min-h-[62px] bg-green3 mx-0 my-0">
      {isExpanded ? (
        <div className="flex flex-col w-full">
          <div className="flex px-3 w-full justify-between items-center">
            <span className="font-medium text-[16px]">{itemList[0]}</span>
            <div className="flex gap-2  items-center text-[12px] text-[#696972] font-medium">
              {satisfiedString[satisfiedExtent]}
              <SatisfiedImoticon satisfiedExtent={satisfiedExtent} />
            </div>
          </div>
          {itemList.slice(1).map((item, index) => (
            <div
              key={index}
              className="flex px-3 w-full justify-between items-center"
            >
              <span className="font-medium text-[16px]">{item}</span>
              {/* 만약 마지막 음식이라면 div 오른쪽 마지막에 버튼을 단다. */}
              {index === itemList.length - 2 && (
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/upChevron.svg"
                    width={14}
                    height={8}
                    alt="upChevron"
                  />
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex  px-3 gap-2 justify-between w-full items-center">
          {itemList.length > 1 ? (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2"
            >
              <span className="font-medium text-[16px]">{itemList[0]}</span>
              <Image
                src="/downChevron.svg"
                width={14}
                height={8}
                alt="downChevron"
              />
            </button>
          ) : (
            <div className="items-center">
              <span className="font-medium text-[16px]">{itemList[0]}</span>
            </div>
          )}

          <div className="flex gap-2  items-center text-[12px] text-[#696972] font-medium">
            {satisfiedString[satisfiedExtent]}
            <SatisfiedImoticon satisfiedExtent={satisfiedExtent} />
          </div>
        </div>
      )}
    </header>
  );
}
