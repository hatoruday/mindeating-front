"use client";

import ContentsScreen from "@/components/contents/contentsScreenUser";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Five, Four, One, Seven, Six, Three, Two } from "./sevenTopicPages";
import { Suspense } from "react";
import useImagePreloader from "@/utility/preloadImage";
const preloadSrcList = [
  "/contentsImages/7/7-1.png",
  "/contentsImages/7/7-2.png",
  "/contentsImages/7/7-3.png",
  "/contentsImages/7/7-4.png",
  "/contentsImages/7/7-5.png",
  "/contentsImages/7/7-6.png",
  "/contentsImages/7/7-7.png",
];
function Learn7() {
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
      {pageNum === "7" && <Seven preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
    </div>
  );
}
export default function WrapLearn7() {
  return (
    <Suspense>
      <Learn7 />
    </Suspense>
  );
}
