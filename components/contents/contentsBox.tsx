import Image, { StaticImageData } from "next/image";

export default function ContentsBox({ contentsString, imgSrc, timeRequiring }: { contentsString: string; imgSrc: StaticImageData; timeRequiring: string }) {
  return (
    <div className="flex justify-between w-full h-[157px] content-center  rounded-[18px] px-5 min-[380px]:px-5  border-[1.5px] border-black4 bg-white">
      <div className="flex flex-col justify-between py-5">
        <pre className="pt-2 min-[365px]:text-[15px] text-[13px] font-bold">{contentsString}</pre>
        <div className="flex gap-x-3 content-center items-center ">
          <Image src="/eating learning/curriculum/timeResumeButton.svg" width={16} height={16} className="w-[16px] h-[16px]" alt="time" />
          <span className="text-[15px] text-[#666666] font-bold">{timeRequiring}</span>
        </div>
      </div>
      <div className="flex my-auto flex-shrink-0 justify-center relative w-[80px] h-[120px] min-[380px]:w-[80px] min-[380px]:h-[121px]">
        <Image src={imgSrc} fill alt="article picture" placeholder="blur" sizes="(max-width: 380px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
    </div>
  );
}
