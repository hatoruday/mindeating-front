import Image from "next/image";

export default function SatisfiedImoticon({
  satisfiedExtent,
}: {
  satisfiedExtent: number;
}) {
  return (
    <>
      {
        //satisfiedExtent에 따라 아이콘을 다르게 표현한다.
        satisfiedExtent === 0 ? (
          <Image
            src="/emoji/Neutral face.svg"
            width={28}
            height={28}
            alt="sadFace"
            className="px-1 py-1 bg-white rounded-full border border-black4"
          />
        ) : satisfiedExtent === 1 ? (
          <Image
            src="/emoji/Grinning face.svg"
            width={28}
            height={28}
            alt="smileFace"
            className="px-1 py-1 bg-white rounded-full border border-black4"
          />
        ) : (
          <Image
            src="/emoji/Slightly smiling face.svg"
            width={28}
            height={28}
            alt="normalFace"
            className="px-1 py-1 bg-white rounded-full border border-black4"
          />
        )
      }
    </>
  );
}
