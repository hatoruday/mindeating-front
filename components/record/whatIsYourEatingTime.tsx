import Image from "next/image";

export default function WhatIsYourTime({ timeType }: { timeType: string }) {
  return (
    <section className="flex flex-col gap-y-2 py-4">
      <header className="flex px-3 gap-x-3">
        <Image
          src="/mindFullEating/clockPlusIcon.svg"
          width={17}
          height={19}
          alt="bookIcon"
        />
        <span className="font-medium text-black2 text-[14px]">{timeType}</span>
      </header>
      <article className="flex gap-x-3">
        <div className="flex  justify-center items-center h-9 relative gap-2.5 px-4 py-2.5 rounded-[56px] border border-[#e7e7e7]">
          <p className="flex text-sm font-medium text-left text-[#2c2c30]">
            새벽
          </p>
        </div>
        <div className="flex  justify-center items-center h-9 relative gap-2.5 px-4 py-2.5 rounded-[56px] border border-[#e7e7e7]">
          <p className="flex text-sm font-medium text-left text-[#2c2c30]">
            아침
          </p>
        </div>
        <div className="flex  justify-center items-center h-9 relative gap-2.5 px-4 py-2.5 rounded-[56px] border border-[#e7e7e7]">
          <p className="flex text-sm font-medium text-left text-[#2c2c30]">
            점심
          </p>
        </div>
        <div className="flex  justify-center items-center h-9 relative gap-2.5 px-4 py-2.5 rounded-[56px] border border-[#e7e7e7]">
          <p className="flex text-sm font-medium text-left text-[#2c2c30]">
            저녁
          </p>
        </div>
        <div className="flex  justify-center items-center h-9 relative gap-2.5 px-4 py-2.5 rounded-[56px] border border-[#e7e7e7]">
          <p className="flex text-sm font-medium text-left text-[#2c2c30]">
            밤
          </p>
        </div>
      </article>
    </section>
  );
}
