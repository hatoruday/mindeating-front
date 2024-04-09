import Image from "next/image";

export default function WhatIsYourTime({ timeType, when, setWhen }: { timeType: string; when: string; setWhen: (whenSpecific: string) => void }) {
  return (
    <section className="flex w-full flex-col gap-y-2 py-4">
      <header className="flex px-3 gap-x-3">
        <Image src="/mindFullEating/clockPlusIcon.svg" width={17} height={19} alt="bookIcon" />
        <span className="font-medium text-black2 text-[14px]">{timeType}</span>
      </header>
      <article className="flex w-full justify-center py-2 gap-x-3">
        {["새벽", "아침", "점심", "저녁", "밤"].map((time, index) => (
          <button
            key={index}
            className={`flex  justify-center items-center flex-shrink-0 h-9 relative gap-2.5 px-4 py-2.5 rounded-[56px] border ${when == time ? "border-green2 bg-green3" : "border-black4"}`}
            onClick={() => {
              if (when != time) setWhen(time);
              else setWhen("");
            }}
          >
            <p className="flex text-sm font-medium text-left text-[#2c2c30]">{time}</p>
          </button>
        ))}
      </article>
    </section>
  );
}
