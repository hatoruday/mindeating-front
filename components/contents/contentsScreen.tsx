import Image from "next/image";

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
  articleString?: string;
  articleImgSrc?: string;
  greyBlockHeader?: string;
  greyBlockString?: string;
}) {
  return (
    <div className="flex flex-col content-center">
      <header className="flex w-full justify-start py-5 gap-x-5">
        <Image src="/leftChevron.svg" width={8} height={19} alt="leftChevron" />

        <span className="text-[16px] text-black1 font-bold">
          {headerString}
        </span>
      </header>
      <main className="flex flex-col gap-y-5 justify-around">
        <span className="font-bold text-[20px]">{articleHeaderString}</span>

        {articleString}
      </main>
    </div>
  );
}
