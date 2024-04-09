"use client";

import ContentsScreen from "@/components/contents/contentsScreen";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Five, Four, One, Six, Three, Two } from "./threeTopicPages";

export default function Learn1() {
  const router = useRouter();
  const query = useSearchParams();
  const pathname = usePathname();
  const pageNum = query.get("page");
  return (
    <div className="flex flex-col">
      {pageNum === "1" && <One />}
      {pageNum === "2" && <Two />}
      {pageNum === "3" && <Three />}
      {pageNum === "4" && <Four />}
      {pageNum === "5" && <Five />}
      {pageNum === "6" && <Six />}
    </div>
  );
}
