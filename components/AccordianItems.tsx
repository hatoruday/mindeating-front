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
}
const AccordianItems = ({
  open,
  openIndexList,
  setOpenIndexList,
  weekindex,
  week,
  colorStatusWeeks,
}: AccordianItemsProps) => {
  return (
    <div className="pt-[2px]">
      <div>
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
