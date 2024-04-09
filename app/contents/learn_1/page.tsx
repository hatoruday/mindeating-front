"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Five, Four, One, Six, Three, Two } from "./oneTopicPages";
import { Suspense } from "react";

function Learn1() {
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
      {pageNum === "6" && <Six topic={"/contents"} />}
    </div>
  );
}
export default function WrapLearn1() {
  return (
    <Suspense>
      <Learn1 />
    </Suspense>
  );
}
