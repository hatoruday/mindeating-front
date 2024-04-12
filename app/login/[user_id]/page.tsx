"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { loginActionHandleSubmit } from "./loginAction";
import SubmitButton from "@/components/login/loginSubmitButton";
import { FetchResult } from "@/api/postFetch";
import Verification from "@/components/login/verification/verification";

interface IParams {
  params: { user_id: string };
}

export default function LoginPage({ params: { user_id } }: IParams) {
  const [error, setError] = useState("");
  //set slash to !slash whey clicked

  const clientActionWrapper = async (code: string) => {
    const result: FetchResult | undefined = await loginActionHandleSubmit({ user_id, code });
    if (result?.ok && result?.success) {
      // window.location.href = "kakaotalk://inappbrowser/close";
      alert("로그인 성공");
      console.log(result?.result.name);
    } else if (result?.ok) {
      // alert("로그인 실패. client error success:" + result?.success + " name: " + result?.result.name);
      setError("서버 연결 실패. 결제 번호가 맞는지 다시 확인해주세요.");
    } else {
      alert("로그인 실패. server error\n" + result?.result);
      setError("서버 오류");
    }
    // setState(result)
  };
  return (
    <div className="min-h-full px-6 py-12 lg:px-8">
      <div className="flex flex-1 flex-col justify-center">
        <Verification submitFn={clientActionWrapper} error={error} />
      </div>
    </div>
  );
}
