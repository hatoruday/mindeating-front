"use client";
import { useEffect, useState } from "react";
import MyDay from "./myday";
import { Collapse } from "react-collapse";
interface AccordianWeekProps {
  week: Date[];
  weekindex: number;
  handleSelectWeek: (weekindex: number) => void;
  colorStatusWeeks: number[][];
  openList: boolean[];
}

export default function AccordianWeek({
  week,
  weekindex,
  handleSelectWeek,
  colorStatusWeeks,
  openList,
}: AccordianWeekProps) {
  const [openL, setOpenL] = useState<boolean[]>(openList);

  const handleOpen = (index: number) => {
    openL[index] = !openL[index];
    setOpenL([...openL]);
  };
  return (
    <>
      <div
        key={weekindex}
        className={"flex justify-between items-center cursor-pointer"}
      >
        {week.map((day, dayindex) => (
          <Collapse isOpened={openL[weekindex]} key={dayindex}>
            <span key={dayindex} className="flex">
              <button
                type="button"
                onClick={() => handleOpen(weekindex)}
              ></button>
              <MyDay status={colorStatusWeeks[weekindex][dayindex]} day={day} />
            </span>
          </Collapse>
        ))}
      </div>
    </>
  );
}
