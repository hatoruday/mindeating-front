"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ClockSet({ submitFn, error }: { submitFn: any; error?: string }) {
  const [inputs, setInputs] = useState(["", "", "", ""]);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  // 입력값 변경 핸들러
  const handleInputChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputs = [...inputs]; // 현재 입력값 배열의 복사본을 생성합니다.
    newInputs[index] = e.target.value; // 변경된 값을 해당 인덱스 위치에 저장합니다.

    setInputs(newInputs); // 입력값 상태를 업데이트합니다.

    // 입력값이 maxLength와 동일하고, 현재 필드가 마지막 필드가 아니라면 다음 필드로 포커스를 이동합니다.
    if (e.target.value.length >= e.target.maxLength && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  // inputRefs 배열에 각 input 참조를 할당하는 함수
  const setInputRef = (element: HTMLInputElement, index: number) => {
    inputRefs.current[index] = element;
  };

  return (
    <div className="bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex pt-10 justify-end">
          <Image src="/CheerIcon.svg" alt="Your Company" width={200} height={200} className="ml-20 h-[121px] w-auto" priority={true} />
        </div>
        <h3 className="text-[#9F9FAC] text-[16px] te">마음먹기에 오신 걸 환영해요</h3>
        <h1 className="text-black font-semibold text-[26px]">마음먹기를 시작해볼까요?</h1>
      </div>
      <div className="mt-6">
        <div>
          <div className="flex items-center justify-center gap-4">
            {inputs.map((value, index) => (
              <input
                key={index}
                ref={(element) => setInputRef(element!, index)}
                type="tel"
                maxLength={1}
                minLength={1}
                min="1"
                max="1"
                required
                value={value}
                onChange={handleInputChange(index)}
                className={`w-16 h-16 border ${
                  value != "" ? "" : "caret-transparent"
                }  rounded-lg p-4 text-center mx-auto outline-none focus:outline-none focus:ring focus:ring-green2 placeholder:font-medium font-bold text-xl text-black2`}
              />
            ))}
          </div>
          {error && <p className="text-red-500 text-center text-sm mt-5">{error}</p>}
          <div className="flex items-center space-x-4 md:space-x-2 justify-between mx-auto w-full my-8">
            <button type="reset" onClick={() => setInputs(["", "", "", ""])} className="w-full py-2.5 px-4 font-semibold border border-gray-200 text-black2 text-[16px] rounded-lg">
              지우기
            </button>
            <button
              type="submit"
              onClick={() => {
                submitFn(inputs.join(""));
              }}
              className="w-full py-2.5 px-4 bg-green2 font-semibold text-black1 text-[16px] rounded-lg"
            >
              확인
            </button>
          </div>
        </div>
      </div>
      <small className="text-center block text-xs text-black3 font-medium">
        주문번호를 잊었나요?{" "}
        <a href="" className="underline font-semibold text-black3 hover:text-black2">
          결제 알림톡을 확인해 보세요!
        </a>
      </small>
    </div>
  );
}
