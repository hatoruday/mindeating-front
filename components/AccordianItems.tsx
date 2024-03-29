import GetWeeksOfCurrentMonth from "@/utility/getDayInformation";
import React from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import MyWeek from "./myWeek";
interface AccordianItemsProps {
  open: boolean;
  toggle: () => void;

  weekindex: number;
  week: Date[];
  colorStatusWeeks: number[][];
}
const AccordianItems = ({
  open,
  toggle,
  weekindex,
  week,
  colorStatusWeeks,
}: AccordianItemsProps) => {
  return (
    <div className="pt-[2px]">
      <div onClick={toggle}>
        <Collapse isOpened={open}>
          <MyWeek
            key={weekindex}
            week={week}
            weekindex={weekindex}
            colorStatusWeeks={colorStatusWeeks}
          />
        </Collapse>
      </div>
    </div>
  );
};

export default AccordianItems;
