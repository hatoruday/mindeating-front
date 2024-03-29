"use client";

import AccordianItems from "@/components/AccordianItems";
import GetWeeksOfCurrentMonth from "@/utility/getDayInformation";
import { useState } from "react";

export default function TestPage() {
  const [weeks, colorStatusWeeks] = GetWeeksOfCurrentMonth(3, 2024);
  const [openIndex, setOpenIndex] = useState<number[]>([0, 0, 0]);

  const toggle = (index: any) => {
    let newIndex: number[];
    let summedValue = openIndex.reduce((a, b) => a + b, 0);
    if (openIndex[index] == 1 && summedValue == 1) {
      newIndex = openIndex.map((item: number, i: number) => 1);
    } else {
      newIndex = openIndex.map((item: number, i: number) =>
        i === index ? 1 : 0
      );
    }

    setOpenIndex(newIndex);
  };
  const accordianData = [
    {
      title: "Title 1",
      desc: "Description 1",
    },
    {
      title: "Title 2",
      desc: "Description 2",
    },
    {
      title: "Title 3",
      desc: "Description 3",
    },
  ];

  return (
    <section className="bg-white h-screen grid place-items-center">
      <div className="px-[40px] max-w-[800px">
        {accordianData.map((data, index) => {
          return (
            <AccordianItems
              key={index}
              open={1 == openIndex[index]}
              toggle={() => toggle(index)}
              weekindex={0}
              week={weeks[0]}
              colorStatusWeeks={colorStatusWeeks}
            />
          );
        })}
      </div>
    </section>
  );
}
