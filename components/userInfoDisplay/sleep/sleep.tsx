import Image from "next/image";
import SatisfiedImoticon from "../mindFullEating/satisfiedImoticon";
import StatusBar from "../mindFullEating/statusBar";
import { FaRegCircle } from "react-icons/fa";
import { RxCross2, RxCrossCircled } from "react-icons/rx";

export default function Sleep() {
  /**
   * activity widget에 대한 상태변수를 관리한다.
   */
  //activity header 상태변수

  const satisfiedExtent = 1; //만족스러운 정도를 0~2단계로 표현한다.
  const satisfiedString = ["불만족스러웠어..", "만족스러웠어!", "적당해요!"];
  //총 취침시간 상태변수
  const sleepAmount = "6-7시간";
  //취침시간대 상태변수
  const sleepTimeZone = "12시 이전";
  //활동강도 상태변수
  const maintainEmptyStomach = false;
  //피드백 노트
  const feedbackContent = "밤에 자꾸 많이 먹어서 그게 아쉬워...";
  return (
    <div className="flex flex-col">
      <header className="flex w-full py-3 justify-between">
        <div className="flex gap-2">
          <Image
            src="/info/fi-rr-bed.svg"
            width={16}
            height={16}
            alt="fullEatingIcon"
          />
          <span className="font-semibold">수면</span>
        </div>
      </header>
      <section className="rounded-[10px] border border-[#e7e7e7] overflow-hidden">
        <header className="flex px-3 h-[62px] bg-green3 mx-0 my-0">
          <div className="flex  px-3 gap-2 justify-between w-full items-center">
            <div className="flex items-center gap-2">
              <span className="font-medium text-[16px]">수면</span>
            </div>

            <div className="flex gap-2  items-center text-[12px] text-[#696972] font-medium">
              {satisfiedString[satisfiedExtent]}
              <SatisfiedImoticon satisfiedExtent={satisfiedExtent} />
            </div>
          </div>
        </header>
        <section className="flex px-2 flex-col gap-y-7 py-4">
          <article className="flex justify-between px-3 items-center">
            <div className="flex gap-1">
              <Image
                src="/info/clockIcon.svg"
                width={16}
                height={16}
                alt="folder"
              />
              <p className="text-sm font-semibold text-left text-[#696972">
                총 취침시간
              </p>
            </div>
            <div className="w-[136px] h-[2px] bg-[#E7E7E7]"></div>
            <div className="flex justify-center content-center items-center w-[80px] h-[30px] rounded-[40px] bg-[#f5fef5] border border-[#c1f1c1]">
              <p className="text-sm font-semibold text-[#2c2c30]">
                {sleepAmount}
              </p>
            </div>
          </article>

          <article className="flex justify-between px-3 items-center">
            <div className="flex gap-1">
              <Image
                src="/info/timezoneIcon.svg"
                width={16}
                height={16}
                alt="tennis"
              />
              <div className="text-sm w-[80px] font-semibold text-left text-[#696972">
                취침시간대
              </div>
            </div>
            <div className="w-full mx-3 h-[2px] bg-[#E7E7E7]"></div>
            <div className="flex min-w-[90px] justify-center content-center items-center  h-[30px] rounded-[40px] bg-[#f5fef5] border border-[#c1f1c1]">
              <p className="text-sm font-semibold text-[#2c2c30]">
                {sleepTimeZone}
              </p>
            </div>
          </article>

          <article className="flex justify-between px-3 items-center">
            <div className="flex gap-1">
              <Image
                src="/info/pizzaSlice.svg"
                width={16}
                height={16}
                alt="tennis"
              />
              <div className="text-sm min-w-[100px] font-semibold text-left text-[#696972">
                취침 전 공복유지
              </div>
            </div>
            <div className="w-full mx-5 h-[2px] bg-[rgb(231,231,231)]" />
            {maintainEmptyStomach ? (
              <div className="w-min-[40px] h-min-[40px] px-1.5 py-1.5 rounded-[40px] bg-green3 border border-green2">
                <FaRegCircle className="w-[20px] h-[20px]" />
              </div>
            ) : (
              <div className="w-min-[40px] h-min-[40px] px-1.5 py-1.5 rounded-[40px] bg-green3 border border-green2">
                <RxCross2 className="w-[20px] h-[20px]" />
              </div>
            )}
          </article>

          <article className="flex flex-col justify-between px-3 items-center">
            <header className="flex gap-1 w-full pb-6">
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
            <div className="flex items-center px-5 w-[291px] h-[30px] rounded-[40px] bg-[#f5fef5] border border-[#e7e7e7]">
              <p className="font-semibold  text-[12px]">{feedbackContent}</p>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
}
