"use client";

import useSWR, { preload } from "swr";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useImagePreloader from "@/utility/preloadImage";

const preloadSrcList = ["/contentsImages/1/1-1.png", "/contentsImages/1/1-2.png", "/contentsImages/1/1-3.png", "/contentsImages/1/1-4.png", "/contentsImages/1/1-5.png", "/contentsImages/1/1-6.png"];

function Component() {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);

  if (!imagesPreloaded) {
    return <p>Preloading Assets</p>;
  }

  return <p>Assets Finished Preloading</p>;
}
export default function Second() {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);
  return (
    <>
      {!imagesPreloaded ? (
        "loading..."
      ) : (
        <div>
          {preloadSrcList.map((imgsrc, index) => (
            <Image src={imgsrc} key={index} alt="" width={50} height={50} />
          ))}
        </div>
      )}
    </>
  );
}
