import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ContentsScreen({
  headerString,
  articleHeaderString,
  articleString,
  articleImgSrc,
  width,
  height,
  greyBlockHeader,
  greyBlockContent,
}: {
  headerString: string;
  articleHeaderString?: string;
  articleString?: JSX.Element;
  articleImgSrc?: string;
  width?: number;
  height?: number;
  greyBlockHeader?: string;
  greyBlockContent?: JSX.Element;
}) {
  return (
    <div className="flex w-full flex-col min-h-screen overflow-y-auto content-center px-5 py-19">
      <header className="flex w-full justify-start py-5 gap-x-5">
        <Image src="/leftChevron.svg" width={8} height={19} alt="leftChevron" />
        <span className="text-[16px] text-black1 font-bold">{headerString}</span>
      </header>
      <div className="w-full mb-10 h-[1px] bg-black4" />
      <main className="flex flex-col flex-grow justify-start h-full">
        <span className="flex-shrink-0 font-bold text-[20px]">{articleHeaderString}</span>
        {articleString && <div className="my-10">{articleString}</div>}
        {articleImgSrc && (
          <div>
            {width && height ? (
              <div className="flex justify-center w-full my-8">
                <Image src={articleImgSrc} width={width} height={height} alt="aritlcleImage" priority={true} />
              </div>
            ) : (
              <div className="relative w-full my-8">
                <Image src={articleImgSrc} width={0} height={0} sizes="(max-width: 380px) 30vw, (max-width: 768px) 40vw, 20vw" alt="aritlcleImage" className="w-full h-auto" priority={true} />
              </div>
            )}
          </div>
        )}
        {greyBlockHeader && (
          <div className="flex justify-start gap-x-2 my-2 content-center items-center mb-5">
            <div className="w-[4px] h-[36px] bg-black1" />
            <span className="text-[18px] font-bold">{greyBlockHeader}</span>
          </div>
        )}
        {greyBlockContent && <div className="w-full px-3 py-2 rounded-md bg-[#DBDBDB] bg-opacity-35">{greyBlockContent}</div>}
      </main>
      <button className="h-[60px] my-10 flex-shrink-0 items-center rounded-[14px] w-full flex justify-center content-center bg-black2">
        <span className="font-nanum text-white text-[16px]">다음</span>
      </button>
    </div>
  );
}
