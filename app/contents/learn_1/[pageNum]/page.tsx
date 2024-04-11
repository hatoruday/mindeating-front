import { Five, Four, One, Six, Three, Two } from "./oneTopicPages";
import { Suspense } from "react";

interface IParams {
  params: { pageNum: string };
}

function Learn1({ pageNum }: { pageNum: string }) {
  const pathname = "contents/learn_1";

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
export default function WrapLearn1({ params: { pageNum } }: IParams) {
  return (
    <Suspense>
      <Learn1 pageNum={pageNum} />
    </Suspense>
  );
}
