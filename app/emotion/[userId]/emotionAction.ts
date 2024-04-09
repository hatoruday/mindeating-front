"use server";

import PostSpecificFetch, { FetchResult } from "@/api/postFetch";
import { revalidatePath } from "next/cache";

export interface EmotionParams {
  user_id: string;
  record: {
    state: string;
    when: string;
    type: string;
    note: string;
  };
}

export async function emotionAction(emotionData: EmotionParams) {
  const JSONdata = JSON.stringify(emotionData);

  try {
    const result: FetchResult = await PostSpecificFetch(JSONdata, "record/record-emotion");

    // revalidatePath(`/login/${id}`);
    return result;
  } catch (e) {
    console.error(e);
    return { ok: false, success: false, result: e } as FetchResult;
  } finally {
  }
}
