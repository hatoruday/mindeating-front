"use server";

import PostSpecificFetch, { FetchResult } from "@/api/postFetch";
import { revalidatePath } from "next/cache";

export async function ReadCompletionHandle({ num, user_id }: { num: string; user_id: string }) {
  if (user_id === "") return { ok: false, success: false, result: "적절하지 않은 유저 식별번호입니다." };

  const data = {
    num,
    user_id,
  };
  const JSONdata = JSON.stringify(data);

  try {
    const result: FetchResult = await PostSpecificFetch(JSONdata, "contents/finished");

    // revalidatePath(`/login/${user_id}`);
    return result;
  } catch (e) {
    console.error(e);
    return { ok: false, success: false, result: e } as FetchResult;
  } finally {
  }
}
