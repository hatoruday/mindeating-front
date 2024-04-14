import Image from "next/image";

export default function Satiety({ satisfaction, setSatisfaction }: { satisfaction: string; setSatisfaction: (satisfaction: string) => void }) {
  return (
    <div className="flex gap-x-3 justify-center w-full">
      <button
        onClick={() => {
          if (satisfaction != "불만족") {
            setSatisfaction("불만족");
          } else {
            setSatisfaction("");
          }
        }}
        className={`flex flex-col justify-around content-center items-center w-[94px] h-[94px] rounded-lg border ${satisfaction === "불만족" ? "border-green2" : "border-black4"}`}
      >
        <Image src="/emoji/Neutral face.svg" width={38} height={38} alt="neutral" />

        <span className={`text-[12px] ${satisfaction === "불만족" ? "font-bold text-black1" : "text-black4"}`}>불만족</span>
      </button>

      <button
        onClick={() => {
          if (satisfaction != "적당함") {
            setSatisfaction("적당함");
          } else {
            setSatisfaction("");
          }
        }}
        className={`flex flex-col justify-around content-center items-center w-[94px] h-[94px] rounded-lg border ${satisfaction === "적당함" ? "border-green2" : "border-black4"}`}
      >
        <Image src="/emoji/Slightly smiling face.svg" width={38} height={38} alt="neutral" />

        <span className={`text-[12px] ${satisfaction === "적당함" ? "font-bold text-black1" : "text-black4"}`}>적당함</span>
      </button>

      <button
        onClick={() => {
          if (satisfaction != "만족") {
            setSatisfaction("만족");
          } else {
            setSatisfaction("");
          }
        }}
        className={`flex flex-col justify-around content-center items-center w-[94px] h-[94px] rounded-lg border ${satisfaction === "만족" ? "border-green2" : "border-black4"}`}
      >
        <Image src="/emoji/Grinning face_Aurora.svg" width={38} height={38} alt="neutral" />

        <span className={`text-[12px] ${satisfaction === "만족" ? "font-bold text-black1" : "text-black4"}`}>만족</span>
      </button>
    </div>
  );
}
