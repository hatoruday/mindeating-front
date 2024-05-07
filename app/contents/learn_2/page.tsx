"use client";

import ContentsScreen from "@/components/contents/contentsScreenUser";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Eight, Eleven, Five, Four, Fourteen, Nine, One, Seven, Six, Ten, Thirteen, Three, Twelve, Two } from "./twoTopicPages";
import { Suspense } from "react";
import useImagePreloader from "@/utility/preloadImage";
const preloadSrcList = [
  "/contentsImages/2/2-1.png",
  "/contentsImages/2/2-2.png",
  "/contentsImages/2/2-3.png",
  "/contentsImages/2/2-4.png",
  "/contentsImages/2/2-5.png",
  "/contentsImages/2/2-6.png",
  "/contentsImages/2/2-7.png",
  "/contentsImages/2/2-8.png",
  "/contentsImages/2/2-9.png",
  "/contentsImages/2/2-10.png",
  "/contentsImages/2/2-11.png",
  "/contentsImages/2/2-12.png",
  "/contentsImages/2/2-13.png",
  "/contentsImages/2/2-14.png",
];
function Learn2() {
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
          {pageNum === "7" && <Seven preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
          {pageNum === "8" && <Eight preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
          {pageNum === "9" && <Nine preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
          {pageNum === "10" && <Ten preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
          {pageNum === "11" && <Eleven preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
          {pageNum === "12" && <Twelve preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
          {pageNum === "13" && <Thirteen preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
          {pageNum === "14" && <Fourteen preloadedImageURL={preloadedImageUrls} topic={pathname} pageNum={pageNum} />}
        </div>
      )}
    </>
  );
}
export default function WrapLearn2() {
  return (
    <Suspense>
      <Learn2 />
    </Suspense>
  );
}
