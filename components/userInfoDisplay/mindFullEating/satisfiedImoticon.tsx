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
            width={26}
            height={26}
            alt="sadFace"
          />
        ) : satisfiedExtent === 1 ? (
          <Image
            src="/emoji/Grinning face.svg"
            width={26}
            height={26}
            alt="smileFace"
          />
        ) : (
          <Image
            src="/emoji/Slightly smiling face.svg"
            width={26}
            height={26}
            alt="normalFace"
          />
        )
      }
    </>
  );
}
