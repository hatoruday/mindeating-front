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
    <>
      {imagesPreloaded === false ? (
        <div className=" min-h-screen flex-grow flex flex-shrink-0 justify-center items-center">
          <div className="text-center">
            <div role="status">
              <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
}

export default function WrapLearn4() {
  return (
    <Suspense>
      <Learn4 />
    </Suspense>
  );
}
