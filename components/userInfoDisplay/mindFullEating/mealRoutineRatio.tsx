import Image from "next/image";
import { FaRegCircle } from "react-icons/fa";

export default function MealRoutineRatio({
  mealRoutineList,
}: {
  mealRoutineList: number[];
}) {
  return (
    <div className="flex items-center gap-2 px-2  h-[30px] rounded-[40px] border border-[#e7e7e7]">
      {mealRoutineList.map((meal, mealIndex) => {
        return (
          <div key={mealIndex}>
            {meal == 1 ? (
              <Image
                src="/routineCircle.svg"
                alt="routineCircle"
                width={16}
                height={16}
              />
            ) : (
              <Image
                src="/emptyRoutineCircle.svg"
                alt="emptyRoutineCircle"
                width={16}
                height={16}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
