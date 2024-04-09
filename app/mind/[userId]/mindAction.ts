"use server";

import PostSpecificFetch, { FetchResult } from "@/api/postFetch";
import { revalidatePath } from "next/cache";

interface SuccessMealRoutine {
  [key: number]: boolean;
}

export interface MindParams {
  user_id: string;
  record: {
    menu: string[];
    type: string;
    when: string;
    hunger_before_meal: number;
    hunger_after_meal: number;
    speed: string;
    amount: string;
    successed_meal_routine: SuccessMealRoutine;
    satisfaction: string;
    note: string;
  };
}
export async function mindAction(eatingData: MindParams) {
  const JSONdata = JSON.stringify(eatingData);

  try {
    const result: FetchResult = await PostSpecificFetch(
      JSONdata,
      "record/record-eating"
    );

    // revalidatePath(`/login/${id}`);
    return result;
  } catch (e) {
    console.error(e);
    return { ok: false, success: false, result: e } as FetchResult;
  } finally {
  }
}
