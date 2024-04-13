"use server";

import PostSpecificFetch, { FetchResult } from "@/api/postFetch";

export async function loginActionHandleSubmit({ code, user_id }: { code: string; user_id: string }) {
  if (user_id === "") return { ok: false, success: false, result: "적절하지 않은 유저 식별번호입니다." };

  const data = {
    code,
    user_id,
  };
  const JSONdata = JSON.stringify(data);

  try {
    const result: FetchResult = await PostSpecificFetch(JSONdata, "paid-login");

    // revalidatePath(`/login/${user_id}`);
    return result;
  } catch (e) {
    console.error(e);
    return { ok: false, success: false, result: e } as FetchResult;
  } finally {
  }
}
