"use server";

import PostSpecificFetch, { FetchResult } from "@/api/postFetch";
import { revalidatePath } from "next/cache";

export interface SleepParams {
  user_id: string;
  record: {
    time: string;
    when: string;
    empty_stomach: boolean | undefined;
    satisfaction: string;
    note: string;
  };
}

export async function sleepAction(sleepData: SleepParams) {
  const JSONdata = JSON.stringify(sleepData);

  try {
    const result: FetchResult = await PostSpecificFetch(JSONdata, "record/record-sleep");

    // revalidatePath(`/login/${id}`);
    return result;
  } catch (e) {
    console.error(e);
    return { ok: false, success: false, result: e } as FetchResult;
  } finally {
  }
}
