export default async function PostSpecificFetch(
  data: string,
  speficEndPoint: string
) {
  try {
    const endpoint = `http://13.124.182.175:8000/${speficEndPoint}`;

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
      console.log(result);
      if (result.success) {
        return result;
      } else {
        console.log("전송 실패" + result.message);
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
    const endpoint = "http://13.124.182.175:8000/record/get-records";

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
    const endpoint = "http://13.124.182.175:8000/record/get-user";

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
