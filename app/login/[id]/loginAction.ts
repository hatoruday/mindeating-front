"use server";

import PostSpecificFetch, { FetchResult } from "@/api/postFetch";
import { revalidatePath } from "next/cache";

export async function loginActionHandleSubmit(formdata: any) {
  const id = formdata.get("id");
  console.log(id);
  const userId = formdata.get("userId");
  console.log(userId);
  const password = formdata.get("password");
  console.log(password);
  if (userId === "" || password === "") return;

  const data = {
    id,
    nickname: userId,
    password,
  };
  const JSONdata = JSON.stringify(data);
  const endpoint = "https://mindeating-server.shop/paid-login";

  try {
    const result: FetchResult = await PostSpecificFetch(JSONdata, "paid-login");

    revalidatePath(`/login/${id}`);
    return result;
  } catch (e) {
    console.error(e);
    return { ok: false, success: false, result: e } as FetchResult;
  } finally {
  }
}
