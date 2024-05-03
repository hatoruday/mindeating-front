"use client";

import ContentsScreen from "@/components/contents/contentsScreenUser";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Eight, Eleven, Five, Four, Nine, One, Seven, Six, Ten, Three, Twelve, Two } from "./fourTopicPages";
import { Suspense } from "react";
import { FetchResult } from "@/api/postFetch";
import { ReadCompletionHandle } from "../../readAction";
import useImagePreloader from "@/utility/preloadImage";

const preloadSrcList = [
  "/contentsImages/4/4-1.png",
  "/contentsImages/4/4-2.png",
  "/contentsImages/4/4-3.png",
  "/contentsImages/4/4-4.png",
  "/contentsImages/4/4-5.png",
  "/contentsImages/4/4-6.png",
  "/contentsImages/4/4-7.png",
  "/contentsImages/4/4-8.png",
  "/contentsImages/4/4-9.png",
  "/contentsImages/4/4-10.png",
  "/contentsImages/4/4-11.png",
  "/contentsImages/4/4-12.png",
];
function Learn4() {
  const { imagesPreloaded, preloadedImageUrls } = useImagePreloader(preloadSrcList);
  const readActionWrapper = async (topic: string) => {
    const original_num = topic.split("/")[3].split("_")[1];
    const num_plus = parseInt(original_num);
    const num = num_plus.toString();
    const user_id = topic.split("/")[2];
    const result: FetchResult | undefined = await ReadCompletionHandle({ user_id, num });
    if (result?.ok && result?.success) {
      // window.location.href = "kakaotalk://inappbrowser/close";
      // alert("로그인 성공");
      // console.log(result?.result.name);
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
      {pageNum === "1" && <One preloadedImageURL={preloadedImageUrls} wrapper={readActionWrapper} topic={pathname} pageNum={pageNum} />}
      {pageNum === "2" && <Two preloadedImageURL={preloadedImageUrls} wrapper={readActionWrapper} topic={pathname} pageNum={pageNum} />}
      {pageNum === "3" && <Three preloadedImageURL={preloadedImageUrls} wrapper={readActionWrapper} topic={pathname} pageNum={pageNum} />}
      {pageNum === "4" && <Four preloadedImageURL={preloadedImageUrls} wrapper={readActionWrapper} topic={pathname} pageNum={pageNum} />}
      {pageNum === "5" && <Five preloadedImageURL={preloadedImageUrls} wrapper={readActionWrapper} topic={pathname} pageNum={pageNum} />}
      {pageNum === "6" && <Six preloadedImageURL={preloadedImageUrls} wrapper={readActionWrapper} topic={pathname} pageNum={pageNum} />}
      {pageNum === "7" && <Seven preloadedImageURL={preloadedImageUrls} wrapper={readActionWrapper} topic={pathname} pageNum={pageNum} />}
      {pageNum === "8" && <Eight preloadedImageURL={preloadedImageUrls} wrapper={readActionWrapper} topic={pathname} pageNum={pageNum} />}
      {pageNum === "9" && <Nine preloadedImageURL={preloadedImageUrls} wrapper={readActionWrapper} topic={pathname} pageNum={pageNum} />}
      {pageNum === "10" && <Ten preloadedImageURL={preloadedImageUrls} wrapper={readActionWrapper} topic={pathname} pageNum={pageNum} />}
      {pageNum === "11" && <Eleven preloadedImageURL={preloadedImageUrls} wrapper={readActionWrapper} topic={pathname} pageNum={pageNum} />}
      {pageNum === "12" && <Twelve preloadedImageURL={preloadedImageUrls} wrapper={readActionWrapper} topic={pathname} pageNum={pageNum} />}
    </div>
  );
}

export default function WrapLearn4() {
  return (
    <Suspense>
      <Learn4 />
    </Suspense>
  );
}
