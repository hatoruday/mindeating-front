"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ContentPopUpScreen from "./contentPopupScreen";
import { useState } from "react";

export default function ContentsScreenQR({
  headerString,
  articleHeaderString,
  articleString,
  articleImgSrc,
  width,
  height,
  greyBlockHeader,
  greyBlockContent,
  articleAfterString,
  topic,
  pageNumber,
  isLast,
}: {
  headerString: string;
  articleHeaderString?: string;
  articleString?: JSX.Element;
  articleAfterString?: JSX.Element;
  articleImgSrc?: string;
  width?: number;
  height?: number;
  greyBlockHeader?: string;
  greyBlockContent?: JSX.Element;
  topic: string;
  pageNumber: string;
  isLast?: boolean;
}) {
  const router = useRouter();
  // const handleClick = (e: any) => {
  //   e.preventDefault();
  //   let pageNumberInt = parseInt(pageNumber) + 1;

  //   router.push(`/${topic}/?page=${pageNumberInt}`);
  // };
  const [enablePopUp, setEnablePopUp] = useState<boolean>(false);
  const fetchSubmit = () => {
    router.push(`/contents`);
  };
  return (
    <div className="flex w-full flex-col relative min-h-[100dvh] overflow-y-auto flex-grow justify-between content-center">
      <header className="flex flex-col justify-start">
        <div className="flex items-center content-center absoulte top-0 left-0 justify-start py-5 gap-x-5">
          <Link href={pageNumber == "1" ? "/contents" : `${topic}?page=${parseInt(pageNumber!) - 1}`} className="flex-shrink-0">
            <Image src="/headerStringChevron.svg" width={8} height={19} alt="leftChevron" priority />
          </Link>

          <span className="text-[16px] text-black1 font-bold">{headerString}</span>
        </div>
        <div className="w-full mb-5 h-[1px] bg-black4" />
      </header>

      <main className="flex flex-col justify-start overflow-y-auto min-h-[70dvh] px-7">
        {enablePopUp && (
          <ContentPopUpScreen
            fetchSubmit={fetchSubmit}
            setOpen={() => {
              setEnablePopUp(!enablePopUp);
            }}
            isOpen={enablePopUp}
          />
        )}
        <div className="flex flex-col h-full justify-start">
          <span className="flex-shrink-0 font-bold text-[20px]">{articleHeaderString}</span>
          {articleString && <div className="my-1">{articleString}</div>}
          {articleImgSrc && (
            <div className="h-full flex flex-col justify-center">
              {width && height ? (
                <div className="flex justify-center content-center items-center h-full w-full">
                  <Image src={articleImgSrc} width={width} height={height} alt="aritlcleImage" priority />
                </div>
              ) : (
                <div className="relative content-center items-center h-full w-full">
                  <Image src={articleImgSrc} width={0} height={0} sizes="(max-width: 380px) 30vw, (max-width: 768px) 40vw, 20vw" alt="aritlcleImage" className="w-full h-auto" priority />
                </div>
              )}
            </div>
          )}
          {articleAfterString && <div className="my-1">{articleAfterString}</div>}
          {greyBlockHeader && (
            <div className="flex justify-start gap-x-2 my-2 content-center items-center mb-5">
              <div className="w-[4px] h-[36px] bg-black1" />
              <span className="text-[18px] font-bold">{greyBlockHeader}</span>
            </div>
          )}
          {greyBlockContent && <div className="w-full px-3 py-2 rounded-md bg-[#DBDBDB] bg-opacity-35">{greyBlockContent}</div>}
        </div>
      </main>
      <div className="flex content-center px-5 my-5">
        {!isLast ? (
          <Link href={`${topic}?page=${parseInt(pageNumber) + 1}`} className="h-[60px] flex-shrink-0 items-center rounded-[14px] w-full flex justify-center content-center bg-black2">
            <span className="font-nanum text-white text-[16px]">다음</span>
          </Link>
        ) : (
          <button
            onClick={() => {
              if (enablePopUp) return;
              setEnablePopUp(true);
              //2초간 기다린다.
              setTimeout(() => {
                setEnablePopUp(false);
                fetchSubmit();
              }, 2000);
            }}
            className="h-[60px] flex-shrink-0 items-center rounded-[14px] w-full flex justify-center content-center bg-black2"
          >
            <span className="font-nanum text-white text-[16px]">완료</span>
          </button>
        )}
      </div>
    </div>
  );
}
