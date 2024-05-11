"use client";

import React from "react";
import { Collapse } from "react-collapse";
import MyWeek from "./myWeek";
interface AccordianItemsProps {
  open: boolean;
  weekindex: number;
  week: Date[];
  colorStatusWeeks: number[][];
  openIndexList: number[];
  setOpenIndexList: any;
  setSelectDate: any;
  higherHandleToggle: any;
}
const AccordianItems = ({ open, higherHandleToggle, weekindex, week, colorStatusWeeks, setSelectDate }: AccordianItemsProps) => {
  return (
    <div className="pt-[2px] z-20">
      <div>
        <Collapse isOpened={open}>
          <MyWeek key={weekindex} higherHandleToggle={higherHandleToggle} week={week} weekindex={weekindex} colorStatusWeeks={colorStatusWeeks} setSelectDate={setSelectDate} />
        </Collapse>
      </div>
    </div>
  );
};

export default AccordianItems;
