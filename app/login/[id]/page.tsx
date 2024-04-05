"use client";

import Image from "next/image";
import { useState } from "react";
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
    if (name === "id") {
      setUserId(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    // if (loading || userId === "" || password === "") return;
    if (userId === "" || password === "") return;

    try {
      const data = {
        id,
        nickname: userId,
        password,
      };
      const JSONdata = JSON.stringify(data);
      const endpoint = "https://13.124.182.175:8000/paid-login";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };

      const response = await fetch(endpoint, options);
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          alert("로그인 성공");
        } else {
          alert("로그인 실패");
        }
      } else {
        // 에러 처리
        console.error("로그인 실패");
      }
    } catch (e: any) {
      // if (e instanceof FirebaseError) {
      //   setError(e.message);
      // }
      setError(e.message);
    } finally {
    }
  };
  return (
    <div className="min-h-full px-6 py-12 lg:px-8">
      <div className="flex flex-1 flex-col justify-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h3 className="text-[#9F9FAC] text-[16px] te">
            마음먹기에 오신 걸 환영해요
          </h3>
          <h1 className="text-black font-semibold text-[26px]">
            마음먹기를 시작해볼까요?
          </h1>
          <div className="flex justify-end">
            <Image
              src="/CheerIcon.svg"
              alt="Your Company"
              width={200}
              height={200}
              className="ml-20 h-[121px] w-auto"
            />
          </div>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={onSubmit}
            action="#"
            method="POST"
          >
            <div className="mt-2">
              <input
                id="id"
                name="id"
                type="text"
                onChange={onChange}
                placeholder="아이디를 입력해주세요"
                required
                className="block w-full  placeholder-[#9F9FAC]  font-bold bg-[#E7E7E7] bg-opacity-20 rounded-[9.3px] border-0 py-[16px] text-[#2C2C30]  text-opacity-1 text-[14px] shadow-sm ring-0  focus:ring-2 focus:ring-inset focus:ring-[#C1F1C1] sm:text-sm sm:leading-6"
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
                <button
                  onClick={onSlashClick}
                  type="button"
                  className="flex items-center bg-[#E7E7E7] bg-opacity-20  h-full"
                >
                  {slash ? (
                    <Image
                      src="/eyeIcon.svg"
                      width={200}
                      height={200}
                      alt="eyeIcon"
                      className="px-0  w-[28px] h-[56px] bg-opacity-100  text-[#9F9FAC] mr-3"
                    />
                  ) : (
                    <Image
                      src="/eyeslash.svg"
                      alt="eyeSlashIcon"
                      width={200}
                      height={200}
                      className="px-0  w-[28px] h-[56px] bg-opacity-100  text-[#9F9FAC] mr-3"
                    />
                  )}
                </button>
              </div>
            </div>

            <div>
              {userId === "" || password === "" ? (
                <button
                  type="button"
                  className="flex w-full justify-center rounded-[12px] bg-[#F5FEF5] px-3 py-[15px] text-sm font-medium leading-4 text-[#9F9FAC] shadow-sm "
                >
                  제출하기
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-[12px] bg-[#C1F1C1] px-3 py-[18px] text-sm font-medium leading-4 text-[#2C2C30] shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  제출하기
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
