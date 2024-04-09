"use server";

import PostSpecificFetch, { FetchResult } from "@/api/postFetch";
import { revalidatePath } from "next/cache";

export interface ActivityParams {
  user_id: string;
  record: {
    names: string[];
    when: string;
    intensity: number;
    time: string;
    satisfaction: string;
    note: string;
  };
}

export async function activityAction(activityData: ActivityParams) {
  const JSONdata = JSON.stringify(activityData);

  try {
    const result: FetchResult = await PostSpecificFetch(
      JSONdata,
      "record/record-activity/"
    );

    // revalidatePath(`/login/${id}`);
    return result;
  } catch (e) {
    console.error(e);
    return { ok: false, success: false, result: e } as FetchResult;
  } finally {
  }
}
