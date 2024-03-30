import Image from "next/image";
import SatisfiedImoticon from "./satisfiedImoticon";

export default function MindFullEating() {
  const food = "참치김밥 1줄";
  //만족스러운 정도를 0~2단계로 표현한다.
  const satisfiedExtent = 1;
  const satisfiedString = ["불만족스러웠어..", "만족스러웠어!", "적당해요!"];
  return (
    <div className="flex flex-col ">
      <header className="flex w-full justify-between">
        <div className="flex">
          <Image
            src="/mindFullEatingIcon.svg"
            width={16}
            height={16}
            alt="fullEatingIcon"
          />
          <span className="font-semibold">마인드풀이팅</span>
        </div>
      </header>
      <section className="px-2 py-2 rounded-[10px] border border-[#e7e7e7]">
        <header className="flex h-[62px]">
          <div className="flex  px-3 gap-2 justify-between w-full items-center">
            <div className="flex items-center gap-2">
              <span className="font-medium text-[16px]">{food}</span>
              <Image
                src="/downChevron.svg"
                width={14}
                height={8}
                alt="downChevron"
              />
            </div>

            <div className="flex gap-2  items-center text-[12px] text-[#696972] font-medium">
              {satisfiedString[satisfiedExtent]}
              <SatisfiedImoticon satisfiedExtent={satisfiedExtent} />
            </div>
          </div>
        </header>
        <section className="flex flex-col gap-y-2 py-4"></section>
      </section>
    </div>
  );
}
