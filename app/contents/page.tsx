import ContentsBox from "@/components/contents/contentsBox";
import FilledStick from "@/components/contents/filledStick";
import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa";

export default function Contents() {
  const contentLevel = 2;

  const contentsBlockList = [
    {
      contentString: "다이어트 실패 원인은 \n의지력이 아닌 뇌에 있다?",
      timeRequiring: "1분",
      imgSrc: "/eating learning/curriculum/learn_1.png",
    },
    {
      contentString: "금지를 금지한다. \n내 몸의 소리에 집중할래!",
      timeRequiring: "4분",
      imgSrc: "/eating learning/curriculum/learn_2.png",
    },
    {
      contentString: "일반식을 먹었다가 \n살이 찌면 어쩌지?",
      timeRequiring: "1분",
      imgSrc: "/eating learning/curriculum/learn_3.png",
    },
    {
      contentString: "음식에 집착하던 \n내가 아니야.",
      timeRequiring: "2분",
      imgSrc: "/eating learning/curriculum/learn_4.png",
    },
    {
      contentString: "점점 체중이 \n감량되고 있어!",
      timeRequiring: "1분",
      imgSrc: "/eating learning/curriculum/learn_5.png",
    },
    {
      contentString: "요요없는 체중감량의 \n비결은 정체기?",
      timeRequiring: "2분",
      imgSrc: "/eating learning/curriculum/learn_6.png",
    },
    {
      contentString: "토끼보다 빨랐던 \n거북이",
      timeRequiring: "1분",
      imgSrc: "/eating learning/curriculum/learn_7.png",
    },
  ];
  return (
    <div className="flex flex-col content-center">
      <header className="flex w-full justify-start py-5">
        <span className="font-bold  text-[18px] text-black1">
          마음먹기 학습하기
        </span>
      </header>

      <div className="grid grid-flow-row-dense py-3 gap-x-1 gap-y-3 grid-cols-7 ">
        <div></div>
        {contentsBlockList.map((contentsBlock, index) => {
          return (
            <React.Fragment key={index}>
              <div className="col-span-6 row-span-3 w-ful">
                <ContentsBox
                  contentsString={contentsBlock.contentString}
                  imgSrc={contentsBlock.imgSrc}
                  timeRequiring={contentsBlock.timeRequiring}
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src={`${
                    contentLevel > index
                      ? "/eating learning/curriculum/learn_check.svg"
                      : contentLevel == index
                      ? "/eating learning/curriculum/currentLevelCircle.svg"
                      : "/eating learning/curriculum/locker.svg"
                  }`}
                  alt="check"
                  width={20}
                  height={20}
                />
              </div>
              <div className="row-span-2 h-full flex justify-center">
                {index == contentsBlockList.length - 1 ? (
                  <div />
                ) : (
                  <FilledStick isFilled={index < contentLevel} />
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
