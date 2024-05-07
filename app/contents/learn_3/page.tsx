"use client";

import ContentsScreen from "@/components/contents/contentsScreenUser";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Five, Four, One, Six, Three, Two } from "./threeTopicPages";
import { Suspense } from "react";
import useImagePreloader from "@/utility/preloadImage";
const preloadSrcList = ["/contentsImages/3/3-2.png", "/contentsImages/3/3-3.png", "/contentsImages/3/3-4.png", "/contentsImages/3/3-5.png", "/contentsImages/3/3-6.png"];
function Learn3() {
  const { imagesPreloaded, preloadedImageUrls } = useImagePreloader(preloadSrcList);
  const router = useRouter();
  const query = useSearchParams();
  const pathname = usePathname();
  const pageNum = query.get("page");
  return (
    <>
      {imagesPreloaded === false ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-grow h-full flex-col">
          {pageNum === "1" && <One preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
          {pageNum === "2" && <Two preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
          {pageNum === "3" && <Three preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
          {pageNum === "4" && <Four preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
          {pageNum === "5" && <Five preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
          {pageNum === "6" && <Six preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
        </div>
      )}
    </>
  );
}

export default function WrapLearn3() {
  return (
    <Suspense>
      <Learn3 />
    </Suspense>
  );
}
