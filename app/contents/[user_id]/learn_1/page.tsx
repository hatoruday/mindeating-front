"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Five, Four, One, Six, Three, Two } from "./oneTopicPages";
import { Suspense } from "react";
import { FetchResult } from "@/api/postFetch";
import { ReadCompletionHandle } from "../../readAction";
import useImagePreloader from "@/utility/preloadImage";

function Learn1() {
  const readActionWrapper = async (topic: string) => {
    const original_num = topic.split("/")[3].split("_")[1];
    const num_plus = parseInt(original_num);
    const num = num_plus.toString();
    const user_id = topic.split("/")[2];
    const result: FetchResult | undefined = await ReadCompletionHandle({ user_id, num });
    if (result?.ok && result?.success) {
      // window.location.href = "kakaotalk://inappbrowser/close";
    } else if (result?.ok) {
      // alert("로그인 실패. client error success:" + result?.success + " name: " + result?.result.name);
      alert("서버 연결 실패. 결제 번호가 맞는지 다시 확인해주세요.");
    } else {
      alert("로그인 실패. server error\n" + result?.result);
      // alert("서버 오류");
    }
    // setState(result)
  };
  const router = useRouter();
  const query = useSearchParams();
  const pathname = usePathname();
  const pageNum = query.get("page");

  return (
    <div className="flex flex-grow h-full flex-col">
      {pageNum === "1" && <One wrapper={readActionWrapper} topic={pathname} pageNum={pageNum} />}
      {pageNum === "2" && <Two wrapper={readActionWrapper} topic={pathname} pageNum={pageNum} />}
      {pageNum === "3" && <Three wrapper={readActionWrapper} topic={pathname} pageNum={pageNum} />}
      {pageNum === "4" && <Four wrapper={readActionWrapper} topic={pathname} pageNum={pageNum} />}
      {pageNum === "5" && <Five wrapper={readActionWrapper} topic={pathname} pageNum={pageNum} />}
      {pageNum === "6" && <Six wrapper={readActionWrapper} topic={pathname} pageNum={pageNum} />}
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
