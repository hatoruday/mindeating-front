export default async function PostFetch(data: string, endPointOffset: string) {
  try {
    const endpoint = `//13.124.182.175:8000/record/${endPointOffset}/`;

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

export async function PostSpecificFetch(data: string, speficEndPoint: string) {
  try {
    const endpoint = `//13.124.182.175:8000/${speficEndPoint}`;

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
