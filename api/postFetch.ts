export interface FetchResult {
  ok: boolean;
  success: boolean;
  result: any;
}
export default async function PostSpecificFetch(
  data: string,
  speficEndPoint: string
): Promise<FetchResult> {
  try {
    const endpoint = `https://mindeating-server.shop/${speficEndPoint}`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    };
    console.log(options.body);
    const response = await fetch(endpoint, options);
    // console.log(response);
    if (response.ok) {
      const result = await response.json();

      if (result.success) {
        return { ok: true, success: true, result } as FetchResult;
      } else {
        return { ok: true, success: false, result } as FetchResult;
      }
    } else {
      // 에러 처리
      return {
        ok: false,
        success: false,
        result: "response not ok 전송 실패",
      } as FetchResult;
      console.error("response not ok 전송 실패");
    }
  } catch (e: any) {
    // if (e instanceof FirebaseError) {
    //   setError(e.message);
    // }
    return {
      ok: false,
      success: false,
      result: e.message,
    } as FetchResult;
  } finally {
  }
}

export async function getInfo(userId: string) {
  if (userId === "github-markdown-css") return;

  const date = new Date();
  date.setHours(date.getUTCHours() + 9);

  try {
    const fetchingData = {
      user_id: userId,
      date,
    };

    const JSONdata = JSON.stringify(fetchingData);
    const endpoint = "https://mindeating-server.shop/record/get-records";

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
        return result;
      } else {
        alert("전송 실패" + result.message);
      }
    } else {
      // 에러 처리
      console.error("response not ok 전송 실패");
    }
  } catch (e: any) {
    // if (e instanceof FirebaseError) {
    //   setError(e.message);
    // }
  } finally {
  }
}
export async function getUserName(userId: string) {
  if (userId === "github-markdown-css") return;

  const date = new Date();
  date.setHours(date.getUTCHours() + 9);

  try {
    const fetchingData = {
      user_id: userId,
    };

    const JSONdata = JSON.stringify(fetchingData);
    const endpoint = "https://mindeating-server.shop/record/get-user";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    console.log("getUserName실행됨.");

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      if (result.success) {
        return result;
      } else {
        alert("전송 실패" + result.message);
      }
    } else {
      // 에러 처리
      console.error("response not ok 전송 실패");
    }
  } catch (e: any) {
    // if (e instanceof FirebaseError) {
    //   setError(e.message);
    // }
  } finally {
  }
}
