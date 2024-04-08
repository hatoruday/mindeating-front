import Image from "next/image";

export default function ContentsBox({
  contentsString,
  imgSrc,
  timeRequiring,
}: {
  contentsString: string;
  imgSrc: string;
  timeRequiring: string;
}) {
  return (
    <div className="flex justify-between w-full h-[157px] content-center  rounded-[18px] px-5 min-[380px]:px-5  border-[1.5px] border-black4">
      <div className="flex flex-col justify-around py-7">
        <pre className="min-[380px]:text-[15px] text-[12px] font-medium">
          {contentsString}
        </pre>
        <div className="flex gap-x-3">
          <Image
            src="/eating learning/curriculum/timeResumeButton.svg"
            width={18}
            height={18}
            alt="time"
          />
          <span className="min-[380px]:text-[14px] text-[12px]">
            {timeRequiring}
          </span>
        </div>
      </div>
      <div className="flex my-auto flex-shrink-0 justify-center relative w-[80px] h-[120px] min-[380px]:w-[80px] min-[380px]:h-[121px]">
        <Image
          src={imgSrc}
          fill
          alt="article picture"
          sizes="(max-width: 380px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}
