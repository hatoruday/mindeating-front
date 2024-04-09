"use client";
import { useFormStatus } from "react-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const SubmitButton = ({ isActive }: { isActive: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <>
      {isActive ? (
        <button
          type="submit"
          className="flex w-full justify-center rounded-[12px] bg-[#C1F1C1] px-3 py-[18px] text-sm font-medium leading-4 text-[#2C2C30] shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          제출하기
        </button>
      ) : pending ? (
        <button
          type="button"
          className="flex w-full justify-center rounded-[12px] bg-[#F5FEF5] px-3 py-[15px] text-sm font-medium leading-4 text-[#9F9FAC] shadow-sm "
        >
          <AiOutlineLoading3Quarters className="animate-spin text-xl font-medium " />
        </button>
      ) : (
        <button
          type="button"
          className="flex w-full justify-center rounded-[12px] bg-[#F5FEF5] px-3 py-[15px] text-sm font-medium leading-4 text-[#9F9FAC] shadow-sm "
        >
          제출하기
        </button>
      )}
    </>
  );
};
export default SubmitButton;
