import Image from "next/image";
import PositiveIcon from "./positive";

interface EmotionList {
  when: string;
  state: string;
  type: string;
  note: string;
  date: string;
  timestamp: string;
}
export default function Emotion({ emotionList }: { emotionList: EmotionList }) {
  /**
   * activity widget에 대한 상태변수를 관리한다.
   */
  //activity header 상태변수

  //현재느끼는 감정의 이름
  const emotionName = emotionList.state;
  //감정상태 이모지
  const isPositive = ["부정", "긍정"].indexOf(emotionList.type); //긍정 : 1 부정 : 0
  const isPositiveString = ["부정적이에요!", "긍정적이에요!"];

  //총 감정을 느낀 시간 상태변수
  const emotionTime = ["새벽", "아침", "점심", "저녁", "밤"];
  const emotionTimeIndex = emotionTime.indexOf(emotionList.when);

  //피드백 노트
  const emotionNote = emotionList.note;
  return (
    <div className="flex flex-col">
      <header className="flex w-full py-3 justify-between">
        <div className="flex gap-2">
          <Image src="/info/fi-rr-bed.svg" width={16} height={16} alt="fullEatingIcon" />
          <span className="font-semibold">감정</span>
        </div>
      </header>
      <section className="rounded-[10px] border border-[#e7e7e7] overflow-hidden">
        <header className="flex px-3 h-[62px] bg-green3 mx-0 my-0">
          <div className="flex   gap-2 justify-between w-full items-center">
            <div className="flex items-center gap-2 px-2">
              <span className="font-medium text-[16px]">{emotionName}</span>
            </div>

            <div className="flex gap-2  items-center text-[12px] text-[#696972] font-medium">
              {isPositiveString[isPositive]}
              <PositiveIcon isPositive />
            </div>
          </div>
        </header>
        <section className="flex px-2 flex-col gap-y-7 py-4">
          <article className="flex justify-between px-3 items-center">
            <div className="flex flex-shrink-0 flex-grow-0 gap-1">
              <Image src="/info/clockIcon.svg" width={16} height={16} className="w-[16px] h-[16px]" alt="folder" />
              <p className="text-sm font-semibold text-left text-[#696972">감정을 느낀 시간</p>
            </div>
            <div className="w-full mx-3 h-[2px] bg-[#E7E7E7]"></div>
            <div className="flex flex-shrink-0 flex-grow-0 justify-center content-center items-center w-[80px] h-[30px] rounded-[40px] bg-[#f5fef5] border border-[#c1f1c1]">
              <p className="text-sm font-semibold text-[#2c2c30]">{emotionTime[emotionTimeIndex]}</p>
            </div>
          </article>

          {emotionNote == "" ? (
            <></>
          ) : (
            <article className="flex flex-col justify-between px-3 items-center">
              <header className="flex gap-1 w-full py-2">
                <Image src="/info/feedbackPencile.svg" className="w-[16px] h-[16px]" width={16} height={16} alt="pencile" />
                <p className="text-sm font-semibold text-left text-[#696972">감정 노트</p>
              </header>
              <div className="flex items-center px-5 w-4/5 py-1 rounded-[40px] bg-[#f5fef5] border border-[#e7e7e7]">
                <p className="font-semibold  text-[12px]">{emotionNote}</p>
              </div>
            </article>
          )}
        </section>
      </section>
    </div>
  );
}
