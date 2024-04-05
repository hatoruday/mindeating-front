import Image from "next/image";
import StatusBar from "../mindFullEating/statusBar";
import ClosingHeader from "../../closingHeader";
interface ActivityList {
  names: string[];
  when: string;
  time: string;
  intensity: number;
  satisfaction: string;
  note: string;
  date: string;
  timestamp: string;
}
export default function Activity({
  activtiyList,
}: {
  activtiyList: ActivityList;
}) {
  /**
   * activity widget에 대한 상태변수를 관리한다.
   */
  //activity header 상태변수
  const activityNameList = activtiyList.names;

  const satisfiedString = ["불만족스러웠어..", "만족스러웠어!", "적당해요!"];
  const satisfyMapping = ["불만족", "만족", "적당"];
  const satisfiedExtent = satisfyMapping.indexOf(activtiyList.satisfaction);
  //활동시간대 상태변수

  const activityTimeList = ["아침", "점심", "저녁"];
  const activityTimeIndex = activityTimeList.indexOf(activtiyList.when);
  //활동량 상태변수

  const activityAmountList = [
    "30분 미만",
    "30분 - 1시간",
    "1시간 - 2시간",
    "2시간 초과",
  ];
  const activityAmountExtent = activityAmountList.indexOf(activtiyList.time);
  //활동강도 상태변수
  let activityStrength = [2, 2, 2, 2, 2];

  activityStrength = activityStrength.slice(0, activtiyList.intensity);
  //beforeEatingSatiety가 8칸이 될때까지 -1을 추가한다.
  while (activityStrength.length < 5) {
    activityStrength.push(3);
  }
  //피드백 노트
  const feedbackContent = activtiyList.note;
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
            <div className="flex flex-shrink-0 flex-grow-0 gap-1">
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
            <div className="w-full mx-4 rounded-md h-[2px] bg-black4"></div>
            <div className="flex flex-shrink-0 flex-grow-0 justify-center content-center items-center px-3 py-1.5 rounded-[40px] bg-[#f5fef5] border border-[#c1f1c1]">
              <p className="text-sm font-semibold text-[#2c2c30]">
                {activityTimeList[activityTimeIndex]}
              </p>
            </div>
          </article>

          <article className="flex justify-between px-3 items-center">
            <div className="flex flex-shrink-0 flex-grow-0 gap-1">
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
            <div className="w-full mx-4 rounded-md h-[2px] bg-black4"></div>
            <div className="flex flex-shrink-0 flex-grow-0 justify-center content-center items-center px-2 py-1.5 rounded-[40px] bg-[#f5fef5] border border-[#c1f1c1]">
              <p className="text-sm font-semibold text-[#2c2c30]">
                {activityAmountList[activityAmountExtent]}
              </p>
            </div>
          </article>
          <article className="flex justify-between px-3 items-center">
            <div className="flex flex-shrink-0 flex-grow-0 gap-1">
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

            <div className="w-full mx-4 rounded-md h-[2px] bg-black4"></div>
            <StatusBar statusList={activityStrength} />
          </article>

          {feedbackContent == "" ? (
            <></>
          ) : (
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
          )}
        </section>
      </section>
    </div>
  );
}
