"use client";
import Image from "next/image";
import StatusBar from "./statusBar";
import MealRoutineRatio from "./mealRoutineRatio";
import { useState } from "react";
import ClosingHeader from "../../closingHeader";

export default function MindFullEating() {
  const food = ["참치김밥 1줄", "떡볶이 3개", "단무지 2개"];
  /**
   * 마인드풀이팅 상태관리
   */
  //음식의 종류 상대변수
  const satisfiedExtent = 1; //만족스러운 정도를 0~2단계로 표현한다.
  const satisfiedString = ["불만족스러웠어..", "만족스러웠어!", "적당해요!"];
  const foodCategory = "식사";
  const foodVariety = "간식";

  //식사시간대 상태변수
  const eatingTime = "점심";

  //포만감 상태변수

  //피그마 설계시 8칸의 길이를 가짐. 0 : 빨간색, 1 : 노란색, 2: 초록색, -1: 회색(미기록)
  const beforeEatingSatiety = [1, 1, 3, 3, 3, 3, 3, 3];
  const afterEatingSatiety = [1, 1, 1, 2, 2, 2, 0, 0];

  //식사량 상태변수
  const mealSize = "많음";

  //식사속도 상태변수
  const mealVelocity = "빠르게";

  //식사루틴 달성률 상태변수 : 1이면 채워짐 0이면 안채워짐
  const mealRoutineList = [1, 1, 1, 1, 0];

  //피드백 노트 상태변수
  const feedbackContent = "밤에 자꾸 많이 먹어서 그게 아쉬워...";

  //렌더링 상태변수 관리
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <div className="flex flex-col ">
      <header className="flex w-full py-3 justify-between">
        <div className="flex gap-2">
          <Image
            src="/info/mindFullEatingIcon.svg"
            width={16}
            height={16}
            alt="fullEatingIcon"
          />
          <span className="font-semibold">마인드풀이팅</span>
        </div>
      </header>
      <section className="rounded-[10px] border border-[#e7e7e7] overflow-hidden">
        <ClosingHeader
          itemList={food}
          satisfiedString={satisfiedString}
          satisfiedExtent={satisfiedExtent}
        />
        <section className="flex px-2 flex-col gap-y-2 py-4">
          <article className="flex justify-between px-3 items-center">
            <div className="flex gap-1 flex-shrink-0 flex-grow-0">
              <Image
                src="/info/mindFolderIcon.svg"
                width={16}
                height={16}
                alt="folder"
              />
              <p className="text-sm flex-shrink-0 flex-grow-0 font-semibold text-left text-[#696972">
                음식의 종류
              </p>
            </div>
            <div className="w-full mx-4 rounded-md h-[2px] bg-black4"></div>
            <div className="flex gap-2 flex-shrink-0 flex-grow-0">
              <div className="flex justify-center content-center items-center w-[57px] h-[30px] rounded-[40px] bg-[#f5fef5] border border-[#c1f1c1]">
                <p className="text-sm font-semibold text-[#2c2c30]">
                  {foodCategory}
                </p>
              </div>
              <div className="flex justify-center content-center items-center w-[57px] h-[30px] rounded-[40px] bg-[#f5fef5] border border-[#c1f1c1]">
                <p className="text-sm font-semibold text-[#2c2c30]">
                  {foodVariety}
                </p>
              </div>
            </div>
          </article>
          <article className="flex justify-between px-3 items-center">
            <div className="flex gap-1 flex-shrink-0 flex-grow-0">
              <Image
                src="/info/clockIcon.svg"
                width={16}
                height={16}
                alt="folder"
              />
              <p className="text-sm font-semibold text-left text-[#696972">
                식사시간대
              </p>
            </div>
            <div className="w-full mx-4 rounded-md h-[2px] bg-black4"></div>
            <div className="flex flex-grow-0 flex-shrink-0 justify-center content-center items-center w-[57px] h-[30px] rounded-[40px] bg-[#f5fef5] border border-[#c1f1c1]">
              <p className="text-sm font-semibold text-[#2c2c30]">
                {eatingTime}
              </p>
            </div>
          </article>
          <article className="flex flex-col content-center justify-between px-3 items-center">
            <header className="flex gap-1 w-full py-3">
              <Image
                src="/info/fi-rr-head-side-thinking.svg"
                width={16}
                height={16}
                alt="포만감"
              />
              <p className="text-sm font-semibold text-left text-[#696972">
                포만감
              </p>
            </header>
            <div className="flex w-full gap-3 py-1 justify-center">
              <p className="flex-shrink-0 flex-grow-0 text-xs font-medium text-left text-[#696972]">
                식전
              </p>
              <StatusBar statusList={beforeEatingSatiety} />
            </div>
            <div className="flex w-full gap-3 py-1 justify-center">
              <p className="flex-shrink-0 flex-grow-0  text-xs font-medium text-left text-[#696972]">
                식후
              </p>
              <StatusBar statusList={afterEatingSatiety} />
            </div>
          </article>
          <article className="flex justify-between px-3 items-center">
            <div className="flex flex-shrink-0 flex-grow-0 gap-1">
              <Image
                src="/info/fi-rr-room-service.svg"
                width={16}
                height={16}
                alt="folder"
              />
              <p className="text-sm font-semibold text-left text-[#696972">
                식사량
              </p>
            </div>
            <div className="w-full mx-4 rounded-md h-[2px] bg-black4"></div>
            <div className="flex flex-shrink-0 flex-grow-0 justify-center content-center items-center w-[57px] h-[30px] rounded-[40px] bg-[#f5fef5] border border-[#c1f1c1]">
              <p className="text-sm font-semibold text-[#2c2c30]">{mealSize}</p>
            </div>
          </article>
          <article className="flex justify-between px-3 items-center">
            <div className="flex flex-shrink-0 flex-grow-0 gap-1">
              <Image
                src="/info/fi-rr-time-quarter-past.svg"
                width={16}
                height={16}
                alt="folder"
              />
              <p className="text-sm font-semibold text-left text-[#696972">
                식사속도
              </p>
            </div>
            <div className="w-full mx-4 rounded-md h-[2px] bg-black4"></div>
            <div className="flex flex-shrink-0 flex-grow-0 justify-center content-center items-center w-[70px] h-[30px] rounded-[40px] bg-[#f5fef5] border border-[#c1f1c1]">
              <p className="text-sm font-semibold text-[#2c2c30]">
                {mealVelocity}
              </p>
            </div>
          </article>
          <article className="flex justify-between px-3 items-center">
            <div className="flex flex-shrink-0 flex-grow-0 gap-1">
              <Image
                src="/info/mealRoutingAchievementRatio.svg"
                width={16}
                height={16}
                alt="folder"
              />
              <p className="text-sm font-semibold text-left text-[#696972">
                식사루틴 달성률
              </p>
            </div>
            <div className="w-full mx-4 rounded-md h-[2px] bg-black4"></div>
            <MealRoutineRatio mealRoutineList={mealRoutineList} />
          </article>
          <article className="flex flex-col justify-between px-3 items-center">
            <header className="flex gap-1 w-full py-2">
              <Image
                src="/info/feedbackPencile.svg"
                width={16}
                height={16}
                alt="pencile"
              />
              <p className="text-sm font-semibold text-left text-[#696972">
                피드백노트
              </p>
            </header>
            <div className="flex items-center px-5 w-4/5 py-1 rounded-[40px] bg-[#f5fef5] border border-[#e7e7e7]">
              <p className="font-semibold  text-[12px]">{feedbackContent}</p>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
}
