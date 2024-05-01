"use server";

import PostSpecificFetch, { FetchResult } from "@/api/postFetch";

export interface InfoParams {
  user_id: string;
  date: Date;
}

export async function infoAction(infoData: InfoParams) {
  const JSONdata = JSON.stringify(infoData);

  try {
    const result: FetchResult = await PostSpecificFetch(JSONdata, "record/get-records");

    // revalidatePath(`/login/${id}`);
    return result;
  } catch (e) {
    console.error(e);
    return { ok: false, success: false, result: e } as FetchResult;
  } finally {
  }
}
