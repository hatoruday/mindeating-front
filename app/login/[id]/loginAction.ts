"use server";
export async function loginActionHandleSubmit(formdata: any) {
  const id = formdata.get("id");
  console.log(id);
  const userId = formdata.get("userId");
  console.log(userId);
  const password = formdata.get("password");
  console.log(password);
  if (userId === "" || password === "") return;

  try {
    const data = {
      id,
      nickname: userId,
      password,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "https://mindeating-server.shop/paid-login";

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
      console.log(result);
      if (result.success) {
        // alert("로그인 성공");
        console.log("로그인 성공");
      } else {
        // alert("로그인 실패");
        console.log("로그인 실패");
      }
    } else {
      // 에러 처리
      console.error("로그인 실패");
    }
  } catch (e: any) {
    // if (e instanceof FirebaseError) {
    //   setError(e.message);
    // }
    // setError(e.message);
  } finally {
  }
}
