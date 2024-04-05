export default function HungerMeter({
  hungerList,
  hunger_meal,
  setHunger_meal,
}: {
  hungerList: number[];
  hunger_meal: number;
  setHunger_meal: (meal: number) => void;
}) {
  return (
    <div className="flex w-[285px] h-[38px] rounded-[40px] border border-black4 items-center content-center justify-around">
      {hungerList.map((item, index) => {
        return (
          <div key={index}>
            {item === hunger_meal ? (
              <button
                onClick={() => {
                  if (hunger_meal != item) setHunger_meal(item);
                  else setHunger_meal(0);
                }}
                key={index}
                className="flex w-[30px] h-[30px] rounded-[40px] bg-green2 items-center justify-center content-center"
              >
                <p className="text-center font-bold text-[16px]">{item}</p>
              </button>
            ) : (
              <button
                onClick={() => {
                  if (hunger_meal != item) setHunger_meal(item);
                  else setHunger_meal(0);
                }}
                key={index}
                className="flex w-[30px] h-[30px] rounded-[40px] items-center justify-center content-center"
              >
                <p className="text-center text-[14px]">{item}</p>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
