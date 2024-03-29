import MyDay from "./myday";

interface MyWeekProps {
  week: Date[];
  weekindex: number;
  colorStatusWeeks: number[][];
}

export default function MyWeek({
  week,
  weekindex,
  colorStatusWeeks,
}: MyWeekProps) {
  return (
    <div
      key={weekindex}
      className={"flex justify-between items-center cursor-pointer"}
    >
      {week.map((day: Date, dayindex: number) => (
        <span key={dayindex} className="flex">
          <MyDay status={colorStatusWeeks[weekindex][dayindex]} day={day} />
        </span>
      ))}
    </div>
  );
}
