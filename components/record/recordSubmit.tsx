import { FetchResult } from "@/api/postFetch";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function RecordSubmit({ isActive, isLoading, data, submitFunction }: { isActive: boolean; isLoading: boolean; data: any; submitFunction: (data: any) => Promise<void> }) {
  return (
    <section className="flex w-full justify-center mb-8">
      {isActive ? (
        <button onClick={() => submitFunction(data)} className="w-full h-[52px] rounded-xl flex justify-center content-center items-center bg-green2">
          {isLoading ? <AiOutlineLoading3Quarters className="animate-spin text-xl font-medium " /> : <p className="text-base font-medium text-center text-black1">제출하기</p>}
        </button>
      ) : (
        <button className="w-full h-[52px] rounded-xl flex justify-center content-center items-center bg-green3">
          <p className="text-base font-medium text-center text-black3">제출하기</p>
        </button>
      )}
    </section>
  );
}
