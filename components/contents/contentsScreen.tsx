import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ContentsScreen({
  headerString,
  articleHeaderString,
  articleString,
  articleImgSrc,
  greyBlockHeader,
  greyBlockString,
}: {
  headerString: string;
  articleHeaderString?: string;
  articleString?: JSX.Element;
  articleImgSrc?: string;
  greyBlockHeader?: string;
  greyBlockString?: string;
}) {
  return (
    <div className="flex w-full flex-col content-center gap-y-10 py-19">
      <header className="flex w-full justify-start py-5 gap-x-5">
        <Image src="/leftChevron.svg" width={8} height={19} alt="leftChevron" />
        <span className="text-[16px] text-black1 font-bold">
          {headerString}
        </span>
      </header>
      <main className="flex flex-col justify-around">
        <span className="flex-shrink-0 font-bold text-[20px]">
          {articleHeaderString}
        </span>
        {articleString && <div className="my-10">{articleString}</div>}
        {articleImgSrc && (
          <div className="relative w-full">
            <Image
              src={articleImgSrc}
              width={0}
              height={0}
              sizes="(max-width: 380px) 30vw, (max-width: 768px) 40vw, 30vw"
              alt="aritlcleImage"
              className="w-full h-auto"
            />
          </div>
        )}
      </main>
      <button className="h-[60px] flex-shrink-0 items-center rounded-[14px] w-full flex justify-center content-center bg-black2">
        <span className="font-nanum text-white text-[16px]">다음</span>
      </button>
    </div>
  );
}
