"use client";

import ContentsScreen from "@/components/contents/contentsScreen";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Eight, Eleven, Five, Four, Fourteen, Nine, One, Seven, Six, Ten, Thirteen, Three, Twelve, Two } from "./twoTopicPages";
import { Suspense } from "react";

function Learn2() {
  const router = useRouter();
  const query = useSearchParams();
  const pathname = usePathname();
  const pageNum = query.get("page");
  return (
    <div className="flex flex-grow h-full flex-col">
      {pageNum === "1" && <One topic={pathname} pageNum={pageNum} />}
      {pageNum === "2" && <Two topic={pathname} pageNum={pageNum} />}
      {pageNum === "3" && <Three topic={pathname} pageNum={pageNum} />}
      {pageNum === "4" && <Four topic={pathname} pageNum={pageNum} />}
      {pageNum === "5" && <Five topic={pathname} pageNum={pageNum} />}
      {pageNum === "6" && <Six topic={pathname} pageNum={pageNum} />}
      {pageNum === "7" && <Seven topic={pathname} pageNum={pageNum} />}
      {pageNum === "8" && <Eight topic={pathname} pageNum={pageNum} />}
      {pageNum === "9" && <Nine topic={pathname} pageNum={pageNum} />}
      {pageNum === "10" && <Ten topic={pathname} pageNum={pageNum} />}
      {pageNum === "11" && <Eleven topic={pathname} pageNum={pageNum} />}
      {pageNum === "12" && <Twelve topic={pathname} pageNum={pageNum} />}
      {pageNum === "13" && <Thirteen topic={pathname} pageNum={pageNum} />}
      {pageNum === "14" && <Fourteen topic={pathname} pageNum={pageNum} />}
    </div>
  );
}
export default function WrapLearn2() {
  return (
    <Suspense>
      <Learn2 />
    </Suspense>
  );
}
