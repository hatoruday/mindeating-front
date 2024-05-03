"use client";

import ContentsScreen from "@/components/contents/contentsScreenUser";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Eight, Eleven, Five, Four, Nine, One, Seven, Six, Ten, Three, Two } from "./sixTopicPages";
import { Suspense } from "react";
import useImagePreloader from "@/utility/preloadImage";
const preloadSrcList = [
  "/contentsImages/6/6-1.png",
  "/contentsImages/6/6-2.png",
  "/contentsImages/6/6-3.png",
  "/contentsImages/6/6-4.png",
  "/contentsImages/6/6-5.png",
  "/contentsImages/6/6-6.png",
  "/contentsImages/6/6-7.png",
  "/contentsImages/6/6-8.png",
  "/contentsImages/6/6-9.png",
  "/contentsImages/6/6-10.png",
  "/contentsImages/6/6-11.png",
];
function Learn6() {
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
      {pageNum === "8" && <Eight preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
      {pageNum === "9" && <Nine preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
      {pageNum === "10" && <Ten preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
      {pageNum === "11" && <Eleven preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
    </div>
  );
}
export default function WrapLearn1() {
  return (
    <Suspense>
      <Learn6 />
    </Suspense>
  );
}
