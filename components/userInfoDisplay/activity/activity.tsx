import Image from "next/image";
import StatusBar from "../mindFullEating/statusBar";
import ClosingHeader from "../../closingHeader";

export default function Activity() {
  /**
   * activity widget에 대한 상태변수를 관리한다.
   */
  //activity header 상태변수
  const activityNameList = ["배드민턴", "휴식", "달리기"];
  const satisfiedExtent = 1; //만족스러운 정도를 0~2단계로 표현한다.
  const satisfiedString = ["불만족스러웠어..", "만족스러웠어!", "적당해요!"];
  //활동시간대 상태변수
  const activityTimeIndex = 1;
  const activityTimeList = ["아침", "점심", "저녁"];
  //활동량 상태변수
  const activityAmountExtent = 1;
  const activityAmountList = ["적음", "보통", "많음"];
  //활동강도 상태변수
  const activityStrength = [2, 2, 3, 3, 3];
  //피드백 노트
  const feedbackContent = "밤에 자꾸 많이 먹어서 그게 아쉬워...";
  return (
    <div className="flex flex-col">
      <header className="flex w-full py-3 justify-between">
        <div className="flex gap-2">
          <Image
            src="/info/activityIcon.svg"
            width={16}
            height={16}
            alt="fullEatingIcon"
          />
          <span className="font-semibold">활동</span>
        </div>
      </header>
      <section className="rounded-[10px] border border-[#e7e7e7] overflow-hidden">
        <ClosingHeader
          itemList={activityNameList}
          satisfiedString={satisfiedString}
          satisfiedExtent={satisfiedExtent}
        />
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
                활동시간대
              </p>
            </div>
            <div className="w-[136px] h-[2px] bg-[#E7E7E7]"></div>
            <div className="flex justify-center content-center items-center w-[57px] h-[30px] rounded-[40px] bg-[#f5fef5] border border-[#c1f1c1]">
              <p className="text-sm font-semibold text-[#2c2c30]">
                {activityTimeList[activityTimeIndex]}
              </p>
            </div>
          </article>

          <article className="flex justify-between px-3 items-center">
            <div className="flex gap-1">
              <Image
                src="/info/fi-rr-tennis.svg"
                width={16}
                height={16}
                alt="tennis"
              />
              <p className="text-sm font-semibold text-left text-[#696972">
                활동량
              </p>
            </div>
            <div className="w-[158px] h-[2px] bg-[#E7E7E7]"></div>
            <div className="flex justify-center content-center items-center w-[57px] h-[30px] rounded-[40px] bg-[#f5fef5] border border-[#c1f1c1]">
              <p className="text-sm font-semibold text-[#2c2c30]">
                {activityAmountList[activityAmountExtent]}
              </p>
            </div>
          </article>
          <article className="flex justify-between px-3 items-center">
            <div className="flex gap-1">
              <Image
                src="/info/fi-rr-tennis.svg"
                width={16}
                height={16}
                alt="tennis"
              />
              <p className="text-sm font-semibold text-left text-[#696972">
                활동강도
              </p>
            </div>

            <div className="w-[51px] h-[2px] bg-[#E7E7E7]"></div>
            <StatusBar statusList={activityStrength} />
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
