import UserInfoDisplay from "@/components/userInfoDisplay/userInfoDisplay";

async function getInfo(userId: string) {
  if (userId === "github-markdown-css") return;
  const date = new Date();

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
interface IParams {
  params: { userId: string };
}
export default async function UserInfo({ params: { userId } }: IParams) {
  const info = await getInfo(userId);
  console.log(info);
  return <UserInfoDisplay info={info} />;
}
