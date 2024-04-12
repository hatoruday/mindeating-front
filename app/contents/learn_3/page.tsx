"use client";

import ContentsScreen from "@/components/contents/contentsScreenUser";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Five, Four, One, Six, Three, Two } from "./threeTopicPages";
import { Suspense } from "react";

function Learn3() {
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
    </div>
  );
}

export default function WrapLearn3() {
  return (
    <Suspense>
      <Learn3 />
    </Suspense>
  );
}
