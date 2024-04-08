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
    <div className="flex justify-between w-full h-[157px] content-center  rounded-[18px] px-5  border-[1.5px] border-black4">
      <div className="flex flex-col justify-between py-7">
        <pre className="text-[15px] font-medium">{contentsString}</pre>
        <div className="flex gap-x-3">
          <Image
            src="/eating learning/curriculum/timeResumeButton.svg"
            width={18}
            height={18}
            alt="time"
          />
          <span className="text-[14px]">{timeRequiring}</span>
        </div>
      </div>
      <div className="flex my-auto justify-center relative w-[80px] h-[121px]">
        <Image src={imgSrc} fill={true} alt="contents" objectFit="cover" />
      </div>
    </div>
  );
}
