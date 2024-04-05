import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function RecordSubmit({
  isActive,
  isLoading,
  submitFunction,
}: {
  isActive: boolean;
  isLoading: boolean;
  submitFunction: () => void;
}) {
  return (
    <section className="flex w-full justify-center">
      {isActive ? (
        <button
          onClick={() => submitFunction()}
          className="w-4/5 h-[52px] rounded-xl flex justify-center content-center items-center bg-green2"
        >
          {isLoading ? (
            <AiOutlineLoading3Quarters className="animate-spin text-xl font-medium " />
          ) : (
            <p className="text-base font-medium text-center text-black1">
              제출하기
            </p>
          )}
        </button>
      ) : (
        <button className="w-4/5 h-[52px] rounded-xl flex justify-center content-center items-center bg-green3">
          <p className="text-base font-medium text-center text-black3">
            제출하기
          </p>
        </button>
      )}
    </section>
  );
}
