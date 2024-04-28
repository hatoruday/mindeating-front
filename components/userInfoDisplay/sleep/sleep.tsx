import Image from "next/image";
import SatisfiedImoticon from "../mindFullEating/satisfiedImoticon";
import StatusBar from "../mindFullEating/statusBar";
import { FaRegCircle } from "react-icons/fa";
import { RxCross2, RxCrossCircled } from "react-icons/rx";
interface SleepList {
  when: string;
  time: string;
  empty_stomach: boolean;
  satisfaction: string;
  note: string;
  date: string;
  timestamp: string;
}

export default function Sleep({ sleepList }: { sleepList: SleepList }) {
  const timeTranslate: { [key: string]: string } = {
    "6시간 미만": "less_than_6h",
    "6-8시간": "6h-8h",
    "8시간 초과": "more_than_8h",
  };
  const whenTranslate: { [key: string]: string } = {
    "12시 이전": "before_12AM",
    "12시-2시 사이": "12AM-2AM",
    "2시 이후": "after_2AM",
  };
  const satisfactionTranslate: { [key: string]: string } = {
    불만족: "unsatisfied",
    적당함: "moderate",
    만족: "satisfied",
  };
  /**
   * activity widget에 대한 상태변수를 관리한다.
   */
  //activity header 상태변수

  const satisfiedString = ["불만족스러웠어..", "만족스러웠어!", "적당해요!"];
  const satisfyMapping = ["불만족", "만족", "적당"];
  const satisfiedExtent = satisfyMapping.indexOf(Object.keys(satisfactionTranslate).find((key) => satisfactionTranslate[key] === sleepList.satisfaction) ?? "");
  //총 취침시간 상태변수
  const sleepAmount = sleepList.time;
  //['less_than_6h', '6h-8h', 'more_than_8h']
  const sleepAmountTranslate = {};
  //취침시간대 상태변수
  const sleepTimeZone = sleepList.when;
  //활동강도 상태변수
  const maintainEmptyStomach = sleepList.empty_stomach;
  //피드백 노트
  const feedbackContent = sleepList.note;
  return (
    <div className="flex flex-col">
      <header className="flex w-full py-3 justify-between">
        <div className="flex gap-2">
          <Image src="/info/fi-rr-bed.svg" width={16} height={16} alt="fullEatingIcon" />
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
            <div className="flex flex-grow-0 flex-shrink-0 gap-x-2">
              <Image src="/info/clockIcon.svg" className="w-[16px] h-[16px]" width={16} height={16} alt="folder" />
              <p className="text-sm font-semibold text-left text-black2">총 취침시간</p>
            </div>
            <div className="w-full mx-4 rounded-md h-[2px] bg-black4"></div>
            <div className="flex flex-grow-0 flex-shrink-0 justify-center content-center items-center w-[80px] h-[30px] rounded-[40px] bg-[#f5fef5] border border-[#c1f1c1]">
              <p className="text-sm font-semibold text-[#2c2c30]">{Object.keys(timeTranslate).find((key) => timeTranslate[key] === sleepAmount)}</p>
            </div>
          </article>

          <article className="flex justify-between px-3 items-center">
            <div className="flex flex-grow-0 flex-shrink-0 gap-x-2">
              <Image src="/info/timezoneIcon.svg" width={16} height={16} alt="tennis" />
              <div className="text-sm w-[80px] font-semibold text-left text-black2">취침시간대</div>
            </div>
            <div className="w-full mx-3 h-[2px] bg-[#E7E7E7]"></div>
            <div className="flex min-w-[90px] flex-grow-0 flex-shrink-0 justify-center content-center items-center  h-[30px] rounded-[40px] bg-[#f5fef5] border border-[#c1f1c1]">
              <p className="text-sm font-semibold text-[#2c2c30]">{Object.keys(whenTranslate).find((key) => whenTranslate[key] === sleepTimeZone)}</p>
            </div>
          </article>

          <article className="flex justify-between px-3 items-center">
            <div className="flex flex-grow-0 flex-shrink-0 gap-x-2">
              <Image src="/info/pizzaSlice.svg" width={16} height={16} alt="tennis" />
              <div className="text-sm min-w-[100px] font-semibold text-left text-black2">취침 전 공복유지</div>
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

          {feedbackContent == "" ? (
            <></>
          ) : (
            <article className="flex flex-col justify-between px-3 items-center">
              <header className="flex gap-1 w-full py-2">
                <Image src="/info/feedbackPencile.svg" width={16} height={16} alt="pencile" />
                <p className="text-sm font-semibold text-left text-[#696972">피드백노트</p>
              </header>
              <div className="flex items-center px-5 w-full py-1 rounded-[40px] bg-[#f5fef5] border border-[#e7e7e7]">
                <p className="font-semibold  text-[12px]">{feedbackContent}</p>
              </div>
            </article>
          )}
        </section>
      </section>
    </div>
  );
}
