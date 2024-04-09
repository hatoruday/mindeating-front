"use client";

import ContentsScreen from "@/components/contents/contentsScreen";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { One, Two } from "./oneTopicPages";

export default function Learn1() {
  const router = useRouter();
  const query = useSearchParams();
  const pathname = usePathname();
  const pageNum = query.get("page");
  return (
    <div className="flex flex-col">
      {pageNum === "1" && <One />}
      {pageNum === "2" && <Two />}
    </div>
  );
}
