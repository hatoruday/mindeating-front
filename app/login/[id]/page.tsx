"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { loginActionHandleSubmit } from "./loginAction";
import SubmitButton from "@/components/login/loginSubmitButton";
import { FetchResult } from "@/api/postFetch";

interface IParams {
  params: { id: string };
}

export default function LoginPage({ params: { id } }: IParams) {
  const [userId, setUserId] = useState("");
  const [slash, setSlash] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //set slash to !slash whey clicked
  const onSlashClick = () => {
    setSlash(!slash);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "userId") {
      setUserId(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const clientActionWrapper = async (formData: FormData) => {
    const result: FetchResult | undefined = await loginActionHandleSubmit(formData);
    if (result?.ok && result?.success) {
      alert("로그인 성공");
      console.log(result?.result.name);
    } else if (result?.ok) {
      alert("로그인 실패. client error success:" + result?.success + " name: " + result?.result.name);
      console.log(result?.result);
    } else {
      alert("로그인 실패. server error\n" + result?.result);
    }
    // setState(result)
  };
  return (
    <div className="min-h-full px-6 py-12 lg:px-8">
      <div className="flex flex-1 flex-col justify-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h3 className="text-[#9F9FAC] text-[16px] te">마음먹기에 오신 걸 환영해요</h3>
          <h1 className="text-black font-semibold text-[26px]">마음먹기를 시작해볼까요?</h1>
          <div className="flex justify-end">
            <Image src="/CheerIcon.svg" alt="Your Company" width={200} height={200} className="ml-20 h-[121px] w-auto" />
          </div>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action={clientActionWrapper}>
            <div className="mt-2">
              <input
                id="userId"
                name="userId"
                type="text"
                onChange={onChange}
                placeholder="아이디를 입력해주세요"
                required
                className="block w-full placeholder-[#9F9FAC]  font-bold bg-[#E7E7E7] bg-opacity-20 rounded-[9.3px] border-0 py-[16px] text-[#2C2C30]  text-opacity-1 text-[14px] shadow-sm ring-0  focus:ring-2 focus:ring-inset focus:ring-[#C1F1C1] sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <div className="mt-2 flex w-full  items-stretch  h-full  rounded-[9.3px] border-0 py-0 shadow-sm overflow-hidden">
                <input
                  id="password"
                  onChange={onChange}
                  name="password"
                  autoComplete="current-password"
                  placeholder="비밀번호를 입력해주세요"
                  required
                  //set paswword to look invisible
                  type={slash ? "text" : "password"}
                  className="w-full placeholder-[#9F9FAC] font-semibold  bg-[#E7E7E7] bg-opacity-20 border-0 py-[16px] text-[#2C2C30] text-[14px]  ring-0 focus:ring-2 focus:ring-inset focus:ring-[#C1F1C1] sm:text-sm sm:leading-6"
                />
                <input type="hidden" id="id" name="id" value={id} />
                <button onClick={onSlashClick} type="button" className="flex items-center bg-[#E7E7E7] bg-opacity-20  h-full">
                  {slash ? (
                    <Image src="/eyeIcon.svg" width={200} height={200} alt="eyeIcon" className="px-0  w-[28px] h-[56px] bg-opacity-100  text-[#9F9FAC] mr-3" />
                  ) : (
                    <Image src="/eyeslash.svg" alt="eyeSlashIcon" width={200} height={200} className="px-0  w-[28px] h-[56px] bg-opacity-100  text-[#9F9FAC] mr-3" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <SubmitButton isActive={!(userId === "" || password === "")} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
