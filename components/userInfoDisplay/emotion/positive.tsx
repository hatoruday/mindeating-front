import Image from "next/image";

export default function PositiveIcon({ isPositive }: { isPositive: boolean }) {
  return (
    <div className="flex justify-center content-center w-[38px] h-[38px] rounded-[40px] bg-white border border-[#e7e7e7]">
      {isPositive ? (
        <Image
          src="/emoji/Crying face.svg"
          width={26}
          height={26}
          alt="crying"
        />
      ) : (
        <Image
          src="/emoji/Crying face.svg"
          width={26}
          height={26}
          alt="crying"
        />
      )}
    </div>
  );
}
