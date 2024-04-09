"use client";

import ContentsScreen from "@/components/contents/contentsScreen";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Eight, Eleven, Five, Four, Fourteen, Nine, One, Seven, Six, Ten, Thirteen, Three, Twelve, Two } from "./twoTopicPages";

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
      {pageNum === "7" && <Seven />}
      {pageNum === "8" && <Eight />}
      {pageNum === "9" && <Nine />}
      {pageNum === "10" && <Ten />}
      {pageNum === "11" && <Eleven />}
      {pageNum === "12" && <Twelve />}
      {pageNum === "13" && <Thirteen />}
      {pageNum === "14" && <Fourteen />}
    </div>
  );
}
