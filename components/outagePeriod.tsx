interface OutagePeriodProps {
  nameIdentifier?: number;
}

export default function OutagePeriod({ nameIdentifier }: OutagePeriodProps) {
  let identifier: number = nameIdentifier == undefined ? 3 : nameIdentifier;

  const nameMapping: {
    [key: number]: string;
  } = {
    0: "식욕안정기",
    1: "유지기",
    2: "감량기",
    3: "",
  };
  if (identifier == 0) {
    return (
      <div className="rounded-[30px] border-[1px] bg-yellow2 border-yellow1 text-center ">
        <h3 className=" text-textYellow font-semibold text-[12px] leading-[12px] px-[12px] py-[8px]">{nameMapping[identifier]}</h3>
      </div>
    );
  } else if (identifier == 1) {
    return (
      <div className="rounded-[30px] border-[1px] border-red1 bg-red2 text-center ">
        <h3 className="text-textRed font-semibold text-[12px] leading-[12px] px-[12px] py-[8px]">{nameMapping[identifier]}</h3>
      </div>
    );
  } else if (identifier == 2) {
    return (
      <div className="rounded-[30px] border-[1px] border-blue1 bg-blue2 text-center ">
        <h3 className="text-textBlue font-semibold text-[12px] leading-[12px] px-[12px] py-[8px]">{nameMapping[identifier]}</h3>
      </div>
    );
  } else {
    return (
      <div className="rounded-[30px] border-[1px] border-gray-400 text-center ">
        <h3 className="text-black font-semibold text-[12px] leading-[12px] px-[12px] py-[8px]">{"None"}</h3>
      </div>
    );
  }
}
