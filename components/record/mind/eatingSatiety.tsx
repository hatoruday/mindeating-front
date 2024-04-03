import Image from "next/image";

export default function Satiety({ selectedEmoji }: { selectedEmoji: number }) {
  return (
    <div className="flex justify-around">
      <div
        className={`flex flex-col justify-around content-center items-center w-[94px] h-[94px] rounded-lg border ${
          selectedEmoji === 0 ? "border-green2" : "border-black4"
        }`}
      >
        <Image
          src="/emoji/Neutral face.svg"
          width={38}
          height={38}
          alt="neutral"
        />

        <span
          className={`text-[12px] ${
            selectedEmoji === 0 ? "font-bold text-black1" : "text-black4"
          }`}
        >
          불만족
        </span>
      </div>

      <div
        className={`flex flex-col justify-around content-center items-center w-[94px] h-[94px] rounded-lg border ${
          selectedEmoji === 1 ? "border-green2" : "border-black4"
        }`}
      >
        <Image
          src="/emoji/Slightly smiling face.svg"
          width={38}
          height={38}
          alt="neutral"
        />

        <span
          className={`text-[12px] ${
            selectedEmoji === 1 ? "font-bold text-black1" : "text-black4"
          }`}
        >
          적당함
        </span>
      </div>

      <div
        className={`flex flex-col justify-around content-center items-center w-[94px] h-[94px] rounded-lg border ${
          selectedEmoji === 2 ? "border-green2" : "border-black4"
        }`}
      >
        <Image
          src="/emoji/Grinning face_Aurora.svg"
          width={38}
          height={38}
          alt="neutral"
        />

        <span
          className={`text-[12px] ${
            selectedEmoji === 2 ? "font-bold text-black1" : "text-black4"
          }`}
        >
          만족
        </span>
      </div>
    </div>
  );
}
