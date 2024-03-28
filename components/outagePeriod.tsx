interface OutagePeriodProps {
  name?: string;
}

export default function OutagePeriod(
  { name }: OutagePeriodProps = { name: "default" }
) {
  return (
    <div className="rounded-[30px] border-[1px] border-[#FFE27F] text-center ">
      <h3 className="text-[#E1AE00] font-semibold text-[12px] leading-[12px] px-[12px] py-[8px]">
        {name}
      </h3>
    </div>
  );
}
