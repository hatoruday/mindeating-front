"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Five, Four, One, Six, Three, Two } from "./oneTopicPages";
import { Suspense } from "react";
import useImagePreloader from "@/utility/preloadImage";
const preloadSrcList = ["/contentsImages/1/1-1.png", "/contentsImages/1/1-2.png", "/contentsImages/1/1-3.png", "/contentsImages/1/1-4.png", "/contentsImages/1/1-5.png", "/contentsImages/1/1-6.png"];
function Learn1() {
  const { imagesPreloaded, preloadedImageUrls } = useImagePreloader(preloadSrcList);
  const router = useRouter();
  const query = useSearchParams();
  const pathname = usePathname();
  const pageNum = query.get("page");

  return (
    <div className="flex flex-grow h-full flex-col">
      {pageNum === "1" && <One preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
      {pageNum === "2" && <Two preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
      {pageNum === "3" && <Three preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
      {pageNum === "4" && <Four preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
      {pageNum === "5" && <Five preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
      {pageNum === "6" && <Six preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
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
