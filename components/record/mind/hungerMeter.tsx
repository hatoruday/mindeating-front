export default function HungerMeter({
  hungerList,
  hunger_before_meal,
}: {
  hungerList: number[];
  hunger_before_meal: number;
}) {
  return (
    <div className="flex w-[285px] h-[38px] rounded-[40px] border border-black4 items-center justify-around">
      {hungerList.map((item, index) => {
        return (
          <div key={index}>
            {index === hunger_before_meal ? (
              <div
                key={index}
                className="w-[30px] h-[30px] rounded-[40px] bg-green2 items-center justify-center content-center"
              >
                <p className="text-center font-bold text-[16px">{item}</p>
              </div>
            ) : (
              <div
                key={index}
                className="w-[30px] h-[30px] rounded-[40px] items-center justify-center content-center"
              >
                <p className="text-center text-[14px]">{item}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
